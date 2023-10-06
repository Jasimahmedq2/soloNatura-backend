import { Schema, model } from "mongoose";
import { UserRoleConstant } from "./auth.constant";
import { IUser } from "./auth.interfaces";

const UserModel = new Schema<IUser>({
  name: {
    type: String,
    required: true,
    default: "",
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    enum: UserRoleConstant,
    type: String,
    default: "customer",
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  phoneNo: {
    type: String,
    default: "",
  },
  image: {
    type: String,
    default: "",
  },
  resetToken: {
    type: String,
    default: null,
  },
  resetTokenExpiration: {
    type: Date,
    default: null,
  },
  birthday: {
    type: String,
  },
});

export const User = model<IUser>("user", UserModel);
