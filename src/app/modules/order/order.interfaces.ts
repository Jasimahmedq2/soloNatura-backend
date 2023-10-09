import { Types } from "mongoose";

export type IOrder = {
  orderInfo: Types.ObjectId;
  cart: Types.ObjectId;
  orderDate: Date;
};
