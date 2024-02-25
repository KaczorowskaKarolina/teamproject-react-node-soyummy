import express from 'express';

// import { getAllRecipes } from '#controllers/recipes/getAll.js';
import { getRecipeById } from '#controllers/recipes/getOne.js';
import { getRecipesQuery } from '#controllers/recipes/getWithQuery.js';
import { getCategories } from '#controllers/categories/getAll.js';
import { getRecipesByCategory } from '#controllers/recipes/getAllByCategory.js';
import { getAllIngredients } from '#controllers/ingredients/getAll.js';
import { getFavorites } from '#controllers/recipes/getFavorites.js';

const router = express.Router();

router.get('/recipes/category-list', getCategories);
router.get('/recipes', getRecipesQuery);
// router.get('/recipes/?', authMiddleware, getRecipesQuery);
// not sure how to set for enpoints but getRecipesQuerry
// is set by default to search all
router.get('/recipes/:id', getRecipeById);
router.get('/recipes/:category', getRecipesByCategory);
router.get('recipes/ingredients/list', getAllIngredients);
// router.get('recipes/:ingredients', getAllIngredients);
router.get('recipes/favorites', getFavorites);

export default router;
