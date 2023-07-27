import { Component } from '@angular/core';
import { DefaultPageTplComponent } from '@app/templates/default-page-tpl/default-page-tpl.component';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [DefaultPageTplComponent],
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent {}
