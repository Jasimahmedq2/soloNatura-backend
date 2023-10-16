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

export const CartController = {
  AddToCart,
};
