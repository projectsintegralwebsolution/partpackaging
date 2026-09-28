import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import dotenv from 'dotenv';
import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';
import webRoutes from './routes/webRoutes';
import apiRoutes from './routes/apiRoutes';
import { siteConfig } from './config/site';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Security Headers with Helmet
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'", "https://cdn.jsdelivr.net"],
        styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com", "https://cdn.jsdelivr.net"],
        fontSrc: ["'self'", "https://fonts.gstatic.com", "data:"],
        imgSrc: ["'self'", "data:", "blob:"],
        connectSrc: ["'self'"],
        objectSrc: ["'none'"],
        frameAncestors: ["'none'"]
      }
    },
    crossOriginEmbedderPolicy: false
  })
);

app.use(compression());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Template Engine (EJS)
const viewsPath = fs_existsSync(path.join(__dirname, 'views'))
  ? path.join(__dirname, 'views')
  : path.join(__dirname, '..', 'src', 'views');

app.set('views', viewsPath);
app.set('view engine', 'ejs');

// Static Assets
const publicPath = path.join(process.cwd(), 'public');
app.use(express.static(publicPath, { maxAge: '7d' }));

// Attach global locals
app.use((req: Request, res: Response, next: NextFunction) => {
  res.locals.currentPath = req.path;
  res.locals.site = siteConfig;
  next();
});

// Routes
app.use('/', webRoutes);
app.use('/api', apiRoutes);

// 404 Handler
app.use((req: Request, res: Response) => {
  res.status(404).render('pages/404', {
    site: siteConfig,
    pageTitle: 'Page Not Found (404) | Parth Packaging',
    metaDescription: 'The requested page could not be found on Parth Packaging website.',
    canonicalUrl: `${siteConfig.domain}${req.path}`,
    activeNav: '',
    breadcrumbs: [
      { label: 'Home', url: '/' },
      { label: '404 - Not Found', url: req.path }
    ]
  });
});

// Global 500 Error Handler
app.use((err: any, req: Request, res: Response, _next: NextFunction) => {
  console.error('[Server Error]', err);
  res.status(500).render('pages/500', {
    site: siteConfig,
    pageTitle: 'Server Error (500) | Parth Packaging',
    metaDescription: 'An unexpected internal server error occurred.',
    canonicalUrl: `${siteConfig.domain}${req.path}`,
    activeNav: '',
    breadcrumbs: [
      { label: 'Home', url: '/' },
      { label: '500 - Server Error', url: req.path }
    ]
  });
});

function fs_existsSync(p: string): boolean {
  try {
    const fs = require('fs');
    return fs.existsSync(p);
  } catch {
    return false;
  }
}

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`====================================================`);
    console.log(`🚀 Parth Packaging Server running on http://localhost:${PORT}`);
    console.log(`🏭 Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`📦 Pan-India Carboys Reconditioning Portal Ready`);
    console.log(`====================================================`);
  });
}

export default app;
