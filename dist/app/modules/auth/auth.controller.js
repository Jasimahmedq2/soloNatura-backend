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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthUserControllers = void 0;
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const auth_services_1 = require("./auth.services");
const createUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield auth_services_1.AuthUserServices.createUser(req.body);
        (0, sendResponse_1.default)(res, {
            statusCode: 200,
            success: true,
            message: "successfully created a user",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const LogIn = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield auth_services_1.AuthUserServices.LogIn(req.body);
        (0, sendResponse_1.default)(res, {
            statusCode: 200,
            success: true,
            message: "successfully logged in a user",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const verifyEmailAndUpdateStatus = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { token } = req.params;
        // const token = (req as any).headers.authorization.split(" ")[1];
        console.log({ token });
        const result = yield auth_services_1.AuthUserServices.verifyEmailAndUpdateStatus(token);
        (0, sendResponse_1.default)(res, {
            statusCode: 200,
            success: true,
            message: "now the user is verified!",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const resetPasswordRequest = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.body;
        console.log({ email: email, body: req.body });
        const result = yield auth_services_1.AuthUserServices.resetPasswordRequest(email);
        (0, sendResponse_1.default)(res, {
            statusCode: 200,
            success: true,
            message: "successfully send a request",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const resetPassword = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resetInfo = __rest(req.body, []);
        const result = yield auth_services_1.AuthUserServices.resetPassword(resetInfo);
        (0, sendResponse_1.default)(res, {
            statusCode: 200,
            success: true,
            message: "successfully reset password",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.AuthUserControllers = {
    createUser,
    LogIn,
    verifyEmailAndUpdateStatus,
    resetPassword,
    resetPasswordRequest,
};
