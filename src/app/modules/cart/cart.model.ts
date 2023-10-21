import { Schema, model } from "mongoose";
import { ICart } from "./cart.interfaces";

const CartModel = new Schema<ICart>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    products: {
      type: [
        {
          product: {
            type: Schema.Types.ObjectId,
            ref: "product",
            required: true,
          },
          quantity: {
            type: Number,
            required: true,
            default: 1,
          },
        },
      ],
    }
  },
  { timestamps: true }
);

export const Cart = model<ICart>("cart", CartModel);
