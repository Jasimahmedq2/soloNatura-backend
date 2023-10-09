import { NextFunction, Request, Response } from "express";
import { OrderInfoServices } from "./orderInfo.services";
import sendResponse from "../../../shared/sendResponse";
import { IOrderInfo } from "./orderInfo.interfaces";

const addInfoInDb = async (req: Request, res: Response, next: NextFunction) => {
  const { ...orderInfo } = req.body;
  try {
    const result = await OrderInfoServices.addInfoInDb(orderInfo);
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

export const OrderInfoControllers = {
  addInfoInDb,
};
