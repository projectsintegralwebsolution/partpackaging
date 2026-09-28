import { Request, Response } from 'express';
import { siteConfig } from '../config/site';
import { servicesData } from '../data/services';
import { industriesData } from '../data/industries';
import { processStepsData } from '../data/process';
import { faqsData } from '../data/faqs';
import { caseStudiesData } from '../data/caseStudies';
import { locationsData } from '../data/locations';
import { blogPostsData } from '../data/blog';

export function renderHome(_req: Request, res: Response) {
  res.render('pages/home', {
    site: siteConfig,
    pageTitle: 'Industrial Carboys Reconditioning Solutions Across India | Parth Packaging',
    metaDescription: "Parth Packaging is India's trusted B2B partner for certified HDPE carboys reconditioning, multi-stage chemical decontamination, 100% pneumatic leak testing, and nationwide logistics.",
    canonicalUrl: `${siteConfig.domain}/`,
    activeNav: 'home',
    services: servicesData,
    industries: industriesData,
    processSteps: processStepsData,
    faqs: faqsData,
    caseStudies: caseStudiesData,
    locations: locationsData,
    blogPosts: blogPostsData,
    schemaType: 'Organization',
    breadcrumbs: []
  });
}

export function renderAbout(_req: Request, res: Response) {
  res.render('pages/about', {
    site: siteConfig,
    pageTitle: 'About Parth Packaging | Enterprise Industrial Packaging Reconditioning',
    metaDescription: 'Learn about Parth Packaging, our industrial reconditioning facility, quality inspection standards, sustainable circular economy mission, and leadership in B2B packaging reuse.',
    canonicalUrl: `${siteConfig.domain}/about/`,
    activeNav: 'about',
    breadcrumbs: [
      { label: 'Home', url: '/' },
      { label: 'About Us', url: '/about/' }
    ]
  });
}

export function renderCarboysReconditioning(_req: Request, res: Response) {
  const service = servicesData.find(s => s.slug === 'carboys-reconditioning') || servicesData[0];
  res.render('pages/carboys-reconditioning', {
    site: siteConfig,
    pageTitle: 'HDPE Carboys Reconditioning Services India | Certified Leak-Tested Containers',
    metaDescription: 'Professional industrial reconditioning for 20L, 30L, 50L, and 100L HDPE carboys. 100% pneumatic pressure decay tested, chemically neutral wash, and new closure fitment.',
    canonicalUrl: `${siteConfig.domain}/carboys-reconditioning/`,
    activeNav: 'carboys-reconditioning',
    service,
    processSteps: processStepsData,
    faqs: faqsData.filter(f => f.category === 'General' || f.category === 'Quality'),
    breadcrumbs: [
      { label: 'Home', url: '/' },
      { label: 'Services', url: '/services/' },
      { label: 'Carboys Reconditioning', url: '/carboys-reconditioning/' }
    ]
  });
}

export function renderServices(_req: Request, res: Response) {
  res.render('pages/services', {
    site: siteConfig,
    pageTitle: 'Industrial Packaging & Carboy Reconditioning Services | Parth Packaging',
    metaDescription: 'Explore our complete industrial packaging services: HDPE carboy reconditioning, multi-stage chemical decontamination, bung and gasket replacement, and bulk reverse logistics.',
    canonicalUrl: `${siteConfig.domain}/services/`,
    activeNav: 'services',
    services: servicesData,
    breadcrumbs: [
      { label: 'Home', url: '/' },
      { label: 'Services', url: '/services/' }
    ]
  });
}

export function renderProcess(_req: Request, res: Response) {
  res.render('pages/process', {
    site: siteConfig,
    pageTitle: 'Our 7-Step Industrial Reconditioning Process | Quality & Testing Standards',
    metaDescription: 'Discover our certified 7-step carboy reconditioning workflow: Inward sorting, decanting, high-pressure chemical wash, neutralization, hot-air drying, and 100% pneumatic leak testing.',
    canonicalUrl: `${siteConfig.domain}/process/`,
    activeNav: 'process',
    processSteps: processStepsData,
    breadcrumbs: [
      { label: 'Home', url: '/' },
      { label: 'Process', url: '/process/' }
    ]
  });
}

