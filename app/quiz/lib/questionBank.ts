import { Question } from '../types';
import { QuizQuestion } from '../../../lib/quizTypes';

type BankItem = QuizQuestion & { timeLimit?: number; image?: string };

const bankItems: BankItem[] = [
  {
    question: 'Phong trào cách mạng 1930-1931 đạt đỉnh cao ở địa phương nào?',
    options: ['Hà Nội - Hải Phòng', 'Nghệ An - Hà Tĩnh', 'Sài Gòn - Chợ Lớn', 'Huế - Đà Nẵng'],
    correctIndex: 1,
    timeLimit: 20,
    image: 'https://picsum.photos/800/400?grayscale',
    explanation: 'Đỉnh cao phong trào 1930-1931 là Xô Viết Nghệ Tĩnh tại Nghệ An, Hà Tĩnh.',
  },
  {
    question: 'Cách mạng tháng Tám năm 1945 thành công vào ngày nào?',
    options: ['19/08/1945', '02/09/1945', '09/03/1945', '23/09/1945'],
    correctIndex: 0,
    timeLimit: 15,
    image: 'https://picsum.photos/800/400?blur=2',
    explanation: '19/8/1945 là ngày Hà Nội giành chính quyền, mở đầu thắng lợi Tổng khởi nghĩa.',
  },
  {
    question: 'Ai là người đã đọc bản Tuyên ngôn Độc lập khai sinh ra nước VNDCCH?',
    options: ['Phạm Văn Đồng', 'Võ Nguyên Giáp', 'Hồ Chí Minh', 'Trường Chinh'],
    correctIndex: 2,
    timeLimit: 15,
    explanation: 'Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập tại Ba Đình ngày 2/9/1945.',
  },
  {
    question: 'Chiến dịch nào đã kết thúc thắng lợi cuộc kháng chiến chống Pháp (1954)?',
    options: ['Chiến dịch Việt Bắc', 'Chiến dịch Biên Giới', 'Chiến dịch Điện Biên Phủ', 'Chiến dịch Hồ Chí Minh'],
    correctIndex: 2,
    timeLimit: 20,
    explanation: 'Chiến thắng Điện Biên Phủ (7/5/1954) buộc Pháp ký Hiệp định Genève, kết thúc chiến tranh.',
  },
];

export const questionBank: QuizQuestion[] = bankItems.map(({ question, options, correctIndex, explanation }) => ({
  question,
  options,
  correctIndex,
  explanation,
}));

export const QUESTIONS: Question[] = bankItems.map((item, idx) => ({
  id: `q${idx + 1}`,
  text: item.question,
  image: item.image,
  options: item.options,
  correctAnswerIndex: item.correctIndex,
  timeLimit: item.timeLimit ?? 15,
}));

export const SHAPES = ['triangle', 'diamond', 'circle', 'square'];
export const COLORS = ['bg-brand-red', 'bg-brand-blue', 'bg-brand-yellow', 'bg-brand-green'];