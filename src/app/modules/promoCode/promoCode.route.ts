import express from "express";
import { PromoCodeControllers } from "./promoCode.controller";
import ValidateRequest from "../../middleware/validateRequest";
import { PromoCodeValidation } from "./promoCode.validation";
import auth from "../../middleware/auth";
import { UserRoles } from "../../../enums/user.role";

const router = express.Router();

router.post(
  "/add-promo-code",
  auth(UserRoles.ADMIN),
  ValidateRequest(PromoCodeValidation.addPromoCode),
  PromoCodeControllers.addPromoCode
);
router.get(
  "/get-promo-code",
  auth(UserRoles.ADMIN),
  PromoCodeControllers.getPromoCode
);
router.post(
  "/apply-promo-code",
  auth(UserRoles.ADMIN, UserRoles.CUSTOMER),
  PromoCodeControllers.applyPromoCode
);

export const promoCodeRoutes = router;
