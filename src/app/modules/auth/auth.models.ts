import { Schema, model } from "mongoose";
import { UserRoleConstant } from "./auth.constant";
import { IUser } from "./auth.interfaces";

const UserModel = new Schema<IUser>(
  {
    name: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      required: true,
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
    location: {
      city: {
        type: String,
        default: "",
      },
      address: {
        type: String,
        default: "",
      },
    },
    favorites: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: "product",
        },
      ],
      default: [],
    },
  },
  { timestamps: true }
);

export const User = model<IUser>("user", UserModel);
