import { motion } from 'framer-motion';

const GlassCard = ({
  children,
  className = '',
  hover = true,
  variant = 'default',
  as: Tag = 'div',
  ...rest
}) => {
  const base =
    variant === 'strong'
      ? 'glass-strong'
      : variant === 'soft'
        ? 'glass-soft'
        : 'glass';

  const MotionTag = motion[Tag] || motion.div;

  return (
    <MotionTag
      className={`relative overflow-hidden ${base} ${className}`}
      whileHover={
        hover
          ? {
              y: -4,
              boxShadow:
                '0 20px 60px rgba(5,6,13,0.55), 0 0 30px rgba(34,211,238,0.18)',
            }
          : undefined
      }
      transition={{ type: 'spring', stiffness: 220, damping: 22 }}
      {...rest}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        aria-hidden
      >
        <div className="absolute -top-24 -left-24 h-48 w-48 rounded-full bg-neon-cyan/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-neon-violet/10 blur-3xl" />
      </div>
      <div className="relative">{children}</div>
    </MotionTag>
  );
};

export default GlassCard;
