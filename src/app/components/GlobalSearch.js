'use client';

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
} from 'react';
import { useRouter } from 'next/navigation';

const noopSubscribe = () => () => {};

function getShortcutSnapshot() {
  if (typeof navigator === 'undefined') return 'Ctrl K';
  return /Mac|iPhone|iPad|iPod/.test(
    navigator.platform || navigator.userAgent || ''
  )
    ? '⌘ K'
    : 'Ctrl K';
}

const GROUP_ORDER = ['page', 'project', 'post'];

const GROUP_META = {
  page: { label: 'Pages', short: 'Page' },
  project: { label: 'Projects', short: 'Project' },
  post: { label: 'Diary posts', short: 'Post' },
};

const GROUP_LIMIT = { page: 5, project: 5, post: 6 };

function Icon({ type }) {
  if (type === 'page') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 3h7l5 5v13H7zM14 3v5h5M10 12h6M10 16h6" />
      </svg>
    );
  }
  if (type === 'project') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h6l2 2h8v10H4z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 4h9l5 5v11H5zM14 4v5h5M8 13h8M8 17h5" />
    </svg>
  );
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function Highlight({ text, query }) {
  const clean = query.trim();
  if (!clean) return text;
  const parts = String(text || '').split(new RegExp(`(${escapeRegExp(clean)})`, 'ig'));
  return parts.map((part, index) =>
    part.toLowerCase() === clean.toLowerCase() ? (
      <mark key={index} className="search-mark">{part}</mark>
    ) : (
      part
    )
  );
}

function rankItems(items, query) {
  const clean = query.trim().toLowerCase();
  if (!clean) {
    const recentPosts = items.filter((item) => item.type === 'post').slice(0, 3);
    const featuredProjects = items.filter((item) => item.type === 'project').slice(0, 2);
    const pages = items.filter((item) => item.type === 'page');
    return [...pages, ...featuredProjects, ...recentPosts];
  }

  const tokens = clean.split(/\s+/).filter(Boolean);
  return items
    .map((item, index) => {
      const title = (item.title || '').toLowerCase();
      const subtitle = (item.subtitle || '').toLowerCase();
      const description = (item.description || '').toLowerCase();
      const keywords = (item.keywords || '').toLowerCase();
      const haystack = `${title} ${subtitle} ${description} ${keywords}`;
      if (!tokens.every((token) => haystack.includes(token))) return null;

      let score = 0;
      if (title === clean) score += 100;
      else if (title.startsWith(clean)) score += 60;
      else if (title.includes(clean)) score += 40;
      if (subtitle.includes(clean)) score += 12;
      if (keywords.includes(clean)) score += 8;
      if (description.includes(clean)) score += 4;
      // Keep the original ordering stable for equally-scored results.
      return { item, score: score - index / 1000 };
    })
    .filter(Boolean)
    .sort((a, b) => b.score - a.score)
    .map(({ item }) => item);
}

