import { Types } from "mongoose";
import { CartProduct, ICart } from "./cart.interfaces";
import { Cart } from "./cart.model";
import ApiError from "../../../errors/apiError";
import { Product } from "../product/product.model";

const AddToCart = async (userId: Types.ObjectId, payload: CartProduct) => {
  const isCartExist: ICart | null = await Cart.findOne({ user: userId });

  if (!isCartExist) {
    const cartInfo = {
      user: userId,
      products: [payload],
    };
    const newCart = new Cart(cartInfo);
    await newCart.save();
    return newCart;
  } else {
    isCartExist.products.push(payload);
    await isCartExist.save();
    return isCartExist;
  }
};

const increaseQuantity = async (
  userId: Types.ObjectId,
  productId: Types.ObjectId
) => {
  const cart = await Cart.findOne({ user: userId });

  if (!cart) {
    throw new ApiError(404, "Cart not found");
  }

  const product = await Product.findById(productId);

  if (!product) {
    throw new ApiError(404, "Product not found");
  }

  const existingProduct = cart.products.find((item) =>
    item.product.equals(productId)
  );

  if (existingProduct) {
    existingProduct.quantity += 1;
  }

  await cart.save();

  return cart;
};

const removeQuantityFromCart = async (
  userId: Types.ObjectId,
  productId: Types.ObjectId
) => {
  const cart = await Cart.findOne({ user: userId });

  if (!cart) {
    throw new ApiError(404, "Cart not found");
  }

  const product = await Product.findById(productId);

  if (!product) {
    throw new ApiError(404, "Product not found");
  }

  const existingProduct = cart.products.find((item) =>
    item.product.equals(productId)
  );

  if (existingProduct) {
    if (existingProduct.quantity <= 1) {
      cart.products = cart.products.filter(
        (item) => !item.product.equals(productId)
      );
    } else {
      existingProduct.quantity -= 1;
    }
  } else {
    throw new ApiError(404, "Product not found in the cart");
  }

  await cart.save();

  return cart;
};

const retrieveCartProduct = async (userId: Types.ObjectId) => {
  const cart = await Cart.findOne({ user: userId }).populate("products");
  if (!cart) {
    throw new ApiError(404, "cart not found");
  }
  return cart;
};

export const CartServices = {
  AddToCart,
  increaseQuantity,
  removeQuantityFromCart,
  retrieveCartProduct,
};
