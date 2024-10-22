import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
});

export default Category = mongoose.model('Category', categorySchema);
