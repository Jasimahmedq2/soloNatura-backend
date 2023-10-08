import express from "express";
import { productControllers } from "./product.controller";

const router = express.Router();

router.post("/create-product", productControllers.createProduct);
router.get("/", productControllers.retrieveProduct);
router.get("/:id", productControllers.retrieveSingleProduct);

export const productRoutes = router;
