import { NextResponse } from 'next/server';
import { getRoomAsync, persistRoom } from '@/lib/gameStore';

type ParamsPromise = { params: { code: string } } | { params: Promise<{ code: string }> };

export async function POST(req: Request, ctx: ParamsPromise) {
  try {
    const { hostSecret, code: codeInBody } = await req.json();
    if (!hostSecret) return NextResponse.json({ error: 'hostSecret required' }, { status: 400 });

    const resolved = 'params' in ctx ? (typeof (ctx as any).params?.then === 'function' ? await (ctx as any).params : (ctx as any).params) : undefined;
    const code = (codeInBody || resolved?.code)?.toUpperCase();
    if (!code) return NextResponse.json({ error: 'Room code missing' }, { status: 400 });

    const room = await getRoomAsync(code);
    if (!room) return NextResponse.json({ error: 'Room not found' }, { status: 404 });
    if (room.hostSecret !== hostSecret) return NextResponse.json({ error: 'Unauthorized host' }, { status: 403 });

    // Kết thúc thời gian trả lời bằng cách đặt deadline về quá khứ
    if (room.questionDeadline && room.questionDeadline > Date.now()) {
      room.questionDeadline = Date.now() - 1;
    }
    await persistRoom(room);

    return NextResponse.json({ ok: true, message: 'Question ended' });
  } catch (error: any) {
    console.error('End question error', error);
    return NextResponse.json({ error: error?.message || 'Internal error' }, { status: 500 });
  }
}
