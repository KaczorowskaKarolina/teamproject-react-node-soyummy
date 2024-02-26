import { getUserById } from '#handlers/userHandlers.js';

async function removeProduct(req, res, next) {
  try {
    const id = req.user.id;
    const idProduct = req.params;
    const user = await getUserById(id);
    if (!user) {
      return res.status(401).json({ message: 'Nope' });
    }
    if (!recipe) {
      return res.status(401).json({ message: 'Nope' });
    }
    user.shoppingList.pull({ _id: idProduct });
    await user.save();
    return res.status(204).json({ data: { message: 'no content' } });
  } catch (error) {
    return next(error);
  }
}

export { removeProduct };
