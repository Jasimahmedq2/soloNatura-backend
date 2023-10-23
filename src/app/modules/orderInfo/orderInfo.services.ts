import { Types } from "mongoose";
import { IOrderInfo } from "./orderInfo.interfaces";
import { OrderInfo } from "./orderInfo.model";
import { IOrder } from "../order/order.interfaces";

const addInfoInDb = async (
  userId: Types.ObjectId,
  payload: IOrderInfo
): Promise<IOrderInfo | null> => {
  const existShipping = await OrderInfo.findOne({ user: userId });
  if (existShipping && existShipping.isFilled) {
    console.log("exist shipping address", payload);
    const result = await OrderInfo.findOneAndUpdate(
      { user: userId },
      { ...payload }
    );
    return result;
  } else {
    console.log(" shipping address not exist");

    const info = { ...payload, user: userId, isFilled: true };
    const result = await OrderInfo.create(info);
    return result;
  }
};

const getShippingAddress = async (
  userId: string
): Promise<IOrderInfo | null> => {
  const result = await OrderInfo.findOne({ user: userId });
  return result;
};

export const OrderInfoServices = {
  addInfoInDb,
  getShippingAddress,
};
