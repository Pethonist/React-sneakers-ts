export type Sneaker = {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export type SearchParams = {
  searchValue: string;
  currentPage: number;
};

export type CartItem = {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  count: number;
};
