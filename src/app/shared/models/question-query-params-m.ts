import { environment } from '@environments/environment';
import { Difficulty } from '@shared/enums/difficulty';
import { QuestionType } from '@shared/enums/question-type';
import { Category } from '@shared/models/category';
import { QuestionQueryParams } from './question-query-params';

export class QuestionQueryParamsM implements QuestionQueryParams {
  amount?: number = environment.config.defaultAmount;
  category!: Category['id'];
  difficulty!: Difficulty;
  type: QuestionType = environment.config.defaultType;

  constructor(fields?: Partial<QuestionQueryParamsM>) {
    if (fields) {
      Object.assign(this, fields);
    }
  }
}
