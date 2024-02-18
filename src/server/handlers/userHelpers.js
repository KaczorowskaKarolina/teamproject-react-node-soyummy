import { User } from '#schemas/users/userSchema.js';

async function getUserById(id) {
  const user = await User.findById(id);
  return user;
}

async function getUserByEmail(email) {
  const user = await User.findOne({ email });
  return user;
}

export { getUserByEmail, getUserById };
