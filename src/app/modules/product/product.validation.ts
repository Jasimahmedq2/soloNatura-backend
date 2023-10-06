import { z } from "zod";

const createProduct = z.object({
  body: z.object({
    name: z.string({ required_error: "name is required" }),
    title: z.string({ required_error: "title is required" }),
    description: z.string().optional(),
    price: z.number({
      required_error: "price is required",
    }),
  }),
});

export const productValidation = {
  createProduct,
};
