export const metadata = {
  title: 'Now',
  description: 'A current snapshot of focus areas, learning, and priorities.',
};

export default function NowPage() {
  const lastUpdated = 'November 17, 2026';

  return (
    <main className="max-w-7xl px-4 py-10 mx-auto sm:px-6 md:py-14">
      <header className="mb-10">
        <p className="mb-2 text-sm font-medium tracking-wide uppercase text-orange-700 dark:text-orange-300">Current snapshot</p>
        <h1 className="mb-3 text-gray-900 dark:text-white">Now</h1>
        <p className="max-w-3xl text-lg text-orange-700 dark:text-orange-300">
          A living snapshot of what I’m focused on right now—what I’m building, learning, and refining. This page helps frame the diary as an ongoing practice, not just an archive.
        </p>
        <p className="mt-3 text-sm text-gray-700 dark:text-gray-300"><strong>Last updated:</strong> {lastUpdated}</p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        <section className="p-6 border rounded-xl border-gray-400/50 dark:border-gray-700/60">
          <h2 className="mb-3 text-gray-900 dark:text-white">Current focus</h2>
          <ul className="space-y-2 text-gray-800 list-disc list-inside dark:text-gray-200">
            <li>Completing my Bachelor’s in Computer Science for Web Design & Development at Full Sail University.</li>
            <li>Shaping this site into a complete portfolio piece with strong navigation, discovery, and content presentation.</li>
            <li>Writing consistently and treating the diary as a record of process, decisions, and incremental progress.</li>
            <li>Improving frontend craft through better accessibility, theming, metadata, and maintainable component patterns.</li>
          </ul>
        </section>

        <section className="p-6 border rounded-xl border-gray-400/50 dark:border-gray-700/60">
          <h2 className="mb-3 text-gray-900 dark:text-white">Learning & exploration</h2>
          <ul className="space-y-2 text-gray-800 list-disc list-inside dark:text-gray-200">
            <li>Next.js App Router patterns for content-heavy sites (routing, metadata, static generation, and feed routes).</li>
            <li>MDX/content workflows that balance authoring simplicity with richer rendering capabilities.</li>
            <li>Practical SEO and discoverability for personal sites: Open Graph, sitemap/robots, and RSS.</li>
            <li>Cross-platform development with Expo and React Native for mobile app experiences.</li>
          </ul>
        </section>
      </div>

      <div className="grid gap-6 mt-6 md:grid-cols-2">
        <section className="p-6 border rounded-xl border-gray-400/50 dark:border-gray-700/60">
          <h2 className="mb-3 text-gray-900 dark:text-white">Near-term goals</h2>
          <ul className="space-y-2 text-gray-800 list-disc list-inside dark:text-gray-200">
            <li>Finish my degree and transition into a full-time web development role.</li>
            <li>Continue expanding the archive with meaningful, dated entries and better tagging/organization.</li>
            <li>Refine project case studies with clearer outcomes, visuals, and links to live work or repositories.</li>
            <li>Polish content readability and accessibility based on real usage and review.</li>
          </ul>
        </section>

        <section className="p-6 border rounded-xl border-gray-400/50 dark:border-gray-700/60">
          <h2 className="mb-3 text-gray-900 dark:text-white">What I value right now</h2>
          <ul className="space-y-2 text-gray-800 list-disc list-inside dark:text-gray-200">
            <li><strong>Consistency:</strong> small, steady progress in writing and building.</li>
            <li><strong>Clarity:</strong> interfaces and content that are easy to understand and navigate.</li>
            <li><strong>Craft:</strong> attention to details that improve usability and trust.</li>
            <li><strong>Momentum:</strong> shipping improvements regularly instead of waiting for “perfect.”</li>
          </ul>
        </section>
      </div>

      <section className="p-6 mt-6 border rounded-xl border-gray-400/50 bg-white/30 dark:border-gray-700/60 dark:bg-black/10">
        <h2 className="mb-3 text-gray-900 dark:text-white">Open to opportunities</h2>
        <p className="text-gray-800 dark:text-gray-200">
          I’m actively looking for internships, entry-level positions, and freelance projects in web development, UI implementation,
          and full-stack application work. If you have an opportunity or just want to connect, please reach out through the{" "}
          <a href="/contact" className="text-orange-700 hover:text-orange-500 dark:text-orange-300 dark:hover:text-orange-400">contact page</a>.
        </p>
      </section>

      <section className="p-6 mt-6 border rounded-xl border-gray-400/50 bg-white/30 dark:border-gray-700/60 dark:bg-black/10">
        <h2 className="mb-3 text-gray-900 dark:text-white">Timeline snapshot</h2>
        <ol className="space-y-3 text-gray-800 list-decimal list-inside dark:text-gray-200">
          <li><strong>March 2026:</strong> Launched the diary foundation and established the core posting workflow.</li>
          <li><strong>April–October 2026:</strong> Built consistency by adding entries across each month and growing the archive.</li>
          <li><strong>November 2026:</strong> Expanded the project into a fuller portfolio experience with navigation, discovery, metadata, and UX enhancements.</li>
          <li><strong>Next:</strong> Graduate, continue iterating on content quality, case studies, and reusable site features.</li>
        </ol>
      </section>
    </main>
  );
}
