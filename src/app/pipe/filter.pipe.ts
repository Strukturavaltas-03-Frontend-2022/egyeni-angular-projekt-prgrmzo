import { Pipe, PipeTransform } from '@angular/core';
import { Painting } from '../model/painting';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: Painting[], key: string, phrase: string): Painting[] {
    console.log(key, phrase);
    if (!Array.isArray(value) || !key || !phrase) {
      return value;
    } else {
      phrase = phrase.toLowerCase();
      key = key.toLowerCase();
      return value.filter((painting) => painting[key].includes(phrase));
    }
  }
}
