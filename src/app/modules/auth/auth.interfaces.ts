import { Types } from "mongoose";

export type IUser = {
  name: string;
  email: string;
  password: string;
  role: string;
  isVerified: boolean;
  phoneNo: string;
  image: string;
  birthday: string;
  resetToken: string | null;
  resetTokenExpiration: Date | null;
  location?: {
    city: string;
    address: string;
  };
  favorites?: Types.ObjectId[];
};

export type ILogin = {
  email: string;
  password: string;
};

export type ILoginResponse = {
  isVerified: boolean;
  userId: string;
  email: string;
  role: string;
  token: string;
};
