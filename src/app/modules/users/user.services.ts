import ApiError from "../../../errors/apiError";
import { User } from "../auth/auth.models";
import { Product } from "../product/product.model";

const getFavorites = async (id: string) => {
  const result = await User.findById(id, { favorites: 1 }).populate(
    "favorites"
  );
  if (!result) {
    throw new ApiError(400, "the user doesn't exist!");
  }

  return result;
};

const AddFavorites = async (userId: string, productId: string) => {
  const isProductExist = await Product.findById(productId);
  if (!isProductExist) {
    throw new ApiError(404, "the product doesn't not available");
  }

  const isUserExist = await User.findById(userId, { favorites: 1 });
  if (!isUserExist) {
    throw new ApiError(400, "the user doesn't exist!");
  }

  isUserExist.favorites?.push(isProductExist?._id);
  const result = isProductExist.save();

  return result;
};

export const UserServices = {
  getFavorites,
  AddFavorites,
};
