"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartRoutes = void 0;
const express_1 = __importDefault(require("express"));
const cart_controller_1 = require("./cart.controller");
const auth_1 = __importDefault(require("../../middleware/auth"));
const user_role_1 = require("../../../enums/user.role");
const router = express_1.default.Router();
router.post("/add-to-cart", (0, auth_1.default)(user_role_1.UserRoles.ADMIN, user_role_1.UserRoles.CUSTOMER), cart_controller_1.CartController.AddToCart);
router.get("/get-cart", (0, auth_1.default)(user_role_1.UserRoles.ADMIN, user_role_1.UserRoles.CUSTOMER), cart_controller_1.CartController.getCartWithPrices);
router.post("/remove-quantity", (0, auth_1.default)(user_role_1.UserRoles.ADMIN, user_role_1.UserRoles.CUSTOMER), cart_controller_1.CartController.removeQuantityFromCart);
exports.cartRoutes = router;
