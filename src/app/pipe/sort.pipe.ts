import { Pipe, PipeTransform } from '@angular/core';
import { Painting } from '../model/painting';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(value: Painting[], phrase: string, isSorted: boolean): Painting[] {
    if (!Array.isArray(value) || !phrase) {
      return value;
    }
    if (isSorted) {
      return value.sort((a, b) => {
        if (typeof a[phrase] === 'number' && typeof b[phrase] === 'number') {
          return b[phrase] - a[phrase];
        } else {
          return String(a[phrase]).localeCompare(String(b[phrase]));
        }
      });
    } else {
      return value.sort((a, b) => {
        if (typeof a[phrase] === 'number' && typeof b[phrase] === 'number') {
          return a[phrase] - b[phrase];
        } else {
          return String(b[phrase]).localeCompare(String(a[phrase]));
        }
      });
    }
  }
}
