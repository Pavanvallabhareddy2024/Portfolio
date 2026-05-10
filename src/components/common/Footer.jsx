import { Github, Linkedin, Mail, MapPin, Phone, ArrowUp } from 'lucide-react';
import { personal, navLinks } from '../../data/portfolioData';

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollTop = () =>
    window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative mt-16">
      <div className="container-app">
        <div className="glass-strong relative overflow-hidden p-8 md:p-12">
          <div className="pointer-events-none absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-neon-violet/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 right-0 h-72 w-72 rounded-full bg-neon-cyan/20 blur-3xl" />

          <div className="relative grid gap-10 md:grid-cols-3">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-neon-cyan to-neon-violet font-display text-sm font-extrabold text-ink-950">
                  SP
                </span>
                <span className="font-display text-lg font-semibold">
                  {personal.firstName}
                  <span className="text-gradient-static">.dev</span>
                </span>
              </div>
              <p className="max-w-xs text-sm leading-relaxed text-white/65">
                {personal.tagline}
              </p>
              <div className="relative z-10 flex gap-2 pt-2">
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80 transition-all hover:border-neon-cyan/40 hover:text-neon-cyan hover:shadow-glow"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="pointer-events-none h-4 w-4" aria-hidden />
                </a>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80 transition-all hover:border-white/30 hover:text-white"
                  aria-label="GitHub"
                >
                  <Github className="pointer-events-none h-4 w-4" aria-hidden />
                </a>
                <a
                  href={`mailto:${personal.email}`}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80 transition-all hover:border-neon-violet/40 hover:text-neon-violet hover:shadow-glow-violet"
                  aria-label={`Email ${personal.email}`}
                >
                  <Mail className="pointer-events-none h-4 w-4" aria-hidden />
                </a>
              </div>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
                Navigate
              </h4>
              <ul className="grid grid-cols-2 gap-2 text-sm">
                {navLinks.map((l) => (
                  <li key={l.id}>
                    <a
                      href={`#${l.id}`}
                      className="text-white/70 transition-colors hover:text-white"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
                Get in touch
              </h4>
              <ul className="space-y-2 text-sm text-white/75">
                <li className="flex items-start gap-2">
                  <Mail className="mt-0.5 h-4 w-4 text-neon-cyan" />
                  <a href={`mailto:${personal.email}`} className="hover:text-white">
                    {personal.email}
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="mt-0.5 h-4 w-4 text-neon-violet" />
                  <a href={`tel:${personal.phone}`} className="hover:text-white">
                    {personal.phone}
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 text-neon-teal" />
                  <span>{personal.location}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative mt-10 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/55 md:flex-row md:items-center">
            <p>
              © {year} {personal.name}. Crafted with React, Tailwind & Framer
              Motion.
            </p>
            <button
              onClick={scrollTop}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-white/80 transition-colors hover:bg-white/10"
            >
              <ArrowUp className="h-3.5 w-3.5" />
              Back to top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
