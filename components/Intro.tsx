"use client";

import { useEffect, useState } from "react";

function timeGreeting() {
  const h = new Date().getHours();
  if (h >= 5 && h < 12) return "Good Morning";
  if (h >= 12 && h < 17) return "Good Afternoon";
  if (h >= 17 && h < 21) return "Good Evening";
  return "Good Night";
}

const BASE_GREETINGS = ["Hey", "Hello", "Hola", "Bonjour", "नमस्ते", "こんにちは"];

const IN_MS = 150;
const HOLD_MS = 320;
const OUT_MS = 150;
const EXIT_MS = 700;

type Phase = "in" | "hold" | "out" | "exit";

export default function Intro({ onDone }: { onDone: () => void }) {
  const greetings = [...BASE_GREETINGS, timeGreeting()];

  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>("in");

  useEffect(() => {
    const durations: Record<Phase, number> = {
      in: IN_MS,
      hold: HOLD_MS,
      out: OUT_MS,
      exit: EXIT_MS,
    };
    const next: Record<Phase, () => void> = {
      in: () => setPhase("hold"),
      hold: () => setPhase("out"),
      out: () => {
        if (index < greetings.length - 1) {
          setIndex((i) => i + 1);
          setPhase("in");
        } else {
          setPhase("exit");
        }
      },
      exit: () => onDone(),
    };

    const id = setTimeout(next[phase], durations[phase]);
    return () => clearTimeout(id);
  }, [phase, index]); // eslint-disable-line react-hooks/exhaustive-deps

  const textStyle: React.CSSProperties =
    phase === "hold"
      ? { opacity: 1, transform: "translateY(0)" }
      : phase === "out"
      ? { opacity: 0, transform: "translateY(-12px)" }
      : { opacity: 0, transform: "translateY(12px)" };

  const overlayStyle: React.CSSProperties =
    phase === "exit"
      ? { transform: "translateY(-100%)", transition: `transform ${EXIT_MS}ms cubic-bezier(0.76,0,0.24,1)` }
      : {};

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#111110]"
      style={overlayStyle}
    >
      <span
        className="text-4xl md:text-6xl font-semibold text-white tracking-tight select-none"
        style={{
          ...textStyle,
          transition: `opacity ${phase === "in" ? IN_MS : OUT_MS}ms ease, transform ${phase === "in" ? IN_MS : OUT_MS}ms ease`,
        }}
      >
        {greetings[index]}
      </span>
    </div>
  );
}
