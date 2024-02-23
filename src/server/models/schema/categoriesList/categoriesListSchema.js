import mongoose, { Schema } from 'mongoose';

const categories = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
    },
    thumb: {
      type: String,
      required: [true, 'Image is required'],
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
  },
  { versionKey: false, timestamps: false }
);

const Categories = mongoose.model('categories', categories);

export { Categories };
