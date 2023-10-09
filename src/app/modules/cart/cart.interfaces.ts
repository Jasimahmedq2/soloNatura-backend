import { Types } from "mongoose";

type CartProduct = {
  product: Types.ObjectId;
  quantity: number;
};

export type ICart = {
  user: Types.ObjectId;
  products: CartProduct[];
  totalPrice: number;
  createdAt: Date;
  updatedAt: Date;
};
