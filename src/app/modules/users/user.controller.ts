import { NextFunction, Request, Response } from "express";
import { UserServices } from "./user.services";
import sendResponse from "../../../shared/sendResponse";

const getFavorites = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = (req as any).user;
  const userId = user?.userId;
  try {
    const result = await UserServices.getFavorites(userId);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "successfully retrieve user favorites product",
      data: result,
    });
  } catch (error) {}
};

const AddFavorites = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = (req as any).user;
  const userId = user?.userId;
  const { productId } = req.params;
  
  try {
    const result = await UserServices.AddFavorites(userId, productId);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "successfully added a favorite product",
      data: result,
    });
  } catch (error) {}
};

export const userControllers = {
  getFavorites,
  AddFavorites,
};
