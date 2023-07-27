import { QuestionType } from '@shared/enums/question-type';

export const environment = {
  production: false,
  api: {
    categoryUrl: 'https://opentdb.com/api_category.php',
    questionUrl: 'https://opentdb.com/api.php'
  },
  config: {
    defaultAmount: 5,
    defaultType: QuestionType.MULTIPLE
  }
};
