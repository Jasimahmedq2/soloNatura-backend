import { Schema, model, Types } from "mongoose";
import { IOrder } from "./order.interfaces";

const orderModel = new Schema<IOrder>(
  {
    orderInfo: {
      type: Schema.Types.ObjectId,
      ref: "orderInfo",
    },
    cart: {
      type: Schema.Types.ObjectId,
      ref: "cart",
    },
    orderDate: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export const Order = model<IOrder>("order", orderModel);
