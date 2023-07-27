import { Question } from '@shared/models/question';

export interface QuizAnswer {
  question: Question['question'];
  selectedAnswer: string;
}
