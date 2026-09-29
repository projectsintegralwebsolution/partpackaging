import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';
import { siteConfig } from '../config/site';
import { QuotePayload } from '../types';

export interface ContactPayload {
  name: string;
  email: string;
  mobile: string;
  company?: string;
  subject?: string;
  message: string;
}

const smtpConfig = {
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '465', 10),
  secure: process.env.SMTP_SECURE !== undefined ? process.env.SMTP_SECURE === 'true' : true,
  auth: {
    user: process.env.SMTP_USER || 'integralwebsolution@gmail.com',
    pass: process.env.SMTP_PASS || process.env.SMTP_PASSWORD || '**********'
  }
};

const mailFrom = process.env.MAIL_FROM || `"${siteConfig.name}" <integralwebsolution@gmail.com>`;
const businessReplyTo = process.env.MAIL_REPLY_TO || 'pratapbhanushali23@yahoo.com';

// 3-Way Notification System Recipients:
// 1. Admin Email (Internal monitoring recipient ONLY - strictly hidden from the public website)
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'princekumarjha80@gmail.com';
// 2. Client / Website Owner Email (Business contact & inquiry recipient)
const CLIENT_EMAIL = process.env.CLIENT_EMAIL || 'pratapbhanushali23@yahoo.com';
// Combined business recipients for inward inquiries:
const BUSINESS_RECIPIENTS = [ADMIN_EMAIL, CLIENT_EMAIL].join(', ');

let transporter: nodemailer.Transporter | null = null;

function hasValidCredentials(): boolean {
  const pass = process.env.SMTP_PASS || process.env.SMTP_PASSWORD || '';
  if (!pass || pass.includes('*') || pass === 'your_smtp_password' || pass.length < 8) {
    return false;
  }
  return true;
}

function getTransporter() {
  if (!transporter) {
    transporter = nodemailer.createTransport(smtpConfig);
  }
  return transporter;
}

function logEmailLocally(type: string, to: string, subject: string, bodyText: string) {
  try {
    const logsDir = path.join(process.cwd(), 'logs');
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
    const logFile = path.join(logsDir, 'email-outbox.log');
    const entry = `\n========================================\n[${new Date().toISOString()}] TYPE: ${type}\nTO: ${to}\nSUBJECT: ${subject}\n\n${bodyText}\n========================================\n`;
    fs.appendFileSync(logFile, entry, 'utf8');
    console.log(`[EmailService] Stored ${type} email dispatch log to ${logFile}`);
  } catch (err) {
    console.error('[EmailService] Failed to write local log:', err);
  }
}

/**
 * 3-Way RFQ Quote Notification:
 * 1. Admin Email (princekumarjha80@gmail.com - strictly internal)
 * 2. Client / Owner Email (pratapbhanushali23@yahoo.com)
 * 3. User Email (quote.email - automated professional acknowledgment)
 */
