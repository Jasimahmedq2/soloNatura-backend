import { Types } from "mongoose";
import { CartProduct, ICart } from "./cart.interfaces";
import { Cart } from "./cart.model";
import ApiError from "../../../errors/apiError";
import { Product } from "../product/product.model";

const AddToCart = async (userId: Types.ObjectId, payload: CartProduct) => {
  try {
    if (!userId || !payload || !payload.product) {
      throw new ApiError(401, "Invalid input data");
    }

    const cartExist = await Cart.findOne({ user: userId });

    if (!cartExist) {
      const newCart = new Cart({
        user: userId,
        products: [{ product: payload.product, quantity: payload?.quantity }],
      });
      await newCart.save();
    } else {
      const existingItem = cartExist.products.find(
        (item) => item.product.toString() === payload.product.toString()
      );

      if (existingItem) {
        existingItem.quantity += payload?.quantity;
      } else {
        cartExist.products.push({
          product: payload.product,
          quantity: payload?.quantity,
        });
      }

      await cartExist.save();
    }
  } catch (error) {
    throw new ApiError(401, "error occurred");
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



const getCartWithPrices = async (userId: Types.ObjectId) => {
  try {
    const cart = await Cart.findOne({ user: userId }).populate(
      "products.product"
    );

    if (!cart) {
      throw new ApiError(404, "cart not found");
    }

    let totalPrice = 0;

    for (const item of cart.products) {
      if (item.product) {
        const product = await Product.findById(item.product);

        if (product) {
          totalPrice += Number(product.price) * Number(item.quantity);
        }
      }
    }

    await cart.save();

    return { cart, totalPrice };
  } catch (error) {
    throw new ApiError(401, "error  occurred");
  }
};

export const CartServices = {
  AddToCart,
  increaseQuantity,
  removeQuantityFromCart,
  getCartWithPrices,
};
