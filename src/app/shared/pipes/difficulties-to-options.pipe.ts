import { Pipe, PipeTransform } from '@angular/core';
import { Option } from '@shared/models/option';

@Pipe({
  name: 'difficultiesToOptions',
  standalone: true
})
export class DifficultiesToOptionsPipe implements PipeTransform {
  transform(difficulties: string[] | null): Option[] {
    return (
      difficulties?.map(difficulty => {
        return { value: `${difficulty}`, text: difficulty };
      }) || []
    );
  }
}
