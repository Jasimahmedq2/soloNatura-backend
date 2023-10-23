import express from "express";
import auth from "../../middleware/auth";
import { UserRoles } from "../../../enums/user.role";
import { OrderControllers } from "./order.controller";
const router = express.Router();

router.post(
  "/create-order",
  auth(UserRoles.ADMIN, UserRoles.CUSTOMER),
  OrderControllers.createOrder
);
router.get(
  "/user-order",
  auth(UserRoles.ADMIN, UserRoles.CUSTOMER),
  OrderControllers.retrieveUserOrder
);

export const orderRoutes = router;
