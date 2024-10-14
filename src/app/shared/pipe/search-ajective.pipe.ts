import { Pipe, PipeTransform } from '@angular/core';
import { Adjective } from '../interfaces/adjective';

@Pipe({
  name: 'searchAjective',
  standalone: true
})
export class SearchAjectivePipe implements PipeTransform {

  transform(products:Adjective[] , term:string): Adjective[] {
    return products.filter((item) => item.Adjective.toLowerCase().includes(term.toLowerCase()));
  }

}
