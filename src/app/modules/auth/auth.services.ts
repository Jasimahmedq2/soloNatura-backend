import bcrypt from "bcrypt";
import { Secret } from "jsonwebtoken";
import nodemailer from "nodemailer";
import { v4 as uuidv4 } from "uuid";
import config from "../../../config";
import ApiError from "../../../errors/apiError";
import { JwtHelpers } from "../../../shared/jwtHelpers";
import { ILogin, ILoginResponse, IUser } from "./auth.interfaces";
import { User } from "./auth.models";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: config.my_email,
    pass: config.my_password,
  },
});

const createUser = async (payload: IUser) => {
  payload.password = await bcrypt.hash(
    payload.password,
    Number(config.bcrypt_salt_rounds)
  );

  const createSecret = await JwtHelpers.createToken(
    { email: payload.email },
    config.jwt.verify_secret as Secret,
    config.jwt.verify_email_expire as string
  );

  const isExistUser = await User.findOne({
    email: payload.email,
  });

  if (isExistUser && isExistUser.isVerified) {
    throw new ApiError(400, "already you have a account please login");
  } else if (isExistUser) {
    const mailOptions = {
      from: config.my_email,
      to: payload.email,
      subject: "verify your email",
      html: `
    <P>Hello there, please verify your email</p>
    <a href="http://localhost:3000/verify/${createSecret}/" target="_blank">Click here to verify your email</a>`,
    };
    const result = await transporter.sendMail(mailOptions);

    return result;
  } else {
    await User.create(payload);

    const mailOptions = {
      from: config.my_email,
      to: payload.email,
      subject: "verify your email",
      html: `
    <P>Hello there, please verify your email</p>
    <a href="http://localhost:3000/verify/${createSecret}/" target="_blank">Click here to verify your email</a>`,
    };
    const result = await transporter.sendMail(mailOptions);
    console.log({ createSecret });

    return result;
  }
};

const LogIn = async (payload: ILogin): Promise<ILoginResponse> => {
  const isUserExist = await User.findOne({ email: payload.email });
  if (!isUserExist) {
    throw new ApiError(404, "user doesn't exist");
  }

  if (!isUserExist.isVerified) {
    throw new ApiError(
      401,
      "please verify your email first, then try to login"
    );
  }

  const isPasswordMatched = await bcrypt.compare(
    payload.password,
    isUserExist.password
  );

  if (!isPasswordMatched) {
    throw new ApiError(401, "something went wrong");
  }

  const accessToken = await JwtHelpers.createToken(
    {
      userId: isUserExist?._id,
      role: isUserExist?.role,
    },
    config.jwt.access_secret as Secret,
    config.jwt.access_expire as string
  );

  return {
    isVerified: isUserExist.isVerified,
    userId: isUserExist._id.toString(),
    email: isUserExist.email,
    role: isUserExist.role,
    token: accessToken,
  };
};

const verifyEmailAndUpdateStatus = async (
  token: string
): Promise<IUser | null> => {
  const verifyToken = await JwtHelpers.verifyToken(
    token,
    config.jwt.verify_secret as Secret
  );

  if (!verifyToken || !verifyToken.email) {
    throw new ApiError(
      401,
      "maybe your verification time is expired, please try again"
    );
  }

  const email = verifyToken.email;

  const result = await User.findOneAndUpdate(
    { email },
    { $set: { isVerified: true } }
  );

  return result;
};

const resetPasswordRequest = async (email: string) => {
  const user = await User.findOne({ email: email });

  if (!user) {
    throw new ApiError(404, "user doesn't exist");
  }

  const resetToken = uuidv4();
  const resetTokenExpiration = new Date();
  resetTokenExpiration.setHours(resetTokenExpiration.getHours() + 1);

  // Save reset token and expiration time to the user
  user.resetToken = resetToken;
  user.resetTokenExpiration = resetTokenExpiration;
  await user.save();

  const resetUrl = `https://book-catalog-frontend.netlify.app/set-password/${resetToken}`;
  const mailOptions = {
    from: "jasim.dev48@gmail.com",
    to: email,
    subject: "Reset Password",
    html: `<p>You are receiving this email because you (or someone else) have requested the reset of the password for your account.</p>
    <p>Please click on the following link to reset your password:</p>
    <a href="${resetUrl}">Reset Password</a>
    <p>If you did not request this, please ignore this email, and your password will remain unchanged.</p>`,
  };

  // Send the email
  const result = await transporter.sendMail(mailOptions);
  return result;
};

const resetPassword = async (payload: {
  resetToken: string;
  password: string;
}) => {
  const { resetToken, password } = payload;
  console.log({ payload });
  try {
    const user = await User.findOne({
      resetToken: resetToken,
      resetTokenExpiration: { $gt: new Date() },
    });
    console.log({ user });

    if (!user) {
      throw new ApiError(404, "Invalid or expired reset token");
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(
      password,
      Number(config.bcrypt_salt_rounds)
    );

    console.log({ hashedPassword });

    // Update the user's password and reset token fields
    user.password = hashedPassword;
    user.resetToken = null;
    user.resetTokenExpiration = null;
    const result = await user.save();
    return result;
  } catch (error) {
    console.log({ error });
  }
};

export const AuthUserServices = {
  createUser,
  LogIn,
  verifyEmailAndUpdateStatus,
  resetPassword,
  resetPasswordRequest,
};