export function renderIndustries(_req: Request, res: Response) {
  res.render('pages/industries', {
    site: siteConfig,
    pageTitle: 'Industries We Serve | Chemical, Agrochemical, Paints, Lubricants Packaging',
    metaDescription: 'Parth Packaging provides specialized reconditioned carboys tailored to the strict containment and purity requirements of chemical, agrochemical, coatings, and lubricant manufacturers.',
    canonicalUrl: `${siteConfig.domain}/industries/`,
    activeNav: 'industries',
    industries: industriesData,
    breadcrumbs: [
      { label: 'Home', url: '/' },
      { label: 'Industries', url: '/industries/' }
    ]
  });
}

export function renderIndustryDetail(req: Request, res: Response) {
  const industry = industriesData.find(i => i.slug === req.params.slug);
  if (!industry) {
    return res.status(404).render('pages/404', {
      site: siteConfig,
      pageTitle: 'Industry Not Found | Parth Packaging',
      canonicalUrl: `${siteConfig.domain}/404/`,
      activeNav: 'industries',
      breadcrumbs: []
    });
  }
  return res.render('pages/industry-detail', {
    site: siteConfig,
    pageTitle: `${industry.title} - Reconditioned Carboys & Packaging | Parth Packaging`,
    metaDescription: industry.shortDesc,
    canonicalUrl: `${siteConfig.domain}/industries/${industry.slug}/`,
    activeNav: 'industries',
    industry,
    breadcrumbs: [
      { label: 'Home', url: '/' },
      { label: 'Industries', url: '/industries/' },
      { label: industry.title, url: `/industries/${industry.slug}/` }
    ]
  });
}

export function renderQuality(_req: Request, res: Response) {
  res.render('pages/quality', {
    site: siteConfig,
    pageTitle: 'Quality Assurance & Leak Testing Protocols | Parth Packaging',
    metaDescription: 'Learn about our zero-leakage guarantee, calibrated pneumatic pressure decay testing, multi-point ultrasonic wall thickness verification, and chemical neutrality standards.',
    canonicalUrl: `${siteConfig.domain}/quality/`,
    activeNav: 'quality',
    breadcrumbs: [
      { label: 'Home', url: '/' },
      { label: 'Quality & Reliability', url: '/quality/' }
    ]
  });
}

export function renderGallery(_req: Request, res: Response) {
  res.render('pages/gallery', {
    site: siteConfig,
    pageTitle: 'Facility & Reconditioning Process Gallery | Parth Packaging',
    metaDescription: 'Visual overview of our industrial staging yards, high-pressure rotary washing rigs, pneumatic testing benches, and palletized dispatch-ready reconditioned carboys.',
    canonicalUrl: `${siteConfig.domain}/gallery/`,
    activeNav: 'gallery',
    breadcrumbs: [
      { label: 'Home', url: '/' },
      { label: 'Gallery', url: '/gallery/' }
    ]
  });
}

export function renderCaseStudies(_req: Request, res: Response) {
  res.render('pages/case-studies', {
    site: siteConfig,
    pageTitle: 'Industrial Packaging Case Studies & Cost Reductions | Parth Packaging',
    metaDescription: 'Read how leading chemical, resin, and agrochemical manufacturers across India achieved up to 46% savings in annual packaging spend with Parth Packaging closed-loop programs.',
    canonicalUrl: `${siteConfig.domain}/case-studies/`,
    activeNav: 'case-studies',
    caseStudies: caseStudiesData,
    breadcrumbs: [
      { label: 'Home', url: '/' },
      { label: 'Case Studies', url: '/case-studies/' }
    ]
  });
}

