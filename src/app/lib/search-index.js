import { getPosts } from './posts';
import { projects, projectAnchor } from './projects';

const pageEntries = [
  {
    title: 'Home',
    href: '/',
    description: 'Introduction, recent focus, and ways to explore the diary.',
    keywords: 'home start introduction terry biesboer',
  },
  {
    title: 'Archive',
    href: '/archive',
    description: 'Every diary entry, newest first.',
    keywords: 'archive posts entries writing blog diary',
  },
  {
    title: 'About',
    href: '/about',
    description: 'Background, education, skills, and how I approach work.',
    keywords: 'about bio skills education full sail san diego',
  },
  {
    title: 'Projects',
    href: '/projects',
    description: 'Selected projects, case studies, and deployment inventory.',
    keywords: 'projects portfolio work case studies',
  },
  {
    title: 'Now',
    href: '/now',
    description: 'A current snapshot of focus areas, learning, and goals.',
    keywords: 'now current focus learning goals',
  },
  {
    title: 'Contact',
    href: '/contact',
    description: 'Ways to get in touch, collaborate, or follow the work.',
    keywords: 'contact email github linkedin hire opportunities',
  },
];

/**
 * Build a single, flat search catalogue from the same data that renders the
 * site: the Markdown posts and the shared projects module. Called from the
 * root layout so the index is baked into the static export.
 */
export async function getSearchIndex() {
  const posts = await getPosts();

  const pageItems = pageEntries.map((page, index) => ({
    id: `page-${index}`,
    type: 'page',
    title: page.title,
    subtitle: 'Page',
    description: page.description,
    href: page.href,
    keywords: page.keywords,
  }));

  const projectItems = projects.map((project) => ({
    id: `project-${projectAnchor(project.name)}`,
    type: 'project',
    title: project.name,
    subtitle: [project.role, project.timeframe].filter(Boolean).join(' · '),
    description: project.summary,
    href: `/projects#${projectAnchor(project.name)}`,
    keywords: `${project.stack.join(' ')} ${project.problem} ${project.outcomes.join(' ')}`,
  }));

  const postItems = posts.map((post) => ({
    id: `post-${post.slug}`,
    type: 'post',
    title: post.title,
    subtitle: post.date,
    description: post.description || post.excerpt,
    href: `/blog/${post.slug}`,
    keywords: `${(post.tags || []).join(' ')} ${post.excerpt || ''}`,
  }));

  return [...pageItems, ...projectItems, ...postItems];
}
