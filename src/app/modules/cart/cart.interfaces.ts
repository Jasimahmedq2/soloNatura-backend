import { Types } from "mongoose";

export type CartProduct = {
  product: Types.ObjectId;
  quantity: number;
};

export type ICart = {
  save(): unknown;
  user: Types.ObjectId;
  products: CartProduct[];
  createdAt: Date;
  updatedAt: Date;
};
