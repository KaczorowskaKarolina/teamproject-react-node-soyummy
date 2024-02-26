import { getUserById } from '#handlers/userHandlers.js';

async function getShoppingList(req, res, next) {
  try {
    const id = req.user.id;
    const user = await getUserById(id);
    if (!user) {
      return res.status(401).json({ message: 'No recipes' });
    }
    return res.status(200).json({
      data: { file: user.shoppingList, message: 'nothing to load' },
    });
  } catch (error) {
    return next(error);
  }
}

export { getShoppingList };
