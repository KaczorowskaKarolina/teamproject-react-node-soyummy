import express from 'express';

// import { getAllRecipes } from '#controllers/recipes/getAll.js';
import { getRecipeById } from '#controllers/recipes/getOne.js';
import { getRecipesQuery } from '#controllers/recipes/getWithQuery.js';
import { getCategories } from '#controllers/categories/getAll.js';
import { getRecipesByCategory } from '#controllers/recipes/getAllByCategory.js';
import { getAllIngredients } from '#controllers/ingredients/getAll.js';
import { authMiddleware } from '#middlewares/authMiddleware.js';

const router = express.Router();

router.get('/recipes/category-list', authMiddleware, getCategories);
router.get('/recipes', authMiddleware, getRecipesQuery);
// router.get('/recipes/?', authMiddleware, getRecipesQuery);
// not sure how to set for enpoints but getRecipesQuerry
// is set by default to search all
router.get('/recipes/:id', authMiddleware, getRecipeById);
router.get('/recipes/:category', authMiddleware, getRecipesByCategory);
router.get('recipes/ingredients/list', authMiddleware, getAllIngredients);
// router.get('recipes/:ingredients', authMiddleware, getAllIngredients);

export default router;
