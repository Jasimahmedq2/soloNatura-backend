import { Schema, Types, model } from "mongoose";
import { ICategories } from "./category.interfaces";

const productCategoryModel = new Schema<ICategories>({
  name: {
    type: String,
    required: true,
  },
  products: [
    {
      type: Types.ObjectId,
      ref: "product",
    },
  ],
});

export const productCategory = model<ICategories>(
  "productCategory",
  productCategoryModel
);
