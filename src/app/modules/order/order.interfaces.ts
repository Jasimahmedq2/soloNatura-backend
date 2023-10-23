import { Types } from "mongoose";

export type IProductService = {
  product: string;
  quantity: number;
};

export type IOrderPayload = {
  items: IProductService[];
  total: number;
};

export type IProductOrder = {
  user: Types.ObjectId;
  items: IProductService[];
  total: number;
  status: string;
};
