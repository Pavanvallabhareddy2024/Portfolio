import { motion } from 'framer-motion';
import {
  Mail,
  Linkedin,
  MapPin,
  Sparkles,
  Code2,
  FileDown,
} from 'lucide-react';
import AnimatedButton from '../common/AnimatedButton';
import { personal } from '../../data/portfolioData';

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
                href={personal.resumeUrl}
                as="a"
                download={personal.resumeDownloadFileName}
                variant="primary"
                size="lg"
                iconRight={FileDown}
              >
                Download Resume
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
    <div className="relative mt-4 mb-6 sm:mt-6 sm:mb-8">
      {/* Corner stats — z-30 + opaque panel so they sit clearly on top of the frame edge */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -left-1 -top-3 z-30 hidden w-[5.75rem] rounded-2xl border border-white/15 bg-ink-950/95 p-3 shadow-xl shadow-black/50 ring-1 ring-white/5 backdrop-blur-md sm:block md:-left-3 md:-top-4"
      >
        <div className="flex flex-col items-center justify-center text-center">
          <span className="text-gradient font-display text-xl font-extrabold md:text-2xl">
            40+
          </span>
          <span className="mt-0.5 text-[10px] font-medium uppercase tracking-wider text-white/60">
            Projects
          </span>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-2 -right-1 z-30 hidden w-[5.75rem] rounded-2xl border border-white/15 bg-ink-950/95 p-3 shadow-xl shadow-black/50 ring-1 ring-white/5 backdrop-blur-md sm:block md:-bottom-3 md:-right-3"
      >
        <div className="flex flex-col items-center justify-center text-center">
          <span className="text-gradient font-display text-xl font-extrabold md:text-2xl">
            200+
          </span>
          <span className="mt-0.5 text-[10px] font-medium uppercase tracking-wider text-white/60">
            Day Streak
          </span>
        </div>
      </motion.div>

      <div className="glass-strong relative z-10 isolate overflow-hidden rounded-[1.35rem] p-2">
      <div
        className="pointer-events-none absolute inset-0 -z-10 rounded-[inherit] bg-gradient-to-r from-neon-cyan/25 via-neon-violet/25 to-neon-teal/25 opacity-90 blur-xl"
        aria-hidden
      />
      <div className="relative overflow-hidden rounded-2xl">
        {/* Shorter than 4/5 so overall hero image height drops */}
        <div className="relative aspect-[5/6] w-full">
          <img
            src={personal.avatar}
            alt={personal.name}
            className="h-full w-full object-cover object-top"
            loading="eager"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/15 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
            <div className="flex items-center justify-between gap-4">
              <div className="min-w-0">
                <div className="text-xs uppercase tracking-[0.2em] text-neon-cyan">
                  Currently
                </div>
                <div className="font-display text-base font-semibold leading-snug">
                  {personal.currentlyBuilding}
                </div>
              </div>
              <div className="relative flex h-2.5 w-2.5 shrink-0 items-center justify-center">
                <span className="absolute h-2.5 w-2.5 animate-ping rounded-full bg-emerald-400/70" />
                <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
);

export default Hero;
