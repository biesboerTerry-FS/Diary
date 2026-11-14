import { siteConfig } from '../lib/site';

export const metadata = {
  title: 'Projects',
  description: 'Selected projects, case studies, and technical highlights.',
};

const projects = [
  {
    name: 'diary of theLiftedGifted',
    role: 'Design & Frontend Development',
    timeframe: '2026',
    stack: ['Next.js App Router', 'React', 'MDX / Markdown', 'Tailwind CSS', 'Static Export'],
    summary:
      'A personal diary evolved into a portfolio-ready publishing platform, combining daily writing with project storytelling and discoverable content architecture.',
    problem:
      'The site started as a simple blog/diary, but needed stronger navigation, richer content presentation, and portfolio framing as the archive grew.',
    contributions: [
      'Built and refined a content pipeline for Markdown/MDX posts with metadata, excerpts, reading time, and tag support.',
      'Designed a more complete site structure (Home, Archive, About, Projects, Now, Contact) with consistent layout and theming.',
      'Implemented discovery features including archive grouping, search/filtering, tag browsing, and recent-post surfacing on the homepage.',
      'Added portfolio polish: SEO/Open Graph metadata, sitemap/robots/RSS routes, accessibility improvements, and theme controls.',
    ],
    outcomes: [
      'Clearer user experience for browsing a growing archive across many months.',
      'Stronger presentation of technical skills through real product features, not just isolated demos.',
      'A maintainable static-export setup suitable for GitHub Pages-style deployment workflows.',
    ],
    live: '/',
    repo: siteConfig.github,
  },
  {
    name: 'API Integration & Deployment Workflow',
    role: 'Full-stack Learning Project',
    timeframe: '2026',
    stack: ['Node.js', 'Express', 'REST APIs', 'Heroku', 'GitHub Pages'],
    summary:
      'A practice project focused on connecting frontend interfaces to backend services and understanding real deployment constraints.',
    problem:
      'Moving from static frontend work to backend-connected applications introduced challenges around routing, environment configuration, and cross-origin communication.',
    contributions: [
      'Configured Express routes and API endpoints to serve and receive application data.',
      'Managed environment variables and deployment settings to separate local development from production concerns.',
      'Debugged integration issues using request/response inspection and server logs rather than browser-only tooling.',
      'Deployed frontend and backend components across different hosting environments and connected them reliably.',
    ],
    outcomes: [
      'Stronger understanding of client-server communication and deployment workflows.',
      'Improved confidence troubleshooting configuration, CORS, and environment-specific issues.',
    ],
    live: '',
    repo: siteConfig.github,
  },
  {
    name: 'React Native Interface Exploration',
    role: 'UI/UX & Frontend Exploration',
    timeframe: '2026',
    stack: ['React Native', 'Flexbox', 'Component Design', 'Mobile UX'],
    summary:
      'An exploration of adapting web-oriented design thinking to mobile application interfaces and constraints.',
    problem:
      'Web layout habits do not translate 1:1 to mobile; touch interaction, screen variability, and layout systems require different decisions.',
    contributions: [
      'Translated familiar React component patterns into native primitives and mobile-friendly structures.',
      'Practiced Flexbox-first layout thinking for fluid, device-aware interfaces.',
      'Considered mobile UX details such as touch target sizing, readability, and interaction feedback.',
      'Explored how a consistent design language can carry across web and mobile contexts.',
    ],
    outcomes: [
      'Broader perspective on cross-platform UI design and implementation tradeoffs.',
      'A foundation for building more cohesive experiences across screen sizes and device types.',
    ],
    live: '',
    repo: siteConfig.github,
  },
];

export default function ProjectsPage() {
  return (
    <main className="max-w-5xl px-4 py-10 mx-auto sm:px-6 md:py-14">
      <header className="mb-10">
        <p className="mb-2 text-sm font-medium tracking-wide uppercase text-orange-700 dark:text-orange-300">Selected work</p>
        <h1 className="mb-3 text-gray-900 dark:text-white">Projects</h1>
        <p className="max-w-3xl text-lg text-orange-700 dark:text-orange-300">
          A collection of projects and explorations that reflect how I approach building: start with clear goals, solve real UX/content problems,
          and iterate toward a polished, maintainable result.
        </p>
      </header>

      <div className="grid gap-8">
        {projects.map((project) => (
          <article key={project.name} className="p-6 border rounded-xl border-gray-400/50 bg-white/30 dark:border-gray-700/60 dark:bg-black/10 sm:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <div>
                <h2 className="mb-1 text-2xl text-gray-900 dark:text-white">{project.name}</h2>
                <p className="m-0 text-sm text-orange-700 dark:text-orange-300">{project.role}{project.timeframe ? ` · ${project.timeframe}` : ''}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="px-2.5 py-1 text-xs rounded-full bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-100">{item}</span>
                ))}
              </div>
            </div>

            <p className="text-gray-800 dark:text-gray-200">{project.summary}</p>

            <div className="grid gap-6 mt-5 md:grid-cols-3">
              <section>
                <h3 className="mb-2 text-base text-gray-900 dark:text-white">Challenge</h3>
                <p className="m-0 text-sm text-gray-800 dark:text-gray-200">{project.problem}</p>
              </section>
              <section className="md:col-span-2">
                <h3 className="mb-2 text-base text-gray-900 dark:text-white">What I contributed</h3>
                <ul className="space-y-1 text-sm text-gray-800 list-disc list-inside dark:text-gray-200">
                  {project.contributions.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </section>
            </div>

            <section className="mt-5">
              <h3 className="mb-2 text-base text-gray-900 dark:text-white">Outcomes</h3>
              <ul className="space-y-1 text-sm text-gray-800 list-disc list-inside dark:text-gray-200">
                {project.outcomes.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </section>

            <div className="flex flex-wrap gap-4 mt-5 text-sm">
              {project.live ? <a href={project.live} className="font-medium text-orange-700 hover:text-orange-500 dark:text-orange-300 dark:hover:text-orange-400">Live/demo</a> : null}
              {project.repo ? <a href={project.repo} target="_blank" rel="noreferrer" className="font-medium text-orange-700 hover:text-orange-500 dark:text-orange-300 dark:hover:text-orange-400">Repository/profile</a> : null}
            </div>
          </article>
        ))}
      </div>

      <section className="p-6 mt-10 border rounded-xl border-gray-400/50 dark:border-gray-700/60">
        <h2 className="mb-2 text-gray-900 dark:text-white">What these projects show</h2>
        <p className="m-0 text-gray-800 dark:text-gray-200">
          Together, these projects highlight a progression from interface implementation to content architecture, deployment awareness, and cross-platform thinking.
          I value work that balances visual clarity, technical reliability, and room for future iteration.
        </p>
      </section>
    </main>
  );
}
