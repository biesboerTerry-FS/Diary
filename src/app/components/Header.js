'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { getImagePath } from '../lib/imagePath';
import ThemeToggle from './ThemeToggle';

const links = [
  { href: '/', label: 'Home' },
  { href: '/archive', label: 'Archive' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/now', label: 'Now' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname() || '/';
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const normalized =
    basePath && pathname.startsWith(basePath)
      ? pathname.slice(basePath.length) || '/'
      : pathname;

  return (
    <header className="border-b border-gray-400/60 dark:border-gray-700/60" role="banner">
      <div className="flex flex-col gap-4 max-w-5xl px-4 py-4 mx-auto sm:px-6">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3 no-underline">
            <Image
              src={getImagePath('hubert.png')}
              alt="Hubert skeleton"
              width={48}
              height={48}
              className="hidden object-cover rounded-full dark:block"
              style={{ borderWidth: '2px', borderColor: '#CCD1D8' }}
            />
            <Image
              src={getImagePath('hubert.png')}
              alt="Hubert skeleton"
              width={48}
              height={48}
              className="block object-cover rounded-full dark:hidden invert"
              style={{ borderWidth: '2px', borderColor: '#302C23' }}
            />
            <span className="text-sm font-semibold text-gray-900 dark:text-gray-100 sm:text-base">
              diary of theLiftedGifted
            </span>
          </Link>
          <ThemeToggle />
        </div>
        <nav aria-label="Primary" className="flex flex-wrap gap-x-4 gap-y-2 text-sm sm:text-base">
          {links.map((link) => {
            const active = link.href === '/'
              ? normalized === '/'
              : normalized.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? 'page' : undefined}
                className={`no-underline ${active ? 'text-orange-600 dark:text-orange-400 font-medium' : 'text-orange-700 hover:text-orange-500 dark:text-gray-100 dark:hover:text-orange-400'}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
