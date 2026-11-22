'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

const ToastContext = createContext(null);

const TONE_LABELS = {
  success: 'Success',
  info: 'Info',
  accent: 'Update',
};

function Toast({ toast, onDismiss }) {
  useEffect(() => {
    const timer = window.setTimeout(() => onDismiss(toast.id), 3600);
    return () => window.clearTimeout(timer);
  }, [toast.id, onDismiss]);

  return (
    <div className={`toast toast--${toast.tone}`} role="status" aria-live="polite">
      <span className="toast__mark" aria-hidden="true">
        {toast.tone === 'success' ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="w-3.5 h-3.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="w-3.5 h-3.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8h.01M11 12h1v4h1" />
            <circle cx="12" cy="12" r="9" />
          </svg>
        )}
      </span>
      <div className="toast__body">
        <span className="toast__label">{TONE_LABELS[toast.tone] || TONE_LABELS.info}</span>
        <span className="toast__message">{toast.message}</span>
      </div>
      <button
        type="button"
        className="toast__close"
        onClick={() => onDismiss(toast.id)}
        aria-label={`Dismiss ${TONE_LABELS[toast.tone] || 'notification'} notification`}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4" aria-hidden="true">
          <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>
      <span className="toast__timer" aria-hidden="true" />
    </div>
  );
}

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  const nextId = useRef(0);

  const dismiss = useCallback((id) => {
    setToasts((current) => current.filter((toast) => toast.id !== id));
  }, []);

  const toast = useCallback((message, tone = 'info') => {
    if (!message) return;
    const id = ++nextId.current;
    setToasts((current) => [...current.slice(-2), { id, message, tone }]);
  }, []);

  return (
    <ToastContext.Provider value={toast}>
      {children}
      <div className="toast-viewport" aria-label="Notifications">
        {toasts.map((item) => (
          <Toast key={item.id} toast={item} onDismiss={dismiss} />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used inside a ToastProvider');
  }
  return context;
}
