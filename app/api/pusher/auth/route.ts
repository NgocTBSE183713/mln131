import { NextResponse } from 'next/server';
import { pusherServer } from '@/lib/pusher';

export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const socket_id = String(form.get('socket_id'));
    const channel_name = String(form.get('channel_name'));
    const user_id = form.get('user_id') ? String(form.get('user_id')) : undefined;
    const user_name = form.get('user_name') ? String(form.get('user_name')) : undefined;

    if (!socket_id || !channel_name) {
      return NextResponse.json({ error: 'Missing socket_id or channel_name' }, { status: 400 });
    }

    const presenceData = user_id
      ? { user_id, user_info: { name: user_name || user_id } }
      : undefined;

    const auth = presenceData
      ? pusherServer.authorizeChannel(socket_id, channel_name, presenceData)
      : pusherServer.authorizeChannel(socket_id, channel_name);

    return new NextResponse(auth, { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error: any) {
    console.error('Pusher auth error', error);
    return NextResponse.json({ error: error?.message || 'Auth failed' }, { status: 500 });
  }
}
