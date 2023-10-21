"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.promoCodeRoutes = void 0;
const express_1 = __importDefault(require("express"));
const promoCode_controller_1 = require("./promoCode.controller");
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const promoCode_validation_1 = require("./promoCode.validation");
const auth_1 = __importDefault(require("../../middleware/auth"));
const user_role_1 = require("../../../enums/user.role");
const router = express_1.default.Router();
router.post("/add-promo-code", (0, auth_1.default)(user_role_1.UserRoles.ADMIN), (0, validateRequest_1.default)(promoCode_validation_1.PromoCodeValidation.addPromoCode), promoCode_controller_1.PromoCodeControllers.addPromoCode);
router.get("/get-promo-code", (0, auth_1.default)(user_role_1.UserRoles.ADMIN), promoCode_controller_1.PromoCodeControllers.getPromoCode);
exports.promoCodeRoutes = router;
