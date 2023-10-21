"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productValidation = void 0;
const zod_1 = require("zod");
const createProduct = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({ required_error: "name is required" }),
        title: zod_1.z.string({ required_error: "title is required" }),
        description: zod_1.z.string().optional(),
        price: zod_1.z.string({
            required_error: "price is required",
        }),
        category: zod_1.z.string({
            required_error: "category is required",
        }),
    }),
});
exports.productValidation = {
    createProduct,
};
