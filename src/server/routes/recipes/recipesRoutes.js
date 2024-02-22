import express from 'express';
import { searchRecipesByName } from '../../models/schema/recipes/recipe';

const router = express.Router();

router.get('/search', searchRecipesByName);

export { router };
