import { Difficulty } from '@shared/enums/difficulty';
import { QuestionType } from '@shared/enums/question-type';
import { Category } from '@shared/models/category';

export interface QuestionQueryParams {
  amount?: number;
  category: Category['id'];
  difficulty: Difficulty;
  type?: QuestionType;
}
