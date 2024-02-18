import { User } from 'server/models/schema/users/userSchema';

async function getUserById(id) {
  const user = await User.findById(id);
  return user;
}

async function getUserByEmail(email) {
  const user = await User.findOne({ email });
  return user;
}

export { getUserByEmail, getUserById };
