/**
 * useSeo — Dynamic SEO composable for ECR Technology Services
 * Sets page title, meta description, Open Graph, Twitter Card, canonical URL,
 * and Schema.org JSON-LD structured data without any extra dependencies.
 *
 * Usage:
 *   import { useSeo } from '@/composables/useSeo'
 *   useSeo({ title, description, url, image, schema })
 */

const SITE_NAME = 'ECR Technology Services';
const BASE_URL = 'https://www.ecr-ts.com';
const DEFAULT_IMAGE = `${BASE_URL}/images/og-default.png`;

function setMeta(name, content, attr = 'name') {
    if (!content) return;
    let el = document.querySelector(`meta[${attr}="${name}"]`);
    if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
    }
    el.setAttribute('content', content);
}

function setLink(rel, href) {
    if (!href) return;
    let el = document.querySelector(`link[rel="${rel}"]`);
    if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
    }
    el.setAttribute('href', href);
}

function setJsonLd(schema) {
    if (!schema) return;
    const id = 'page-schema-ld';
    let el = document.getElementById(id);
    if (!el) {
        el = document.createElement('script');
        el.id = id;
        el.type = 'application/ld+json';
        document.head.appendChild(el);
    }
    el.textContent = JSON.stringify(schema);
}

/**
 * @param {Object} options
 * @param {string} options.title         - Page-specific title (without site name)
 * @param {string} options.description   - Page meta description (max ~160 chars)
 * @param {string} [options.url]         - Canonical URL (defaults to current href)
 * @param {string} [options.image]       - OG image URL (absolute)
 * @param {string} [options.type]        - OG type: 'website' | 'article' (default: 'website')
 * @param {Object|null} [options.schema] - Schema.org JSON-LD object
 */
export function useSeo({ title, description, url, image, type = 'website', schema = null }) {
    const fullTitle = `${title} | ${SITE_NAME}`;
    const canonicalUrl = url || (typeof window !== 'undefined' ? window.location.href : BASE_URL);
    const ogImage = image || DEFAULT_IMAGE;

    // Page title
    document.title = fullTitle;

    // Standard meta
    setMeta('description', description);
    setMeta('robots', 'index, follow');

    // Canonical
    setLink('canonical', canonicalUrl);

    // Open Graph
    setMeta('og:type', type, 'property');
    setMeta('og:site_name', SITE_NAME, 'property');
    setMeta('og:title', fullTitle, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:url', canonicalUrl, 'property');
    setMeta('og:image', ogImage, 'property');

    // Twitter Card
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', fullTitle);
    setMeta('twitter:description', description);
    setMeta('twitter:image', ogImage);

    // Schema.org JSON-LD
    if (schema) {
        setJsonLd(schema);
    }
}

/** Pre-built schema helpers */

export const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ECR Technology Services',
    url: BASE_URL,
    logo: `${BASE_URL}/images/logo.webp`,
    description: 'ECR Technology Services is an ICT company offering digital solutions including education & training, software development, data analytics, IT strategy consulting, graphics designing, and cyber security.',
    address: {
        '@type': 'PostalAddress',
        streetAddress: '51 Macaulay Street, By Ikot Ekpene Road',
        addressLocality: 'Umuahia',
        addressRegion: 'Abia State',
        addressCountry: 'NG',
    },
    contactPoint: [
        {
            '@type': 'ContactPoint',
            telephone: '+2348105568468',
            contactType: 'customer service',
            areaServed: 'NG',
        },
        {
            '@type': 'ContactPoint',
            telephone: '+4401616696279',
            contactType: 'customer service',
            areaServed: 'GB',
        },
    ],
    sameAs: [
        'https://www.linkedin.com/company/ecr-technology-services',
        'https://twitter.com/ecrtechnology',
    ],
};

export const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'ECR Technology Services',
    image: `${BASE_URL}/images/logo.webp`,
    url: BASE_URL,
    telephone: '+2348105568468',
    address: {
        '@type': 'PostalAddress',
        streetAddress: '51 Macaulay Street, By Ikot Ekpene Road',
        addressLocality: 'Umuahia',
        addressRegion: 'Abia State',
        addressCountry: 'NG',
    },
    openingHours: 'Mo-Fr 09:00-17:00',
    priceRange: '$$',
};
