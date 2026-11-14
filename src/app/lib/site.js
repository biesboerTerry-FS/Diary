export const siteConfig = {
  name: 'lifestyles of theLiftedGifted',
  title: 'diary of theLiftedGifted',
  description:
    'A personal diary and portfolio by theLiftedGifted featuring writing, projects, and reflections on technology, creativity, and growth.',
  author: 'theLiftedGifted',
  email: 'hello@example.com',
  github: 'https://github.com/theLiftedGifted',
  linkedin: 'https://www.linkedin.com/in/theliftedgifted',
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL || 'https://theliftedgifted.github.io',
};

export function absoluteUrl(path = '/') {
  const base = siteConfig.siteUrl.replace(/\/$/, '');
  const basePath = (process.env.NEXT_PUBLIC_BASE_PATH || '').replace(/\/$/, '');
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${base}${basePath}${normalized}`;
}
