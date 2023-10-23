import { NextFunction, Request, Response } from "express";
import { OrderInfoServices } from "./orderInfo.services";
import sendResponse from "../../../shared/sendResponse";
import { IOrderInfo } from "./orderInfo.interfaces";

const addInfoInDb = async (req: Request, res: Response, next: NextFunction) => {
  console.log("hello");
  console.log(req.body);
  const { ...orderInfo } = req.body;

  const { userId } = (req as any).user;
  try {
    const result = await OrderInfoServices.addInfoInDb(userId, orderInfo);
    sendResponse<IOrderInfo>(res, {
      statusCode: 200,
      success: true,
      message: "successfully added all order information",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const getShippingAddress = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { userId } = (req as any).user;
  try {
    const result = await OrderInfoServices.getShippingAddress(userId);
    sendResponse<IOrderInfo>(res, {
      statusCode: 200,
      success: true,
      message: "successfully retrieve order information",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const OrderInfoControllers = {
  addInfoInDb,
  getShippingAddress,
};
