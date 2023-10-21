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
exports.CartController = void 0;
const cart_service_1 = require("./cart.service");
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const AddToCart = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.user;
    const payload = req.body;
    try {
        const result = yield cart_service_1.CartServices.AddToCart(userId, payload);
        (0, sendResponse_1.default)(res, {
            statusCode: 200,
            success: true,
            message: "successfully added a product in cart",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const getCartWithPrices = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.user;
    try {
        const result = yield cart_service_1.CartServices.getCartWithPrices(userId);
        (0, sendResponse_1.default)(res, {
            statusCode: 200,
            success: true,
            message: "successfully get cart products",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const removeQuantityFromCart = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.user;
    const { productId } = req.body;
    console.log(userId, productId);
    try {
        const result = yield cart_service_1.CartServices.removeQuantityFromCart(userId, productId);
        (0, sendResponse_1.default)(res, {
            statusCode: 200,
            success: true,
            message: "successfully remove a quantity from cart product",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.CartController = {
    AddToCart,
    getCartWithPrices,
    removeQuantityFromCart,
};
