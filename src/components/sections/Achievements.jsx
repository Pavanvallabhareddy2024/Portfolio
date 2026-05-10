import SectionTitle from '../common/SectionTitle';
import MilestoneCards from '../common/MilestoneCards';

const Achievements = () => {
  return (
    <section id="achievements" className="section-padding relative">
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
      </div>
    </section>
  );
};

export default Achievements;
