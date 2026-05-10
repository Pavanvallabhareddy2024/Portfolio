import { motion } from 'framer-motion';

const variants = {
  primary:
    'bg-gradient-to-r from-neon-cyan to-neon-violet text-ink-950 hover:shadow-glow',
  secondary:
    'bg-white/5 border border-white/15 text-white hover:bg-white/10 hover:border-white/25',
  ghost: 'bg-transparent border border-white/10 text-white/90 hover:bg-white/5',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm md:text-base',
  lg: 'px-6 py-3 text-base',
};

const AnimatedButton = ({
  children,
  variant = 'primary',
  size = 'md',
  as = 'button',
  href,
  icon: Icon,
  iconRight: IconRight,
  className = '',
  ...rest
}) => {
  const Comp = href ? motion.a : motion.button;

  return (
    <Comp
      href={href}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 320, damping: 18 }}
      className={[
        'group inline-flex items-center justify-center gap-2 rounded-full font-semibold',
        'backdrop-blur-md transition-all duration-300',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-cyan/60',
        sizes[size],
        variants[variant],
        className,
      ].join(' ')}
      {...rest}
    >
      {Icon ? <Icon className="h-4 w-4" /> : null}
      <span className="relative">{children}</span>
      {IconRight ? (
        <IconRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      ) : null}
    </Comp>
  );
};

export default AnimatedButton;