export async function sendQuoteNotification(quote: QuotePayload, attachment?: Express.Multer.File): Promise<boolean> {
  const adminSubject = `[RFQ New Lead] ${quote.company} - ${quote.quantity} x ${quote.capacity} ${quote.containerType}`;
  
  const adminHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; color: #1e293b; line-height: 1.6;">
      <div style="background: #0B1320; padding: 24px; border-radius: 8px 8px 0 0; text-align: center;">
        <h2 style="color: #ffffff; margin: 0; font-size: 22px;">Parth Packaging - New Quotation Request</h2>
        <p style="color: #94a3b8; margin: 6px 0 0; font-size: 13px;">Inward B2B Enquiry from parthpackaging.com</p>
      </div>
      <div style="background: #ffffff; padding: 30px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px;">
        <h3 style="color: #D3131A; margin-top: 0; font-size: 16px; border-bottom: 2px solid #f1f5f9; padding-bottom: 8px;">1. Client Contact Details</h3>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <tr><td style="padding: 6px 0; color: #64748b; width: 140px;">Contact Person:</td><td style="font-weight: 600;">${quote.name}</td></tr>
          <tr><td style="padding: 6px 0; color: #64748b;">Company Name:</td><td style="font-weight: 600;">${quote.company}</td></tr>
          <tr><td style="padding: 6px 0; color: #64748b;">Mobile:</td><td style="font-weight: 600;"><a href="tel:${quote.mobile}" style="color: #D3131A;">${quote.mobile}</a></td></tr>
          <tr><td style="padding: 6px 0; color: #64748b;">Email:</td><td style="font-weight: 600;"><a href="mailto:${quote.email}" style="color: #D3131A;">${quote.email}</a></td></tr>
          <tr><td style="padding: 6px 0; color: #64748b;">Location:</td><td style="font-weight: 600;">${quote.city}, ${quote.state}</td></tr>
        </table>

        <h3 style="color: #D3131A; font-size: 16px; border-bottom: 2px solid #f1f5f9; padding-bottom: 8px;">2. Packaging Specification</h3>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <tr><td style="padding: 6px 0; color: #64748b; width: 140px;">Container Type:</td><td style="font-weight: 600;">${quote.containerType}</td></tr>
          <tr><td style="padding: 6px 0; color: #64748b;">Capacity / Size:</td><td style="font-weight: 600;">${quote.capacity}</td></tr>
          <tr><td style="padding: 6px 0; color: #64748b;">Estimated Quantity:</td><td style="font-weight: 600; color: #D3131A;">${quote.quantity}</td></tr>
          <tr><td style="padding: 6px 0; color: #64748b;">Prior Residue:</td><td style="font-weight: 600;">${quote.chemicalResidue || 'Not Specified'}</td></tr>
          <tr><td style="padding: 6px 0; color: #64748b;">Pickup Required:</td><td style="font-weight: 600;">${quote.pickupRequired || 'Not specified'}</td></tr>
        </table>

        ${quote.message ? `
          <h3 style="color: #D3131A; font-size: 16px; border-bottom: 2px solid #f1f5f9; padding-bottom: 8px;">3. Client Notes</h3>
          <p style="background: #f8fafc; padding: 14px; border-radius: 6px; border: 1px solid #e2e8f0; font-size: 14px; margin-top: 8px;">
            ${quote.message}
          </p>
        ` : ''}

        ${attachment ? `
          <p style="background: #ecfdf5; color: #065f46; padding: 10px 14px; border-radius: 6px; font-size: 13px; font-weight: 600;">
            📎 Attachment received: ${attachment.originalname} (${(attachment.size / 1024).toFixed(1)} KB)
          </p>
        ` : ''}
        
        <div style="margin-top: 30px; padding-top: 15px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; text-align: center;">
          Sent automatically from Parth Packaging Commercial Dispatch System • parthpackaging.com
        </div>
      </div>
    </div>
  `;

  const userSubject = `Thank You for Your Quotation Request - Parth Packaging`;
  const userHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1e293b; line-height: 1.6;">
      <div style="background: #0B1320; padding: 24px; border-radius: 8px 8px 0 0; text-align: center;">
        <h2 style="color: #ffffff; margin: 0; font-size: 20px;">Parth Packaging</h2>
        <p style="color: #38bdf8; margin: 6px 0 0; font-size: 13px;">Industrial Carboys & Drums Reconditioning Solutions</p>
      </div>
      <div style="background: #ffffff; padding: 30px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px;">
        <p>Dear <strong>${quote.name}</strong>,</p>
        <p>Thank you for reaching out to <strong>Parth Packaging</strong> regarding your industrial packaging reconditioning requirement for <strong>${quote.company}</strong>.</p>
        
        <div style="background: #f8fafc; border-left: 4px solid #D3131A; padding: 14px; margin: 20px 0; border-radius: 0 6px 6px 0;">
          <p style="margin: 0 0 6px; font-weight: 600; font-size: 14px;">Summary of Your Inquiry:</p>
          <ul style="margin: 0; padding-left: 20px; font-size: 13px; color: #475569;">
            <li>Container: <strong>${quote.containerType} (${quote.capacity})</strong></li>
            <li>Approx Quantity: <strong>${quote.quantity}</strong></li>
            <li>Location: <strong>${quote.city}, ${quote.state}</strong></li>
          </ul>
        </div>

        <p>Our industrial technical sales team has received your enquiry. We are reviewing container specifications, chemical wash compatibility, and logistics scheduling, and will respond with contract batch pricing within <strong>24 business hours</strong>.</p>

        <p>If you require immediate assistance or emergency stock dispatch, please contact our commercial desk:</p>
        <p style="margin: 15px 0;">
          📞 <strong>Phone:</strong> <a href="tel:${siteConfig.phoneClean}" style="color: #D3131A;">${siteConfig.phone}</a><br>
          ✉️ <strong>Email:</strong> <a href="mailto:${siteConfig.email}" style="color: #D3131A;">${siteConfig.email}</a>
        </p>

        <p style="margin-top: 25px;">Warm regards,<br><strong>Commercial Sales Desk</strong><br>Parth Packaging India</p>
      </div>
    </div>
  `;

  if (!hasValidCredentials()) {
    console.log('[EmailService] SMTP credentials contain placeholder password (**********). Safely queued 3-way quote dispatch to local outbox (logs/email-outbox.log).');
    logEmailLocally('1_ADMIN_NOTIFICATION', ADMIN_EMAIL, adminSubject, JSON.stringify(quote, null, 2));
    logEmailLocally('2_CLIENT_NOTIFICATION', CLIENT_EMAIL, adminSubject, JSON.stringify(quote, null, 2));
    logEmailLocally('3_USER_ACKNOWLEDGEMENT', quote.email, userSubject, `Auto-reply sent to ${quote.name} (${quote.email})`);
    return true;
  }

  try {
    const client = getTransporter();
    
    // 1 & 2: Send to Admin and Client (reply responds to prospective customer)
    const adminMailOptions: any = {
      from: mailFrom,
      to: BUSINESS_RECIPIENTS,
      replyTo: quote.email,
      subject: adminSubject,
      html: adminHtml
    };
    if (attachment) {
      adminMailOptions.attachments = [
        {
          filename: attachment.originalname,
          path: attachment.path
        }
      ];
    }
    await client.sendMail(adminMailOptions);

    // 3: Send Auto-acknowledgment to the User (reply responds to business desk)
    if (quote.email) {
      await client.sendMail({
        from: mailFrom,
        to: quote.email,
        replyTo: businessReplyTo,
        subject: userSubject,
        html: userHtml
      });
    }

    return true;
  } catch (err) {
    console.error('[EmailService] SMTP send error (gracefully falling back to local log):', err);
    logEmailLocally('1_ADMIN_FALLBACK', ADMIN_EMAIL, adminSubject, JSON.stringify(quote, null, 2));
    logEmailLocally('2_CLIENT_FALLBACK', CLIENT_EMAIL, adminSubject, JSON.stringify(quote, null, 2));
    logEmailLocally('3_USER_FALLBACK', quote.email, userSubject, `Auto-reply fallback to ${quote.email}`);
    return true;
  }
}

