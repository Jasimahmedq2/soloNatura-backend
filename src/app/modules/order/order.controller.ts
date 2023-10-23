import { NextFunction, Request, Response } from "express";
import sendResponse from "../../../shared/sendResponse";
import { OrderServices } from "./order.service";

const createOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId } = (req as any).user;
    const { ...info } = req.body;
    const result = await OrderServices.createOrder(userId, info);

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "successfully created a order",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const retrieveUserOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId } = (req as any).user;

    const result = await OrderServices.retrieveUserOrder(userId);

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "successfully retrieve user order",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const OrderControllers = {
  createOrder,
  retrieveUserOrder,
};
