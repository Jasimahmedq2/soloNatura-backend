import express from "express";
import { CartController } from "./cart.controller";
const router = express.Router();

router.post("/add-to-cart", CartController.AddToCart);

export const cartRoutes = router;
