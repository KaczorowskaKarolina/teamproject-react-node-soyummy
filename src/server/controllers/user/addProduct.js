import { getUserById } from '#handlers/userHandlers.js';
import { Types } from 'mongoose';

async function addProduct(req, res, next) {
  try {
    const id = req.user.id;
    const product = req.body;
    const user = await getUserById(id);
    if (!user) {
      return res.status(401).json({ message: 'Nope' });
    }
    user.shoppingList.push({
      _id: new Types.ObjectId(product.id),
      measure: product.measure,
    });
    await user.save();
    return res.status(204).json({ data: { message: 'no content' } });
  } catch (error) {
    return next(error);
  }
}

export { addProduct };
