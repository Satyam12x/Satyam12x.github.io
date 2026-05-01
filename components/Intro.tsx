"use client";

import { useEffect, useState } from "react";

function timeGreeting() {
  const h = new Date().getHours();
  if (h >= 5 && h < 12) return "Good Morning";
  if (h >= 12 && h < 17) return "Good Afternoon";
  if (h >= 17 && h < 21) return "Good Evening";
  return "Good Night";
}

const BASE = ["Hey", "Hello", "Hola", "Bonjour", "नमस्ते", "こんにちは"];
const WORD_MS = 520;
const EXIT_MS = 900;

export default function Intro({ onDone }: { onDone: () => void }) {
  const words = [...BASE, timeGreeting()];
  const exitAt = words.length * WORD_MS + 80;

  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setExiting(true), exitAt);
    const t2 = setTimeout(onDone, exitAt + EXIT_MS);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#111110]"
      style={{
        transform: exiting ? "translateY(-100%)" : "translateY(0)",
        transition: exiting
          ? `transform ${EXIT_MS}ms cubic-bezier(0.76, 0, 0.24, 1)`
          : "none",
        willChange: "transform",
      }}
    >
      {words.map((word, i) => (
        <span
          key={i}
          className="absolute text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight select-none"
          style={{
            animation: `sp-word ${WORD_MS}ms cubic-bezier(0.16, 1, 0.3, 1) both`,
            animationDelay: `${i * WORD_MS}ms`,
            willChange: "opacity, transform",
          }}
        >
          {word}
        </span>
      ))}
    </div>
  );
}
