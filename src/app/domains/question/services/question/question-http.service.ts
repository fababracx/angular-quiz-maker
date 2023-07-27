import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { QuestionApiResponse } from '@question/models/question-api-response';
import { Difficulty } from '@shared/enums/difficulty';
import { QuestionType } from '@shared/enums/question-type';
import { Question } from '@shared/models/question';
import { QuestionQueryParamsM } from '@shared/models/question-query-params-m';
import { shuffleArray } from '@shared/utils/array.helpers';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionHttpService {
  constructor(private readonly http: HttpClient) {}

  /**
   * Default Mapping of API response
   * @param response Api response
   */
  private mapApiResponse(response: QuestionApiResponse): Question[] {
    return response?.results || [];
  }

  /**
   * Concat incorrect_answers and correct_answer to question answers attibute
   * @param questions questions
   */
  private addAnswersToQuestions(questions: Question[]): Question[] {
    return questions.map(q => {
      const answers = shuffleArray<string>([...q.incorrect_answers, q.correct_answer]);
      return { ...q, answers };
    });
  }

  /**
   * Get custom query param for fetching questions
   */
  private getQueryParamsFetchQuestions({
    amount = environment.config.defaultAmount,
    category,
    difficulty,
    type = environment.config.defaultType
  }: {
    amount?: number;
    category: number;
    difficulty: Difficulty;
    type?: QuestionType;
  }) {
    let httpParams: HttpParams = new HttpParams();
    if (amount ?? false) {
      httpParams = httpParams.set('amount', amount);
    }
    if (category ?? false) {
      httpParams = httpParams.set('category', category);
    }
    if (difficulty ?? false) {
      httpParams = httpParams.set('difficulty', difficulty);
    }
    if (type ?? false) {
      httpParams = httpParams.set('type', type);
    }
    return httpParams;
  }

  /**
   * Fetch questions from API
   * @param params Query params
   */
  fetchQuestions(params: QuestionQueryParamsM): Observable<Question[]> {
    const httpParams: HttpParams = this.getQueryParamsFetchQuestions(params);
    return this.http
      .get<QuestionApiResponse>(environment.api.questionUrl, { params: httpParams })
      .pipe(map(this.mapApiResponse), map(this.addAnswersToQuestions.bind(this)));
  }
}
