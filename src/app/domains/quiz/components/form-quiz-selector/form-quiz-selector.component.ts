import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuizCategoryService } from '@domains/quiz/services/quiz-category/quiz-category.service';
import { Difficulty } from '@shared/enums/difficulty';
import { Category } from '@shared/models/category';
import { QuestionQueryParamsM } from '@shared/models/question-query-params-m';
import { trackByFnObjectNumber, trackByFnString } from '@shared/utils/object.helper';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-form-quiz-selector',
  templateUrl: './form-quiz-selector.component.html',
  styleUrls: ['./form-quiz-selector.component.scss']
})
export class FormQuizSelectorComponent implements OnInit {
  form!: FormGroup;
  categories$: Observable<Category[]> = of([]);
  difficulties$: Observable<string[]> = of([]);
  trackByFnCategories = trackByFnObjectNumber<Category>('id');
  trackByFnDifficulties = trackByFnString;

  @Output() createQuiz: EventEmitter<QuestionQueryParamsM> = new EventEmitter<QuestionQueryParamsM>();

  constructor(private fb: FormBuilder, private readonly quizCategoryService: QuizCategoryService) {}

  ngOnInit(): void {
    this.categories$ = this.quizCategoryService.getAll();
    this.difficulties$ = of(Object.values(Difficulty));
    this.initForm();
  }

  /**
   * Initialise form
   */
  private initForm(): void {
    this.form = this.fb.nonNullable.group({
      category: ['', Validators.required],
      difficulty: ['', Validators.required]
    });
  }

  /**
   * On form submit
   */
  onSubmit() {
    if (this.form.valid) {
      this.form.disable();
      this.createQuiz.emit(new QuestionQueryParamsM({ category: this.form.value.category, difficulty: this.form.value.difficulty }));
    } else {
      console.error('Create quiz form is invalid');
    }
  }
}
