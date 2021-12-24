import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nestedRowFilter',
})
export class NestedRowFilterPipe implements PipeTransform {
  transform(value) {
    let filterList = value.filter((row) => row.Parent == null);
    return filterList;
  }
}
