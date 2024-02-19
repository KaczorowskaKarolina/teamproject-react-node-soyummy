import { Categories } from './categoriesListSchema.js';

const getAllCategoriesList = async () => {
  return await Categories.find({});
};

const getCategoriesList = async () => {
  return await Categories.find({}).sort({ title: 1 });
};

export { getAllCategoriesList, getCategoriesList };
