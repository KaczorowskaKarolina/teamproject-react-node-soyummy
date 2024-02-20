import Ingredients from './ingredientsSchema.js';

// example
const getIngredientsById = async id => {
  return Ingredients.find({ _id: id });
};
// example

export { getIngredientsById };
