"use client";

import { useState } from "react";
import Image from "next/image";
import { Code2, Users, Github, Layers } from "lucide-react";

const experiences = [
  {
    role: "Software Engineer Intern",
    company: "ONETICK Technologies",
    location: "Faridabad, IN",
    period: "Feb 2026 - Now",
    description:
      "Backend engineering - building RESTful APIs with Node.js + TypeScript, designing databases via Prisma, and implementing JWT / OTP auth workflows. Also collaborating with the Next.js frontend team on full-stack integration and learning CI/CD pipelines along the way.",
    tags: [
      "TypeScript",
      "Node.js",
      "Express",
      "Next.js",
      "PostgreSQL",
      "Prisma",
      "CI/CD",
    ],
    icon: Code2,
    logo: "/logos/onetick.png",
    current: true,
  },
  {
    role: "Mentor",
    company: "Social Winter of Code",
    location: "Remote",
    period: "Dec 2025 - Feb 2026",
    description:
      "Guided open-source contributors through full dev cycles - doing code reviews, giving PR feedback, and helping newer developers navigate real collaborative workflows.",
    tags: ["Open Source", "Mentorship", "Code Review"],
    icon: Users,
    logo: "/logos/swoc.png",
  },
  {
    role: "Contributor",
    company: "GirlScript Summer of Code",
    location: "Remote",
    period: "Jul 2025 - Sep 2025",
    description:
      "Contributed to open-source projects as part of India's largest three-month OSS program - shipping features, fixing issues, and working directly with maintainers across the community.",
    tags: ["Open Source", "JavaScript", "React"],
    icon: Github,
    logo: "/logos/gsoc.png",
  },
  {
    role: "Full Stack Developer Intern",
    company: "ONETICK Technologies",
    location: "Faridabad, IN",
    period: "Jul 2025 - Aug 2025",
    description:
      "My first internship - worked across the stack on production apps, shipped features, integrated APIs, and translated design into polished, performant UIs.",
    tags: ["React", "Node.js", "Full-Stack"],
    icon: Layers,
    logo: "/logos/onetick.png",
  },
];

export default function Experience() {
  const [active, setActive] = useState(0);
  const current = experiences[active];

  return (
    <section
      id="experience"
      className="relative scroll-mt-24 py-24 md:py-28 px-6 md:px-10 bg-white"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 md:mb-16">
          <span className="block text-[11px] font-medium uppercase tracking-[0.3em] text-charcoal/40">
            Experience
          </span>
          <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-charcoal tracking-tight">
            The work so far.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 md:gap-10 items-start">
          <div className="flex md:flex-col gap-3 md:gap-4 md:shrink-0">
            {experiences.map((exp, i) => {
              const Icon = exp.icon;
              const isActive = i === active;
              return (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={exp.company}
                  className={`group relative flex items-center justify-center w-14 h-14 rounded-xl transition-all duration-500 ease-out
                    ${
                      isActive
                        ? "bg-charcoal text-white border border-charcoal shadow-lg shadow-charcoal/15"
                        : "bg-white border border-charcoal/10 text-charcoal/45 hover:text-charcoal hover:border-charcoal/35"
                    }`}
                >
                  <Icon size={20} strokeWidth={1.75} />
                  {exp.current && (
                    <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70 animate-ping" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 ring-2 ring-white" />
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="relative min-h-[340px]">
            <div
              key={active}
              className="animate-fade-up"
              style={{ animationDuration: "600ms" }}
            >
              <div className="flex items-center justify-between gap-3 flex-wrap mb-6">
                <span className="text-[11px] uppercase tracking-[0.22em] text-charcoal/50 font-medium">
                  {current.period}
                </span>
                <span className="text-[11px] uppercase tracking-[0.22em] text-charcoal/40">
                  {current.location}
                </span>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-white border border-charcoal/10 flex items-center justify-center p-2 shrink-0">
                  <Image
                    src={current.logo}
                    alt={current.company}
                    width={40}
                    height={40}
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl md:text-2xl font-semibold text-charcoal tracking-tight leading-snug">
                    {current.role}
                  </h3>
                  <p className="mt-0.5 text-[15px] text-charcoal/55 font-medium">
                    {current.company}
                  </p>
                </div>
              </div>

              <p className="text-[15px] leading-relaxed text-charcoal/65 max-w-2xl">
                {current.description}
              </p>

              <div className="mt-7">
                <span className="block text-[10px] uppercase tracking-[0.25em] text-charcoal/40 font-medium mb-3">
                  Skills & Tools
                </span>
                <div className="flex flex-wrap gap-2">
                  {current.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 text-[12px] font-medium rounded-full bg-charcoal/[0.04] border border-charcoal/[0.08] text-charcoal/80 transition-colors duration-300 hover:bg-charcoal hover:text-white hover:border-charcoal"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
