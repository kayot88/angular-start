import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/models/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent {
  @Input() product: IProduct;
  details = false;
}
