import Ingredients from './ingredientsSchema.js';

// example
const getIngredientsById = async id => {
  return Ingredients.find({ _id: id });
};
// example

//przygotowac do wyswietlania

export { getIngredientsById };
