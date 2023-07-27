import { Pipe, PipeTransform } from '@angular/core';
import { Category } from '@shared/models/category';
import { Option } from '@shared/models/option';

@Pipe({
  name: 'categoriesToOptions',
  standalone: true
})
export class CategoriesToOptionsPipe implements PipeTransform {
  transform(categories: Category[] | null): Option[] {
    return (
      categories?.map(category => {
        return { value: `${category.id}`, text: category.name };
      }) || []
    );
  }
}
