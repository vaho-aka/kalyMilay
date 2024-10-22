import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  dishes: [
    {
      dish: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Dish',
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
    },
  ],
  totalPrice: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'completed', 'canceled'],
    default: 'pending',
  },
  orderDate: {
    type: Date,
    default: Date.now,
  },
});

// Calculate total price before saving the order
orderSchema.pre('save', function (next) {
  const order = this;
  order.totalPrice = order.dishes.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  next();
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
