import Image from 'next/image';
import { siteConfig } from '../lib/site';

export const metadata = {
  title: 'Projects',
  description: 'Selected projects, apps, and technical highlights.',
};

const projects = [
  {
    name: 'Lindbergh Ultimate',
    role: 'Full-Stack Development',
    timeframe: '2024',
    stack: ['React', 'CSS', 'JavaScript'],
    summary:
      'A public-facing site for Lindbergh Ultimate with team info, program history, and a secured admin panel for content management.',
    problem:
      'The program needed a central hub to share information publicly while giving administrators a secure place to manage content.',
    contributions: [
      'Built a responsive public site with team sections, program history, and highlight galleries.',
      'Implemented an admin authentication flow to protect management routes.',
      'Deployed the application for live access and ongoing updates.',
    ],
    outcomes: [
      'A live site visitors can browse and an admin experience for content management.',
    ],
    repo: 'https://github.com/biesboerTerry-FS/lindberghUltimate',
    image: '/screenshots/lindbergh-main.jpg',
    views: [
      { label: 'Front', url: 'https://lindberghultimatefrisbee-7mq7brp51-terry-biesboers-projects.vercel.app' },
      { label: 'Admin', url: 'https://lindberghultimatefrisbee-7mq7brp51-terry-biesboers-projects.vercel.app/admin/login' },
      { label: 'Mobile', url: 'https://lindbergh-ultimate-mobile-n6xhd7h6x-terry-biesboers-projects.vercel.app' },
    ],
    missing: [],
  },
  {
    name: 'Diary',
    role: 'Design & Frontend Development',
    timeframe: '2026',
    stack: ['Next.js', 'React', 'JavaScript', 'Vercel'],
    summary:
      'A personal diary site built with Next.js, featuring dated entries and sections like Archive, About, Projects, and Now.',
    problem:
      'I wanted a content-driven site that could grow with regular writing while also serving as a portfolio showcase.',
    contributions: [
      'Built a Next.js App Router site with Markdown/MDX content support.',
      'Created dedicated sections for archive, about, projects, and now.',
      'Deployed to Vercel with static-export compatibility.',
    ],
    outcomes: [
      'A maintainable personal publishing platform that doubles as a portfolio.',
    ],
    repo: 'https://github.com/biesboerTerry-FS/Diary',
    image: '/screenshots/diary-main.jpg',
    views: [
      { label: 'Front', url: 'https://diary-ny9lougmh-terry-biesboers-projects.vercel.app' },
      { label: 'Mobile', url: 'https://diary-mobile-9ohj1omay-terry-biesboers-projects.vercel.app' },
    ],
    missing: [],
  },
  {
    name: 'Forever',
    role: 'Full-Stack Development',
    timeframe: '2024',
    stack: ['React', 'JavaScript', 'E-commerce', 'Vercel'],
    summary:
      'An e-commerce storefront with product browsing, search, wishlist, cart, sign-in, backend API, admin dashboard, and mobile app.',
    problem:
      'A complete e-commerce experience requires product discovery, user state, and admin control working together.',
    contributions: [
      'Built a storefront with product browsing, search, wishlist, and cart.',
      'Implemented user sign-in and session-aware features.',
      'Created an admin dashboard for product and order management.',
      'Developed a companion mobile experience and supporting backend API.',
    ],
    outcomes: [
      'A functioning e-commerce frontend, admin panel, mobile app, and backend deployed to Vercel.',
    ],
    repo: 'https://github.com/biesboerTerry-FS/Forever',
    image: '/screenshots/forever-main.jpg',
    views: [
      { label: 'Front', url: 'https://forever-frontend-gamma-wheat.vercel.app' },
      { label: 'Back', url: 'https://forever-backend-neon-eta.vercel.app' },
      { label: 'Admin', url: 'https://forever-admin-mocha-omega.vercel.app' },
      { label: 'Mobile', url: 'https://forever-mobile.vercel.app' },
    ],
    missing: [],
  },
  {
    name: 'ThePokeApp',
    role: 'Mobile & Frontend Development',
    timeframe: '2024',
    stack: ['React', 'Expo', 'React Native', 'JavaScript'],
    summary:
      'A Pokédex-style app for organizing your collection, tracking levels, managing sprites, and playing a Card Match game.',
    problem:
      'Pokémon fans need a playful, organized way to track collections and levels across devices.',
    contributions: [
      'Built collection and level-tracking features with persistent state.',
      'Implemented sprite management and a Card Match mini-game.',
      'Used Expo to target mobile platforms with a shared codebase.',
    ],
    outcomes: [
      'A cross-platform app experience for collectors and casual players.',
    ],
    repo: 'https://github.com/biesboerTerry-FS/ThePokeApp',
    image: '/screenshots/pokeapp-main.jpg',
    views: [
      { label: 'Mobile', url: 'https://thepokeapp.vercel.app' },
    ],
    missing: [],
  },
  {
    name: 'Tomato',
    role: 'Full-Stack Development',
    timeframe: '2024',
    stack: ['React', 'JavaScript', 'E-commerce', 'Vercel'],
    summary:
      'A food ordering site with menu browsing, cart, app download sections, backend API, and an admin panel for menu and order management.',
    problem:
      'A food-ordering brand needs a fast menu experience plus a way to manage orders behind the scenes.',
    contributions: [
      'Built a customer-facing menu, cart, and checkout flow.',
      'Added app download sections and promotional content areas.',
      'Developed an admin dashboard for menu and order management.',
      'Created a supporting backend API for data and auth.',
    ],
    outcomes: [
      'A live ordering site, admin dashboard, and backend API for ongoing operations.',
    ],
    repo: 'https://github.com/biesboerTerry-FS/Tomato',
    image: '/screenshots/tomato-main.jpg',
    views: [
      { label: 'Front', url: 'https://tomato-dqkd.vercel.app' },
      { label: 'Back', url: 'https://tomato-green-nine.vercel.app' },
      { label: 'Admin', url: 'https://tomato-admin-ten.vercel.app/dashboard' },
      { label: 'Mobile', url: 'https://tomato-mobile-pm96a8bev-terry-biesboers-projects.vercel.app' },
    ],
    missing: [],
  },
  {
    name: 'Prescripto',
    role: 'Full-Stack Development',
    timeframe: '2024',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Expo'],
    summary:
      'A doctor appointment platform with a patient-facing site, admin/doctor panel, Express/MongoDB API, and Expo mobile app.',
    problem:
      'Scheduling medical appointments involves patients, doctors, and admins—each needing a tailored interface.',
    contributions: [
      'Built a patient-facing React frontend for browsing doctors and booking appointments.',
      'Developed an Express/MongoDB API to handle appointments, users, and roles.',
      'Created an admin/doctor panel and an Expo mobile app for cross-platform access.',
    ],
    outcomes: [
      'A multi-role platform spanning web, admin, and mobile surfaces.',
    ],
    repo: 'https://github.com/biesboerTerry-FS/Prescripto',
    image: '/screenshots/prescripto-main.jpg',
    views: [
      { label: 'Front', url: 'https://frontend-hg1m8ls5a-terry-biesboers-projects.vercel.app' },
      { label: 'Back', url: 'https://backend-6f0maqq3u-terry-biesboers-projects.vercel.app' },
      { label: 'Admin', url: 'https://admin-7yqgsp6gf-terry-biesboers-projects.vercel.app' },
      { label: 'Doctor', url: 'https://admin-7yqgsp6gf-terry-biesboers-projects.vercel.app' },
      { label: 'Mobile', url: 'https://prescripto-mobile-akovorl10-terry-biesboers-projects.vercel.app' },
    ],
    missing: [],
  },
  {
    name: 'QuickStayHotels',
    role: 'Full-Stack Development',
    timeframe: 'In Progress',
    stack: ['React', 'JavaScript'],
    summary:
      'A hotel booking and reservation project currently in development.',
    problem:
      'The live demo is still being prepared, so the project is tracked via its repository.',
    contributions: [
      'Scaffolding the booking and reservation workflow.',
      'Building the frontend interface for searching and selecting stays.',
    ],
    outcomes: [
      'Repository established; live demo coming soon.',
    ],
    repo: 'https://github.com/biesboerTerry-FS/QuickStayHotels',
    image: '/placeholder.svg',
    views: [
      { label: 'Front', url: 'https://quickstayhotels-client-f6mf76dwz-terry-biesboers-projects.vercel.app' },
      { label: 'Back', url: 'https://quickstayhotels-server-qsz6tbj1a-terry-biesboers-projects.vercel.app' },
      { label: 'Admin', url: 'https://quickstayhotels-admin-otrlup00f-terry-biesboers-projects.vercel.app' },
      { label: 'Mobile', url: 'https://quickstayhotels-mobile-h8fr2ntqg-terry-biesboers-projects.vercel.app' },
    ],
    missing: [],
  },
  {
    name: 'HolisticAsF',
    role: 'Full-Stack Development',
    timeframe: 'In Progress',
    stack: ['React', 'JavaScript'],
    summary:
      'A holistic wellness project currently in development.',
    problem:
      'The live demo is still being prepared, so the project is tracked via its repository.',
    contributions: [
      'Planning the wellness-focused feature set and user experience.',
      'Building the frontend foundation for the project.',
    ],
    outcomes: [
      'Repository established; live demo coming soon.',
    ],
    repo: 'https://github.com/biesboerTerry-FS/HolisticAsF',
    image: '/placeholder.svg',
    views: [
      { label: 'Front', url: 'https://holisticasf-client-npki4n8q4-terry-biesboers-projects.vercel.app' },
      { label: 'Back', url: 'https://holisticasf-server-gggdx8mz9-terry-biesboers-projects.vercel.app' },
      { label: 'Admin', url: 'https://holisticasf-admin-bsm3l67qg-terry-biesboers-projects.vercel.app' },
      { label: 'Mobile', url: 'https://holisticasf-mobile-fafg4dixp-terry-biesboers-projects.vercel.app' },
    ],
    missing: [],
  },
];

