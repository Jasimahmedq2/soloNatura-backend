import { productCategory } from "../category/category.model";
import { productSearchAbleField } from "./product.constant";
import { IProduct } from "./product.interface";
import { Product } from "./product.model";

const createProduct = async (payload: IProduct): Promise<IProduct> => {
  const result = await Product.create(payload);
  return result;
};

const retrieveProduct = async (
  searchTerm: string
): Promise<IProduct[] | null> => {
  const andConditions = [];

  if (searchTerm) {
    andConditions.push({
      $or: productSearchAbleField.map((field) => ({
        [field]: {
          $regex: searchTerm,
          $options: "i",
        },
      })),
    });
  }

  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {};

  const result = await Product.find(whereConditions);
  return result;
};

const retrieveSupplementsProduct = async (CategoryType: string) => {
  const categories = await productCategory
    .find({ categoryType: CategoryType })
    .populate("products");

  const matchedProducts: any[] = [];

  categories.forEach((category) => {
    matchedProducts.push(...category.products);
  });
  return matchedProducts;
};

const retrieveSingleProduct = async (id: string): Promise<IProduct | null> => {
  const result = await Product.findById(id);
  return result;
};

export const productServices = {
  createProduct,
  retrieveProduct,
  retrieveSingleProduct,
  retrieveSupplementsProduct,
};
