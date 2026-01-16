import { NextResponse } from 'next/server';
import { rehydrateRoom } from '@/lib/gameStore';
import { QuizQuestion } from '@/lib/quizTypes';

export async function POST(req: Request) {
  try {
    const { roomCode, hostSecret, quiz } = await req.json();
    if (!roomCode || !hostSecret) {
      return NextResponse.json({ error: 'roomCode and hostSecret are required' }, { status: 400 });
    }
    if (!Array.isArray(quiz) || quiz.length === 0) {
      return NextResponse.json({ error: 'quiz is required' }, { status: 400 });
    }

    const normalized: QuizQuestion[] = quiz.map((q: any) => ({
      question: q.question,
      options: q.options,
      correctIndex: q.correctIndex,
      explanation: q.explanation,
    }));

    const room = await rehydrateRoom({ roomCode, hostSecret, quiz: normalized });

    return NextResponse.json({
      roomCode: room.roomCode,
      hostSecret: room.hostSecret,
      quizLength: room.quiz.length,
      rehydrated: true,
    });
  } catch (error: any) {
    console.error('Rehydrate room error', error);
    const message = error?.message || 'Internal error';
    const status = message === 'Room not found' ? 404 : message === 'Unauthorized host' ? 403 : 500;
    return NextResponse.json({ error: message }, { status });
  }
}
