import { IOrderInfo } from "./orderInfo.interfaces";
import { OrderInfo } from "./orderInfo.model";

const addInfoInDb = async (payload: IOrderInfo): Promise<IOrderInfo> => {
  const result = await OrderInfo.create(payload);
  return result;
};

export const OrderInfoServices = {
  addInfoInDb,
};
