import { Types } from "mongoose";

export type IProduct = {
  name: string;
  title: string;
  description?: string;
  price: number;
  category: Types.ObjectId;
  rating?: number;
};
