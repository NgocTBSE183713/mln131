'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { pusherClient } from '@/lib/pusherClient';
import { QUESTIONS } from '../lib/questionBank';
import type { QuizQuestion } from '@/lib/quizTypes';

interface QuestionEvent {
  question: {
    index: number;
    total: number;
    prompt: string;
    options: string[];
    deadline?: number;
    durationMs?: number;
  };
}

interface LeaderboardEvent {
  leaderboard: Array<{ id: string; name: string; score: number }>;
  answeredCount: number;
  playerCount: number;
}

const COLORS = ['bg-red-500', 'bg-blue-500', 'bg-yellow-500', 'bg-green-500'];

export default function HostView() {
  const [loading, setLoading] = useState(true);
  const [roomCode, setRoomCode] = useState<string | null>(null);
  const [hostSecret, setHostSecret] = useState<string | null>(null);
  const [playerCount, setPlayerCount] = useState(0);
  const [players, setPlayers] = useState<string[]>([]);
  const [question, setQuestion] = useState<QuestionEvent['question'] | null>(null);
  const [leaderboard, setLeaderboard] = useState<LeaderboardEvent['leaderboard']>([]);
  const [answeredCount, setAnsweredCount] = useState(0);
  const [status, setStatus] = useState<'lobby' | 'in-progress' | 'finished'>('lobby');
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [showingResult, setShowingResult] = useState(false);
  const [correctIndex, setCorrectIndex] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const pollRef = useRef<NodeJS.Timeout | null>(null);
  const resultTimerRef = useRef<NodeJS.Timeout | null>(null);
  const resultTriggeredRef = useRef(false);

  const quizPayload = useMemo<QuizQuestion[]>(
    () => QUESTIONS.map((q) => ({ question: q.text, options: q.options, correctIndex: q.correctAnswerIndex })),
    []
  );

  const createRoom = useCallback(async () => {
    setError(null);
    setLoading(true);
    setPlayers([]);
    setPlayerCount(0);
    setQuestion(null);
    setLeaderboard([]);
    setAnsweredCount(0);
    setStatus('lobby');
    setTimeLeft(null);
    setShowingResult(false);
    setCorrectIndex(null);
    resultTriggeredRef.current = false;
    if (resultTimerRef.current) {
      clearTimeout(resultTimerRef.current);
      resultTimerRef.current = null;
    }
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    if (pollRef.current) {
      clearInterval(pollRef.current);
      pollRef.current = null;
    }
    try {
      const res = await fetch('/api/rooms/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ quiz: quizPayload }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Không tạo được phòng');
      setRoomCode(data.roomCode);
      setHostSecret(data.hostSecret);
      localStorage.setItem('quiz-host-room', JSON.stringify({ roomCode: data.roomCode, hostSecret: data.hostSecret }));
      setLoading(false);
    } catch (err: any) {
      setError(err?.message || 'Không tạo được phòng');
      setLoading(false);
    }
  }, [quizPayload]);

  useEffect(() => {
    const restoreRoom = async () => {
      try {
        const saved = typeof localStorage !== 'undefined' ? localStorage.getItem('quiz-host-room') : null;
        if (saved) {
          const parsed = JSON.parse(saved);
          if (parsed?.roomCode && parsed?.hostSecret) {
            const res = await fetch(`/api/rooms/${parsed.roomCode}/state`);
            const data = await res.json();
            if (res.ok) {
              setRoomCode(parsed.roomCode);
              setHostSecret(parsed.hostSecret);
              setStatus(data.status ?? 'lobby');
              setPlayerCount(data.playerCount ?? 0);
              setPlayers(Array.isArray(data.players) ? data.players : []);
              setLoading(false);
              return;
            }
          }
        }
      } catch (err) {
        console.warn('Restore room failed', err);
      }

      // Nếu không khôi phục được thì tạo phòng mới
      createRoom();
    };

    restoreRoom();
  }, [createRoom]);

  useEffect(() => {
    if (!roomCode || !pusherClient) return;

    const channel = (pusherClient as any).subscribe(`presence-${roomCode}`, {
      auth: {
        params: { user_id: `host-${roomCode}`, user_name: 'Host' },
      },
    });

    // Fallback polling để vẫn thấy người chơi và số trả lời nếu Pusher gặp sự cố
    const poll = async () => {
      try {
        const res = await fetch(`/api/rooms/${roomCode}/state`);
        const data = await res.json();
        if (res.ok) {
          setPlayerCount(data.playerCount ?? 0);
          setPlayers(Array.isArray(data.players) ? data.players : []);
          // Cập nhật số trả lời và bảng điểm từ polling
          if (typeof data.answeredCount === 'number') {
            setAnsweredCount(data.answeredCount);
          }
          if (Array.isArray(data.leaderboard) && data.leaderboard.length > 0) {
            setLeaderboard(data.leaderboard);
          }
          // Cập nhật status
          if (data.status) {
            setStatus(data.status);
          }
        }
      } catch (err) {
        console.warn('Poll room state failed', err);
      }
    };
    poll();
    pollRef.current = setInterval(poll, 1500);

    const onPlayerJoined = (payload: { playerId: string; playerName: string; playerCount: number }) => {
      setPlayerCount(payload.playerCount);
      setPlayers((prev) => (prev.includes(payload.playerName) ? prev : [...prev, payload.playerName]));
    };

    const onQuestion = (payload: QuestionEvent) => {
      setStatus('in-progress');
      setQuestion(payload.question);
      setAnsweredCount(0);
      setShowingResult(false);
      setCorrectIndex(null);
      resultTriggeredRef.current = false;
      if (resultTimerRef.current) {
        clearTimeout(resultTimerRef.current);
        resultTimerRef.current = null;
      }
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      if (payload.question.deadline && payload.question.durationMs) {
        const tick = () => {
          const msLeft = Math.max(0, payload.question.deadline! - Date.now());
          setTimeLeft(Math.ceil(msLeft / 1000));
        };
        tick();
        timerRef.current = setInterval(tick, 500);
        return;
      }
      setTimeLeft(null);
    };

    const onLeaderboard = (payload: LeaderboardEvent) => {
      setLeaderboard(payload.leaderboard);
      setAnsweredCount(payload.answeredCount);
      setPlayerCount(payload.playerCount);
    };

    const onGameOver = (payload: { leaderboard: LeaderboardEvent['leaderboard'] }) => {
      setStatus('finished');
      setQuestion(null);
      setLeaderboard(payload.leaderboard);
      setTimeLeft(null);
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };

    channel.bind('player-joined', onPlayerJoined);
    channel.bind('question', onQuestion as any);
    channel.bind('leaderboard', onLeaderboard as any);
    channel.bind('game-over', onGameOver as any);

    return () => {
      channel.unbind('player-joined', onPlayerJoined);
      channel.unbind('question', onQuestion as any);
      channel.unbind('leaderboard', onLeaderboard as any);
      channel.unbind('game-over', onGameOver as any);
      if (pusherClient) {
        pusherClient.unsubscribe(`presence-${roomCode}`);
      }
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      if (pollRef.current) {
        clearInterval(pollRef.current);
        pollRef.current = null;
      }
    };
  }, [roomCode]);

  const startNextQuestion = async () => {
    if (!roomCode || !hostSecret) return;
    setError(null);
    setShowingResult(false);
    setCorrectIndex(null);
    const res = await fetch(`/api/rooms/${roomCode}/next-question`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ hostSecret, code: roomCode }),
    });
    const data = await res.json();
    if (!res.ok) {
      setError(data?.error || 'Không gửi được câu hỏi');
      return;
    }

    // Nếu game kết thúc
    if (data.done) {
      setStatus('finished');
      setQuestion(null);
      setLeaderboard(data.leaderboard || []);
      setTimeLeft(null);
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      return;
    }

    // Fallback: nếu realtime không đẩy được, dùng ngay dữ liệu trả về để hiển thị câu hỏi
    if (data?.question) {
      setStatus('in-progress');
      setQuestion(data.question);
      setAnsweredCount(0);
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      if (data.question.deadline && data.question.durationMs) {
        const tick = () => {
          const msLeft = Math.max(0, data.question.deadline - Date.now());
          setTimeLeft(Math.ceil(msLeft / 1000));
        };
        tick();
        timerRef.current = setInterval(tick, 500);
      } else {
        setTimeLeft(null);
      }
    }
  };

  // Tự động hiển thị kết quả và chuyển câu tiếp theo khi hết giờ
  useEffect(() => {
    if (status !== 'in-progress' || timeLeft === null) return;
    if (timeLeft <= 0 && question) {
      const correct = quizPayload[question.index]?.correctIndex ?? null;
      setCorrectIndex(correct);
      setShowingResult(true);
      if (!resultTriggeredRef.current) {
        resultTriggeredRef.current = true;
        // Hiển thị kết quả 3 giây rồi tự động chuyển câu tiếp
        resultTimerRef.current = setTimeout(() => {
          resultTimerRef.current = null;
          startNextQuestion();
        }, 3000);
      }
      return () => {
        if (resultTimerRef.current) {
          clearTimeout(resultTimerRef.current);
          resultTimerRef.current = null;
        }
      };
    }
  }, [timeLeft, status, question]);

  // Kết thúc câu hỏi sớm (nút dừng thời gian)
  const endQuestionEarly = async () => {
    if (!roomCode || !hostSecret) return;
    setError(null);
    const res = await fetch(`/api/rooms/${roomCode}/end-question`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ hostSecret, code: roomCode }),
    });
    if (res.ok) {
      // Đưa đồng hồ về 0 để kích hoạt hiển thị kết quả 3 giây, sau đó useEffect sẽ tự gọi câu tiếp
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      setTimeLeft(0);
      if (question) {
        const correct = quizPayload[question.index]?.correctIndex ?? null;
        setCorrectIndex(correct);
      }
      setShowingResult(true);
      if (!resultTriggeredRef.current) {
        resultTriggeredRef.current = true;
        resultTimerRef.current = setTimeout(() => {
          resultTimerRef.current = null;
          startNextQuestion();
        }, 3000);
      }
    }
  };

  if (!pusherClient) return <div className="flex items-center justify-center min-h-screen text-center text-red-600">Thiếu cấu hình Pusher (NEXT_PUBLIC_PUSHER_KEY / NEXT_PUBLIC_PUSHER_CLUSTER).</div>;
  if (loading) return <div className="flex items-center justify-center min-h-screen text-xl">Đang tạo phòng...</div>;
  if (error) return <div className="flex items-center justify-center min-h-screen text-red-600">{error}</div>;
  if (!roomCode) return <div className="flex items-center justify-center min-h-screen text-xl">Không có phòng</div>;

  // Màn hình tuyên dương khi kết thúc
  if (status === 'finished') {
    const top3 = leaderboard.slice(0, 3);
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400">
        <div className="mb-8 text-5xl font-black text-white drop-shadow-lg">🏆 Bảng Vinh Danh 🏆</div>
        
        <div className="flex items-end justify-center gap-4 mb-8">
          {/* Hạng 2 */}
          {top3[1] && (
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-20 h-20 mb-2 text-3xl font-black text-white rounded-full shadow-lg bg-gray-400/80">
                {top3[1].name.slice(0, 2).toUpperCase()}
              </div>
              <div className="flex flex-col items-center justify-center w-24 h-32 bg-gray-300 shadow-lg rounded-t-xl">
                <span className="text-4xl">🥈</span>
                <span className="font-bold text-gray-700">{top3[1].name}</span>
                <span className="text-lg font-black text-gray-600">{top3[1].score}</span>
              </div>
            </div>
          )}
          
          {/* Hạng 1 */}
          {top3[0] && (
            <div className="flex flex-col items-center -mt-8">
              <div className="flex items-center justify-center w-24 h-24 mb-2 text-4xl font-black text-white bg-yellow-500 rounded-full shadow-lg animate-bounce">
                {top3[0].name.slice(0, 2).toUpperCase()}
              </div>
              <div className="flex flex-col items-center justify-center bg-yellow-400 shadow-lg w-28 h-44 rounded-t-xl">
                <span className="text-5xl">🥇</span>
                <span className="text-lg font-bold text-yellow-900">{top3[0].name}</span>
                <span className="text-2xl font-black text-yellow-800">{top3[0].score}</span>
              </div>
            </div>
          )}
          
          {/* Hạng 3 */}
          {top3[2] && (
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-16 h-16 mb-2 text-2xl font-black text-white rounded-full shadow-lg bg-orange-400/80">
                {top3[2].name.slice(0, 2).toUpperCase()}
              </div>
              <div className="flex flex-col items-center justify-center w-20 h-24 bg-orange-300 shadow-lg rounded-t-xl">
                <span className="text-3xl">🥉</span>
                <span className="text-sm font-bold text-orange-700">{top3[2].name}</span>
                <span className="font-black text-orange-600">{top3[2].score}</span>
              </div>
            </div>
          )}
        </div>

        <div className="w-full max-w-md p-4 shadow-lg bg-white/90 rounded-xl">
          <div className="mb-2 text-lg font-bold text-gray-800">Bảng xếp hạng đầy đủ</div>
          <div className="space-y-2 overflow-y-auto max-h-48">
            {leaderboard.map((entry, idx) => (
              <div key={entry.id} className="flex items-center justify-between p-2 bg-gray-100 rounded-lg">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 text-sm font-bold text-center text-white rounded-full bg-brand-purple">{idx + 1}</span>
                  <span className="font-bold text-gray-800">{entry.name}</span>
                </div>
                <span className="font-black text-brand-purple">{entry.score}</span>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={createRoom}
          className="px-8 py-4 mt-8 text-xl font-black text-white transition-all shadow-lg rounded-xl bg-brand-purple hover:scale-105"
        >
          Chơi lại
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="flex items-center justify-between px-6 py-4 bg-white shadow">
        <div>
          <div className="text-sm text-gray-500">Mã phòng</div>
          <div className="text-4xl font-black tracking-widest text-brand-purple">{roomCode}</div>
          <div className="text-xs text-gray-400">Chia sẻ mã cho người chơi</div>
        </div>
        <div className="flex items-center gap-4">
          <div className="px-4 py-2 text-lg font-bold text-white rounded-lg bg-brand-purple">
            {playerCount} người chơi
          </div>
          <button
            onClick={createRoom}
            disabled={loading}
            className="px-4 py-2 text-sm font-bold text-white transition-all bg-gray-500 rounded-lg shadow disabled:opacity-60"
          >
            Làm mới mã
          </button>
          {status === 'in-progress' && timeLeft !== null && timeLeft > 0 && (
            <button
              onClick={endQuestionEarly}
              className="px-4 py-2 text-sm font-bold text-white transition-all bg-red-500 rounded-lg shadow hover:bg-red-600"
            >
              ⏹ Kết thúc câu hỏi
            </button>
          )}
          <button
            onClick={startNextQuestion}
            disabled={!playerCount || (status === 'in-progress' && timeLeft !== null && timeLeft > 0)}
            className="px-6 py-3 text-lg font-black text-white transition-all rounded-lg shadow bg-emerald-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {status === 'in-progress' && timeLeft !== null && timeLeft > 0 ? 'Đang hỏi...' : 'Bắt đầu / Tiếp theo'}
          </button>
        </div>
      </header>

      {question ? (
        <main className="flex-1 p-6 space-y-6">
          <div className="p-6 bg-white shadow rounded-2xl">
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm font-bold text-gray-500">Câu {question.index + 1}/{question.total}</div>
              {timeLeft !== null && !showingResult && <div className="text-2xl font-black text-brand-purple">{timeLeft}s</div>}
            </div>
            <div className="text-3xl font-black text-gray-800">{question.prompt}</div>
            {showingResult && correctIndex !== null && (
              <div className="mt-3 text-lg font-bold text-green-600">Đáp án đúng: {question.options[correctIndex]}</div>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            {question.options.map((opt, idx) => (
              <div
                key={idx}
                className={`${
                  showingResult
                    ? idx === correctIndex
                      ? 'bg-green-500'
                      : 'bg-red-500'
                    : COLORS[idx % COLORS.length]
                } rounded-2xl p-6 text-white text-2xl font-bold shadow-lg`}
              >
                {idx === 0 ? '▲' : idx === 1 ? '♦' : idx === 2 ? '●' : '■'} {opt}
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between p-4 bg-white shadow rounded-xl">
            <div className="text-lg font-bold text-gray-600">Đã trả lời: {answeredCount}/{playerCount}</div>
            <div className="flex -space-x-2">
              {players.slice(0, 6).map((name, idx) => (
                <div key={`${name}-${idx}`} className="flex items-center justify-center w-10 h-10 text-sm font-bold text-white rounded-full shadow bg-brand-purple">{name.slice(0,2).toUpperCase()}</div>
              ))}
            </div>
          </div>
        </main>
      ) : (
        <main className="flex flex-col items-center justify-center flex-1 gap-4 p-8 text-center">
          <div className="text-4xl font-black text-brand-purple">Đang chờ người chơi</div>
          <div className="text-gray-500">Khi đủ người, bấm "Bắt đầu" để gửi câu hỏi.</div>
          <div className="flex flex-wrap justify-center max-w-xl gap-3 mt-4">
            {players.map((name, idx) => (
              <div key={`${name}-${idx}`} className="px-4 py-2 text-sm font-bold bg-white border border-gray-200 rounded-full shadow">{name}</div>
            ))}
          </div>
        </main>
      )}

      <aside className="p-6 bg-white border-t shadow-inner">
        <div className="mb-2 text-xl font-black text-gray-800">Bảng điểm</div>
        {leaderboard.length === 0 ? (
          <div className="text-gray-500">Chưa có điểm.</div>
        ) : (
          <div className="space-y-2">
            {leaderboard.map((entry, idx) => (
              <div key={entry.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 font-bold text-center bg-white border-2 rounded-full text-brand-purple border-brand-purple">{idx + 1}</span>
                  <span className="font-bold text-gray-800">{entry.name}</span>
                </div>
                <span className="text-xl font-black text-brand-purple">{entry.score}</span>
              </div>
            ))}
          </div>
        )}
      </aside>
    </div>
  );
}
