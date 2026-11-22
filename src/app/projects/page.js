import ProjectThumbnail from '../components/ProjectThumbnail';
import { projects, projectAnchor } from '../lib/projects';

export const metadata = {
  title: 'Projects',
  description: 'Selected projects, apps, and technical highlights.',
};

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
          <article
            key={project.name}
            id={projectAnchor(project.name)}
            className="overflow-hidden border rounded-xl border-gray-400/50 bg-white/30 dark:border-gray-700/60 dark:bg-black/10 scroll-mt-6"
          >
            {project.image && (
              <ProjectThumbnail
                src={project.image}
                alt={project.name}
                liveUrl={project.views[0]?.url || project.repo}
              />
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
