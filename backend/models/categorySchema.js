import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  foods: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Dish' }],
});

export default Category = mongoose.model('Category', categorySchema);
