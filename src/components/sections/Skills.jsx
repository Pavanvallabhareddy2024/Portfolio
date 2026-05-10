import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import { skillGroups } from '../../data/portfolioData';

const accentRing = {
  cyan: 'ring-neon-cyan/40 hover:shadow-glow',
  violet: 'ring-neon-violet/40 hover:shadow-glow-violet',
  teal: 'ring-neon-teal/40 hover:shadow-glow-soft',
  blue: 'ring-neon-blue/40 hover:shadow-glow',
};

const accentBg = {
  cyan: 'bg-neon-cyan/15',
  violet: 'bg-neon-violet/15',
  teal: 'bg-neon-teal/15',
  blue: 'bg-neon-blue/15',
};

const accentDot = {
  cyan: 'bg-neon-cyan',
  violet: 'bg-neon-violet',
  teal: 'bg-neon-teal',
  blue: 'bg-neon-blue',
};

const SkillCard = ({ skill, accent }) => {
  const [open, setOpen] = useState(false);
  const { Icon, name, description, color } = skill;

  return (
    <motion.div
      layout
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-4 ring-1 ${accentRing[accent]} backdrop-blur-md transition-all`}
    >
      <button
        type="button"
        onClick={() => setOpen((s) => !s)}
        className="flex w-full items-center gap-3 text-left"
        aria-expanded={open}
      >
        <span
          className={`grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl ${accentBg[accent]} ring-1 ring-white/10 transition-transform group-hover:scale-105`}
        >
          <Icon className="h-6 w-6" style={{ color }} />
        </span>
        <span className="flex-1">
          <span className="block font-display text-sm font-semibold">
            {name}
          </span>
          <span className="mt-0.5 block text-[11px] uppercase tracking-wider text-white/50">
            Tap to expand
          </span>
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="grid h-7 w-7 place-items-center rounded-full border border-white/10 bg-white/5 text-white/70"
        >
          <ChevronDown className="h-4 w-4" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <div className="mt-3 border-t border-white/10 pt-3">
              <p className="text-sm leading-relaxed text-white/70">
                {description}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const groupStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04 } },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Skills = () => {
  return (
    <section id="skills" className="section-padding relative">
      <div className="container-app">
        <SectionTitle
          eyebrow="Tech Stack"
          title={
            <>
              Skills powering my <span className="text-gradient">products</span>
            </>
          }
          description="Tap any card to see exactly where and how I've used the skill in real projects."
        />

        <div className="mt-14 space-y-10">
          {skillGroups.map((group) => (
            <div key={group.group}>
              <div className="mb-4 flex items-center gap-3">
                <span
                  className={`h-2.5 w-2.5 rounded-full ${accentDot[group.accent]} shadow-[0_0_12px_currentColor]`}
                />
                <h3 className="font-display text-lg font-semibold md:text-xl">
                  {group.group}
                </h3>
                <span className="h-px flex-1 bg-gradient-to-r from-white/15 to-transparent" />
                <span className="text-xs uppercase tracking-wider text-white/40">
                  {group.items.length} skills
                </span>
              </div>

              <motion.div
                variants={groupStagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-80px' }}
                className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              >
                {group.items.map((skill) => (
                  <motion.div key={skill.name} variants={item}>
                    <SkillCard skill={skill} accent={group.accent} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
