import { Schema, model, Types } from "mongoose";
import { IOrder } from "./order.interfaces";

const orderModel = new Schema<IOrder>({
  products: [
    {
      product: {
        type: Schema.Types.ObjectId,
        ref: "product",
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  totalAmount: {
    type: Number,
    required: true,
  },
  customer: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  orderDate: {
    type: Date,
    default: Date.now,
  },
});

export const Order = model<IOrder>("order", orderModel);
