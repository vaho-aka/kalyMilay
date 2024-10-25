import asyncHandler from 'express-async-handler';
import Dish from '../models/dishSchema.js';

// ** @desc    Fetch all dishes
// ** @route   GET /api/dishes
// ** @access  Public
export const getDishes = asyncHandler(async (req, res) => {
  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : {};

  const dishes = await Dish.find({ ...keyword });
  res.json(dishes);
});
