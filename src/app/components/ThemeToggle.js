'use client';

import { useEffect, useState } from 'react';

function getIsDark() {
  if (typeof document === 'undefined') return false;
  return document.documentElement.classList.contains('dark');
}

function setTheme(dark) {
  const root = document.documentElement;
  root.classList.toggle('dark', dark);
  root.style.colorScheme = dark ? 'dark' : 'light';
  try {
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  } catch (_) {}
}

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const isDark = getIsDark();
    setDark(isDark);
    document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
    setMounted(true);
  }, []);

  function toggle() {
    const nextDark = !getIsDark();
    setTheme(nextDark);
    setDark(nextDark);
  }

  if (!mounted) {
    return <div className="w-10 h-10" aria-hidden="true" />;
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="inline-flex items-center justify-center w-10 h-10 rounded-md border border-gray-400/60 text-orange-700 hover:text-orange-500 hover:border-orange-400 dark:border-gray-700 dark:text-gray-100 dark:hover:text-orange-400"
    >
      {dark ? (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5" aria-hidden="true">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5" aria-hidden="true">
          <path d="M21 12.79A9 9 0 1 1 11.21 3c.2 0 .4 0 .6.02A7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}
