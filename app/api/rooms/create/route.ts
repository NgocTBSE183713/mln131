import { NextResponse } from 'next/server';
import { createRoom } from '@/lib/gameStore';
import { QuizQuestion } from '@/lib/quizTypes';

export async function POST(req: Request) {
  try {
    const { quiz } = await req.json();
    if (!Array.isArray(quiz) || quiz.length === 0) {
      return NextResponse.json({ error: 'quiz is required' }, { status: 400 });
    }

    const normalized: QuizQuestion[] = quiz.map((q: any) => ({
      question: q.question,
      options: q.options,
      correctIndex: q.correctIndex,
      explanation: q.explanation,
    }));

    const room = createRoom(normalized);

    return NextResponse.json({
      roomCode: room.roomCode,
      hostSecret: room.hostSecret,
      quizLength: normalized.length,
    });
  } catch (error: any) {
    console.error('Create room error', error);
    return NextResponse.json({ error: error?.message || 'Internal error' }, { status: 500 });
  }
}
