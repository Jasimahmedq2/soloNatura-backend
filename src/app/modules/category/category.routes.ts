import express from "express";
import { CategoryControllers } from "./category.controller";
const router = express.Router();

router.post("/create-category", CategoryControllers.createCategory);
router.get("/get-category", CategoryControllers.retrieveCategory);
// router.get("/get-category/:tabs", CategoryControllers.retrieveProductWithTab);

export const CategoryRoutes = router;
