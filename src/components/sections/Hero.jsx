import { motion } from 'framer-motion';
import {
  ArrowRight,
  Mail,
  Linkedin,
  MapPin,
  Sparkles,
  Code2,
} from 'lucide-react';
import AnimatedButton from '../common/AnimatedButton';
import { personal, stats } from '../../data/portfolioData';

const titleStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};

const lineUp = {
  hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center pt-28 md:pt-32"
    >
      <div className="container-app relative">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left content */}
          <motion.div
            variants={titleStagger}
            initial="hidden"
            animate="show"
            className="lg:col-span-7"
          >
            <motion.span
              variants={lineUp}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-white/75 backdrop-blur"
            >
              <Sparkles className="h-3.5 w-3.5 text-neon-cyan" />
              Available for Full Stack Roles
            </motion.span>

            <motion.h1
              variants={lineUp}
              className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Hi, I&apos;m{' '}
              <span className="text-gradient">Sai Pavan</span>
              <br />
              <span className="relative inline-block">
                Vallabhareddy
                <span className="absolute -bottom-2 left-0 right-0 h-[3px] rounded-full bg-gradient-to-r from-neon-cyan/0 via-neon-cyan to-neon-violet/0" />
              </span>
            </motion.h1>

            <motion.div
              variants={lineUp}
              className="mt-5 flex items-center gap-2 text-base font-semibold text-white/85 md:text-xl"
            >
              <Code2 className="h-5 w-5 text-neon-cyan" />
              <span>{personal.role}</span>
              <span className="mx-1 text-white/30">•</span>
              <span className="flex items-center gap-1 text-white/65">
                <MapPin className="h-4 w-4" />
                {personal.location}
              </span>
            </motion.div>

            <motion.p
              variants={lineUp}
              className="mt-5 max-w-xl text-sm leading-relaxed text-white/70 md:text-base"
            >
              {personal.intro}
            </motion.p>

            <motion.div
              variants={lineUp}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <AnimatedButton
                href="#projects"
                as="a"
                variant="primary"
                size="lg"
                iconRight={ArrowRight}
              >
                View Projects
              </AnimatedButton>
              <AnimatedButton
                href="#contact"
                as="a"
                variant="secondary"
                size="lg"
                icon={Mail}
              >
                Contact Me
              </AnimatedButton>
              <AnimatedButton
                href={personal.linkedin}
                as="a"
                target="_blank"
                rel="noreferrer"
                variant="ghost"
                size="lg"
                icon={Linkedin}
              >
                LinkedIn
              </AnimatedButton>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              variants={lineUp}
              className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4"
            >
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="glass-soft px-4 py-3 text-center"
                >
                  <div className="text-gradient font-display text-xl font-bold md:text-2xl">
                    {s.value}
                  </div>
                  <div className="mt-0.5 text-[11px] uppercase tracking-wider text-white/55">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right profile card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:col-span-5"
          >
            <ProfileCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ProfileCard = () => (
  <div className="relative mx-auto max-w-md">
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      className="absolute -left-6 -top-6 hidden h-24 w-24 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md md:block"
    >
      <div className="flex h-full flex-col items-center justify-center text-center">
        <span className="text-gradient font-display text-2xl font-extrabold">
          40+
        </span>
        <span className="text-[10px] uppercase tracking-wider text-white/55">
          Projects
        </span>
      </div>
    </motion.div>

    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      className="absolute -bottom-6 -right-6 hidden h-24 w-24 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md md:block"
    >
      <div className="flex h-full flex-col items-center justify-center text-center">
        <span className="text-gradient font-display text-2xl font-extrabold">
          200+
        </span>
        <span className="text-[10px] uppercase tracking-wider text-white/55">
          Day Streak
        </span>
      </div>
    </motion.div>

    <div className="glass-strong relative overflow-hidden p-2">
      {/* Glow halo */}
      <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-r from-neon-cyan/30 via-neon-violet/30 to-neon-teal/30 blur-2xl" />
      <div className="relative overflow-hidden rounded-[20px]">
        <div className="aspect-[4/5] w-full">
          <img
            src={personal.avatar}
            alt={personal.name}
            className="h-full w-full object-cover"
            loading="eager"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/10 to-transparent" />
        </div>

        <div className="absolute inset-x-0 bottom-0 p-5">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-neon-cyan">
                Currently
              </div>
              <div className="font-display text-base font-semibold">
                Building cloud‑native apps
              </div>
            </div>
            <div className="flex h-2.5 w-2.5 items-center justify-center">
              <span className="absolute h-2.5 w-2.5 animate-ping rounded-full bg-emerald-400/70" />
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
