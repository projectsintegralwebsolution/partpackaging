import { Router } from 'express';
import { handleQuoteSubmission, handleContactSubmission, calculateRoi } from '../controllers/apiController';
import { quoteLimiter, apiLimiter, honeypotCheck } from '../middlewares/security';
import { uploadAttachment } from '../middlewares/upload';

const router = Router();

router.post(
  '/quote',
  quoteLimiter,
  uploadAttachment.single('attachment'),
  honeypotCheck,
  handleQuoteSubmission
);

router.post(
  '/contact',
  apiLimiter,
  honeypotCheck,
  handleContactSubmission
);

router.get('/calculate-roi', apiLimiter, calculateRoi);

export default router;
