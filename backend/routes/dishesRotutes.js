import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import { getDishes } from '../controllers/foodControllers.js';

const router = express.Router();

router.get('/', getDishes);

export default router;
