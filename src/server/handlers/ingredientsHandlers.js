import { Ingredients } from '#schemas/ingredients/ingredientsSchema.js';

const getAllIngredientsFromDb = async () => {
  return await Ingredients.find({});
};

const getIngredientByIdFromDb = async id => {
  return await Ingredients.findById(id);
};

export { getAllIngredientsFromDb, getIngredientByIdFromDb };
