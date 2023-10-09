import express from "express";
import { userControllers } from "./user.controller";
import auth from "../../middleware/auth";
import { UserRoles } from "../../../enums/user.role";
const router = express.Router();

router.post("/add-favorites/:productId", userControllers.AddFavorites);

router.get(
  "/favorites",
  auth(UserRoles.CUSTOMER, UserRoles.ADMIN),
  userControllers.getFavorites
);

export const userRoutes = router;
