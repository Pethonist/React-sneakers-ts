import { CartItem } from '../../types/types';

export interface ICartSliceState {
  items: CartItem[];
  totalPrice: number;
}
