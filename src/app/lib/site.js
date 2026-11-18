export const siteConfig = {
  name: 'thatDevTerry',
  title: 'diary of thatDevTerry',
  description:
    'A personal diary and portfolio by Terry Biesboer (thatDevTerry) featuring writing, projects, and reflections on technology, creativity, and growth.',
  author: 'Terry Biesboer',
  email: 'terry@thatdudeterry.com',
  github: 'https://github.com/biesboerTerry-FS',
  linkedin: 'https://www.linkedin.com/in/terrybiesboer',
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL || 'https://biesboerterry-fs.github.io',
};

export function absoluteUrl(path = '/') {
  const base = siteConfig.siteUrl.replace(/\/$/, '');
  const basePath = (process.env.NEXT_PUBLIC_BASE_PATH || '').replace(/\/$/, '');
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${base}${basePath}${normalized}`;
}
