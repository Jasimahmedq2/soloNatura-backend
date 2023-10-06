import express from "express";
import { AuthRoutes } from "../modules/auth/auth.route";
import { productRoutes } from "../modules/product/product.route";

const router = express.Router();

const CoreRoutes = [
  {
    path: "/auth",
    element: AuthRoutes,
  },
  {
    path: "/products",
    element: productRoutes,
  },
];

CoreRoutes.forEach((route) => router.use(route.path, route.element));
export default router;
