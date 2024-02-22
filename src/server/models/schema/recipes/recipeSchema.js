import mongoose, { Schema } from 'mongoose';

const recipe = new mongoose.Schema(
  {
    _id: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    area: {
      type: String,
      required: true,
    },
    instructions: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    thumb: {
      type: String,
      required: true,
    },
    preview: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    favorites: {
      type: Array,
      required: true,
    },
    youtube: {
      type: String,
      required: true,
    },
    tags: {
      type: Array,
      required: true,
    },
    createdAt: {
      type: Date,
      required: true,
    },
    updatedAt: {
      type: Date,
      required: true,
    },
    ingredients: {
      type: Array,
      required: true,
    },
  },
  { versionKey: false }
);

const Recipe = mongoose.model('Recipe', recipe);

export { Recipe };
