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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserServices = void 0;
const apiError_1 = __importDefault(require("../../../errors/apiError"));
const auth_models_1 = require("../auth/auth.models");
const product_model_1 = require("../product/product.model");
const getFavorites = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield auth_models_1.User.findById(id, { favorites: 1 }).populate("favorites");
    if (!result) {
        throw new apiError_1.default(400, "the user doesn't exist!");
    }
    return result;
});
const AddFavorites = (userId, productId) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const isProductExist = yield product_model_1.Product.findById(productId);
    if (!isProductExist) {
        throw new apiError_1.default(404, "the product doesn't not available");
    }
    const isUserExist = yield auth_models_1.User.findById(userId, { favorites: 1 });
    if (!isUserExist) {
        throw new apiError_1.default(400, "the user doesn't exist!");
    }
    (_a = isUserExist.favorites) === null || _a === void 0 ? void 0 : _a.push(isProductExist === null || isProductExist === void 0 ? void 0 : isProductExist._id);
    const result = isProductExist.save();
    return result;
});
exports.UserServices = {
    getFavorites,
    AddFavorites,
};
