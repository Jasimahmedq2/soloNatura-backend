import express from "express";
import { AuthRoutes } from "../modules/auth/auth.route";
import { productRoutes } from "../modules/product/product.route";
import { CategoryRoutes } from "../modules/category/category.routes";
import { cartRoutes } from "../modules/cart/cart.routes";

const router = express.Router();

const CoreRoutes = [
  {
    path: "/auth",
    element: AuthRoutes,
  },
  {
    path: "/product",
    element: productRoutes,
  },
  {
    path: "/category",
    element: CategoryRoutes,
  },
  {
    path: "/cart",
    element: cartRoutes,
  },
];

CoreRoutes.forEach((route) => router.use(route.path, route.element));
export default router;
