import { Pipe, PipeTransform } from '@angular/core';
import { Guest } from '../interfaces/guest';

@Pipe({
  name: 'searchGuest',
  standalone: true
})
export class SearchGuestPipe implements PipeTransform {

  transform(products:Guest[] , term:string): Guest[] {
    return products.filter((item) => item.GuestName.toLowerCase().includes(term.toLowerCase()));
  }



}
