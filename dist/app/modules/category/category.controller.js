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
exports.CategoryControllers = void 0;
const category_services_1 = require("./category.services");
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const createCategory = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield category_services_1.CategoryServices.createCategory(req.body);
        (0, sendResponse_1.default)(res, {
            statusCode: 200,
            success: true,
            message: "successfully created a category",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const retrieveCategory = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("hit");
    try {
        const result = yield category_services_1.CategoryServices.retrieveCategory();
        (0, sendResponse_1.default)(res, {
            statusCode: 200,
            success: true,
            message: "successfully retrieve all category",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const retrieveProductWithTab = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("hit 2");
    try {
        const { tabs } = req.params;
        const result = yield category_services_1.CategoryServices.retrieveProductWithTab(tabs);
        (0, sendResponse_1.default)(res, {
            statusCode: 200,
            success: true,
            message: "successfully retrieve  product according to tab option",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.CategoryControllers = {
    createCategory,
    retrieveCategory,
    retrieveProductWithTab,
};
