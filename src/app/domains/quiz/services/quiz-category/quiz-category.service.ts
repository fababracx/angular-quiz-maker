import { Injectable } from '@angular/core';
import { Category } from '@shared/models/category';
import { Observable } from 'rxjs';
import { QuizCategoryHttpService } from './quiz-category-http.service';

@Injectable({
  providedIn: 'root'
})
export class QuizCategoryService {
  constructor(private readonly quizCategoryHttpService: QuizCategoryHttpService) {}

  getAll(): Observable<Category[]> {
    return this.quizCategoryHttpService.fetchAll();
  }
}
