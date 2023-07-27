import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { CategoryApiResponse } from '@quiz/models/category-api-response';
import { Category } from '@shared/models/category';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizCategoryHttpService {
  constructor(private readonly http: HttpClient) {}

  /**
   * Default Mapping of API response
   * @param response Api response
   */
  private mapApiResponse(response: CategoryApiResponse): Category[] {
    return response?.trivia_categories || [];
  }

  /**
   * Fetch all categories from API
   */
  fetchAll(): Observable<Category[]> {
    return this.http.get<CategoryApiResponse>(environment.api.categoryUrl).pipe(map(this.mapApiResponse));
  }
}
