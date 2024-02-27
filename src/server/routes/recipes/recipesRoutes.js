import express from 'express';

import { getRecipeById } from '#controllers/recipes/getOne.js';
import { getRecipesQuery } from '#controllers/recipes/getWithQuery.js';
import { getCategories } from '#controllers/categories/getAll.js';
import { getRecipesByCategory } from '#controllers/recipes/getAllByCategory.js';
import { getAllIngredients } from '#controllers/ingredients/getAll.js';
import { getRecipesByIngredient } from '#controllers/recipes/getAllByIngredient.js';
import { getFavorites } from '#controllers/recipes/getFavorites.js';
import { addToFavorites } from '#controllers/recipes/addToFavorites.js';
import { deleteFromFavorites } from '#controllers/recipes/deleteFromFavorites.js';

const router = express.Router();

router.get('/recipes/category-list', getCategories);
router.get('/recipes', getRecipesQuery);
router.get('/recipes/category/:category', getRecipesByCategory);
router.get('/recipes/ingredients/list', getAllIngredients);
router.get('/recipes/ingredients/:id', getRecipesByIngredient);
router.get('/recipes/favorites', getFavorites);
router.post('/recipes/favorites/:recipeId', addToFavorites);
router.delete('/recipes/favorites/:recipeId', deleteFromFavorites);
router.get('/recipes/:id', getRecipeById);

export default router;
