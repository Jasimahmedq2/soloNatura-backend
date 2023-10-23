import ApiError from "../../../errors/apiError";
import { IPromoCode } from "./promoCode.interfaces";
import { PromoCode } from "./promoCode.model";

const addPromoCode = async (payload: IPromoCode): Promise<IPromoCode> => {
  const result = await PromoCode.create(payload);
  return result;
};

const getPromoCode = async (): Promise<IPromoCode[] | null> => {
  const result = await PromoCode.find({});
  return result;
};

const applyPromoCode = async (promoCode: string, totalPrice: number) => {
  console.log({promoCode, totalPrice})
  const code = promoCode
  const validPromo = await PromoCode.findOne({ code });

  if (!validPromo) {
    throw new ApiError(400, "Invalid promo code");
  }

  if (validPromo.validUntil < new Date()) {
    throw new ApiError(401, "Promo code has expired");
  }

  const discountPercentage = validPromo.discountPercentage / 100;
  const discountedAmount = totalPrice * discountPercentage;
  const discountedTotalPrice = totalPrice - discountedAmount;

  return {
    discountedAmount,
    discountedTotalPrice,
  };
};

export const PromoCodeServices = {
  addPromoCode,
  getPromoCode,
  applyPromoCode,
};
