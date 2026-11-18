'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function ProjectThumbnail({ src, alt, liveUrl }) {
  const [expanded, setExpanded] = useState(false);
  const previewRef = useRef(null);

  useEffect(() => {
    if (expanded && previewRef.current) {
      previewRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [expanded]);

  return (
    <div>
      <button
        type="button"
        onClick={() => setExpanded(true)}
        aria-label={`Open full page preview of ${alt}`}
        className="block w-full text-left"
      >
        <div className="relative w-full h-64 bg-gray-100 dark:bg-gray-900 sm:h-80 lg:h-96">
          <Image
            src={src}
            alt={`${alt} preview`}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 1280px"
          />
        </div>
      </button>

      {expanded && (
        <div ref={previewRef} className="p-4 border-t border-gray-400/50 dark:border-gray-700/60">
          <div className="flex items-center justify-between gap-4 mb-3">
            <p className="text-sm font-medium text-gray-900 dark:text-white">Full page preview</p>
            <button
              type="button"
              onClick={() => setExpanded(false)}
              className="text-sm font-medium text-orange-700 hover:text-orange-500 dark:text-orange-300 dark:hover:text-orange-400"
            >
              Close preview
            </button>
          </div>
          <div className="overflow-hidden border rounded-lg border-gray-400/50 bg-white dark:border-gray-700/60">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt={`${alt} full page preview`} className="w-full h-auto" />
          </div>
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-3 py-1.5 mt-3 text-sm font-medium rounded-md bg-orange-600 text-white hover:bg-orange-500"
            >
              Open live site
            </a>
          )}
        </div>
      )}
    </div>
  );
}
