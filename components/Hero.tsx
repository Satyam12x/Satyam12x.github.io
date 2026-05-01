import { FileText, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-hero-gradient flex items-center justify-center"
    >
      <div className="blob bg-charcoal/10 w-[480px] h-[480px] -top-40 -left-40" />
      <div className="blob bg-charcoal/5 w-[520px] h-[520px] top-1/3 -right-40" />
      <div className="absolute inset-0 bg-grain opacity-40 pointer-events-none" />

      <div className="relative mx-auto max-w-4xl px-6 md:px-10 py-24 flex flex-col items-center text-center">

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-700 text-[12px] font-medium mb-8 animate-fade-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          Open to full-time roles
        </div>

        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-charcoal leading-tight animate-fade-up"
          style={{ animationDelay: "0.1s", opacity: 0 }}
        >
          Hi, I&apos;m Satyam —
          <br />
          <span className="text-charcoal/45">I build full-stack products.</span>
        </h1>

        <p
          className="mt-6 max-w-xl text-base md:text-[17px] text-charcoal/60 leading-relaxed animate-fade-up"
          style={{ animationDelay: "0.22s", opacity: 0 }}
        >
          SWE Intern at{" "}
          <span className="text-charcoal/80 font-medium">ONETICK Technologies</span>
          , building production backends. I&apos;ve shipped a rental platform, an
          AI-powered marketplace, and an npm package with 100+ downloads —
          real products, real users.
        </p>

        <div
          className="mt-6 flex flex-wrap justify-center gap-2 animate-fade-up"
          style={{ animationDelay: "0.32s", opacity: 0 }}
        >
          {["Next.js", "TypeScript", "Node.js", "PostgreSQL", "MongoDB"].map((t) => (
            <span
              key={t}
              className="px-3 py-1 rounded-full text-[12px] font-medium text-charcoal/55 bg-charcoal/[0.05] border border-charcoal/[0.08]"
            >
              {t}
            </span>
          ))}
        </div>

        <div
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 animate-fade-up"
          style={{ animationDelay: "0.42s", opacity: 0 }}
        >
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-charcoal text-white text-sm md:text-base font-medium shadow-lg shadow-charcoal/20 hover:bg-charcoal-900 hover:shadow-xl hover:shadow-charcoal/30 transition-all"
          >
            <FileText size={18} />
            My Resume
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-charcoal text-sm md:text-base font-medium border border-charcoal/15 hover:border-charcoal/40 hover:shadow-md transition-all"
          >
            <Mail size={18} />
            Get in Touch
          </a>
        </div>

      </div>
    </section>
  );
}
