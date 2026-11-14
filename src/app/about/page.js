import Link from 'next/link';
import { siteConfig } from '../lib/site';

export const metadata = {
  title: 'About',
  description: `About ${siteConfig.author} — background, skills, process, and what this portfolio demonstrates.`,
};

const principles = [
  {
    title: 'Clarity first',
    text: 'I prioritize readable layouts, clear hierarchy, and interfaces that help people find what they need quickly.',
  },
  {
    title: 'Accessible by default',
    text: 'Semantic structure, keyboard support, focus states, and thoughtful contrast are part of the build—not afterthoughts.',
  },
  {
    title: 'Content with purpose',
    text: 'Whether it’s a diary entry or a project case study, I aim to make content easy to browse, scan, and revisit.',
  },
  {
    title: 'Iterative growth',
    text: 'I treat projects as living systems: ship a solid foundation, learn from it, and improve through consistent iteration.',
  },
];

export default function AboutPage() {
  return (
    <main className="max-w-5xl px-4 py-10 mx-auto sm:px-6 md:py-14">
      <header className="mb-10">
        <p className="mb-2 text-sm font-medium tracking-wide uppercase text-orange-700 dark:text-orange-300">Portfolio & Diary</p>
        <h1 className="mb-3 text-gray-900 dark:text-white">About</h1>
        <p className="max-w-3xl text-lg text-orange-700 dark:text-orange-300">
          I’m {siteConfig.author}, a web-focused creator building thoughtful digital experiences through code, design, and writing.
          This site blends a daily diary with a portfolio to show both my process and my progress over time.
        </p>
      </header>

      <section className="grid gap-8 md:grid-cols-[1.2fr_1fr]">
        <div className="space-y-4 text-gray-800 dark:text-gray-200">
          <h2 className="text-gray-900 dark:text-white">Background</h2>
          <p>
            My work sits at the intersection of frontend development and content-driven design. I enjoy taking ideas from rough notes
            to polished, usable interfaces—whether that means building a blog system, shaping a project page, or refining the details
            that make a site feel cohesive.
          </p>
          <p>
            The diary side of this site captures consistency: documenting what I’m learning, what I’m building, and how my thinking evolves.
            The portfolio side highlights the technical and design decisions behind that work, including structure, accessibility, and maintainability.
          </p>
          <p>
            I’m especially interested in projects where strong fundamentals matter: clean information architecture, responsive layouts,
            readable typography, and systems that can grow without becoming fragile.
          </p>
        </div>

        <aside className="p-6 border rounded-xl border-gray-400/50 bg-white/30 dark:border-gray-700/60 dark:bg-black/10">
          <h2 className="mb-3 text-gray-900 dark:text-white">Skills & tools</h2>
          <ul className="space-y-2 text-gray-800 list-disc list-inside dark:text-gray-200">
            <li><strong>Frontend:</strong> Next.js (App Router), React, JavaScript, semantic HTML</li>
            <li><strong>Styling:</strong> Tailwind CSS, responsive design, theming, layout systems</li>
            <li><strong>Content:</strong> Markdown/MDX pipelines, frontmatter, metadata, archive organization</li>
            <li><strong>Quality:</strong> accessibility-minded UI, SEO basics, performance-aware static builds</li>
            <li><strong>Workflow:</strong> iterative development, component reuse, deployment-ready static export</li>
          </ul>
        </aside>
      </section>

      <section className="mt-12">
        <h2 className="mb-4 text-gray-900 dark:text-white">How I approach work</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {principles.map((item) => (
            <article key={item.title} className="p-5 border rounded-lg border-gray-400/50 dark:border-gray-700/60">
              <h3 className="mb-2 text-lg text-gray-900 dark:text-white">{item.title}</h3>
              <p className="m-0 text-gray-800 dark:text-gray-200">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="mb-4 text-gray-900 dark:text-white">What this project demonstrates</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            ['Content-driven architecture', 'A Markdown/MDX-based post system with parsing, sorting, excerpts, reading time, tags, and previous/next navigation.'],
            ['Discovery & navigation', 'A searchable, filterable archive grouped by month/year, tag browsing, and a homepage that surfaces recent entries.'],
            ['Portfolio-ready presentation', 'Dedicated About, Projects, Now, and Contact pages that frame the diary as a complete personal site.'],
            ['Production-minded polish', 'SEO metadata, Open Graph/Twitter cards, sitemap, robots, RSS feed routes, and static-export compatibility.'],
            ['Accessible theming & UX', 'Light/dark/system theme support, keyboard-friendly controls, skip link, focus styles, and improved content readability.'],
            ['Rich content rendering', 'MDX enhancements including table-of-contents support, styled code/content elements, callouts, and improved media presentation.'],
          ].map(([title, desc]) => (
            <article key={title} className="p-5 border rounded-lg border-gray-400/50 dark:border-gray-700/60">
              <h3 className="mb-2 text-lg text-gray-900 dark:text-white">{title}</h3>
              <p className="m-0 text-gray-800 dark:text-gray-200">{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="p-6 mt-12 border rounded-xl border-gray-400/50 bg-white/30 dark:border-gray-700/60 dark:bg-black/10">
        <h2 className="mb-3 text-gray-900 dark:text-white">Currently open to</h2>
        <p className="text-gray-800 dark:text-gray-200">
          I’m interested in opportunities and collaborations involving frontend development, content-driven websites, UI implementation,
          and portfolio/product storytelling. If you’d like to connect, the best place to start is the contact page.
        </p>
        <div className="flex flex-wrap gap-4 mt-4 text-sm">
          <Link href="/projects" className="text-orange-700 hover:text-orange-500 dark:text-orange-300 dark:hover:text-orange-400">View projects →</Link>
          <Link href="/archive" className="text-orange-700 hover:text-orange-500 dark:text-orange-300 dark:hover:text-orange-400">Read the diary →</Link>
          <Link href="/contact" className="text-orange-700 hover:text-orange-500 dark:text-orange-300 dark:hover:text-orange-400">Get in touch →</Link>
        </div>
      </section>
    </main>
  );
}
