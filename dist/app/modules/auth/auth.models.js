"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const auth_constant_1 = require("./auth.constant");
const UserModel = new mongoose_1.Schema({
    name: {
        type: String,
        default: "",
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        enum: auth_constant_1.UserRoleConstant,
        type: String,
        default: "customer",
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    phoneNo: {
        type: String,
        default: "",
    },
    image: {
        type: String,
        default: "",
    },
    resetToken: {
        type: String,
        default: null,
    },
    resetTokenExpiration: {
        type: Date,
        default: null,
    },
    birthday: {
        type: String,
    },
    location: {
        city: {
            type: String,
            default: "",
        },
        address: {
            type: String,
            default: "",
        },
    },
    favorites: {
        type: [
            {
                type: mongoose_1.Schema.Types.ObjectId,
                ref: "product",
            },
        ],
        default: [],
    },
}, { timestamps: true });
exports.User = (0, mongoose_1.model)("user", UserModel);
