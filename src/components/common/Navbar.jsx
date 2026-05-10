import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks, personal } from '../../data/portfolioData';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = navLinks.map((l) => document.getElementById(l.id));
      const current = sections.find((s) => {
        if (!s) return false;
        const rect = s.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });
      if (current) setActive(current.id);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'pt-3' : 'pt-5'
      }`}
    >
      <nav className="container-app">
        <div
          className={`flex items-center justify-between rounded-2xl border border-white/10 px-4 py-3 backdrop-blur-xl transition-all md:px-6 ${
            scrolled
              ? 'bg-ink-950/70 shadow-[0_8px_30px_rgba(0,0,0,0.45)]'
              : 'bg-white/5'
          }`}
        >
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleClick(e, 'home')}
            className="group flex items-center gap-2"
          >
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-neon-cyan to-neon-violet font-display text-sm font-extrabold text-ink-950 shadow-glow">
              SP
            </span>
            <span className="hidden font-display text-base font-semibold tracking-tight md:inline">
              {personal.firstName}
              <span className="text-gradient-static">.dev</span>
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={(e) => handleClick(e, l.id)}
                  className={`relative rounded-full px-3.5 py-2 text-sm transition-colors ${
                    active === l.id
                      ? 'text-white'
                      : 'text-white/65 hover:text-white'
                  }`}
                >
                  {active === l.id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-white/10 ring-1 ring-white/15"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden items-center gap-2 lg:flex">
            <a
              href={personal.resumeUrl}
              download={personal.resumeDownloadFileName}
              className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 transition-colors hover:border-white/25 hover:bg-white/10"
            >
              Resume
            </a>
            <a
              href="#contact"
              onClick={(e) => handleClick(e, 'contact')}
              className="rounded-full bg-gradient-to-r from-neon-cyan to-neon-violet px-4 py-2 text-sm font-semibold text-ink-950 shadow-glow transition-transform hover:scale-[1.03]"
            >
              Let&apos;s Talk
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((s) => !s)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-white lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile sheet */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="mt-2 overflow-hidden rounded-2xl border border-white/10 bg-ink-950/85 p-3 backdrop-blur-xl lg:hidden"
            >
              <ul className="flex flex-col">
                {navLinks.map((l) => (
                  <li key={l.id}>
                    <a
                      href={`#${l.id}`}
                      onClick={(e) => handleClick(e, l.id)}
                      className={`block rounded-xl px-4 py-3 text-sm transition-colors ${
                        active === l.id
                          ? 'bg-white/10 text-white'
                          : 'text-white/70 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
                <li className="mt-2 flex flex-col gap-2">
                  <a
                    href={personal.resumeUrl}
                    download={personal.resumeDownloadFileName}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-center text-sm font-semibold text-white"
                  >
                    Download Resume
                  </a>
                  <a
                    href="#contact"
                    onClick={(e) => handleClick(e, 'contact')}
                    className="block rounded-xl bg-gradient-to-r from-neon-cyan to-neon-violet px-4 py-3 text-center text-sm font-semibold text-ink-950"
                  >
                    Let&apos;s Talk
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Navbar;
