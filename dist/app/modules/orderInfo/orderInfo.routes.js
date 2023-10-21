"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderInfoRoutes = void 0;
const express_1 = __importDefault(require("express"));
const orderInfo_controllers_1 = require("./orderInfo.controllers");
const router = express_1.default.Router();
router.post("/add-information", orderInfo_controllers_1.OrderInfoControllers.addInfoInDb);
exports.OrderInfoRoutes = router;
