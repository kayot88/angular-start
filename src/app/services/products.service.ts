import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, delay, retry, tap, throwError } from 'rxjs';
import { IProduct } from '../models/products';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient, private errorService: ErrorService) {}
  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handlerError(error.message);
    return throwError(() => this.errorService.error$ || 'Server Error');
  }
  products: IProduct[] = [];
  getAllProducts(): Observable<IProduct[]> {
    return this.http
      .get<IProduct[]>('https://fakestoreapi.com/products', {
        params: new HttpParams().set('limit', '3'),
      })

      .pipe(
        tap((products) => {
          console.log(products);
          this.products = products;
        }),
        catchError(this.errorHandler.bind(this))
      );
  }
  createProduct(product: IProduct): Observable<IProduct> {
    return this.http
      .post<IProduct>('https://fakestoreapi.com/products', product)
      .pipe(
        tap((prod) => this.products.push(prod)),
        catchError(this.errorHandler.bind(this))
      );
  }
}
