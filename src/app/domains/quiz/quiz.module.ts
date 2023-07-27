import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DefaultPageTplComponent } from '@app/templates/default-page-tpl/default-page-tpl.component';
import { PageActionComponent } from '@app/templates/page-action/page-action.component';
import { PageTitleComponent } from '@app/templates/page-title/page-title.component';
import { SelectComponent } from '@app/templates/select/select.component';
import { QuestionModule } from '@question/question.module';
import { CategoriesToOptionsPipe } from '@shared/pipes/categories-to-options.pipe';
import { DifficultiesToOptionsPipe } from '@shared/pipes/difficulties-to-options.pipe';
import { FinalScoreComponent } from './components/final-score/final-score.component';
import { FormQuizSelectorComponent } from './components/form-quiz-selector/form-quiz-selector.component';
import { PageQuizResultComponent } from './components/page-quiz-result/page-quiz-result.component';
import { PageQuizComponent } from './components/page-quiz/page-quiz.component';
import { ScoreBgDirective } from './directives/score-bg.directive';
import { QuizRoutingModule } from './quiz-routing.module';

@NgModule({
  declarations: [PageQuizComponent, FormQuizSelectorComponent, FinalScoreComponent, PageQuizResultComponent],
  imports: [
    CommonModule,
    QuizRoutingModule,
    ReactiveFormsModule,
    DefaultPageTplComponent,
    PageTitleComponent,
    PageActionComponent,
    QuestionModule,
    ScoreBgDirective,
    SelectComponent,
    CategoriesToOptionsPipe,
    DifficultiesToOptionsPipe
  ],
  exports: [PageQuizComponent]
})
export class QuizModule {}
