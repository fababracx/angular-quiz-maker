import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

/**
 * Routes principales
 */
const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'quiz',
    pathMatch: 'full'
  },
  {
    path: 'quiz',
    loadChildren: () => import('./domains/quiz/quiz.module').then(m => m.QuizModule),
    title: 'Quiz'
  },
  { path: '**', component: PageNotFoundComponent }
];

/**
 * Module de routing de l'application
 */
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      scrollPositionRestoration: 'enabled',
      enableTracing: false,
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor() {}
}
