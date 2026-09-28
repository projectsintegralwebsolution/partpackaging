import { Request, Response, NextFunction } from 'express';
import rateLimit from 'express-rate-limit';

export const quoteLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // Limit each IP to 10 quotation submissions per windowMs
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    error: 'Too many quote requests submitted from this IP address. Please wait 15 minutes or call our sales desk directly.'
  }
});

export const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 60,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    error: 'Too many requests. Please try again later.'
  }
});

export function honeypotCheck(req: Request, res: Response, next: NextFunction) {
  // If the hidden honeypot field is filled, silently pretend success to confuse spam bots
  if (req.body && req.body.website_url_field) {
    console.warn(`[Security] Spam bot caught via honeypot field from IP: ${req.ip}`);
    return res.status(200).json({
      success: true,
      message: 'Your inquiry has been submitted successfully.'
    });
  }
  next();
}
