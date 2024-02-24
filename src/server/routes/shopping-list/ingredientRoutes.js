import express from 'express';
import { getIngredientById } from '../../models/schema/shopping-list/ingredients';

const routerIng = express.Router();

// Endpoint do pobierania składników po identyfikatorze
routerIng.get('/ingredients/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const ingredient = await getIngredientById(id);
    res.json(ingredient);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export { routerIng };
