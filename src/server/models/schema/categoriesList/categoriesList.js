import { Categories } from './categoriesListSchema.js';

const getAllCategoriesList = async () => {
  return Categories.find({});
};

export { getAllCategoriesList };
