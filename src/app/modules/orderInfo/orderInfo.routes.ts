import express from "express";
import { OrderInfoControllers } from "./orderInfo.controllers";
const router = express.Router();

router.post("/add-information", OrderInfoControllers.addInfoInDb);

export const OrderInfoRoutes = router;
