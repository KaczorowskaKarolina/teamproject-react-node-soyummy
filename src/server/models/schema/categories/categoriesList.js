import { Categories } from './categoriesListSchema.js';

const getAllCategoriesList = async () => {
  return await Categories.find({});
};

const getCategoriesListFromDb = async (limit = null) => {
  return await Categories.find({}).sort({ title: 1 }).limit(limit);
};

export { getCategoriesListFromDb, getAllCategoriesList };
