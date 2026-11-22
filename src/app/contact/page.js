import { siteConfig } from '../lib/site';
import CopyEmailButton from '../components/CopyEmailButton';

export const metadata = {
  title: 'Contact',
  description: 'Ways to get in touch, collaborate, or follow my work.',
};

export default function ContactPage() {
  return (
    <main className="max-w-7xl px-4 py-10 mx-auto sm:px-6 md:py-14">
      <header className="mb-10">
        <p className="mb-2 text-sm font-medium tracking-wide uppercase text-orange-700 dark:text-orange-300">Let’s connect</p>
        <h1 className="mb-3 text-gray-900 dark:text-white">Contact</h1>
        <p className="max-w-3xl text-lg text-orange-700 dark:text-orange-300">
          Interested in the work, have feedback on the site, or want to talk about a project or collaboration? I’d be glad to hear from you.
          I’m currently completing my Bachelor’s in Computer Science for Web Design & Development at Full Sail University and actively seeking opportunities in the field.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="p-6 border rounded-xl border-gray-400/50 dark:border-gray-700/60">
          <h2 className="mb-3 text-gray-900 dark:text-white">Direct links</h2>
          <ul className="space-y-3 text-gray-800 dark:text-gray-200">
            <li>
              <strong>Email:</strong>{' '}
              <a href={`mailto:${siteConfig.email}`} className="text-orange-700 hover:text-orange-500 dark:text-orange-300 dark:hover:text-orange-400">
                {siteConfig.email}
              </a>
            </li>
            <li>
              <strong>Location:</strong>{' '}
              <span className="text-orange-700 dark:text-orange-300">San Diego, CA</span>
            </li>
            <li>
              <strong>GitHub:</strong>{' '}
              <a href={siteConfig.github} target="_blank" rel="noreferrer" className="text-orange-700 hover:text-orange-500 dark:text-orange-300 dark:hover:text-orange-400">
                {siteConfig.github}
              </a>
            </li>
          </ul>
          <p className="mt-4 text-sm text-gray-700 dark:text-gray-300">
            For the fastest response, email is best. Include a short subject and any relevant links or context.
          </p>
        </div>

        <div className="p-6 border rounded-xl border-gray-400/50 bg-white/30 dark:border-gray-700/60 dark:bg-black/10">
          <h2 className="mb-3 text-gray-900 dark:text-white">Send a quick message</h2>
          <p className="text-gray-800 dark:text-gray-200">
            This site is statically exported, so the contact flow uses <code>mailto:</code> links for broad compatibility (no backend required).
            Use the button below to open your email client with a prefilled subject line.
          </p>
          <div className="flex flex-wrap gap-3 mt-4">
            <a
              href={`mailto:${siteConfig.email}?subject=${encodeURIComponent('Portfolio inquiry')}`}
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-orange-600 rounded-md hover:bg-orange-500"
            >
              Email about a project
            </a>
            <a
              href={`mailto:${siteConfig.email}?subject=${encodeURIComponent('Site feedback')}`}
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium border rounded-md border-orange-600 text-orange-700 hover:bg-orange-50 dark:text-orange-300 dark:hover:bg-orange-950/30"
            >
              Share feedback
            </a>
            <CopyEmailButton email={siteConfig.email} />
          </div>
        </div>
      </section>

      <section className="grid gap-6 mt-6 md:grid-cols-2">
        <div className="p-6 border rounded-xl border-gray-400/50 dark:border-gray-700/60">
          <h2 className="mb-3 text-gray-900 dark:text-white">Good reasons to reach out</h2>
          <ul className="space-y-2 text-gray-800 list-disc list-inside dark:text-gray-200">
            <li>Frontend development or UI implementation opportunities</li>
            <li>Full-stack projects using React, Next.js, Node.js, Express, or MongoDB</li>
            <li>Internships or entry-level roles for a soon-to-graduate web developer</li>
            <li>Content-driven website or portfolio/blog projects</li>
            <li>Collaboration on design + development work</li>
            <li>Feedback, suggestions, or questions about this site</li>
          </ul>
        </div>

        <div className="p-6 border rounded-xl border-gray-400/50 dark:border-gray-700/60">
          <h2 className="mb-3 text-gray-900 dark:text-white">Helpful details to include</h2>
          <ul className="space-y-2 text-gray-800 list-disc list-inside dark:text-gray-200">
            <li>A brief summary of what you’re looking for</li>
            <li>Timeline or key dates (if applicable)</li>
            <li>Links to relevant references, repos, or examples</li>
            <li>The best way and time to follow up</li>
          </ul>
        </div>
      </section>

      <section className="p-6 mt-6 border rounded-xl border-gray-400/50 dark:border-gray-700/60">
        <h2 className="mb-3 text-gray-900 dark:text-white">Elsewhere on this site</h2>
        <p className="m-0 text-gray-800 dark:text-gray-200">
          If you want more context before reaching out, you can learn more <a href="/about" className="text-orange-700 hover:text-orange-500 dark:text-orange-300 dark:hover:text-orange-400">about me</a>,
          browse <a href="/projects" className="text-orange-700 hover:text-orange-500 dark:text-orange-300 dark:hover:text-orange-400">selected projects</a>,
          see what I’m focused on <a href="/now" className="text-orange-700 hover:text-orange-500 dark:text-orange-300 dark:hover:text-orange-400">now</a>,
          or read recent entries in the <a href="/archive" className="text-orange-700 hover:text-orange-500 dark:text-orange-300 dark:hover:text-orange-400">archive</a>.
        </p>
      </section>
    </main>
  );
}
