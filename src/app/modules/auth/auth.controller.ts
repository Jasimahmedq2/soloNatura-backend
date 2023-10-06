import { NextFunction, Request, Response } from "express";
import sendResponse from "../../../shared/sendResponse";
import { AuthUserServices } from "./auth.services";
import { IUser } from "./auth.interfaces";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AuthUserServices.createUser(req.body);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "successfully created a user",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const LogIn = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AuthUserServices.LogIn(req.body);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "successfully logged in a user",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const verifyEmailAndUpdateStatus = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { token } = req.params;
    // const token = (req as any).headers.authorization.split(" ")[1];
    console.log({ token });
    const result = await AuthUserServices.verifyEmailAndUpdateStatus(token);
    sendResponse<IUser | null>(res, {
      statusCode: 200,
      success: true,
      message: "now the user is verified!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const resetPasswordRequest = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email } = req.body;
    console.log({ email: email });
    const result = await AuthUserServices.resetPasswordRequest(email);

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "successfully send a request",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const resetPassword = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { ...resetInfo } = req.body;
    const result = await AuthUserServices.resetPassword(resetInfo);

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "successfully reset password",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const AuthUserControllers = {
  createUser,
  LogIn,
  verifyEmailAndUpdateStatus,
  resetPassword,
  resetPasswordRequest,
};
