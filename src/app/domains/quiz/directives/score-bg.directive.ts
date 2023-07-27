import { Directive, HostBinding, Input, OnChanges } from '@angular/core';

/**
 * Directive for display specific background by score
 */
@Directive({
  standalone: true,
  selector: '[appScoreBg]'
})
export class ScoreBgDirective implements OnChanges {
  @Input() appScoreBg!: number;
  @HostBinding('class') nomClass: string = '';

  constructor() {}

  ngOnChanges(): void {
    this.nomClass = this.setBgClass(this.appScoreBg);
  }

  /**
   * Set backgroud class by number of correct response
   * @param totalResponse Number of correct responses
   */
  private setBgClass(totalResponse: number): string {
    if (totalResponse >= 0 && totalResponse <= 1) {
      return 'text-bg-danger';
    } else if (totalResponse >= 2 && totalResponse <= 3) {
      return 'text-bg-warning';
    } else if (totalResponse >= 4 && totalResponse <= 5) {
      return 'text-bg-success';
    }
    return '';
  }
}
