import express from 'express';
import {getRecipe} from '#models/schema/recipes/recipe'
//import { searchRecipesByName } from '#models/schema/recipes/recipe';

const router = express.Router();

//router.get('/search', searchRecipesByName);
router.get("/search", getRecipe);

export { router };
