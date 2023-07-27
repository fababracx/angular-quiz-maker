import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DefaultPageTplComponent } from '@app/templates/default-page-tpl/default-page-tpl.component';
import { PageActionComponent } from '@app/templates/page-action/page-action.component';
import { PageTitleComponent } from '@app/templates/page-title/page-title.component';
import { ListQuestionResultComponent } from '@question/components/list-question-result/list-question-result.component';
import { ScoreBgDirective } from '@quiz/directives/score-bg.directive';
import { FinalScoreComponent } from '../final-score/final-score.component';
import { FormQuizSelectorComponent } from '../form-quiz-selector/form-quiz-selector.component';
import { PageQuizResultComponent } from './page-quiz-result.component';

describe('PageQuizResultComponent', () => {
  let component: PageQuizResultComponent;
  let fixture: ComponentFixture<PageQuizResultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageQuizResultComponent, FinalScoreComponent, FormQuizSelectorComponent, ListQuestionResultComponent],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        DefaultPageTplComponent,
        ScoreBgDirective,
        PageTitleComponent,
        PageActionComponent
      ]
    });
    fixture = TestBed.createComponent(PageQuizResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
