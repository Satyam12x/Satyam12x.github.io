"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Github, ImageIcon, Mail, TestTube2 } from "lucide-react";
import type { IconType } from "react-icons";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiJsonwebtokens,
  SiCloudinary,
  SiReact,
  SiNodedotjs,
  SiGooglegemini,
  SiVitest,
  SiNpm,
} from "react-icons/si";

type Project = {
  num: string;
  year: string;
  category: string;
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  liveUrl: string;
  liveLabel?: string;
  githubUrl: string;
  image: string;
  npmPackage?: string;
};

const TECH_MAP: Record<
  string,
  {
    icon: IconType | React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>;
    color: string;
  }
> = {
  "Next.js": { icon: SiNextdotjs, color: "#0A0A0A" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  Tailwind: { icon: SiTailwindcss, color: "#06B6D4" },
  Express: { icon: SiExpress, color: "#1a1a1a" },
  MongoDB: { icon: SiMongodb, color: "#47A248" },
  JWT: { icon: SiJsonwebtokens, color: "#1a1a1a" },
  Cloudinary: { icon: SiCloudinary, color: "#3448C5" },
  React: { icon: SiReact, color: "#149ECA" },
  "Node.js": { icon: SiNodedotjs, color: "#5FA04E" },
  "Gemini API": { icon: SiGooglegemini, color: "#4285F4" },
  Nodemailer: { icon: Mail, color: "#0EA5E9" },
  Vitest: { icon: SiVitest, color: "#6E9F18" },
  Supertest: { icon: TestTube2, color: "#2D3748" },
  npm: { icon: SiNpm, color: "#CB3837" },
};

const projects: Project[] = [
  {
    num: "01",
    year: "2025",
    category: "Rental Marketplace",
    title: "RoomMate",
    tagline: "Peer-to-peer flat sharing, without brokers.",
    description:
      "A full-stack rental platform where tenants find flatmates directly, cutting brokers out of the loop. Solo-built MVP shipped in ~6 weeks: OTP auth, 3-step tenant onboarding, KYC verification (Aadhaar + PAN) for partners, Cloudinary-backed uploads, and a Joi-validated Express / Mongoose backend built on the repository pattern.",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Express",
      "MongoDB",
      "JWT",
      "Cloudinary",
    ],
    liveUrl: "#",
    githubUrl: "#",
    image: "/projects/RoomMate.png",
  },
  {
    num: "02",
    year: "2025",
    category: "Freelance Marketplace",
    title: "Gig Connect",
    tagline: "A two-sided marketplace with AI in the loop.",
    description:
      "A MERN-based two-sided marketplace with built-in AI assistance: Gemini-powered integrations auto-draft job descriptions, surface smart suggestions, and quietly automate the friction points across the user flow. Built on role-based JWT auth, Nodemailer email workflows, and Winston structured logging.",
    stack: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Gemini API",
      "JWT",
      "Nodemailer",
    ],
    liveUrl: "#",
    githubUrl: "#",
    image: "/projects/GigConnect.png",
  },
  {
    num: "03",
    year: "2026",
    category: "Developer Tool · npm",
    title: "Backend-logger",
    tagline: "Zero-config request logging, shipped to npm.",
    description:
      "A drop-in request logging middleware for Express, published to npm. One line, app.use(requestLogger()), and every HTTP request is logged with method, URL, status, duration, and a correlated request ID. Color-coded in dev, structured JSON in production, with built-in redaction of secrets, log-injection protection, and safe handling of circular refs. Written in strict TypeScript, tested with Vitest + Supertest.",
    stack: [
      "TypeScript",
      "Node.js",
      "Express",
      "Vitest",
      "Supertest",
      "npm",
    ],
    liveUrl: "https://www.npmjs.com/package/backend-logger",
    liveLabel: "View on npm",
    githubUrl: "https://github.com/Satyam12x/req-log",
    image: "/projects/BackendLogger.png",
    npmPackage: "backend-logger",
  },
];

