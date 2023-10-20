import express from "express";
import { productControllers } from "./product.controller";
import ValidateRequest from "../../middleware/validateRequest";
import { productValidation } from "./product.validation";

const router = express.Router();

router.post(
  "/create-product",
  ValidateRequest(productValidation.createProduct),
  productControllers.createProduct
);
router.get("/", productControllers.retrieveProduct);
router.get("/supplements", productControllers.retrieveSupplementsProduct);
router.get("/:id", productControllers.retrieveSingleProduct);

export const productRoutes = router;
