// Shared project data. Kept in its own module so the projects page and the
// global search index always stay in sync.
export const projects = [
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
    repo: 'https://github.com/biesboerTerry-FS/LindberghUltimateFrisbee',
    image: '/screenshots/lindbergh-main.jpg',
    views: [
      { label: 'Front', url: 'https://lindberghultimatefrisbee-7mq7brp51-terry-biesboers-projects.vercel.app' },
      { label: 'Admin', url: 'https://lindberghultimatefrisbee-7mq7brp51-terry-biesboers-projects.vercel.app/admin/login' },
      { label: 'Mobile', url: 'https://lindbergh-ultimate-mobile-n6xhd7h6x-terry-biesboers-projects.vercel.app' },
    ],
    missing: [],
  },
  {
    name: 'thatDevTerry Portfolio',
    role: 'Design & Frontend Development',
    timeframe: '2026',
    stack: ['React', 'React Router', 'Sass', 'JavaScript', 'Vercel'],
    summary:
      'A personal portfolio site for thatDevTerry that presents selected work, background, and contact details in a focused single-page experience.',
    problem:
      'A clear, polished portfolio was needed to showcase projects, education, and availability in one easy-to-navigate place.',
    contributions: [
      'Built a responsive React single-page app with routing for portfolio sections.',
      'Styled the interface with Sass and component-based layouts for consistent visual design.',
      'Deployed the site to Vercel with a dedicated /portfolio route.',
    ],
    outcomes: [
      'A live portfolio that introduces thatDevTerry and links to selected projects.',
    ],
    repo: 'https://github.com/biesboerTerry-FS/thatDevTerry.git',
    image: '/screenshots/thatdevterry-main.jpg',
    views: [
      { label: 'Front', url: 'https://portfolio-three-pink-69.vercel.app/portfolio' },
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
      'Connected Stripe test-mode Checkout with session verification on the server.',
      'Added a full-screen mobile menu and accessible admin skip link.',
    ],
    outcomes: [
      'A functioning e-commerce frontend, admin panel, mobile app, and backend with test-mode payments.',
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
      'Added a web build with demo login, a separately deployed Express API, and offline Pokémon fallback.',
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
      'Wired Stripe test-mode Checkout and session verification for demo orders.',
      'Added a responsive hamburger menu and accessible food cards and contact page.',
    ],
    outcomes: [
      'A live ordering site with admin, backend API, and test-mode payment flow.',
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
      'Provisioned Clerk authentication for patient and admin surfaces.',
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
    timeframe: '2026',
    stack: ['React', 'Vite', 'Express', 'Clerk', 'Stripe', 'Vercel'],
    summary:
      'A hotel booking platform with room search, Clerk authentication, owner admin, responsive navigation, and Stripe test checkout for reservations.',
    problem:
      'A booking demo needs discovery, authenticated owners, and a safe test payment path across web and admin surfaces.',
    contributions: [
      'Built the room search, booking, and owner admin workflows.',
      'Integrated Clerk with authorized parties, webhook user sync, and multi-origin CORS.',
      'Replaced the mocked card form with Stripe test-mode Checkout and a success route.',
      'Added a responsive hamburger menu and accessible light/dark styling.',
    ],
    outcomes: [
      'A live booking demo with authentication, owner tools, and test-mode payments.',
    ],
    repo: 'https://github.com/biesboerTerry-FS/QuickStayHotels',
    image: '/placeholder.svg',
    views: [
      { label: 'Front', url: 'https://quickstayhotels-client.vercel.app' },
      { label: 'Back', url: 'https://quickstayhotels-server.vercel.app' },
      { label: 'Admin', url: 'https://quickstayhotels-admin.vercel.app' },
      { label: 'Mobile', url: 'https://quickstayhotels-mobile.vercel.app' },
    ],
    missing: [],
  },
  {
    name: 'HolisticAsF',
    role: 'Full-Stack Development',
    timeframe: '2026',
    stack: ['React', 'Vite', 'Express', 'MongoDB', 'Expo', 'Vercel'],
    summary:
      'A holistic wellness storefront with a 24-product catalog shared with mobile, cart, Stripe test checkout, Clerk sign-in, dark/light themes, admin panel, and companion app.',
    problem:
      'A wellness brand needs one catalog and checkout that work consistently across web, admin, and mobile surfaces.',
    contributions: [
      'Built a shared 24-product catalog used by both the web storefront and mobile app.',
      'Added cart, cash-on-delivery, and Stripe test-mode checkout with a dedicated success flow.',
      'Integrated Clerk sign-in, dark/light theming, and accessible product cards and modals.',
      'Deployed the frontend, admin, backend, and mobile app as separate Vercel projects.',
    ],
    outcomes: [
      'A live multi-surface wellness demo with browsing, cart, test payments, and themed mobile experience.',
    ],
    repo: 'https://github.com/biesboerTerry-FS/HolisticAsF',
    image: '/screenshots/holisticasf-main.jpg',
    views: [
      { label: 'Front', url: 'https://holisticasf-client.vercel.app' },
      { label: 'Back', url: 'https://holisticasf-server.vercel.app' },
      { label: 'Admin', url: 'https://holisticasf-admin.vercel.app' },
      { label: 'Mobile', url: 'https://holisticasf-mobile.vercel.app' },
    ],
    missing: [],
  },
];

export const missingByProject = projects
  .filter((p) => p.missing.length > 0)
  .map((p) => ({ name: p.name, missing: p.missing }));

export function projectAnchor(name) {
  return String(name)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}
