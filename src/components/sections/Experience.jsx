import { motion } from 'framer-motion';
import { Briefcase, MapPin, CalendarDays, CheckCircle2 } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import GlassCard from '../common/GlassCard';
import { experiences } from '../../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="section-padding relative">
      <div className="container-app">
        <SectionTitle
          eyebrow="Experience"
          title={
            <>
              Where I&apos;ve been{' '}
              <span className="text-gradient">shipping</span>
            </>
          }
          description="Real-world impact across full-stack web, REST APIs, AWS cloud and AI workflows."
        />

        <div className="relative mx-auto mt-14 max-w-4xl">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 hidden w-px bg-gradient-to-b from-neon-cyan/60 via-neon-violet/40 to-transparent md:block" />

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.role + idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className="relative md:pl-14"
              >
                {/* Node */}
                <div className="absolute left-0 top-3 hidden h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-ink-900 ring-4 ring-ink-950 md:flex">
                  <span className="h-3 w-3 animate-pulse rounded-full bg-gradient-to-br from-neon-cyan to-neon-violet" />
                </div>

                <GlassCard variant="strong" className="p-6 md:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-neon-cyan">
                        <Briefcase className="h-3.5 w-3.5" />
                        {exp.company}
                      </div>
                      <h3 className="mt-2 font-display text-xl font-bold md:text-2xl">
                        {exp.role}
                      </h3>
                    </div>
                    <div className="flex flex-col items-start gap-1 text-xs text-white/60 md:items-end">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                        <CalendarDays className="h-3.5 w-3.5" />
                        {exp.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-2">
                        <MapPin className="h-3.5 w-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <ul className="mt-5 grid gap-2.5 md:grid-cols-2">
                    {exp.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2 text-sm leading-relaxed text-white/75"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-neon-teal" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {exp.chips.map((c) => (
                      <span
                        key={c}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/75"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
