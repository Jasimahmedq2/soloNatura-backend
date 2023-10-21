"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const mongoose_1 = require("mongoose");
const orderModel = new mongoose_1.Schema({
    orderInfo: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "orderInfo",
    },
    cart: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "cart",
    },
    orderDate: {
        type: Date,
        default: Date.now,
    },
}, { timestamps: true });
exports.Order = (0, mongoose_1.model)("order", orderModel);
