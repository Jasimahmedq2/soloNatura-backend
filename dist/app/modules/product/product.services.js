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
exports.productServices = void 0;
const category_model_1 = require("../category/category.model");
const product_constant_1 = require("./product.constant");
const product_model_1 = require("./product.model");
const createProduct = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.create(payload);
    return result;
});
const retrieveProduct = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    const andConditions = [];
    if (searchTerm) {
        andConditions.push({
            $or: product_constant_1.productSearchAbleField.map((field) => ({
                [field]: {
                    $regex: searchTerm,
                    $options: "i",
                },
            })),
        });
    }
    const whereConditions = andConditions.length > 0 ? { $and: andConditions } : {};
    const result = yield product_model_1.Product.find(whereConditions);
    return result;
});
const retrieveSupplementsProduct = (CategoryType) => __awaiter(void 0, void 0, void 0, function* () {
    const categories = yield category_model_1.productCategory
        .find({ categoryType: CategoryType })
        .populate("products");
    const matchedProducts = [];
    categories.forEach((category) => {
        matchedProducts.push(...category.products);
    });
    return matchedProducts;
});
const retrieveSingleProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.findById(id);
    return result;
});
exports.productServices = {
    createProduct,
    retrieveProduct,
    retrieveSingleProduct,
    retrieveSupplementsProduct,
};
