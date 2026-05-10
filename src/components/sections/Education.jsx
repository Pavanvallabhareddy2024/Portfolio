import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import GlassCard from '../common/GlassCard';
import { education } from '../../data/portfolioData';

const Education = () => {
  return (
    <section id="education" className="section-padding relative">
      <div className="container-app">
        <SectionTitle
          className="max-w-5xl"
          titleClassName="md:whitespace-nowrap"
          eyebrow="Education"
          title={
            <>
              Academic path to{' '}
              <span className="text-gradient">B.Tech</span>
            </>
          }
          description="Secondary and intermediate in Andhra Pradesh, then a B.Tech in Computer Science Engineering (AI & DS) — the academic backbone for the engineering work I do today."
        />

        <div className="mx-auto mt-14 flex w-full max-w-5xl flex-col gap-5">
          {education.map((e, i) => {
            const staggerClass =
              i === 0 ? 'self-end' : i === 1 ? 'self-center' : 'self-start';
            return (
            <motion.div
              key={e.school}
              className={`w-full max-w-3xl ${staggerClass}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <GlassCard variant="strong" className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-neon-cyan/30 to-neon-violet/30 ring-1 ring-white/10">
                    <GraduationCap className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="font-display text-lg font-semibold md:text-xl">
                          {e.school}
                        </h3>
                        <p className="mt-1 text-sm text-white/70">{e.degree}</p>
                      </div>
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/75">
                        {e.period}
                      </span>
                    </div>
                    <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-neon-teal/30 bg-neon-teal/10 px-3 py-1 text-xs font-semibold text-neon-teal">
                      <Award className="h-3.5 w-3.5" />
                      {e.detail}
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
