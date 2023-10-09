import { z } from "zod";

const orderInfoSchema = z.object({
  body: z.object({
    name: z.string({ required_error: "name is required" }),
    surname: z.string({ required_error: "surname is required" }),
    nation: z.string({ required_error: "nation is required" }),
    streetAddress: z.string({ required_error: "address is required" }),
    province: z.string({ required_error: "province is required" }),
    municipality: z.string({ required_error: "municipality is required" }),
    postalCode: z.string({ required_error: "postal code is required" }),
    phoneNumber: z.string({ required_error: "number is required" }),
    email: z.string({ required_error: "email is required" }).email(),
    birthday: z.string().optional(),
  }),
});
