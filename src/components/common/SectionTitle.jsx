import { motion } from 'framer-motion';

const SectionTitle = ({ eyebrow, title, description, align = 'center' }) => {
  const alignClass =
    align === 'left' ? 'text-left items-start' : 'text-center items-center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`mx-auto flex max-w-3xl flex-col gap-3 ${alignClass} ${
        align === 'left' ? 'mx-0' : ''
      }`}
    >
      {eyebrow ? (
        <span
          className={`inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/70 ${
            align === 'center' ? 'self-center' : ''
          }`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-neon-cyan animate-pulse" />
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-display text-3xl font-bold leading-tight md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-sm leading-relaxed text-white/70 md:text-base">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
};

export default SectionTitle;
