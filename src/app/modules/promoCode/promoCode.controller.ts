import { NextFunction, Request, Response } from "express";
import { PromoCodeServices } from "./promoCode.services";
import sendResponse from "../../../shared/sendResponse";
import { IPromoCode } from "./promoCode.interfaces";

const addPromoCode = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { ...promoCodeInfo } = req.body;
  try {
    const result = await PromoCodeServices.addPromoCode(promoCodeInfo);
    sendResponse<IPromoCode>(res, {
      statusCode: 200,
      success: true,
      message: "successfully added a promoCode",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getPromoCode = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await PromoCodeServices.getPromoCode();
    sendResponse<IPromoCode[] | null>(res, {
      statusCode: 200,
      success: true,
      message: "successfully retrieve promoCodes",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const applyPromoCode = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { code, totalPrice } = req.body;
    const result = await PromoCodeServices.applyPromoCode(code, totalPrice);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "successfully retrieve discounted price",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const PromoCodeControllers = {
  addPromoCode,
  getPromoCode,
  applyPromoCode,
};
