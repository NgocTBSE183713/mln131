import { NextResponse } from 'next/server';
import { getRoom } from '@/lib/gameStore';
import { pusherServer, pusherConfigured } from '@/lib/pusher';

type ParamsPromise = { params: { code: string } } | { params: Promise<{ code: string }> };

export async function POST(req: Request, ctx: ParamsPromise) {
  try {
    const { playerId, playerName, code: codeInBody } = await req.json();
    if (!playerId || !playerName) {
      return NextResponse.json({ error: 'Missing playerId or playerName' }, { status: 400 });
    }

    const resolved = 'params' in ctx ? (typeof (ctx as any).params?.then === 'function' ? await (ctx as any).params : (ctx as any).params) : undefined;
    const code = (codeInBody || resolved?.code)?.toUpperCase();
    if (!code) return NextResponse.json({ error: 'Room code missing' }, { status: 400 });
    const room = getRoom(code);
    
    if (!room) {
      return NextResponse.json({ error: 'Room not found' }, { status: 404 });
    }

    if (!pusherConfigured) {
      return NextResponse.json({ error: 'Pusher env missing (PUSHER_APP_ID, PUSHER_KEY, PUSHER_SECRET, PUSHER_CLUSTER, NEXT_PUBLIC_PUSHER_KEY, NEXT_PUBLIC_PUSHER_CLUSTER)' }, { status: 500 });
    }

    // Add player to room
    room.players[playerId] = { name: playerName, joinedAt: Date.now() };

    // Notify host about new player
    await pusherServer.trigger(`presence-${code}`, 'player-joined', {
      playerId,
      playerName,
      playerCount: Object.keys(room.players).length,
    });

    return NextResponse.json({ 
      ok: true, 
      status: room.status,
      playerCount: Object.keys(room.players).length,
      currentQuestionIndex: room.currentQuestionIndex,
    });
  } catch (error: any) {
    console.error('Join room error', error);
    return NextResponse.json({ error: error?.message || 'Internal error' }, { status: 500 });
  }
}