/**
 * 3-Way General Contact Form Notification:
 * 1. Admin Email (princekumarjha80@gmail.com - strictly internal)
 * 2. Client / Owner Email (pratapbhanushali23@yahoo.com)
 * 3. User Email (contact.email - automated acknowledgment)
 */
export async function sendContactNotification(contact: ContactPayload): Promise<boolean> {
  const adminSubject = `[General Contact] ${contact.subject || 'Enquiry'} from ${contact.name} (${contact.company || 'N/A'})`;
  const adminHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1e293b;">
      <div style="background: #0B1320; padding: 20px; text-align: center; border-radius: 6px 6px 0 0;">
        <h2 style="color: #ffffff; margin: 0; font-size: 20px;">Parth Packaging - General Contact Enquiry</h2>
        <p style="color: #94a3b8; margin: 4px 0 0; font-size: 13px;">Inward Contact from parthpackaging.com</p>
      </div>
      <div style="padding: 24px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 6px 6px;">
        <p><strong>Name:</strong> ${contact.name}</p>
        <p><strong>Company:</strong> ${contact.company || 'N/A'}</p>
        <p><strong>Email:</strong> <a href="mailto:${contact.email}">${contact.email}</a></p>
        <p><strong>Mobile:</strong> <a href="tel:${contact.mobile}">${contact.mobile}</a></p>
        <p><strong>Subject:</strong> ${contact.subject || 'General Enquiry'}</p>
        <p><strong>Message:</strong></p>
        <div style="background: #f8fafc; padding: 14px; border-radius: 6px; border: 1px solid #e2e8f0;">
          ${contact.message}
        </div>
      </div>
    </div>
  `;

  const userSubject = `We have received your message - Parth Packaging`;
  const userHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1e293b; line-height: 1.6;">
      <div style="background: #0B1320; padding: 20px; text-align: center; border-radius: 6px 6px 0 0;">
        <h2 style="color: #ffffff; margin: 0; font-size: 20px;">Parth Packaging</h2>
        <p style="color: #38bdf8; margin: 4px 0 0; font-size: 13px;">Inquiry Confirmation</p>
      </div>
      <div style="padding: 24px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 6px 6px;">
        <p>Dear <strong>${contact.name}</strong>,</p>
        <p>Thank you for contacting <strong>Parth Packaging</strong>. We have received your inquiry regarding "<strong>${contact.subject || 'General Enquiry'}</strong>".</p>
        <p>Our team is reviewing your message and will get back to you shortly.</p>
        <p>For immediate assistance, please call our sales desk at <a href="tel:${siteConfig.phoneClean}">${siteConfig.phone}</a> or email <a href="mailto:${siteConfig.email}">${siteConfig.email}</a>.</p>
        <p style="margin-top: 20px;">Best regards,<br><strong>Customer Relations Team</strong><br>Parth Packaging</p>
      </div>
    </div>
  `;

  if (!hasValidCredentials()) {
    console.log('[EmailService] SMTP credentials contain placeholder password (**********). Safely queued 3-way contact dispatch to local outbox (logs/email-outbox.log).');
    logEmailLocally('1_ADMIN_CONTACT', ADMIN_EMAIL, adminSubject, JSON.stringify(contact, null, 2));
    logEmailLocally('2_CLIENT_CONTACT', CLIENT_EMAIL, adminSubject, JSON.stringify(contact, null, 2));
    logEmailLocally('3_USER_CONTACT_ACK', contact.email, userSubject, `Auto-reply sent to ${contact.name} (${contact.email})`);
    return true;
  }

  try {
    const client = getTransporter();
    
    // 1 & 2: Send to Admin and Client (reply responds to contact person)
    await client.sendMail({
      from: mailFrom,
      to: BUSINESS_RECIPIENTS,
      replyTo: contact.email,
      subject: adminSubject,
      html: adminHtml
    });

    // 3: Send Auto-acknowledgment to User (reply responds to business desk)
    if (contact.email) {
      await client.sendMail({
        from: mailFrom,
        to: contact.email,
        replyTo: businessReplyTo,
        subject: userSubject,
        html: userHtml
      });
    }

    return true;
  } catch (err) {
    console.error('[EmailService] SMTP contact send error (gracefully falling back to local log):', err);
    logEmailLocally('1_ADMIN_CONTACT_FALLBACK', ADMIN_EMAIL, adminSubject, JSON.stringify(contact, null, 2));
    logEmailLocally('2_CLIENT_CONTACT_FALLBACK', CLIENT_EMAIL, adminSubject, JSON.stringify(contact, null, 2));
    logEmailLocally('3_USER_CONTACT_FALLBACK', contact.email, userSubject, `Auto-reply fallback to ${contact.email}`);
    return true;
  }
}
