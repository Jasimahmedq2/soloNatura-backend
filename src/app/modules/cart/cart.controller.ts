import { NextFunction, Request, Response } from "express";
import { CartServices } from "./cart.service";
import sendResponse from "../../../shared/sendResponse";
import { ICart } from "./cart.interfaces";

const AddToCart = async (req: Request, res: Response, next: NextFunction) => {
  const { userId } = (req as any).user;
  const payload = req.body;
  try {
    const result = await CartServices.AddToCart(userId, payload);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "successfully added a product in cart",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const getCartWithPrices = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { userId } = (req as any).user;
  try {
    const result = await CartServices.getCartWithPrices(userId);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "successfully get cart products",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const removeQuantityFromCart = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { userId } = (req as any).user;
  const { productId } = req.body;
  console.log(userId, productId)
  try {
    const result = await CartServices.removeQuantityFromCart(userId, productId);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "successfully remove a quantity from cart product",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const CartController = {
  AddToCart,
  getCartWithPrices,
  removeQuantityFromCart,
};
