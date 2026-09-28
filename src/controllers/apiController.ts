import { Request, Response } from 'express';
import { sendQuoteNotification, sendContactNotification } from '../services/emailService';
import { QuotePayload } from '../types';

export async function handleQuoteSubmission(req: Request, res: Response) {
  try {
    const {
      name,
      company,
      mobile,
      email,
      city,
      state,
      containerType,
      capacity,
      quantity,
      chemicalResidue,
      pickupRequired,
      message
    } = req.body;

    // Server-side validation
    if (!name || !company || !mobile || !email || !city || !state || !containerType || !capacity || !quantity) {
      return res.status(400).json({
        success: false,
        error: 'Please fill in all required fields (Name, Company, Mobile, Email, City, State, Container Type, Capacity, and Quantity).'
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid corporate email address.'
      });
    }

    const mobileClean = mobile.replace(/\D/g, '');
    if (mobileClean.length < 10) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid 10-digit mobile number.'
      });
    }

    const payload: QuotePayload = {
      name: String(name).trim(),
      company: String(company).trim(),
      mobile: String(mobile).trim(),
      email: String(email).trim().toLowerCase(),
      city: String(city).trim(),
      state: String(state).trim(),
      containerType: String(containerType).trim(),
      capacity: String(capacity).trim(),
      quantity: String(quantity).trim(),
      chemicalResidue: chemicalResidue ? String(chemicalResidue).trim() : undefined,
      pickupRequired: pickupRequired ? String(pickupRequired).trim() : undefined,
      message: message ? String(message).trim() : undefined
    };

    const attachment = req.file;

    await sendQuoteNotification(payload, attachment);

    return res.status(200).json({
      success: true,
      message: 'Thank you! Your quotation request has been received. Our sales desk will contact you with a formal quote within 24 business hours.'
    });
  } catch (err: any) {
    console.error('[ApiController] Quote submission error:', err);
    return res.status(500).json({
      success: false,
      error: 'An internal server error occurred while processing your request. Please call our sales team directly.'
    });
  }
}

export async function handleContactSubmission(req: Request, res: Response) {
  try {
    const { name, email, mobile, company, subject, message } = req.body;

    if (!name || !email || !mobile || !message) {
      return res.status(400).json({
        success: false,
        error: 'Please complete all required fields (Name, Email, Mobile, Message).'
      });
    }

    await sendContactNotification({
      name: String(name).trim(),
      email: String(email).trim().toLowerCase(),
      mobile: String(mobile).trim(),
      company: company ? String(company).trim() : undefined,
      subject: subject ? String(subject).trim() : undefined,
      message: String(message).trim()
    });

    return res.status(200).json({
      success: true,
      message: 'Thank you! Your message has been received. Our team will get back to you shortly.'
    });
  } catch (err: any) {
    console.error('[ApiController] Contact submission error:', err);
    return res.status(500).json({
      success: false,
      error: 'An error occurred while submitting your message. Please try again or reach us by phone.'
    });
  }
}

export function calculateRoi(req: Request, res: Response) {
  const monthlyVolume = parseInt(req.query.volume as string || req.body.volume || '1000', 10);
  const newDrumCost = parseFloat(req.query.newCost as string || req.body.newCost || '850');
  const reconditionedCost = parseFloat(req.query.reconditionedCost as string || req.body.reconditionedCost || '420');

  if (isNaN(monthlyVolume) || monthlyVolume <= 0) {
    return res.status(400).json({ success: false, error: 'Invalid monthly volume.' });
  }

  const annualVolume = monthlyVolume * 12;
  const annualNewSpend = annualVolume * newDrumCost;
  const annualReconditionedSpend = annualVolume * reconditionedCost;
  const annualSavings = annualNewSpend - annualReconditionedSpend;
  const percentSaved = Math.round((annualSavings / annualNewSpend) * 100);

  return res.json({
    success: true,
    monthlyVolume,
    annualVolume,
    annualNewSpend,
    annualReconditionedSpend,
    annualSavings,
    percentSaved
  });
}
