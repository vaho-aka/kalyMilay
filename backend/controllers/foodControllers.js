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

// ** @desc    Rate a dish
// ** @route   GET /api/dishes/:id
// ** @access  Private
export const createRating = asyncHandler(async (req, res) => {
  const dish = await Dish.findById(req.params.id);

  if (!dish) {
    res.status(404);
    throw new Error("Le produit que vous rechercher n'exist pas");
  }

  // const alreadyRated = (await Rating.find({ dish: dish._id })).find(
  //   (p) => p.user.toString() === req.user._id.toString()
  // );
  // const alreadyRated = dish.

  if (alreadyRated) {
    throw new Error('Vous avze déjà evaluer ce produit');
  }

  const { rating } = req.body;

  await Rating.create({
    rating: +rating,
    dish: dish._id,
    user: req.user._id,
  });

  const reviews = await Rating.find({ dish: dish._id }).populate('user');

  dish.numRatings++;
  dish.ratings =
    reviews.reduce((acc, item) => item.rating + acc, 0) / dish.numRatings;

  await dish.save();

  res.json({ dish, reviews });
});
