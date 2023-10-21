"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromoCode = void 0;
const mongoose_1 = require("mongoose");
const PromoCodeModel = new mongoose_1.Schema({
    code: { type: String, required: true, unique: true },
    discountPercentage: { type: Number, required: true },
    validUntil: { type: Date, required: true },
}, { timestamps: true });
exports.PromoCode = (0, mongoose_1.model)("promoCode", PromoCodeModel);
