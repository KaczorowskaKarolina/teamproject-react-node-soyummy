import express from 'express';

import { getRecipeById } from '#controllers/recipes/getOne.js';
import { getRecipesQuery } from '#controllers/recipes/getWithQuery.js';
import { getCategories } from '#controllers/categories/getAll.js';
import { getRecipesByCategory } from '#controllers/recipes/getAllByCategory.js';
import { getAllIngredients } from '#controllers/ingredients/getAll.js';
import { getFavorites } from '#controllers/recipes/getFavorites.js';
import { getRecipesByIngredient } from '#controllers/recipes/getAllByIngredient.js';

const router = express.Router();

router.get('/recipes/category-list', getCategories);
router.get('/recipes', getRecipesQuery);
router.get('/recipes/:id', getRecipeById);
router.get('/recipes/category/:category', getRecipesByCategory);
router.get('/recipes/ingredients/list', getAllIngredients);
router.get('/recipes/ingredients/:id', getRecipesByIngredient);
router.get('/recipes/favorites', getFavorites);

export default router;
