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
exports.productControllers = void 0;
const product_services_1 = require("./product.services");
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const apiError_1 = __importDefault(require("../../../errors/apiError"));
const createProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_services_1.productServices.createProduct(req.body);
        (0, sendResponse_1.default)(res, {
            statusCode: 200,
            success: true,
            message: "successfully created a product",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const retrieveProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { searchTerm } = req.query;
        const result = yield product_services_1.productServices.retrieveProduct(searchTerm);
        (0, sendResponse_1.default)(res, {
            statusCode: 200,
            success: true,
            message: "retrieve product by search",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const retrieveSupplementsProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { categoryType } = req === null || req === void 0 ? void 0 : req.query;
        if (!categoryType) {
            throw new apiError_1.default(400, "something went wrong");
        }
        const result = yield product_services_1.productServices.retrieveSupplementsProduct(categoryType);
        (0, sendResponse_1.default)(res, {
            statusCode: 200,
            success: true,
            message: "retrieve product by categoryType",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const retrieveSingleProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield product_services_1.productServices.retrieveSingleProduct(id);
        (0, sendResponse_1.default)(res, {
            statusCode: 200,
            success: true,
            message: "successfully retrieve a product",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.productControllers = {
    createProduct,
    retrieveProduct,
    retrieveSingleProduct,
    retrieveSupplementsProduct,
};
