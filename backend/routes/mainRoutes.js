import express from 'express';
import path from 'path';

import dishRoutes from './dishesRotutes.js';
import { protect } from '../middleware/authMiddleware.js';

// Serving static files
const __dirname = path.resolve();

const router = express.Router();

router.use('/uploads', express.static(path.join(__dirname, '/uploads')));
router.use('/dishes', dishRoutes);

export default router;
