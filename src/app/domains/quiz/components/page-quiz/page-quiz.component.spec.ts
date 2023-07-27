import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsModule } from '@angular/forms';
import { DefaultPageTplComponent } from '@app/templates/default-page-tpl/default-page-tpl.component';
import { PageTitleComponent } from '@app/templates/page-title/page-title.component';
import { SelectComponent } from '@app/templates/select/select.component';
import { QuestionModule } from '@question/question.module';
import { CategoriesToOptionsPipe } from '@shared/pipes/categories-to-options.pipe';
import { DifficultiesToOptionsPipe } from '@shared/pipes/difficulties-to-options.pipe';
import { FormQuizSelectorComponent } from '../form-quiz-selector/form-quiz-selector.component';
import { PageQuizComponent } from './page-quiz.component';

describe('PageQuizComponent', () => {
  let component: PageQuizComponent;
  let fixture: ComponentFixture<PageQuizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageQuizComponent, FormQuizSelectorComponent],
      imports: [
        QuestionModule,
        HttpClientTestingModule,
        ReactiveFormsModule,
        DefaultPageTplComponent,
        PageTitleComponent,
        CategoriesToOptionsPipe,
        DifficultiesToOptionsPipe,
        SelectComponent
      ]
    });
    fixture = TestBed.createComponent(PageQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
