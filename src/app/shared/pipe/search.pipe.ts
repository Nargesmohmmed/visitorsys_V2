import { Pipe, PipeTransform } from '@angular/core';
import { Agency } from '../interfaces/agency';
import { Adjective } from '../interfaces/adjective';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {


    transform(products:Agency[] , term:string): Agency[] {
      return products.filter((item) => item.AgencyName.toLowerCase().includes(term.toLowerCase()));
    }



}
