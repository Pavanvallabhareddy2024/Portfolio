import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Trophy, Flame, Rocket, Layers } from 'lucide-react';
import GlassCard from './GlassCard';
import { achievements } from '../../data/portfolioData';

const icons = [Trophy, Flame, Rocket, Layers];
const accents = [
  'from-neon-cyan/30 to-neon-cyan/0 text-neon-cyan',
  'from-neon-violet/30 to-neon-violet/0 text-neon-violet',
  'from-neon-teal/30 to-neon-teal/0 text-neon-teal',
  'from-neon-blue/30 to-neon-blue/0 text-neon-blue',
];

const Counter = ({ value }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const numericMatch = String(value).match(/\d+/);
    if (!numericMatch) {
      setDisplay(value);
      return;
    }
    if (!inView) return;

    const target = parseInt(numericMatch[0], 10);
    const suffix = String(value).replace(numericMatch[0], '');
    const duration = 1100;
    const start = performance.now();

    let raf;
    const tick = (now) => {
      const elapsed = now - start;
      const t = Math.min(1, elapsed / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      const current = Math.floor(target * eased);
      setDisplay(current + suffix);
      if (t < 1) raf = requestAnimationFrame(tick);
      else setDisplay(target + suffix);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span
      ref={ref}
      className="text-gradient font-display text-4xl font-extrabold md:text-5xl"
    >
      {display}
    </span>
  );
};

/**
 * Same four milestone cards as the Milestones section — icon, animated stat, title, description.
 */
const MilestoneCards = ({ className = '' }) => {
  return (
    <div
      className={`grid gap-5 sm:grid-cols-2 lg:grid-cols-4 ${className}`}
    >
      {achievements.map((item, i) => {
        const Icon = icons[i % icons.length];
        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <GlassCard className="h-full p-6">
              <div
                className={`mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${accents[i % accents.length]} ring-1 ring-white/10`}
              >
                <Icon className="h-5 w-5" />
              </div>
              <Counter value={item.value} />
              <h4 className="mt-2 font-display text-base font-semibold">
                {item.title}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-white/65">
                {item.description}
              </p>
            </GlassCard>
          </motion.div>
        );
      })}
    </div>
  );
};

export default MilestoneCards;
