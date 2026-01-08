import { NextResponse } from 'next/server';
import { recordAnswer } from '@/lib/gameStore';
import { pusherServer, pusherConfigured } from '@/lib/pusher';

type ParamsPromise = { params: { code: string } } | { params: Promise<{ code: string }> };

export async function POST(req: Request, ctx: ParamsPromise) {
  try {
    const { playerId, playerName, answerIndex, code: codeInBody } = await req.json();
    if (!playerId || !playerName || answerIndex === undefined) {
      return NextResponse.json({ error: 'Missing player info or answer' }, { status: 400 });
    }

    const resolved = 'params' in ctx ? (typeof (ctx as any).params?.then === 'function' ? await (ctx as any).params : (ctx as any).params) : undefined;
    const code = (codeInBody || resolved?.code)?.toUpperCase();
    if (!code) return NextResponse.json({ error: 'Room code missing' }, { status: 400 });
    if (!pusherConfigured) {
      return NextResponse.json({ error: 'Pusher env missing (PUSHER_APP_ID, PUSHER_KEY, PUSHER_SECRET, PUSHER_CLUSTER, NEXT_PUBLIC_PUSHER_KEY, NEXT_PUBLIC_PUSHER_CLUSTER)' }, { status: 500 });
    }

    const { room, isCorrect, alreadyAnswered, tooLate } = recordAnswer({
      roomCode: code,
      playerId,
      playerName,
      answerIndex,
    });

    if (alreadyAnswered) {
      return NextResponse.json({ ok: false, error: 'Already answered this question' }, { status: 400 });
    }

    if (tooLate) {
      return NextResponse.json({ ok: false, error: 'Hết thời gian trả lời' }, { status: 400 });
    }

    const sorted = leaderboardList(room.leaderboard);
    const answeredCount = room.answeredThisRound.size;
    const playerCount = Object.keys(room.players).length;

    await pusherServer.trigger(`presence-${code}`, 'leaderboard', {
      leaderboard: sorted,
      answeredCount,
      playerCount,
    });

    return NextResponse.json({ ok: true, isCorrect, leaderboard: sorted });
  } catch (error: any) {
    console.error('Answer submit error', error);
    return NextResponse.json({ error: error?.message || 'Internal error' }, { status: 500 });
  }
}

function leaderboardList(board: Record<string, { name: string; score: number; lastAnswerCorrect?: boolean; lastAnswerAt?: number }>) {
  return Object.entries(board)
    .map(([id, entry]) => ({ id, ...entry }))
    .sort((a, b) => b.score - a.score || (a.lastAnswerAt || 0) - (b.lastAnswerAt || 0));
}
