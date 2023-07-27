import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdditionnalClasses } from '@shared/types/additionnal-classes.type';

@Component({
  selector: 'app-page-action',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './page-action.component.html',
  styleUrls: ['./page-action.component.scss']
})
export class PageActionComponent {
  @Input({ required: true }) action!: string;
  @Input({ required: true }) btnId!: string;
  @Input() additionnalClasses: AdditionnalClasses = 'btn-primary';
  @Output() clickToAction: EventEmitter<UIEvent> = new EventEmitter<UIEvent>();

  /**
   * Action on click on button
   * @param event Click event
   */
  onClick(event: UIEvent): void {
    this.clickToAction.emit(event);
  }
}
