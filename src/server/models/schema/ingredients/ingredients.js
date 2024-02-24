import { Ingredients } from './ingredientsScheme.js';

const getAllIngredientsFromDB = async () => {
  return await Ingredients.find({});
};

const getIngredientByIdFromDB = async ingredientId => {
  return await Ingredients.find({ _id: ingredientId });
};

export { getAllIngredientsFromDB, getIngredientByIdFromDB };
