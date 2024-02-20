// ingredientsSchema.js
import mongoose, { Schema } from 'mongoose';
const ingredients = new Schema(
  {
    _id: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    ttl: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    t: {
      type: String,
      required: false,
    },
    thb: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);
const Ingredients = mongoose.model('Ingredients', ingredients);
export { Ingredients };
