import { environment } from '@environments/environment';
import { Difficulty } from '@shared/enums/difficulty';
import { QuestionType } from '@shared/enums/question-type';
import { QuestionQueryParamsM } from './question-query-params-m';

describe('QuestionQueryParamsM', () => {
  it('should create an instance', () => {
    expect(new QuestionQueryParamsM()).toBeTruthy();
  });

  it('should create an instance with default values', () => {
    const questionQueryParams = new QuestionQueryParamsM({
      category: 1,
      difficulty: Difficulty.EASY
    });
    expect({ ...questionQueryParams }).toEqual({
      amount: environment.config.defaultAmount,
      type: environment.config.defaultType,
      category: 1,
      difficulty: Difficulty.EASY
    });
  });

  it('should create an instance with overide default values', () => {
    const questionQueryParams = new QuestionQueryParamsM({
      amount: 10,
      type: QuestionType.BOOLEAN,
      category: 1,
      difficulty: Difficulty.EASY
    });
    expect({ ...questionQueryParams }).toEqual({
      amount: 10,
      type: QuestionType.BOOLEAN,
      category: 1,
      difficulty: Difficulty.EASY
    });
  });
});
