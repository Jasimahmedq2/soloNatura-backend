import { Schema, model } from "mongoose";
import { IProduct } from "./product.interface";
import { productCategory } from "../category/category.model";

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
},{timestamps: true});

productModel.post("save", async function () {
  const product = this;

  // Find the Product Category using the ObjectId reference in the product
  const category = await productCategory.findById(product.category);

  if (category) {
    // Add this product's ObjectId reference to the products array in the category
    category.products.push(product._id);
    await category.save();
  }
});

export const Product = model<IProduct>("product", productModel);
