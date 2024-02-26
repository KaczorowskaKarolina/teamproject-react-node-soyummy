import { Categories } from '#schemas/categories/categoriesListSchema.js';

const getAllCategoriesFromDb = async () => {
  return await Categories.find({});
};

const getCategoriesAlphFromDb = async () => {
  return await Categories.find({}).sort({ title: 1 });
};

export { getCategoriesAlphFromDb, getAllCategoriesFromDb };
