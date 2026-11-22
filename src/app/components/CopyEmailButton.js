'use client';

import { useToast } from './ToastProvider';

export default function CopyEmailButton({ email }) {
  const toast = useToast();

  async function copyEmail() {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        const input = document.createElement('textarea');
        input.value = email;
        input.style.position = 'fixed';
        input.style.opacity = '0';
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
      }
      toast('Email address copied to clipboard', 'success');
    } catch (_) {
      toast('Could not copy — please select the address manually', 'info');
    }
  }

  return (
    <button
      type="button"
      onClick={copyEmail}
      className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium border rounded-md border-orange-600 text-orange-700 hover:bg-orange-50 dark:text-orange-300 dark:hover:bg-orange-950/30"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4" aria-hidden="true">
        <rect x="9" y="9" width="11" height="11" rx="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15V5a2 2 0 012-2h8" />
      </svg>
      Copy email
    </button>
  );
}
