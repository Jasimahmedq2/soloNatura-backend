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

const retrieveSingleProduct = async (id: string): Promise<IProduct | null> => {
  const result = await Product.findById(id);
  return result;
};

export const productServices = {
  createProduct,
  retrieveProduct,
  retrieveSingleProduct,
};
