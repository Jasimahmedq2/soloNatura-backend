"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromoCodeServices = void 0;
const promoCode_model_1 = require("./promoCode.model");
const addPromoCode = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield promoCode_model_1.PromoCode.create(payload);
    return result;
});
const getPromoCode = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield promoCode_model_1.PromoCode.find({});
    return result;
});
exports.PromoCodeServices = {
    addPromoCode,
    getPromoCode,
};
