import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wishlist',
})
export class WishlistPipe implements PipeTransform {
  transform(value: boolean): string {
    if (value === true) {
      return 'Yes';
    } else {
      return 'No';
    }
  }
}
