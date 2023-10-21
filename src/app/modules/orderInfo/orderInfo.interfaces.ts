import { Types } from "mongoose";

export type IOrderInfo = {
  user: Types.ObjectId;
  name: string;
  surname: string;
  nation: string;
  streetAddress: string;
  province: string;
  municipality: string;
  postalCode: string;
  phoneNumber: string;
  email: string;
  birthday?: Date;
  isFilled: boolean;
};
