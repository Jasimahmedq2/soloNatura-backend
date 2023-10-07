import { NextFunction, Request, Response } from "express";
import { CategoryServices } from "./category.services";
import sendResponse from "../../../shared/sendResponse";

const createCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await CategoryServices.createCategory(req.body);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "successfully created a category",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const retrieveCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await CategoryServices.retrieveCategory();
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "successfully retrieve all category",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const CategoryControllers = {
  createCategory,
  retrieveCategory,
};
