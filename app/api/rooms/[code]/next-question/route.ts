import { NextResponse } from 'next/server';
import { advanceQuestion } from '@/lib/gameStore';
import { pusherServer, pusherConfigured } from '@/lib/pusher';
import { getRoom } from '@/lib/gameStore';

type ParamsPromise = { params: { code: string } } | { params: Promise<{ code: string }> };

export async function POST(req: Request, ctx: ParamsPromise) {
  try {
    const { hostSecret, code: codeInBody } = await req.json();
    if (!hostSecret) return NextResponse.json({ error: 'hostSecret required' }, { status: 400 });

    const resolved = 'params' in ctx ? (typeof (ctx as any).params?.then === 'function' ? await (ctx as any).params : (ctx as any).params) : undefined;
    const code = (codeInBody || resolved?.code)?.toUpperCase();
    if (!code) return NextResponse.json({ error: 'Room code missing' }, { status: 400 });
    if (!pusherConfigured) {
      return NextResponse.json({ error: 'Pusher env missing (PUSHER_APP_ID, PUSHER_KEY, PUSHER_SECRET, PUSHER_CLUSTER, NEXT_PUBLIC_PUSHER_KEY, NEXT_PUBLIC_PUSHER_CLUSTER)' }, { status: 500 });
    }

    const precheck = advanceQuestionWithAuth(code, hostSecret);
    if ('error' in precheck) {
      return NextResponse.json({ error: precheck.error }, { status: precheck.status });
    }
    const { room, question } = precheck;

    if (!question) {
      await pusherServer.trigger(`presence-${code}`, 'game-over', {
        leaderboard: leaderboardList(room.leaderboard),
      });
      return NextResponse.json({ status: room.status, done: true, leaderboard: leaderboardList(room.leaderboard) });
    }

    const payload = {
      index: room.currentQuestionIndex,
      total: room.quiz.length,
      prompt: question.question,
      options: question.options,
      deadline: room.questionDeadline,
      durationMs: room.questionDurationMs,
    };

    await pusherServer.trigger(`presence-${code}`, 'question', { question: payload });

    // Trả về payload để host có thể fallback hiển thị ngay cả khi realtime gặp lỗi
    return NextResponse.json({ ok: true, status: room.status, question: payload, deadline: room.questionDeadline, durationMs: room.questionDurationMs });
  } catch (error: any) {
    console.error('Next question error', error);
    return NextResponse.json({ error: error?.message || 'Internal error' }, { status: 500 });
  }
}

function leaderboardList(board: Record<string, { name: string; score: number; lastAnswerCorrect?: boolean; lastAnswerAt?: number }>) {
  return Object.entries(board)
    .map(([id, entry]) => ({ id, ...entry }))
    .sort((a, b) => b.score - a.score || (a.lastAnswerAt || 0) - (b.lastAnswerAt || 0));
}

function advanceQuestionWithAuth(code: string, hostSecret: string) {
  const room = getRoom(code.toUpperCase());
  if (!room) return { error: 'Room not found', status: 404 } as const;
  if (room.hostSecret !== hostSecret) return { error: 'Unauthorized host', status: 403 } as const;
  return advanceQuestion(code.toUpperCase());
}