export function renderFaq(_req: Request, res: Response) {
  res.render('pages/faq', {
    site: siteConfig,
    pageTitle: 'Frequently Asked Questions (FAQ) - Carboys Reconditioning | Parth Packaging',
    metaDescription: 'Detailed answers to common questions regarding carboy reconditioning processes, chemical compatibility, leak testing, pickup minimums, turnaround times, and pricing.',
    canonicalUrl: `${siteConfig.domain}/faq/`,
    activeNav: 'faq',
    faqs: faqsData,
    schemaType: 'FAQPage',
    breadcrumbs: [
      { label: 'Home', url: '/' },
      { label: 'FAQ', url: '/faq/' }
    ]
  });
}

export function renderLocations(_req: Request, res: Response) {
  res.render('pages/locations', {
    site: siteConfig,
    pageTitle: 'Pan-India Industrial Packaging & Reconditioning Hubs | Parth Packaging',
    metaDescription: 'Explore our B2B reverse logistics and carboy reconditioning service capabilities across Maharashtra, Gujarat, South India, and North India industrial belts.',
    canonicalUrl: `${siteConfig.domain}/locations/`,
    activeNav: 'locations',
    locations: locationsData,
    breadcrumbs: [
      { label: 'Home', url: '/' },
      { label: 'Locations', url: '/locations/' }
    ]
  });
}

export function renderLocationDetail(req: Request, res: Response) {
  const location = locationsData.find(l => l.slug === req.params.slug);
  if (!location) {
    return res.status(404).render('pages/404', {
      site: siteConfig,
      pageTitle: 'Location Hub Not Found | Parth Packaging',
      canonicalUrl: `${siteConfig.domain}/404/`,
      activeNav: 'locations',
      breadcrumbs: []
    });
  }
  return res.render('pages/location-detail', {
    site: siteConfig,
    pageTitle: `Carboys Reconditioning Services in ${location.name} | Parth Packaging`,
    metaDescription: `Industrial carboys reconditioning, bulk reverse logistics, and leak-tested HDPE container supply for manufacturing plants in ${location.name}.`,
    canonicalUrl: `${siteConfig.domain}/locations/${location.slug}/`,
    activeNav: 'locations',
    location,
    breadcrumbs: [
      { label: 'Home', url: '/' },
      { label: 'Locations', url: '/locations/' },
      { label: location.name, url: `/locations/${location.slug}/` }
    ]
  });
}

export function renderBlogIndex(_req: Request, res: Response) {
  res.render('pages/blog-index', {
    site: siteConfig,
    pageTitle: 'Industrial Packaging Insights & Technical Resources | Parth Packaging',
    metaDescription: 'Technical guides, packaging economics, polymer durability insights, and reverse logistics strategies for industrial procurement and packaging engineers.',
    canonicalUrl: `${siteConfig.domain}/blog/`,
    activeNav: 'blog',
    blogPosts: blogPostsData,
    breadcrumbs: [
      { label: 'Home', url: '/' },
      { label: 'Blog & Insights', url: '/blog/' }
    ]
  });
}

export function renderBlogPost(req: Request, res: Response) {
  const post = blogPostsData.find(p => p.slug === req.params.slug);
  if (!post) {
    return res.status(404).render('pages/404', {
      site: siteConfig,
      pageTitle: 'Article Not Found | Parth Packaging',
      canonicalUrl: `${siteConfig.domain}/404/`,
      activeNav: 'blog',
      breadcrumbs: []
    });
  }
  return res.render('pages/blog-post', {
    site: siteConfig,
    pageTitle: `${post.title} | Parth Packaging`,
    metaDescription: post.summary,
    canonicalUrl: `${siteConfig.domain}/blog/${post.slug}/`,
    activeNav: 'blog',
    post,
    recentPosts: blogPostsData.filter(p => p.slug !== post.slug),
    schemaType: 'Article',
    breadcrumbs: [
      { label: 'Home', url: '/' },
      { label: 'Blog', url: '/blog/' },
      { label: post.title, url: `/blog/${post.slug}/` }
    ]
  });
}

