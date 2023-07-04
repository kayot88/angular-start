import { createAction, props } from '@ngrx/store';
import { IProduct } from '../../../models/products';

export enum ProductsActionsEnum {
  LoadProducts = '[Products] Get Products',
}
export const getProductsAction = createAction(
  '[Products] Get Products',
  props<{ products: IProduct[] }>()
);

export const setProductAction = createAction(
  '[Products] Set Product',
  props<{ product: IProduct }>()
);
