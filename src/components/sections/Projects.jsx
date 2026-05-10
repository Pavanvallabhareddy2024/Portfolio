import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Github, Sparkles } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import { projects } from '../../data/portfolioData';

const accentMap = {
  cyan: {
    glow: 'from-neon-cyan/40 via-neon-cyan/0 to-transparent',
    text: 'text-neon-cyan',
    chip: 'border-neon-cyan/30 bg-neon-cyan/10 text-neon-cyan',
    btn: 'from-neon-cyan to-neon-blue',
  },
  violet: {
    glow: 'from-neon-violet/40 via-neon-violet/0 to-transparent',
    text: 'text-neon-violet',
    chip: 'border-neon-violet/30 bg-neon-violet/10 text-neon-violet',
    btn: 'from-neon-violet to-neon-pink',
  },
  teal: {
    glow: 'from-neon-teal/40 via-neon-teal/0 to-transparent',
    text: 'text-neon-teal',
    chip: 'border-neon-teal/30 bg-neon-teal/10 text-neon-teal',
    btn: 'from-neon-teal to-neon-cyan',
  },
};

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const [hover, setHover] = useState(false);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [5, -5]), {
    stiffness: 200,
    damping: 20,
  });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-5, 5]), {
    stiffness: 200,
    damping: 20,
  });

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mx.set(x);
    my.set(y);
  };

  const handleLeave = () => {
    mx.set(0);
    my.set(0);
    setHover(false);
  };

  const a = accentMap[project.accent] || accentMap.cyan;
  const secondaryLinkClass =
    'inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-white/85 transition-colors hover:bg-white/10';

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={handleLeave}
      style={{
        rotateX: rx,
        rotateY: ry,
        transformStyle: 'preserve-3d',
        transformPerspective: 1200,
      }}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl transition-all duration-300 group-hover:border-white/20">
        <div
          className={`pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-br ${a.glow} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
        />

        <div className="relative flex flex-col gap-8 p-6 md:p-8 lg:flex-row lg:gap-10 lg:items-stretch">
          {/* Left: image + stack (vertical chip list, original style) */}
          <div className="flex w-full flex-col gap-6 lg:max-w-[380px] lg:flex-none xl:max-w-[420px]">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10">
              <motion.img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover"
                animate={{ scale: hover ? 1.05 : 1 }}
                transition={{ duration: 0.55, ease: 'easeOut' }}
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
            </div>

            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/45">
                Stack
              </p>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className={`flex min-h-[2rem] items-center justify-center rounded-full border px-2 py-1 text-center text-[10px] font-medium leading-tight sm:min-h-0 sm:px-2.5 sm:py-1 sm:text-[11px] ${a.chip}`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: title, copy, features */}
          <div className="relative min-w-0 flex-1 space-y-5 lg:pt-1">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-ink-950/60 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-white/85 backdrop-blur">
              <Sparkles className={`h-3 w-3 ${a.text}`} />
              {project.subtitle}
            </div>

            <div>
              <h3 className="font-display text-2xl font-bold md:text-3xl lg:text-4xl">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70 md:text-base">
                {project.description}
              </p>
            </div>

            <ul className="grid gap-2.5 text-sm text-white/70">
              {project.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span
                    className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${a.text} bg-current shadow-[0_0_10px_currentColor]`}
                  />
                  <span className="leading-relaxed">{f}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <a
                href={project.links.live}
                target="_blank"
                rel="noreferrer"
                className={`group/btn inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r ${a.btn} px-4 py-2 text-xs font-semibold text-ink-950 shadow-glow transition-transform hover:scale-[1.04]`}
              >
                View Details
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </a>
              <a
                href={project.links.live}
                target="_blank"
                rel="noreferrer"
                className={secondaryLinkClass}
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Live
              </a>
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                className={secondaryLinkClass}
              >
                <Github className="h-3.5 w-3.5" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section-padding relative">
      <div className="container-app">
        <SectionTitle
          eyebrow="Selected Work"
          title={
            <>
              Projects with <span className="text-gradient">real impact</span>
            </>
          }
          description="From full-stack analytics platforms to inventory systems and a 200-day public build journey — here's what I've been crafting."
        />

        <div className="mt-14 flex flex-col gap-10 md:gap-12">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
