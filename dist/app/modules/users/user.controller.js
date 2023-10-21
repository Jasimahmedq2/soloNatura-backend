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
exports.userControllers = void 0;
const user_services_1 = require("./user.services");
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const getFavorites = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    const userId = user === null || user === void 0 ? void 0 : user.userId;
    try {
        const result = yield user_services_1.UserServices.getFavorites(userId);
        (0, sendResponse_1.default)(res, {
            statusCode: 200,
            success: true,
            message: "successfully retrieve user favorites product",
            data: result,
        });
    }
    catch (error) { }
});
const AddFavorites = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    const userId = user === null || user === void 0 ? void 0 : user.userId;
    const { productId } = req.params;
    try {
        const result = yield user_services_1.UserServices.AddFavorites(userId, productId);
        (0, sendResponse_1.default)(res, {
            statusCode: 200,
            success: true,
            message: "successfully added a favorite product",
            data: result,
        });
    }
    catch (error) { }
});
exports.userControllers = {
    getFavorites,
    AddFavorites,
};
