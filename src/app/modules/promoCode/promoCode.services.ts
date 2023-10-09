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

export const PromoCodeServices = {
  addPromoCode,
  getPromoCode,
};
