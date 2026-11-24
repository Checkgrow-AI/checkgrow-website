"use client";

declare global {
  interface Window {
    __ucCmp?: { showSecondLayer: () => void };
  }
}

/* Reopens the Usercentrics consent preferences (second layer). */
export function PrivacySettingsLink({ label, className }: { label: string; className?: string }) {
  return (
    <a
      href="#"
      className={className}
      onClick={(e) => {
        e.preventDefault();
        window.__ucCmp?.showSecondLayer();
      }}
    >
      {label}
    </a>
  );
}
