import { Schema, Types, model } from "mongoose";
import { ICategories } from "./category.interfaces";

const productCategoryModel = new Schema<ICategories>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  categoryType: {
    type: String,
  },
  products: {
    type: [
      {
        type: Types.ObjectId,
        ref: "product",
      },
    ],
    default: [],
  },
});

export const productCategory = model<ICategories>(
  "productCategory",
  productCategoryModel
);
