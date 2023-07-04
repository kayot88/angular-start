import { Action, createReducer, on } from '@ngrx/store';
import { IProduct } from 'src/app/models/products';
import { getProductsAction, setProductAction } from '../actions/products.actions';

export const initialState: IProduct[] = [];

const _productsReducer = createReducer(
  initialState,
  on(getProductsAction, (state, products) => {
    return [...state, ...products.products];
  }),
  on(setProductAction, (state, product) => {
    return [...state, product.product];
  })
);

export function productsReducer(state: any, action: Action) {
  return _productsReducer(state, action);
}
