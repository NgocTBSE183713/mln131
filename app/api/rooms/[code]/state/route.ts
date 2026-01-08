import { NextResponse } from 'next/server';
import { getRoom } from '@/lib/gameStore';

type ParamsPromise = { params: { code: string } } | { params: Promise<{ code: string }> };

export async function GET(_: Request, ctx: ParamsPromise) {
  try {
    const resolved = 'params' in ctx ? (typeof (ctx as any).params?.then === 'function' ? await (ctx as any).params : (ctx as any).params) : undefined;
    const code = resolved?.code?.toUpperCase();
    if (!code) return NextResponse.json({ error: 'Room code missing' }, { status: 400 });
    const room = getRoom(code);
    if (!room) return NextResponse.json({ error: 'Room not found' }, { status: 404 });

    // Trả về câu hỏi hiện tại để player có thể polling
    let currentQuestion = null;
    const isTimeUp = room.questionDeadline ? Date.now() > room.questionDeadline : false;
    if (room.status === 'in-progress' && room.currentQuestionIndex >= 0 && room.currentQuestionIndex < room.quiz.length) {
      const q = room.quiz[room.currentQuestionIndex];
      currentQuestion = {
        index: room.currentQuestionIndex,
        total: room.quiz.length,
        prompt: q.question,
        options: q.options,
        deadline: room.questionDeadline,
        durationMs: room.questionDurationMs,
        // Chỉ trả correctIndex khi hết giờ để player thấy đáp án đúng
        correctIndex: isTimeUp ? q.correctIndex : undefined,
      };
    }

    return NextResponse.json({
      roomCode: room.roomCode,
      status: room.status,
      playerCount: Object.keys(room.players).length,
      players: Object.values(room.players).map((p) => p.name),
      currentQuestionIndex: room.currentQuestionIndex,
      currentQuestion,
      answeredCount: room.answeredThisRound?.size ?? 0,
      leaderboard: Object.entries(room.leaderboard)
        .map(([id, entry]) => ({ id, ...entry }))
        .sort((a, b) => b.score - a.score),
      showingResult: isTimeUp,
    });
  } catch (error: any) {
    console.error('Room state error', error);
    return NextResponse.json({ error: error?.message || 'Internal error' }, { status: 500 });
  }
}
