import { motion } from 'framer-motion';
import { BadgeCheck, ScrollText } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import { certificates } from '../../data/portfolioData';

const accent = {
  cyan: 'from-neon-cyan/25 to-neon-cyan/0 text-neon-cyan',
  violet: 'from-neon-violet/25 to-neon-violet/0 text-neon-violet',
  teal: 'from-neon-teal/25 to-neon-teal/0 text-neon-teal',
  blue: 'from-neon-blue/25 to-neon-blue/0 text-neon-blue',
};

const Certificates = () => {
  return (
    <section id="certificates" className="section-padding relative">
      <div className="container-app">
        <SectionTitle
          eyebrow="Certifications"
          title={
            <>
              Continuous <span className="text-gradient">learning</span>
            </>
          }
          description="A growing collection of certifications across web, data, programming and AI."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md transition-all hover:border-white/20 hover:shadow-glow"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br opacity-40 blur-2xl transition-opacity group-hover:opacity-60"
                   style={{
                     background:
                       'radial-gradient(circle, rgba(34,211,238,0.25), transparent 60%)',
                   }}
              />
              <div className="flex items-start gap-3">
                <div
                  className={`grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-gradient-to-br ${accent[c.accent]} ring-1 ring-white/10`}
                >
                  <ScrollText className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h4 className="font-display text-base font-semibold leading-snug">
                    {c.title}
                  </h4>
                  <p className="mt-1 text-xs text-white/60">{c.issuer}</p>
                </div>
                <BadgeCheck className="h-5 w-5 text-neon-cyan" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
