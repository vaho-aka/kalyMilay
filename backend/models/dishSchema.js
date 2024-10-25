import mongoose from 'mongoose';

const dishSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  id: mongoose.Schema.Types.ObjectId,
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  image: { type: String, required: true },
  category: {
    type: String,
    required: true,
  },
  ratings: { type: Number },
});

const Dish = mongoose.model('Dish', dishSchema);

export default Dish;
