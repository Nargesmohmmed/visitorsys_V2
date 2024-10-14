import { Pipe, PipeTransform } from '@angular/core';
import { Host } from '../interfaces/host';

@Pipe({
  name: 'searchHost',
  standalone: true
})
export class SearchHostPipe implements PipeTransform {

  transform(products:Host[] , term:string): Host[] {
    return products.filter((item) => item.HostName.toLowerCase().includes(term.toLowerCase()));
  }

}
