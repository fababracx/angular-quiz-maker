import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageQuizResultComponent } from './components/page-quiz-result/page-quiz-result.component';
import { PageQuizComponent } from './components/page-quiz/page-quiz.component';
import { quizAnswersResolver } from './services/resolvers/quiz-answers.resolver';

/**
 * Routes du module
 */
const moduleRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: PageQuizComponent },
      {
        path: 'result',
        component: PageQuizResultComponent,
        resolve: {
          answers: quizAnswersResolver
        }
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(moduleRoutes)],
  exports: [RouterModule]
})
export class QuizRoutingModule {}
