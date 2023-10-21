"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const orderInfoSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({ required_error: "name is required" }),
        surname: zod_1.z.string({ required_error: "surname is required" }),
        nation: zod_1.z.string({ required_error: "nation is required" }),
        streetAddress: zod_1.z.string({ required_error: "address is required" }),
        province: zod_1.z.string({ required_error: "province is required" }),
        municipality: zod_1.z.string({ required_error: "municipality is required" }),
        postalCode: zod_1.z.string({ required_error: "postal code is required" }),
        phoneNumber: zod_1.z.string({ required_error: "number is required" }),
        email: zod_1.z.string({ required_error: "email is required" }).email(),
        birthday: zod_1.z.string().optional(),
    }),
});