const isPlaceholder = (url: string) => !url || url === "#";

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [imgErrors, setImgErrors] = useState<Set<string>>(new Set());
  const [npmDownloads, setNpmDownloads] = useState<Record<string, number>>({});

  useEffect(() => {
    const packages = projects.filter((p) => p.npmPackage).map((p) => p.npmPackage!);
    packages.forEach(async (pkg) => {
      try {
        const res = await fetch(
          `https://api.npmjs.org/downloads/point/2000-01-01:${new Date().toISOString().slice(0, 10)}/${pkg}`
        );
        const data = await res.json();
        if (typeof data.downloads === "number") {
          setNpmDownloads((prev) => ({ ...prev, [pkg]: data.downloads }));
        }
      } catch {
        // silently fail — badge just won't show
      }
    });
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.05 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const markImgError = (num: string) =>
    setImgErrors((prev) => {
      if (prev.has(num)) return prev;
      const next = new Set(prev);
      next.add(num);
      return next;
    });

  return (
    <section
      id="projects"
      className="relative scroll-mt-24 py-24 md:py-32 px-6 md:px-10 bg-charcoal-50"
    >
      <div ref={ref} className="mx-auto max-w-5xl">
        <header
          className={`mb-16 md:mb-24 transition-all duration-700 ease-out
            ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
        >
          <span className="block text-[11px] font-medium uppercase tracking-[0.3em] text-charcoal/40">
            Projects
          </span>
          <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-charcoal tracking-tight">
            A few things I&apos;ve built.
          </h2>
          <p className="mt-5 text-[15px] md:text-[17px] text-charcoal/55 max-w-xl leading-relaxed">
            Real products, not tutorial clones. Each one taught me something
            about shipping under real-world constraints.
          </p>
        </header>

        <div>
          {projects.map((project, idx) => {
            const liveIsReal = !isPlaceholder(project.liveUrl);
            const githubIsReal = !isPlaceholder(project.githubUrl);
            const imgFailed = imgErrors.has(project.num);

            return (
              <Fragment key={project.num}>
                {idx > 0 && (
                  <div
                    className="flex items-center gap-4 my-20 md:my-24"
                    aria-hidden
                  >
                    <div className="flex-1 h-px bg-charcoal/10" />
                    <span className="w-1.5 h-1.5 rounded-full bg-charcoal/20" />
                    <div className="flex-1 h-px bg-charcoal/10" />
                  </div>
                )}

                <article
                  className={`transition-all duration-[900ms] ease-out
                    ${
                      visible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                  style={{
                    transitionDelay: visible ? `${idx * 200}ms` : "0ms",
                  }}
                >
                  <div className="mb-3">
                    <span className="text-[11px] uppercase tracking-[0.3em] text-charcoal/35 font-medium">
                      Project / {project.num}
                    </span>
                  </div>

                  <div className="flex items-baseline justify-between gap-6 flex-wrap">
                    <h3 className="text-2xl md:text-3xl font-semibold text-charcoal tracking-tight leading-tight">
                      {project.title}
                    </h3>
                    <div className="flex items-baseline gap-3 md:flex-col md:items-end md:gap-0.5">
                      <span className="text-lg md:text-xl font-semibold text-charcoal/30 tabular-nums leading-none">
                        {project.year}
                      </span>
                      <span className="text-[11px] uppercase tracking-[0.2em] text-charcoal/45 font-medium whitespace-nowrap">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <p className="mt-3 text-[15px] md:text-base text-charcoal/55 leading-snug max-w-xl">
                    {project.tagline}
                  </p>

                  <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-[minmax(0,_1.1fr)_minmax(0,_0.9fr)] gap-8 md:gap-12 items-start">
                    <div className="order-2 md:order-1">
                      <p className="text-[15px] md:text-[16px] text-charcoal/70 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="mt-8">
                        <span className="block text-[10px] uppercase tracking-[0.25em] text-charcoal/40 font-medium mb-4">
                          Stack
                        </span>
                        <div className="flex flex-wrap items-center gap-3">
                          {project.stack.map((tech) => {
                            const info = TECH_MAP[tech];
                            if (!info) return null;
                            const Icon = info.icon;
                            return (
                              <div
                                key={tech}
                                className="group/tech relative"
                              >
                                <div
                                  className="w-11 h-11 rounded-lg bg-white border border-charcoal/[0.08] flex items-center justify-center transition-all duration-300 hover:border-charcoal/30 hover:shadow-sm"
                                  aria-label={tech}
                                >
                                  <Icon
                                    size={20}
                                    style={{ color: info.color }}
                                  />
                                </div>
                                <span
                                  className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded-md bg-charcoal text-white text-[10px] font-medium whitespace-nowrap opacity-0 group-hover/tech:opacity-100 transition-opacity duration-200"
                                >
                                  {tech}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {project.npmPackage && npmDownloads[project.npmPackage] !== undefined && (
                        <div className="mt-5 inline-flex items-center gap-1.5 text-[12px] text-charcoal/50 font-medium">
                          <SiNpm size={14} style={{ color: "#CB3837" }} />
                          <span className="tabular-nums font-semibold text-charcoal/70">
                            {npmDownloads[project.npmPackage].toLocaleString()}
                          </span>
                          <span>total downloads</span>
                        </div>
                      )}

                      <div className="mt-8 flex items-center gap-6 flex-wrap">
                        <a
                          href={project.liveUrl}
                          target={liveIsReal ? "_blank" : undefined}
                          rel={liveIsReal ? "noopener noreferrer" : undefined}
                          className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-charcoal border-b border-charcoal/25 hover:border-charcoal transition-colors duration-300 pb-1"
                        >
                          <span>{project.liveLabel ?? "View live"}</span>
                          <ArrowUpRight
                            size={15}
                            className="group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform duration-300"
                          />
                        </a>
                        <a
                          href={project.githubUrl}
                          target={githubIsReal ? "_blank" : undefined}
                          rel={githubIsReal ? "noopener noreferrer" : undefined}
                          className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-charcoal/70 border-b border-charcoal/10 hover:text-charcoal hover:border-charcoal/40 transition-colors duration-300 pb-1"
                        >
                          <Github size={14} />
                          <span>Source</span>
                        </a>
                      </div>
                    </div>

                    <div className="order-1 md:order-2 group/img">
                      <div className="relative rounded-xl overflow-hidden border border-charcoal/10 bg-white shadow-sm shadow-charcoal/[0.03]">
                        <div className="h-6 md:h-7 bg-charcoal/[0.035] border-b border-charcoal/[0.06] flex items-center gap-1.5 px-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-charcoal/20" />
                          <span className="w-1.5 h-1.5 rounded-full bg-charcoal/20" />
                          <span className="w-1.5 h-1.5 rounded-full bg-charcoal/20" />
                        </div>
                        {imgFailed ? (
                          <div className="relative aspect-[16/10] flex flex-col items-center justify-center bg-charcoal/[0.04] text-center p-6">
                            <div className="w-10 h-10 rounded-full bg-charcoal/10 flex items-center justify-center mb-3">
                              <ImageIcon
                                size={18}
                                className="text-charcoal/40"
                              />
                            </div>
                            <p className="text-[11px] uppercase tracking-[0.22em] text-charcoal/40 font-medium">
                              Screenshot coming soon
                            </p>
                          </div>
                        ) : (
                          <div className="relative aspect-[16/10] bg-white">
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              sizes="(min-width: 768px) 440px, 100vw"
                              className="object-contain transition-opacity duration-500 group-hover/img:opacity-95"
                              onError={() => markImgError(project.num)}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              </Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}
