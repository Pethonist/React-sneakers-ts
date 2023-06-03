import { Sneaker, Status } from '../../types/types';

export interface ISneakersSliceState {
  items: Sneaker[];
  status: Status;
}
