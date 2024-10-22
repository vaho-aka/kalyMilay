import mongoose from 'mongoose';

const dishSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  ratings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Rating' }],
});

export default Dish = mongoose.model('Dish', dishSchema);
