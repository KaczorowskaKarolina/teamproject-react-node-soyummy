// import mongoose from 'mongoose';
// import ingredientSchema from '../schema/ingredientSchema.js';

// const Ingredients = mongoose.model('Ingredients', ingredientSchema);

// // Funkcja do pobierania składników po identyfikatorze
// const getIngredientsById = async id => {
//   try {
//     const ingredient = await Ingredients.findOne({ _id: id });

//     if (!ingredient) {
//       throw new Error('Ingredient not found.');
//     }
//     return ingredient;
//   } catch (error) {
//     console.error('Error fetching ingredient by ID:', error);
//     throw new Error('Could not fetch ingredient by ID');
//   }
// };

// export { Ingredients, getIngredientsById };
