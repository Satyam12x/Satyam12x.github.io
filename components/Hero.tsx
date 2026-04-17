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
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-charcoal leading-tight animate-fade-up">
          Hi, I&apos;m Satyam Pandey -{" "}
          <span className="text-charcoal/50">
            I build things for the web.
          </span>
        </h1>

        <p
          className="mt-6 max-w-2xl text-base md:text-lg text-charcoal/60 leading-relaxed animate-fade-up"
          style={{ animationDelay: "0.15s", opacity: 0 }}
        >
          A developer who loves turning ideas into clean, fast, and thoughtful
          digital experiences. Currently focused on full-stack web development
          and crafting products people actually enjoy using.
        </p>

        <div
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 animate-fade-up"
          style={{ animationDelay: "0.3s", opacity: 0 }}
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
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
