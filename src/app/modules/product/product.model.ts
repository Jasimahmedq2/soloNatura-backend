import { Schema, model } from "mongoose";
import { IProduct } from "./product.interface";

const productModel = new Schema<IProduct>({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "productCategory",
  },
  rating: {
    type: Number,
    default: 0,
  },
});

export const Product = model<IProduct>("product", productModel);