const missingByProject = projects
  .filter((p) => p.missing.length > 0)
  .map((p) => ({ name: p.name, missing: p.missing }));

export default function ProjectsPage() {
  return (
    <main className="max-w-7xl px-4 py-10 mx-auto sm:px-6 md:py-14">
      <header className="mb-10">
        <p className="mb-2 text-sm font-medium tracking-wide uppercase text-orange-700 dark:text-orange-300">Selected work</p>
        <h1 className="mb-3 text-gray-900 dark:text-white">Projects</h1>
        <p className="max-w-3xl text-lg text-orange-700 dark:text-orange-300">
          A selection of sites and apps I&apos;ve built. Each project reflects a different challenge—e-commerce,
          content publishing, mobile apps, and multi-role platforms. I&apos;m currently completing my Bachelor&apos;s in
          Computer Science for Web Design & Development at Full Sail University and actively seeking opportunities in the field.
        </p>
      </header>

      <div className="grid gap-8">
        {projects.map((project) => (
          <article key={project.name} className="overflow-hidden border rounded-xl border-gray-400/50 bg-white/30 dark:border-gray-700/60 dark:bg-black/10">
            {project.image && (
              <a href={project.views[0]?.url || project.repo} target="_blank" rel="noreferrer" className="block">
                <div className="relative w-full h-64 bg-gray-100 dark:bg-gray-900 sm:h-80 lg:h-96">
                  <Image
                    src={project.image}
                    alt={`${project.name} preview`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 1280px"
                  />
                </div>
              </a>
            )}
            <div className="p-6 sm:p-8">
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

              <div className="flex flex-wrap items-center justify-between gap-4 mt-6 pt-6 border-t border-gray-400/50 dark:border-gray-700/60">
                <div className="flex flex-wrap gap-2">
                  {project.views.map((view) => (
                    <a
                      key={view.label}
                      href={view.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center px-3 py-1.5 text-sm font-medium rounded-md bg-orange-600 text-white hover:bg-orange-500"
                    >
                      {view.label}
                    </a>
                  ))}
                  {project.missing.map((type) => (
                    <span
                      key={type}
                      className="inline-flex items-center justify-center px-3 py-1.5 text-sm font-medium rounded-md border border-orange-600 text-orange-700 dark:text-orange-300 opacity-70"
                      title={`${project.name} - ${type}: needs to be created`}
                    >
                      {type.charAt(0).toUpperCase() + type.slice(1)} (planned)
                    </span>
                  ))}
                </div>
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-orange-700 hover:text-orange-500 dark:text-orange-300 dark:hover:text-orange-400"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub Repo
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      <section className="p-6 mt-10 border rounded-xl border-gray-400/50 bg-white/30 dark:border-gray-700/60 dark:bg-black/10">
        <h2 className="mb-3 text-gray-900 dark:text-white">Deployment inventory</h2>
        <p className="mb-4 text-gray-800 dark:text-gray-200">
          Below is the current state of deployed views for each project. Items marked <span className="font-medium text-orange-700 dark:text-orange-300">planned</span> still need
          a Vercel project/deployment created. The naming convention is <code className="text-sm">sitename - type</code>, where type is frontend, backend, admin, or mobile.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="border-b border-gray-400/50 dark:border-gray-700/60">
              <tr>
                <th className="py-2 pr-4 font-semibold text-gray-900 dark:text-white">Project</th>
                <th className="py-2 pr-4 font-semibold text-gray-900 dark:text-white">Frontend</th>
                <th className="py-2 pr-4 font-semibold text-gray-900 dark:text-white">Backend</th>
                <th className="py-2 pr-4 font-semibold text-gray-900 dark:text-white">Admin</th>
                <th className="py-2 pr-4 font-semibold text-gray-900 dark:text-white">Mobile</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => {
                const has = (type) => project.views.some((v) => v.label.toLowerCase() === type) ? '✅' : (project.missing.includes(type) ? '🔜 planned' : '—');
                return (
                  <tr key={project.name} className="border-b border-gray-400/30 dark:border-gray-700/40 last:border-0">
                    <td className="py-2 pr-4 font-medium text-gray-900 dark:text-white">{project.name}</td>
                    <td className="py-2 pr-4 text-gray-700 dark:text-gray-300">{has('front')}</td>
                    <td className="py-2 pr-4 text-gray-700 dark:text-gray-300">{has('back')}</td>
                    <td className="py-2 pr-4 text-gray-700 dark:text-gray-300">{has('admin')}</td>
                    <td className="py-2 pr-4 text-gray-700 dark:text-gray-300">{has('mobile')}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <section className="p-6 mt-6 border rounded-xl border-gray-400/50 dark:border-gray-700/60">
        <h2 className="mb-2 text-gray-900 dark:text-white">What these projects show</h2>
        <p className="m-0 text-gray-800 dark:text-gray-200">
          Together, these projects highlight a progression from interface implementation to content architecture,
          deployment awareness, and cross-platform thinking. I value work that balances visual clarity,
          technical reliability, and room for future iteration.
        </p>
      </section>
    </main>
  );
}
