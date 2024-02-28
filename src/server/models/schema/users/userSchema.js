import bCrypt from 'bcrypt';
import mongoose, { Schema } from 'mongoose';

const users = new Schema(
  {
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
    },
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    token: {
      type: String,
      default: null,
    },
    avatarURL: {
      type: String,
    },
    verify: {
      type: Boolean,
      default: false,
    },
    createdRecipes: {
      type: Array,
    },
    shoppingList: {
      type: Array,
    },
    verificationToken: {
      type: String,
      required: [true, 'Verify token is required'],
    },
  },
  { versionKey: false, timestamps: true }
);

users.methods.setPassword = function (password) {
  this.password = bCrypt.hashSync(password, 10);
};

users.methods.validatePassword = function (password) {
  return bCrypt.compareSync(password, this.password);
};

const User = mongoose.model('users', users);

export { User };
