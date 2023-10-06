import { Types } from "mongoose";

export type ICategories = {
  name: string;
  products: Types.ObjectId[];
};
