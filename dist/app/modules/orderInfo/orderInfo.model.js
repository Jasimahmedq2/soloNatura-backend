"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderInfo = void 0;
const mongoose_1 = require("mongoose");
const orderInfoModel = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "user",
    },
    name: {
        type: String,
        required: true,
    },
    surname: {
        type: String,
        required: true,
    },
    nation: {
        type: String,
        required: true,
    },
    streetAddress: {
        type: String,
        required: true,
    },
    province: {
        type: String,
        required: true,
    },
    municipality: {
        type: String,
        required: true,
    },
    postalCode: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    birthday: {
        type: Date,
    },
    isFilled: {
        type: Boolean,
        default: false,
    },
});
exports.OrderInfo = (0, mongoose_1.model)("orderInfo", orderInfoModel);
