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
exports.CartServices = void 0;
const cart_model_1 = require("./cart.model");
const apiError_1 = __importDefault(require("../../../errors/apiError"));
const product_model_1 = require("../product/product.model");
const AddToCart = (userId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!userId || !payload || !payload.product) {
            throw new apiError_1.default(401, "Invalid input data");
        }
        const cartExist = yield cart_model_1.Cart.findOne({ user: userId });
        if (!cartExist) {
            const newCart = new cart_model_1.Cart({
                user: userId,
                products: [{ product: payload.product, quantity: payload === null || payload === void 0 ? void 0 : payload.quantity }],
            });
            yield newCart.save();
        }
        else {
            const existingItem = cartExist.products.find((item) => item.product.toString() === payload.product.toString());
            if (existingItem) {
                existingItem.quantity += payload === null || payload === void 0 ? void 0 : payload.quantity;
            }
            else {
                cartExist.products.push({
                    product: payload.product,
                    quantity: payload === null || payload === void 0 ? void 0 : payload.quantity,
                });
            }
            yield cartExist.save();
        }
    }
    catch (error) {
        throw new apiError_1.default(401, "error occurred");
    }
});
const increaseQuantity = (userId, productId) => __awaiter(void 0, void 0, void 0, function* () {
    const cart = yield cart_model_1.Cart.findOne({ user: userId });
    if (!cart) {
        throw new apiError_1.default(404, "Cart not found");
    }
    const product = yield product_model_1.Product.findById(productId);
    if (!product) {
        throw new apiError_1.default(404, "Product not found");
    }
    const existingProduct = cart.products.find((item) => item.product.equals(productId));
    if (existingProduct) {
        existingProduct.quantity += 1;
    }
    yield cart.save();
    return cart;
});
const removeQuantityFromCart = (userId, productId) => __awaiter(void 0, void 0, void 0, function* () {
    const cart = yield cart_model_1.Cart.findOne({ user: userId });
    if (!cart) {
        throw new apiError_1.default(404, "Cart not found");
    }
    const product = yield product_model_1.Product.findById(productId);
    if (!product) {
        throw new apiError_1.default(404, "Product not found");
    }
    const existingProduct = cart.products.find((item) => item.product.equals(productId));
    if (existingProduct) {
        if (existingProduct.quantity <= 1) {
            cart.products = cart.products.filter((item) => !item.product.equals(productId));
        }
        else {
            existingProduct.quantity -= 1;
        }
    }
    else {
        throw new apiError_1.default(404, "Product not found in the cart");
    }
    yield cart.save();
    return cart;
});
const getCartWithPrices = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cart = yield cart_model_1.Cart.findOne({ user: userId }).populate("products.product");
        if (!cart) {
            throw new apiError_1.default(404, "cart not found");
        }
        let totalPrice = 0;
        for (const item of cart.products) {
            if (item.product) {
                const product = yield product_model_1.Product.findById(item.product);
                if (product) {
                    totalPrice += Number(product.price) * Number(item.quantity);
                }
            }
        }
        yield cart.save();
        return { cart, totalPrice };
    }
    catch (error) {
        throw new apiError_1.default(401, "error  occurred");
    }
});
exports.CartServices = {
    AddToCart,
    increaseQuantity,
    removeQuantityFromCart,
    getCartWithPrices,
};
