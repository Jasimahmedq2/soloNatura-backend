import { Types } from "mongoose";

export type IOrderProduct = {
  product: Types.ObjectId;
  quantity: number;
};

export type IOrder = {
  products: IOrderProduct[];
  totalAmount: number;
  customer: Types.ObjectId;
  orderDate: Date;
};
