import { Recipe } from './recipeSchema';


const getRecipe = async (req, res, next) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json({ recipes });
  } catch (error) {
    next(error);
  }
};

const searchRecipesByName = async (req, res, next) => {
  try {
    const name= req.query.name;
    const recipes = await Recipe.find();
    res.status(200).json({ name, recipes });
  } catch (error) {
    next(error);
  }
};

module.exports={
  getRecipe,
  searchRecipesByName,
};
