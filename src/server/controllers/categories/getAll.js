import { getCategoriesAlphFromDb } from '#handlers/categoriesHandlers.js';

const getCategories = async (req, res, next) => {
  const response = await getCategoriesAlphFromDb();
  return res.status(200).json({
    data: {
      file: response,
    },
    message: 'nothing to load',
  });
};

export { getCategories };