export function renderContact(_req: Request, res: Response) {
  res.render('pages/contact', {
    site: siteConfig,
    pageTitle: 'Contact Parth Packaging | Request Quotation & Pan-India Enquiry',
    metaDescription: 'Get in touch with Parth Packaging for bulk carboys reconditioning quotations, pickup scheduling, facility inquiries, and technical packaging assessments.',
    canonicalUrl: `${siteConfig.domain}/contact/`,
    activeNav: 'contact',
    breadcrumbs: [
      { label: 'Home', url: '/' },
      { label: 'Contact Us', url: '/contact/' }
    ]
  });
}

export function renderPrivacyPolicy(_req: Request, res: Response) {
  res.render('pages/privacy-policy', {
    site: siteConfig,
    pageTitle: 'Privacy Policy | Parth Packaging',
    metaDescription: 'Parth Packaging privacy policy detailing how corporate inquiries, commercial data, and communications are securely handled.',
    canonicalUrl: `${siteConfig.domain}/privacy-policy/`,
    activeNav: '',
    breadcrumbs: [
      { label: 'Home', url: '/' },
      { label: 'Privacy Policy', url: '/privacy-policy/' }
    ]
  });
}

export function renderTerms(_req: Request, res: Response) {
  res.render('pages/terms', {
    site: siteConfig,
    pageTitle: 'Terms of Service & Industrial Supply Conditions | Parth Packaging',
    metaDescription: 'Commercial and technical terms governing carboy reconditioning services, testing standards, delivery, and container exchange agreements.',
    canonicalUrl: `${siteConfig.domain}/terms/`,
    activeNav: '',
    breadcrumbs: [
      { label: 'Home', url: '/' },
      { label: 'Terms of Service', url: '/terms/' }
    ]
  });
}

export function renderSitemap(_req: Request, res: Response) {
  res.header('Content-Type', 'application/xml');
  const urls = [
    { loc: `${siteConfig.domain}/`, priority: '1.0', changefreq: 'weekly' },
    { loc: `${siteConfig.domain}/carboys-reconditioning/`, priority: '0.95', changefreq: 'weekly' },
    { loc: `${siteConfig.domain}/about/`, priority: '0.8', changefreq: 'monthly' },
    { loc: `${siteConfig.domain}/services/`, priority: '0.9', changefreq: 'weekly' },
    { loc: `${siteConfig.domain}/process/`, priority: '0.85', changefreq: 'monthly' },
    { loc: `${siteConfig.domain}/industries/`, priority: '0.85', changefreq: 'weekly' },
    ...industriesData.map(i => ({ loc: `${siteConfig.domain}/industries/${i.slug}/`, priority: '0.8', changefreq: 'monthly' })),
    { loc: `${siteConfig.domain}/quality/`, priority: '0.8', changefreq: 'monthly' },
    { loc: `${siteConfig.domain}/gallery/`, priority: '0.7', changefreq: 'monthly' },
    { loc: `${siteConfig.domain}/case-studies/`, priority: '0.75', changefreq: 'monthly' },
    { loc: `${siteConfig.domain}/faq/`, priority: '0.8', changefreq: 'monthly' },
    { loc: `${siteConfig.domain}/locations/`, priority: '0.8', changefreq: 'weekly' },
    ...locationsData.map(l => ({ loc: `${siteConfig.domain}/locations/${l.slug}/`, priority: '0.75', changefreq: 'monthly' })),
    { loc: `${siteConfig.domain}/blog/`, priority: '0.8', changefreq: 'weekly' },
    ...blogPostsData.map(b => ({ loc: `${siteConfig.domain}/blog/${b.slug}/`, priority: '0.7', changefreq: 'monthly' })),
    { loc: `${siteConfig.domain}/contact/`, priority: '0.9', changefreq: 'monthly' }
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return res.send(xml);
}

export function renderRobots(_req: Request, res: Response) {
  res.header('Content-Type', 'text/plain');
  const content = `User-agent: *
Allow: /
Disallow: /api/
Disallow: /uploads/

Sitemap: ${siteConfig.domain}/sitemap.xml
`;
  return res.send(content);
}
