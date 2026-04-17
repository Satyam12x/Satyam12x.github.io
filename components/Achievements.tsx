"use client";

import { useEffect, useRef, useState } from "react";
import { Trophy, GraduationCap } from "lucide-react";

const FLICKER_IMAGES = [
  "https://picsum.photos/seed/sp1/1200/700",
  "https://picsum.photos/seed/sp2/1200/700",
  "https://picsum.photos/seed/sp3/1200/700",
  "https://picsum.photos/seed/sp4/1200/700",
  "https://picsum.photos/seed/sp5/1200/700",
  "https://picsum.photos/seed/sp6/1200/700",
  "https://picsum.photos/seed/sp7/1200/700",
  "https://picsum.photos/seed/sp8/1200/700",
  "https://picsum.photos/seed/sp9/1200/700",
  "https://picsum.photos/seed/sp10/1200/700",
];

const FLICKER_INTERVAL_MS = 160;

const education = {
  degree: "Bachelor of Technology, Computer Science",
  school: "J.C. Bose University of Science & Technology, YMCA",
  period: "Aug 2023 - Jul 2027",
  location: "Faridabad, IN",
};

export default function Achievements() {
  const ref = useRef<HTMLDivElement>(null);
  const [armed, setArmed] = useState(false);
  const [visible, setVisible] = useState(false);
  const [flickerIdx, setFlickerIdx] = useState(-1);
  const [revealed, setRevealed] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    FLICKER_IMAGES.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !armed) {
          setArmed(true);
          setVisible(true);

          let idx = 0;
          setFlickerIdx(0);
          const interval = setInterval(() => {
            idx++;
            if (idx >= FLICKER_IMAGES.length) {
              clearInterval(interval);
              setTimeout(() => {
                setFlickerIdx(-1);
                setRevealed(true);

                const startTime = performance.now();
                const duration = 1300;
                const target = 8;
                const tick = (now: number) => {
                  const elapsed = now - startTime;
                  const progress = Math.min(elapsed / duration, 1);
                  const eased = 1 - Math.pow(1 - progress, 3);
                  setCount(Math.round(eased * target));
                  if (progress < 1) requestAnimationFrame(tick);
                };
                requestAnimationFrame(tick);
              }, 220);
            } else {
              setFlickerIdx(idx);
            }
          }, FLICKER_INTERVAL_MS);

          obs.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [armed]);

  const d = (delay: number) => ({
    transitionDelay: revealed ? `${delay}ms` : "0ms",
  });

  return (
    <section
      id="achievements"
      className="relative scroll-mt-24 py-24 md:py-28 px-6 md:px-10 bg-charcoal-50"
    >
      <div ref={ref} className="mx-auto max-w-5xl">
        <div
          className={`mb-12 md:mb-16 transition-all duration-700 ease-out
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <span className="block text-[11px] font-medium uppercase tracking-[0.3em] text-charcoal/40">
            Achievements
          </span>
          <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-charcoal tracking-tight">
            A few milestones that matter.
          </h2>
        </div>

        <div className="relative overflow-hidden rounded-3xl bg-charcoal text-white mb-5 min-h-[360px]">
          <div
            className={`absolute inset-0 z-30 transition-opacity duration-[700ms] ease-in
              ${
                flickerIdx === -1
                  ? "opacity-0 pointer-events-none"
                  : "opacity-100"
              }`}
          >
            {FLICKER_IMAGES.map((src, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={i}
                src={src}
                alt=""
                aria-hidden="true"
                className={`absolute inset-0 w-full h-full object-cover
                  ${i === flickerIdx ? "opacity-100" : "opacity-0"}`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-transparent to-charcoal/70" />
            <div className="absolute inset-0 bg-charcoal/25" />
          </div>

          <Trophy
            size={260}
            strokeWidth={0.7}
            className="absolute -right-14 -bottom-14 text-white/[0.04] pointer-events-none z-0"
          />

          <div className="relative z-10 p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 md:gap-12 items-end">
              <div>
                <div
                  className={`flex items-center gap-2.5 mb-3 transition-all duration-500 ease-out
                    ${
                      revealed
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-2"
                    }`}
                  style={d(0)}
                >
                  <Trophy size={14} className="text-white/50" />
                  <span className="text-[11px] uppercase tracking-[0.3em] text-white/50 font-medium">
                    Hackathons
                  </span>
                </div>

                <div
                  className={`text-5xl md:text-6xl leading-none font-bold tracking-tight tabular-nums text-white transition-all duration-[800ms] ease-out
                    ${
                      revealed
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-6"
                    }`}
                  style={d(150)}
                >
                  {count}
                  <span className="text-white/30">x</span>
                </div>

                <div
                  className={`mt-2 text-sm text-white/60 transition-all duration-500 ease-out
                    ${
                      revealed
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-2"
                    }`}
                  style={d(700)}
                >
                  wins and counting.
                </div>
              </div>

              <div className="md:pb-3">
                <p
                  className={`text-[15px] md:text-[16px] text-white/75 leading-relaxed max-w-md transition-all duration-[700ms] ease-out
                    ${
                      revealed
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-3"
                    }`}
                  style={d(500)}
                >
                  Eight hackathon wins across three years of shipping under
                  pressure: solving novel problems on deadlines, working with
                  new teammates on the fly, and learning to ship something real
                  when it matters.
                </p>
                <div
                  className={`mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 transition-opacity duration-500
                    ${revealed ? "opacity-100" : "opacity-0"}`}
                  style={d(800)}
                >
                  <span className="text-[11px] uppercase tracking-[0.22em] text-white/70 font-medium">
                    <span className="text-white">13</span>
                    <span className="ml-1.5 text-white/50">Participated</span>
                  </span>
                  <span className="text-white/20">·</span>
                  <span className="text-[11px] uppercase tracking-[0.22em] text-white/70 font-medium">
                    <span className="text-white">8</span>
                    <span className="ml-1.5 text-white/50">Won</span>
                  </span>
                  <span className="text-white/20">·</span>
                  <span className="text-[11px] uppercase tracking-[0.22em] text-white/70 font-medium">
                    <span className="text-white">1</span>
                    <span className="ml-1.5 text-white/50">Mentored</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`relative mt-20 md:mt-28 transition-all duration-700 ease-out
            ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          style={{ transitionDelay: visible ? "1100ms" : "0ms" }}
        >
          <div className="flex items-center gap-2.5 mb-8">
            <GraduationCap size={14} className="text-charcoal/40" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-charcoal/40 font-medium">
              Education
            </span>
          </div>

          <div className="mb-10 md:mb-12">
            <h3 className="text-xl md:text-2xl font-semibold text-charcoal tracking-tight leading-tight max-w-2xl">
              {education.degree}
            </h3>
            <p className="mt-2 text-[14px] md:text-[15px] text-charcoal/55 max-w-2xl">
              {education.school} · {education.location}
            </p>
          </div>

          <div className="relative">
            <div className="flex items-center justify-between mb-3 text-[11px] uppercase tracking-[0.25em] text-charcoal/45 font-medium tabular-nums">
              <span>Aug 2023</span>
              <span className="text-charcoal/25 hidden sm:inline">2024</span>
              <span className="text-charcoal/25 hidden sm:inline">2025</span>
              <span className="text-charcoal/25 hidden sm:inline">2026</span>
              <span>Jul 2027</span>
            </div>

            <div className="relative h-[3px] bg-charcoal/[0.1] rounded-full">
              <div
                className="absolute left-0 top-0 h-full bg-charcoal rounded-full transition-[width] duration-[1800ms] ease-out"
                style={{ width: visible ? "66%" : "0%" }}
              />
              <span
                className="absolute top-1/2 -translate-y-1/2 hidden sm:block w-[1px] h-3 bg-charcoal/15"
                style={{ left: "25%" }}
              />
              <span
                className="absolute top-1/2 -translate-y-1/2 hidden sm:block w-[1px] h-3 bg-charcoal/15"
                style={{ left: "50%" }}
              />
              <span
                className="absolute top-1/2 -translate-y-1/2 hidden sm:block w-[1px] h-3 bg-charcoal/15"
                style={{ left: "75%" }}
              />
              <div
                className={`absolute top-1/2 transition-opacity duration-500 ${
                  visible ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  left: "66%",
                  transform: "translate(-50%, -50%)",
                  transitionDelay: visible ? "1600ms" : "0ms",
                }}
              >
                <span className="relative flex h-3.5 w-3.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-70 animate-ping" />
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 ring-[3px] ring-white" />
                </span>
              </div>
            </div>

            <div
              className={`mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 transition-opacity duration-500 ${
                visible ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionDelay: visible ? "1800ms" : "0ms" }}
            >
              <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] font-medium">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-70 animate-ping" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                </span>
                <span className="text-charcoal">Year 3</span>
                <span className="text-charcoal/45">: in progress</span>
              </span>
              <span className="text-charcoal/20">·</span>
              <span className="text-[11px] uppercase tracking-[0.22em] text-charcoal/45 font-medium">
                ~16 months to graduation
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