export default function GlobalSearch({ items = [] }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [searching, setSearching] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const shortcut = useSyncExternalStore(
    noopSubscribe,
    getShortcutSnapshot,
    () => 'Ctrl K'
  );

  const inputRef = useRef(null);
  const dialogRef = useRef(null);
  const triggerRef = useRef(null);
  const previousFocusRef = useRef(null);
  const listRef = useRef(null);
  const searchTimerRef = useRef(null);

  useEffect(() => () => window.clearTimeout(searchTimerRef.current), []);

  const close = useCallback(() => {
    window.clearTimeout(searchTimerRef.current);
    setOpen(false);
    setQuery('');
    setSearching(false);
    setActiveIndex(0);
    const target = previousFocusRef.current || triggerRef.current;
    window.requestAnimationFrame(() => target?.focus?.());
  }, []);

  useEffect(() => {
    function onKeyDown(event) {
      const isShortcut = (event.metaKey || event.ctrlKey) &&
        event.key.toLowerCase() === 'k';
      if (isShortcut) {
        event.preventDefault();
        if (open) {
          close();
        } else {
          previousFocusRef.current = document.activeElement;
          setOpen(true);
        }
        return;
      }

      if (!open && event.key === '/' && !event.metaKey && !event.ctrlKey && !event.altKey) {
        const tag = document.activeElement?.tagName?.toLowerCase();
        const typing = tag === 'input' || tag === 'textarea' ||
          document.activeElement?.isContentEditable;
        if (!typing) {
          event.preventDefault();
          previousFocusRef.current = document.activeElement;
          setOpen(true);
        }
      }
    }

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open, close]);

  useEffect(() => {
    if (!open) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const focusTimer = window.setTimeout(() => inputRef.current?.focus(), 20);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.clearTimeout(focusTimer);
    };
  }, [open]);

  // Brief shimmer gives immediate feedback while the query is being ranked.
  function handleQueryChange(event) {
    setQuery(event.target.value);
    setSearching(true);
    setActiveIndex(0);
    window.clearTimeout(searchTimerRef.current);
    searchTimerRef.current = window.setTimeout(() => setSearching(false), 130);
  }

  const ranked = useMemo(() => rankItems(items, query), [items, query]);

  const groups = useMemo(() => {
    return GROUP_ORDER.map((type) => ({
      type,
      label: GROUP_META[type].label,
      items: ranked.filter((item) => item.type === type).slice(0, GROUP_LIMIT[type]),
    })).filter((group) => group.items.length > 0);
  }, [ranked]);

  const flatResults = useMemo(
    () => groups.flatMap((group) => group.items),
    [groups]
  );

  const safeIndex = Math.min(activeIndex, Math.max(0, flatResults.length - 1));

  useEffect(() => {
    const active = listRef.current?.querySelector('[data-active="true"]');
    active?.scrollIntoView({ block: 'nearest' });
  }, [safeIndex, searching]);

  const goTo = useCallback((item) => {
    if (!item) return;
    setOpen(false);
    router.push(item.href);
    // Native hash scrolling covers full page loads; this covers soft nav.
    const hash = item.href.includes('#') ? item.href.split('#')[1] : null;
    if (hash) {
      window.setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ block: 'start' });
      }, 150);
    }
  }, [router]);

  function onDialogKeyDown(event) {
    if (event.key === 'Escape') {
      event.preventDefault();
      close();
      return;
    }
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setActiveIndex(
        flatResults.length ? (safeIndex + 1) % flatResults.length : 0
      );
      return;
    }
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      setActiveIndex(
        flatResults.length
          ? (safeIndex - 1 + flatResults.length) % flatResults.length
          : 0
      );
      return;
    }
    if (event.key === 'Enter') {
      event.preventDefault();
      goTo(flatResults[safeIndex]);
      return;
    }
    if (event.key === 'Tab') {
      const focusable = dialogRef.current?.querySelectorAll(
        'button:not([disabled]), input:not([disabled]), [href], [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable || focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  }

  let resultIndex = -1;

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => {
          previousFocusRef.current = document.activeElement;
          setOpen(true);
        }}
        aria-label="Search this site"
        aria-keyshortcuts="Meta+K Control+K"
        className="inline-flex items-center gap-2 h-10 px-3 text-sm rounded-md border border-gray-400/60 text-gray-600 bg-white/40 hover:text-orange-600 hover:border-orange-400 dark:border-gray-700 dark:text-gray-300 dark:bg-black/10 dark:hover:text-orange-400"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4" aria-hidden="true">
          <circle cx="11" cy="11" r="7" />
          <path strokeLinecap="round" d="M20 20l-4-4" />
        </svg>
        <span className="hidden sm:inline">Search</span>
        <kbd className="hidden sm:inline-flex items-center px-1.5 py-0.5 text-[11px] font-medium rounded border border-gray-400/50 bg-white/60 dark:border-gray-600 dark:bg-black/20">
          {shortcut}
        </kbd>
      </button>

      {open && (
        <div
          className="search-overlay"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) close();
          }}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="search-title"
            className="search-dialog"
            onKeyDown={onDialogKeyDown}
          >
            <h2 id="search-title" className="sr-only">Search the diary</h2>

            <div className="flex items-center gap-3 px-4 border-b border-gray-300/70 dark:border-gray-700/70">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 shrink-0 text-orange-600 dark:text-orange-400" aria-hidden="true">
                <circle cx="11" cy="11" r="7" />
                <path strokeLinecap="round" d="M20 20l-4-4" />
              </svg>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={handleQueryChange}
                placeholder="Search posts, projects, and pages…"
                role="combobox"
                aria-expanded="true"
                aria-controls="search-results"
                aria-autocomplete="list"
                aria-activedescendant={
                  flatResults[safeIndex]
                    ? `search-option-${safeIndex}`
                    : undefined
                }
                className="w-full h-14 bg-transparent text-base text-gray-900 placeholder:text-gray-500 outline-none dark:text-gray-100 dark:placeholder:text-gray-500"
              />
              <button
                type="button"
                onClick={close}
                className="shrink-0 px-2 py-1 text-xs rounded border border-gray-300 text-gray-600 hover:text-orange-600 dark:border-gray-700 dark:text-gray-300 dark:hover:text-orange-400"
                aria-label="Close search"
              >
                esc
              </button>
            </div>

            <div className="search-results" ref={listRef} id="search-results" role="listbox" aria-label="Search results">
              {searching ? (
                <div className="p-3 space-y-2" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <div key={index} className="flex items-center gap-3 p-2">
                      <span className="skeleton w-8 h-8 rounded-md shrink-0" />
                      <div className="flex-1 space-y-2">
                        <span className="skeleton block h-3.5 w-1/2" />
                        <span className="skeleton block h-2.5 w-3/4" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : flatResults.length === 0 ? (
                <div className="search-empty">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-10 h-10 mb-3 text-orange-500 dark:text-orange-400" aria-hidden="true">
                    <circle cx="11" cy="11" r="7" />
                    <path strokeLinecap="round" d="M20 20l-4-4M8.5 8.5l5 5M13.5 8.5l-5 5" />
                  </svg>
                  <p className="mb-1 font-medium text-gray-900 dark:text-gray-100">
                    No matches for {query.trim() ? `“${query.trim()}”` : 'that search'}
                  </p>
                  <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                    Try a different word, a tag, or a project name.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setQuery('');
                      inputRef.current?.focus();
                    }}
                    className="px-3 py-1.5 text-sm font-medium rounded-md bg-orange-600 text-white hover:bg-orange-500"
                  >
                    Clear search
                  </button>
                </div>
              ) : (
                groups.map((group) => (
                  <div key={group.type} className="py-1">
                    <p className="px-4 pt-2 pb-1 text-[11px] font-semibold uppercase tracking-wider text-orange-700/80 dark:text-orange-300/80">
                      {group.label}
                    </p>
                    {group.items.map((item) => {
                      resultIndex += 1;
                      const index = resultIndex;
                      const active = index === safeIndex;
                      return (
                        <div
                          key={item.id}
                          id={`search-option-${index}`}
                          role="option"
                          aria-selected={active}
                          data-active={active}
                          tabIndex={-1}
                          onMouseEnter={() => setActiveIndex(index)}
                          onClick={() => goTo(item)}
                          className={`search-result ${active ? 'search-result--active' : ''}`}
                        >
                          <span className="search-result__icon"><Icon type={item.type} /></span>
                          <span className="min-w-0 flex-1">
                            <span className="block truncate text-sm font-medium text-gray-900 dark:text-gray-100">
                              <Highlight text={item.title} query={query} />
                            </span>
                            <span className="block truncate text-xs text-orange-700 dark:text-orange-300">
                              {item.subtitle}
                            </span>
                            {item.description && (
                              <span className="block truncate text-xs text-gray-600 dark:text-gray-400">
                                {item.description}
                              </span>
                            )}
                          </span>
                          <span className="hidden sm:block shrink-0 text-[10px] uppercase tracking-wide text-gray-500 dark:text-gray-500">
                            {GROUP_META[item.type].short}
                          </span>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 shrink-0 text-gray-500" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      );
                    })}
                  </div>
                ))
              )}
            </div>

            <div className="search-footer">
              <span><kbd>↑</kbd><kbd>↓</kbd> navigate</span>
              <span><kbd>↵</kbd> open</span>
              <span><kbd>esc</kbd> close</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
