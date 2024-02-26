import mongoose, { Schema } from 'mongoose';

const recipes = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
    },
    category: {
      type: String,
      required: [true, 'category is required'],
    },
    area: {
      type: String,
      // required: [true, 'area is required'],
    },
    instructions: {
      type: String,
      required: [true, 'instructions is required'],
    },
    preview: {
      type: String,
      required: [true, 'preview is required'],
    },
    time: {
      type: String,
      required: [true, 'time is required'],
    },
    youtube: {
      type: String,
      // required: [true, 'youtube is required'],
    },
    tags: {
      type: Array,
      // required: [true, 'tags are required'],
    },
    favorites: {
      type: Array,
      // required: [true, 'favorites are required'],
    },
    ingredients: {
      type: Array,
      required: [true, 'ingredients are required'],
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
  { versionKey: false, timestamps: true }
);

const Recipes = mongoose.model('recipes', recipes);

export { Recipes };
