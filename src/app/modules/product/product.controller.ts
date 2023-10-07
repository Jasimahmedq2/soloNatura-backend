import { NextFunction, Request, Response } from "express";
import { productServices } from "./product.services";
import sendResponse from "../../../shared/sendResponse";

const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await productServices.createProduct(req.body);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "successfully created a product",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const productControllers = {
  createProduct,
};
