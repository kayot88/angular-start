import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../models/products';

@Pipe({
  name: 'filterProducts',
})
export class FilterProductsPipe implements PipeTransform {
  transform(products: IProduct[], search: string): IProduct[] {
    if (search.length === 0) {
      return products;
    }
    return products.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
  }
}
