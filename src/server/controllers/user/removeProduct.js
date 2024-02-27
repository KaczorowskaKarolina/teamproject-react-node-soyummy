import { getUserById } from '#handlers/userHandlers.js';

async function removeProduct(req, res, next) {
  try {
    const id = req.user.id;
    const { idProduct } = req.params;
    const user = await getUserById(id);
    if (!user) {
      return res.status(401).json({ message: 'Nope' });
    }
    const index = user.shoppingList.findIndex(item => (item._id = idProduct));
    if (index === -1) {
      return res.status(404).json({ data: { message: 'Not found' } });
    }
    user.shoppingList.splice(index, 1);
    await user.save();
    return res.status(204).json({ data: { message: 'no content' } });
  } catch (error) {
    return next(error);
  }
}

export { removeProduct };
