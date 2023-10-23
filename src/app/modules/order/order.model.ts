import { Schema, model } from "mongoose";
import { IProductOrder } from "./order.interfaces";

const orderSchema = new Schema<IProductOrder>(
  {
    user: { type: Schema.Types.ObjectId, ref: "user" },
    items: [
      {
        product: { type: Schema.Types.ObjectId, ref: "product" },
        quantity: Number,
      },
    ],
    total: Number,
    status: {
      type: String,
      enum: ["pending", "accepted", "completed", "canceled"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export const Order = model<IProductOrder>("order", orderSchema);
