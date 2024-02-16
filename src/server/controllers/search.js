

const searchRecipesByName = async (req, res, next) => {
  try {
    const name = req.query.name;
    const recipes = await Recipe.find();
    res.status(200).json({ recipes });
  } catch (error) {
    next(error);
  }
};

export { searchRecipesByName }