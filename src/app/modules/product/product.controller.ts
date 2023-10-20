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

const retrieveProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { searchTerm } = req.query;
    const result = await productServices.retrieveProduct(searchTerm as string);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "retrieve product by search",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const retrieveSupplementsProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { searchTerm } = req.query;
    const result = await productServices.retrieveSupplementsProduct();
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "retrieve product by search",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const retrieveSingleProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const result = await productServices.retrieveSingleProduct(id);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "successfully retrieve a product",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const productControllers = {
  createProduct,
  retrieveProduct,
  retrieveSingleProduct,
  retrieveSupplementsProduct,
};
