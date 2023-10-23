import express from "express";
import { AuthRoutes } from "../modules/auth/auth.route";
import { productRoutes } from "../modules/product/product.route";
import { CategoryRoutes } from "../modules/category/category.routes";
import { cartRoutes } from "../modules/cart/cart.routes";
import { promoCodeRoutes } from "../modules/promoCode/promoCode.route";
import { OrderInfoRoutes } from "../modules/orderInfo/orderInfo.routes";
import { orderRoutes } from "../modules/order/order.routes";

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
  {
    path: "/promoCode",
    element: promoCodeRoutes,
  },
  {
    path: "/orderInfo",
    element: OrderInfoRoutes,
  },
  {
    path: "/order",
    element: orderRoutes,
  },
];

CoreRoutes.forEach((route) => router.use(route.path, route.element));
export default router;
