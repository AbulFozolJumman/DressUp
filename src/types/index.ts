export type IProduct = {
  _id: string;
  image: string;
  title: string;
  price: number;
  ratings: number;
  category: string;
  description: string;
};
export type ICreateProduct = {
  image: string;
  title: string;
  price: number;
  ratings: number;
  category: string;
  description: string;
};

export type ICartItem = {
  id: string;
  title: string;
  price: number;
  quantity: number;
};

export type ICartState = {
  items: ICartItem[];
};
