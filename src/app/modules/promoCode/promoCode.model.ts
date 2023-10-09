import { Schema, model } from "mongoose";
import { IPromoCode } from "./promoCode.interfaces";

const PromoCodeModel = new Schema<IPromoCode>(
  {
    code: { type: String, required: true, unique: true },
    discountPercentage: { type: Number, required: true },
    validUntil: { type: Date, required: true },
  },
  { timestamps: true }
);

export const PromoCode = model<IPromoCode>("promoCode", PromoCodeModel);
