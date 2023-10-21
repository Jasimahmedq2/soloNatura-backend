"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productCategory = void 0;
const mongoose_1 = require("mongoose");
const productCategoryModel = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    categoryType: {
        type: String,
    },
    products: {
        type: [
            {
                type: mongoose_1.Types.ObjectId,
                ref: "product",
            },
        ],
        default: [],
    },
    image: {
        type: String,
        required: true,
    },
}, { timestamps: true });
exports.productCategory = (0, mongoose_1.model)("productCategory", productCategoryModel);
