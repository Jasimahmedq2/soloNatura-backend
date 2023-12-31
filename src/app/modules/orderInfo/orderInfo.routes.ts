import express from "express";
import { OrderInfoControllers } from "./orderInfo.controllers";
import auth from "../../middleware/auth";
import { UserRoles } from "../../../enums/user.role";
const router = express.Router();

router.post(
  "/add-information",
  auth(UserRoles.ADMIN, UserRoles.CUSTOMER),
  OrderInfoControllers.addInfoInDb
);
router.get(
  "/get-information",
  auth(UserRoles.ADMIN, UserRoles.CUSTOMER),
  OrderInfoControllers.getShippingAddress
);

export const OrderInfoRoutes = router;
