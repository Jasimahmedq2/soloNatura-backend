"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_route_1 = require("../modules/auth/auth.route");
const product_route_1 = require("../modules/product/product.route");
const category_routes_1 = require("../modules/category/category.routes");
const cart_routes_1 = require("../modules/cart/cart.routes");
const router = express_1.default.Router();
const CoreRoutes = [
    {
        path: "/auth",
        element: auth_route_1.AuthRoutes,
    },
    {
        path: "/product",
        element: product_route_1.productRoutes,
    },
    {
        path: "/category",
        element: category_routes_1.CategoryRoutes,
    },
    {
        path: "/cart",
        element: cart_routes_1.cartRoutes,
    },
];
CoreRoutes.forEach((route) => router.use(route.path, route.element));
exports.default = router;
