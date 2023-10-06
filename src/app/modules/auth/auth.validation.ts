import { z } from "zod";

const CreateUser = z.object({
  body: z.object({
    password: z.string({
      required_error: "password is required",
    }),
    email: z.string({
      required_error: "email is required",
    }),
  }),
});

const logInUser = z.object({
  body: z.object({
    email: z.string({
      required_error: "email is required",
    }),
    password: z.string({
      required_error: "password is required",
    }),
  }),
});

export const AuthValidationSchema = {
  CreateUser,
  logInUser,
};
