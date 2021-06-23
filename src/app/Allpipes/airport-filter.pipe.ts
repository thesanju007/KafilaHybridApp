import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'airportFilter'
})
export class AirportFilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      return it.city.toLocaleLowerCase().includes(searchText);
    });
  }

}
