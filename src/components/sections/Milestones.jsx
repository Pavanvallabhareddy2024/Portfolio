import { ExternalLink } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import MilestoneCards from '../common/MilestoneCards';
import { personal } from '../../data/portfolioData';

const Milestones = () => {
  return (
    <section id="milestones" className="section-padding relative">
      <div className="container-app">
        <SectionTitle
          eyebrow="Milestones"
          title={
            <>
              Wins that shaped my <span className="text-gradient">journey</span>
            </>
          }
          description="A snapshot of consistency, depth and momentum — built one shipped project at a time."
        />

        <MilestoneCards className="mt-14" />

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-white/65 md:mt-12 md:text-base">
          For the full gallery, live demos and day-by-day breakdown,{' '}
          <a
            href={personal.portfolioJourney}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 font-medium text-neon-cyan underline decoration-neon-cyan/40 underline-offset-4 transition-colors hover:text-white hover:decoration-white/50"
          >
            see more on build200.lovable.app
            <ExternalLink className="h-3.5 w-3.5 shrink-0 opacity-80" aria-hidden />
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default Milestones;
