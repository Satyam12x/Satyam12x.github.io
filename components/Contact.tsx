"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  FileText,
  MapPin,
} from "lucide-react";

const EMAIL = "ofcsatyam007@gmail.com";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/Satyam12x",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/satyam-pandey-301061272/",
    icon: Linkedin,
  },
  {
    label: "Resume",
    href: "/resume.pdf",
    icon: FileText,
  },
];

export default function Contact() {
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
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const d = (delay: number) => ({
    transitionDelay: visible ? `${delay}ms` : "0ms",
  });

  return (
    <section
      id="contact"
      className="relative scroll-mt-24 py-24 md:py-28 px-6 md:px-10 bg-white"
    >
      <div ref={ref} className="relative mx-auto max-w-5xl">
        <div
          className={`transition-all duration-700 ease-out
            ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          style={d(0)}
        >
          <span className="block text-[11px] font-medium uppercase tracking-[0.3em] text-charcoal/40">
            Contact
          </span>
        </div>

        <h2
          className={`mt-3 text-2xl md:text-3xl font-semibold text-charcoal tracking-tight transition-all duration-700 ease-out
            ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          style={d(100)}
        >
          Let&apos;s make something.
        </h2>

        <p
          className={`mt-4 text-[15px] md:text-[17px] text-charcoal/55 leading-relaxed max-w-xl transition-all duration-700 ease-out
            ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          style={d(200)}
        >
          Got an idea, a project, or just want to say hi? My inbox is open and
          I&apos;m quick to reply.
        </p>

        <div
          className={`mt-10 md:mt-12 transition-all duration-700 ease-out
            ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          style={d(350)}
        >
          <span className="block text-[10px] uppercase tracking-[0.25em] text-charcoal/40 font-medium mb-3">
            Write to me at
          </span>
          <a
            href={`mailto:${EMAIL}`}
            className="group/email inline-flex items-baseline gap-2 md:gap-3 text-lg md:text-xl font-semibold text-charcoal tracking-tight border-b border-charcoal/25 hover:border-charcoal transition-colors duration-300 pb-1"
          >
            <span>{EMAIL}</span>
            <ArrowUpRight
              className="shrink-0 transition-transform duration-300 group-hover/email:-translate-y-0.5 group-hover/email:translate-x-0.5"
              size={18}
            />
          </a>
        </div>

        <div
          className={`mt-12 md:mt-14 h-px bg-charcoal/10 transition-all duration-700
            ${visible ? "opacity-100" : "opacity-0"}`}
          style={d(500)}
        />

        <div
          className={`mt-8 flex flex-wrap items-center justify-between gap-6 transition-all duration-700 ease-out
            ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          style={d(600)}
        >
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {socials.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    s.href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  className="group/soc inline-flex items-center gap-2 text-[13px] font-medium text-charcoal/60 hover:text-charcoal transition-colors duration-300"
                >
                  <Icon size={15} className="opacity-80" />
                  <span>{s.label}</span>
                  <ArrowUpRight
                    size={12}
                    className="opacity-0 group-hover/soc:opacity-60 group-hover/soc:-translate-y-0.5 group-hover/soc:translate-x-0.5 transition-all duration-300"
                  />
                </a>
              );
            })}
          </div>

          <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-charcoal/40 font-medium">
            <MapPin size={12} />
            <span>Faridabad, IN</span>
          </div>
        </div>

        <div
          className={`mt-14 pt-6 border-t border-charcoal/[0.08] flex flex-wrap items-center justify-between gap-3 transition-opacity duration-700
            ${visible ? "opacity-100" : "opacity-0"}`}
          style={d(750)}
        >
          <p className="text-[11px] uppercase tracking-[0.22em] text-charcoal/40 font-medium">
            &copy; {new Date().getFullYear()} Satyam Pandey
          </p>
          <p className="text-[12px] text-charcoal/50 font-medium">
            Made with <span className="text-red-500">&#10084;</span> by Satyam
          </p>
        </div>
      </div>
    </section>
  );
}
