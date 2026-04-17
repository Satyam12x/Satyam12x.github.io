"use client";

import { useEffect, useRef, useState } from "react";
import type { IconType } from "react-icons";
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiPrisma,
  SiMongodb,
  SiGit,
  SiGithub,
  SiDocker,
  SiGithubactions,
  SiPostman,
  SiVercel,
} from "react-icons/si";

type Tech = { name: string; icon: IconType; color: string };

const categories: { num: string; label: string; items: Tech[] }[] = [
  {
    num: "01",
    label: "Languages",
    items: [
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#E6B800" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
    ],
  },
  {
    num: "02",
    label: "Frontend",
    items: [
      { name: "React", icon: SiReact, color: "#149ECA" },
      { name: "Next.js", icon: SiNextdotjs, color: "#0A0A0A" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    num: "03",
    label: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express", icon: SiExpress, color: "#1a1a1a" },
    ],
  },
  {
    num: "04",
    label: "Databases",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { name: "MySQL", icon: SiMysql, color: "#00758F" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    ],
  },
  {
    num: "05",
    label: "Tools & Ops",
    items: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#1a1a1a" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "CI/CD", icon: SiGithubactions, color: "#2088FF" },
      { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Vercel", icon: SiVercel, color: "#0A0A0A" },
    ],
  },
];

export default function Stack() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="stack"
      className="relative scroll-mt-24 py-24 md:py-28 px-6 md:px-10 bg-white"
    >
      <div ref={ref} className="mx-auto max-w-5xl">
        <header
          className={`mb-16 md:mb-20 transition-all duration-700 ease-out
            ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
        >
          <span className="block text-[11px] font-medium uppercase tracking-[0.3em] text-charcoal/40">
            Stack
          </span>
          <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-charcoal tracking-tight">
            The tools behind the work.
          </h2>
          <p className="mt-5 text-[15px] md:text-[17px] text-charcoal/55 max-w-xl leading-relaxed">
            The tools and languages I reach for most - chosen for how they let
            me ship faster without cutting corners.
          </p>
        </header>

        <div className="space-y-14 md:space-y-16">
          {categories.map((cat, catIdx) => (
            <div
              key={cat.num}
              className={`transition-all duration-700 ease-out
                ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
              style={{
                transitionDelay: visible ? `${catIdx * 130}ms` : "0ms",
              }}
            >
              <div className="flex items-baseline gap-3 mb-8">
                <span className="text-sm font-medium text-charcoal/25 tabular-nums">
                  / {cat.num}
                </span>
                <span className="text-[11px] uppercase tracking-[0.25em] text-charcoal/60 font-semibold">
                  {cat.label}
                </span>
                <span className="flex-1 h-px bg-charcoal/[0.08] ml-4" />
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-x-4 gap-y-10">
                {cat.items.map((tech) => {
                  const Icon = tech.icon;
                  return (
                    <div
                      key={tech.name}
                      className="group flex flex-col items-center gap-3"
                    >
                      <Icon
                        size={40}
                        style={{ color: tech.color }}
                        className="transition-opacity duration-300 group-hover:opacity-80"
                      />
                      <div className="relative inline-block">
                        <span className="text-[12px] text-charcoal/65 font-medium transition-colors duration-300 group-hover:text-charcoal">
                          {tech.name}
                        </span>
                        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-px w-0 bg-charcoal transition-[width] duration-500 ease-out group-hover:w-full" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
