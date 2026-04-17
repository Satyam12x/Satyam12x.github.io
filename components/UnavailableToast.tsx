"use client";

import { useEffect, useRef, useState } from "react";
import { Info, X } from "lucide-react";

export default function UnavailableToast() {
  const [visible, setVisible] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const show = () => {
      setVisible(true);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setVisible(false), 4200);
    };

    const clickHandler = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement | null)?.closest?.("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (href === "#") {
        e.preventDefault();
        show();
      }
    };

    document.addEventListener("click", clickHandler);
    return () => {
      document.removeEventListener("click", clickHandler);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] px-4 transition-all duration-500 ease-out
        ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8 pointer-events-none"
        }`}
    >
      <div className="flex items-start gap-3 bg-charcoal text-white px-5 py-4 rounded-2xl shadow-2xl shadow-charcoal/30 min-w-[300px] max-w-[380px] border border-white/10">
        <div className="shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center ring-1 ring-white/10">
          <Info size={14} className="text-white/80" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium leading-snug">
            Link not available yet
          </p>
          <p className="text-[12px] text-white/60 mt-1 leading-relaxed">
            This one&apos;s still cooking - try the other links, or reach me in
            the contact section.
          </p>
        </div>
        <button
          onClick={() => setVisible(false)}
          aria-label="Dismiss"
          className="shrink-0 mt-0.5 text-white/40 hover:text-white transition-colors p-1 rounded-md hover:bg-white/5"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
}
