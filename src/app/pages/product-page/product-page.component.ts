import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/models/products';
import { getProductsAction } from 'src/app/components/products/actions/products.actions';
import { ModalService } from 'src/app/services/modal.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
})
export class ProductPageComponent {
  title = 'angular';
  loading = false;
  products$: Observable<IProduct[]>;
  term: string = '';

  constructor(
    private store: Store<{ products: IProduct[] }>,
    public productService: ProductsService,
    public modalService: ModalService
  ) {
    this.products$ = this.store.select('products');
  }
  ngOnInit(): void {
    this.loading = true;
    this.productService.getAllProducts().subscribe(() => {
      this.loading = false;
    });
    console.log(this.store);
  }
}
