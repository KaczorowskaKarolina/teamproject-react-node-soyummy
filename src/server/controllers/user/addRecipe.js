import { getUserById } from '#handlers/userHandlers.js';
import { createRecipe } from '#controllers/recipes/createRecipe.js';
import Jimp from 'jimp';

async function addRecipe(req, res, next) {
  try {
    const id = req.user.id;
    const recipe = req.body;
    const user = await getUserById(id);
    if (!user) {
      return res.status(401).json({ message: 'Nope' });
    }
    if (!recipe) {
      return res.status(401).json({ message: 'Nope' });
    }
    const newRecipe = await createRecipe(recipe);
    if (!newRecipe) {
      return next({ message: 'Error' });
    }

    const fileName = req.file.originalname;
    const thumb = await Jimp.read(`tmp/${fileName}`);
    await thumb.writeAsync(`public/images/${newRecipe.id}${fileName}`);
    const preview = thumb.cover(250, 250);
    await preview.writeAsync(
      `public/images/${newRecipe.id}${fileName}_preview`
    );
    newRecipe.thumb = 'http://localhost:5000/images/${newRecipe.id}${fileName}';
    newRecipe.preview =
      'http://localhost:5000/images/${newRecipe.id}${fileName}_preview';
    await newRecipe.save();
    user.createdRecipes.push(newRecipe);
    await user.save();
    return res.status(204).json({ data: { message: 'no content' } });
  } catch (error) {
    return next(error);
  }
}

export { addRecipe };
