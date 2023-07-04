import { Component } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
})
export class ProductPageComponent {
  title = 'angular';
  loading = false;
  // data$: Observable<IProduct[]>;
  term: string = '';

  constructor(
    public productService: ProductsService,
    public modalService: ModalService
  ) {}
  ngOnInit(): void {
    this.loading = true;
    this.productService
      .getAllProducts()
      .subscribe(() => (this.loading = false));
  }
}
