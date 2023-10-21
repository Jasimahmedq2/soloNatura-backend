import { Schema, model } from "mongoose";
import { IOrderInfo } from "./orderInfo.interfaces";

const orderInfoModel = new Schema<IOrderInfo>({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  nation: {
    type: String,
    required: true,
  },
  streetAddress: {
    type: String,
    required: true,
  },
  province: {
    type: String,
    required: true,
  },
  municipality: {
    type: String,
    required: true,
  },
  postalCode: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  birthday: {
    type: Date,
  },
  isFilled: {
    type: Boolean,
    default: false,
  },
});

export const OrderInfo = model<IOrderInfo>("orderInfo", orderInfoModel);
