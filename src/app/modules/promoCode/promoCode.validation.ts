import { z } from "zod";

const addPromoCode = z.object({
  body: z.object({
    code: z.string({
      required_error: "promo code is required",
    }),
    discountPercentage: z.number({
      required_error: "discountPercentage  is required",
    }),
    validUntil: z.string({
      required_error: "validUntil is required",
    }),
  }),
});

export const PromoCodeValidation = {
  addPromoCode,
};
