import { Difficulty } from '@shared/enums/difficulty';
import { QuestionType } from '@shared/enums/question-type';

export interface Question {
  category: string;
  type: QuestionType;
  difficulty: Difficulty;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  answers?: string[];
}
