import { Types } from "mongoose";
import { IOrderPayload, IProductOrder } from "./order.interfaces";
import { Cart } from "../cart/cart.model";
import ApiError from "../../../errors/apiError";
import { Order } from "./order.model";

const createOrder = async (userId: Types.ObjectId, payload: IOrderPayload) => {
  const userCart = await Cart.findOne({ user: userId });

  if (!userCart) {
    throw new ApiError(404, "User cart not found");
  }
  const newOrder = new Order({ ...payload, user: userId });
  const result = await newOrder.save();
  await Cart.deleteOne({ user: userId });
  return result;
};

const retrieveUserOrder = async (
  userId: Types.ObjectId
): Promise<IProductOrder[]> => {
  //   const OrderExist = await Order.findOne({ user: userId });
  //   if (OrderExist) {
  //     throw new ApiError(401, "order doesn't exist");
  //   }
  const result = await Order.find({ user: userId });
  return result;
};

export const OrderServices = {
  createOrder,
  retrieveUserOrder,
};
