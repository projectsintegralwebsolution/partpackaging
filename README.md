# Parth Packaging — World-Class Industrial Carboys Reconditioning Website

A premier, enterprise-grade, high-performance web platform built for **Parth Packaging** (`parthpackaging.com`), positioning the company as India''s leading and highly trusted B2B partner for **Carboys Reconditioning and Industrial Packaging Decontamination**.

---

## 🌟 Key Features & Capabilities

1. **100% Server-Side Rendered (SSR) Architecture**:
   - Built on Node.js, Express, TypeScript, and EJS for instant Time to First Byte (TTFB) and optimal SEO crawlability by Google and search indexers.
2. **Flagship Carboys Reconditioning Portal**:
   - Comprehensive technical specifications for 20L, 30L, 50L, and 100L HDPE carboys.
   - Interactive touch/mouse Before & After split slider (`/images/carboy-before.svg` vs `/images/carboy-after.svg`).
   - Detailed 7-step industrial decontamination workflow.
3. **B2B Packaging ROI & Cost Savings Calculator**:
   - Interactive real-time calculator allowing procurement managers to calculate annual savings (typically 40%–55%) based on monthly container volumes.
4. **Advanced Quotation (RFQ) & Enquiry Engine**:
   - Multi-field quotation form with container selection, prior chemical residue specifications, reverse logistics pickup preferences, and file attachments (JPG, PNG, WEBP, PDF up to 5MB).
   - NodeMailer integration with dual dispatch: Admin RFQ notification + User auto-acknowledgement.
   - Built-in honeypot spam protection and IP rate limiting (`express-rate-limit`).
   - Graceful fallback: securely logs dispatches to `logs/email-outbox.log` when offline or pending SMTP setup.
5. **Pan-India Industrial SEO Strategy**:
   - Dynamic `/sitemap.xml` with priority indices and clean `/robots.txt`.
   - Schema.org structured data JSON-LD (`Organization`, `Service`, `FAQPage`, `BreadcrumbList`).
   - Dedicated regional corridor hubs (Mumbai/Thane, Gujarat Industrial Belt, Pune/Chakan, Hyderabad, Chennai, Delhi NCR).
6. **Mobile-First Industrial UX**:
   - Sticky top bar, desktop navigation, off-canvas mobile drawer.
   - Persistent mobile bottom action bar (`Call Sales` | `WhatsApp` | `Get Quote`).
   - Lightweight custom CSS design system (<30KB) with zero heavy framework bloat.

---

## 🛠️ Technology Stack

- **Runtime & Language**: Node.js v20+ / v24+, TypeScript 5+ (Strict Mode)
- **Framework**: Express.js
- **View Engine**: EJS with clean modular partials (`layout-top`, `layout-bottom`, `quote-form`, `quote-modal`, etc.)
- **Styling**: Native Modern CSS3 Design Tokens (Plus Jakarta Sans & Inter typography, Obsidian Navy `#0B1320` & Industrial Teal `#0F766E`)
- **Email Service**: NodeMailer with secure SMTP transport
- **Security**: Helmet, express-rate-limit, Multer file sanitization, honeypot traps, XSS sanitization
- **Performance**: Compression (Gzip/Brotli), cache headers, lazy loading, fetch priorities for LCP

---

## 🚀 Quick Start Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env` and configure your SMTP credentials:
```env
PORT=3000
NODE_ENV=production
SITE_URL=https://parthpackaging.com

# NodeMailer SMTP Settings
SMTP_HOST=smtp.your-provider.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your_smtp_username
SMTP_PASS=your_smtp_password
MAIL_FROM="Parth Packaging" <noreply@parthpackaging.com>
MAIL_TO=pratapbhanushali23@yahoo.com
```

### 3. Run Development Server
```bash
npm run dev
```

### 4. Build for Production
```bash
npm run build
npm start
```
The server will start on `http://localhost:3000`.

---

## ⚙️ Updating Client Information & Placeholders

All contact numbers, addresses, and business details are centralized in:
`src/config/site.ts`

When Parth Packaging supplies live company details:
1. Update `siteConfig.phone`, `siteConfig.email`, `siteConfig.address` in `src/config/site.ts`.
2. Replace image placeholders in `public/images/` with high-resolution factory photographs.
3. Re-run `npm run build` to update production assets.

---

## 🧪 Verification & Testing

To run the automated 27-point end-to-end verification suite:
```bash
node scripts/test-e2e.js
```
Verified passing:
- All 18 public web routes and dynamic hubs
- XML sitemap generation & robots.txt
- 404 branded error page
- ROI calculator math API
- Quote form submission & file upload
- Dual email generation & audit logging
- Honeypot anti-spam trap
