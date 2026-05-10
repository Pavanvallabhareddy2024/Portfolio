import { motion } from 'framer-motion';
import { Code2, Server, Cloud, Zap } from 'lucide-react';
import GlassCard from '../common/GlassCard';
import SectionTitle from '../common/SectionTitle';
import { aboutHighlights, personal, stats } from '../../data/portfolioData';

const iconMap = {
  code: Code2,
  server: Server,
  cloud: Cloud,
  spark: Zap,
};

const accentMap = {
  code: 'from-neon-cyan/30 to-neon-cyan/0 text-neon-cyan',
  server: 'from-neon-violet/30 to-neon-violet/0 text-neon-violet',
  cloud: 'from-neon-blue/30 to-neon-blue/0 text-neon-blue',
  spark: 'from-neon-teal/30 to-neon-teal/0 text-neon-teal',
};

const cardStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const cardItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const About = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="container-app">
        <SectionTitle
          className="max-w-[95vw] sm:max-w-none lg:max-w-6xl"
          titleClassName="md:whitespace-nowrap"
          descriptionClassName="max-w-none w-full"
          eyebrow="About Me"
          title={
            <>
              Building <span className="text-gradient">production‑ready</span>{' '}
              full‑stack experiences
            </>
          }
          description={
            <>
              I&apos;m a full-stack developer experienced in React, Node.js,
              Express, MySQL and AWS — building dashboards, REST APIs,{' '}
              <span className="lg:mt-1 lg:block">
                authentication, cloud storage, and real-time systems.
              </span>
            </>
          }
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          {/* Bio card */}
          <GlassCard
            variant="strong"
            hover={false}
            className="p-7 md:p-9 lg:col-span-7"
          >
            <div className="flex items-start gap-4">
              <div className="grid h-14 w-14 flex-shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-neon-cyan/30 to-neon-violet/30 ring-1 ring-white/10">
                <span className="font-display text-lg font-extrabold text-white">
                  SP
                </span>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold md:text-2xl">
                  Hey — I&apos;m {personal.firstName}.
                </h3>
                <p className="mt-1 text-sm text-white/60">
                  {personal.role} · Based in {personal.location}
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-4 text-sm leading-relaxed text-white/75 md:text-base">
              <p>
                I love turning complex problems into clean, fast, and beautiful
                products. Over the last year I&apos;ve shipped{' '}
                <span className="text-white">40+ projects</span> — covering
                React dashboards, REST APIs with Node + Express, MySQL schema
                design, and AWS-powered backends.
              </p>
              <p>
                On the cloud side, I&apos;ve worked deeply with{' '}
                <span className="text-white">
                  Amplify, Cognito, Lambda, S3, DynamoDB, AppSync, EventBridge
                </span>{' '}
                and even <span className="text-white">AWS Bedrock</span> for
                AI-powered notification workflows.
              </p>
              <p>
                I run a public{' '}
                <a
                  href={personal.portfolioJourney}
                  target="_blank"
                  rel="noreferrer"
                  className="text-neon-cyan underline-offset-2 hover:underline"
                >
                  200‑day build journey
                </a>{' '}
                where I document everything I ship — REST APIs, dashboards,
                CRUD apps, SQL projects and AWS features.
              </p>
            </div>

            <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-3 text-center"
                >
                  <div className="text-gradient font-display text-xl font-bold">
                    {s.value}
                  </div>
                  <div className="mt-0.5 text-[11px] uppercase tracking-wider text-white/55">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* Highlights */}
          <motion.div
            variants={cardStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1 xl:grid-cols-2"
          >
            {aboutHighlights.map((h) => {
              const Icon = iconMap[h.icon];
              return (
                <motion.div key={h.title} variants={cardItem}>
                  <GlassCard className="h-full p-5">
                    <div
                      className={`mb-4 grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br ${accentMap[h.icon]} ring-1 ring-white/10`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <h4 className="font-display text-base font-semibold">
                      {h.title}
                    </h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/65">
                      {h.text}
                    </p>
                  </GlassCard>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
