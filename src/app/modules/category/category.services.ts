import ApiError from "../../../errors/apiError";
import { ICategories } from "./category.interfaces";
import { productCategory } from "./category.model";

const createCategory = async (payload: any) => {
  const existCategory = await productCategory.findOne({ name: payload?.name });
  if (existCategory) {
    throw new ApiError(400, `${payload.name} already created`);
  }
  const result = await productCategory.create(payload);
  return result;
};

const retrieveCategory = async () => {
  const result = await productCategory.find({}).populate('products');
  return result;
};

const retrieveProductWithTab = async (
  tabs: string
): Promise<ICategories[] | null> => {
  const result = await productCategory.find({ categoryType: tabs });
  return result;
};

export const CategoryServices = {
  createCategory,
  retrieveCategory,
  retrieveProductWithTab,
};
