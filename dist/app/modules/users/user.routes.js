"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const auth_1 = __importDefault(require("../../middleware/auth"));
const user_role_1 = require("../../../enums/user.role");
const router = express_1.default.Router();
router.post("/add-favorites/:productId", user_controller_1.userControllers.AddFavorites);
router.get("/favorites", (0, auth_1.default)(user_role_1.UserRoles.CUSTOMER, user_role_1.UserRoles.ADMIN), user_controller_1.userControllers.getFavorites);
exports.userRoutes = router;
