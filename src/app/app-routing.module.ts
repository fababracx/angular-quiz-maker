import { NgModule } from '@angular/core';
import { PreloadAllModules, Router, RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

/**
 * Routes principales
 */
const appRoutes: Routes = [
  //{
  //  path: '',
  //  redirectTo: 'quiz'
  //},
  //{
  //  path: 'quiz',
  //  loadChildren: () => import('./domains/quiz/quiz.module').then(m => m.PageQuizModule),
  //  data: {
  //    title: 'Quiz'
  //  }
  //},
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
  // Diagnostic only: inspect router configuration
  constructor(private readonly router: Router) {
    // Use a custom replacer to display function names in the route configs
    //const replacer = (key, value) => (typeof value === 'function' ? value.name : value);
    // console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }
}
