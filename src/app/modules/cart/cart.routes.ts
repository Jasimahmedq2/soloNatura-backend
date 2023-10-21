import express from "express";
import { CartController } from "./cart.controller";
import auth from "../../middleware/auth";
import { UserRoles } from "../../../enums/user.role";
const router = express.Router();

router.post(
  "/add-to-cart",
  auth(UserRoles.ADMIN, UserRoles.CUSTOMER),
  CartController.AddToCart
);
router.get(
  "/get-cart",
  auth(UserRoles.ADMIN, UserRoles.CUSTOMER),
  CartController.getCartWithPrices
);
router.post(
  "/remove-quantity",
  auth(UserRoles.ADMIN, UserRoles.CUSTOMER),
  CartController.removeQuantityFromCart
);

export const cartRoutes = router;
