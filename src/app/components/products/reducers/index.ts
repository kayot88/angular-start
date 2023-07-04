import { IProduct } from 'src/app/models/products';
import { ActionReducerMap } from '@ngrx/store';
import * as Products from './products.reducer';

export interface State {
  products: IProduct[];
}

export const reducers: ActionReducerMap<State> = {
  products: Products.productsReducer,
};
