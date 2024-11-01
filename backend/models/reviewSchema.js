import mongoose from 'mongoose';

const ratingSchema = new mongoose.Schema(
  {
    id: mongoose.Schema.Types.ObjectId,
    dish: { type: mongoose.Schema.Types.ObjectId, ref: 'Dish', required: true },
    rating: { type: Number, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  },
  {
    timestamps: true,
  }
);

export default Rating = mongoose.model('Rating', ratingSchema);
