"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromoCodeValidation = void 0;
const zod_1 = require("zod");
const addPromoCode = zod_1.z.object({
    body: zod_1.z.object({
        code: zod_1.z.string({
            required_error: "promo code is required",
        }),
        discountPercentage: zod_1.z.number({
            required_error: "discountPercentage  is required",
        }),
        validUntil: zod_1.z.date({
            required_error: "validUntil is required",
        }),
    }),
});
exports.PromoCodeValidation = {
    addPromoCode,
};
