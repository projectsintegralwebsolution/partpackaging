import { Router } from 'express';
import {
  renderHome,
  renderAbout,
  renderCarboysReconditioning,
  renderServices,
  renderProcess,
  renderIndustries,
  renderIndustryDetail,
  renderQuality,
  renderGallery,
  renderCaseStudies,
  renderFaq,
  renderLocations,
  renderLocationDetail,
  renderBlogIndex,
  renderBlogPost,
  renderContact,
  renderPrivacyPolicy,
  renderTerms,
  renderSitemap,
  renderRobots
} from '../controllers/pageController';

const router = Router();

router.get('/', renderHome);
router.get('/about', renderAbout);
router.get('/carboys-reconditioning', renderCarboysReconditioning);
router.get('/products', renderCarboysReconditioning);
router.get('/services', renderServices);
router.get('/process', renderProcess);
router.get('/industries', renderIndustries);
router.get('/industries/:slug', renderIndustryDetail);
router.get('/quality', renderQuality);
router.get('/gallery', renderGallery);
router.get('/case-studies', renderCaseStudies);
router.get('/faq', renderFaq);
router.get('/locations', renderLocations);
router.get('/locations/:slug', renderLocationDetail);
router.get('/blog', renderBlogIndex);
router.get('/blog/:slug', renderBlogPost);
router.get('/contact', renderContact);
router.get('/privacy-policy', renderPrivacyPolicy);
router.get('/terms', renderTerms);

router.get('/sitemap.xml', renderSitemap);
router.get('/robots.txt', renderRobots);

export default router;
