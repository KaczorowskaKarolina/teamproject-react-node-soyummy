import User from './userSchema.js';

// example
const getUserById = async id => {
  return User.find({ _id: id });
};
// example

export { getUserById };
