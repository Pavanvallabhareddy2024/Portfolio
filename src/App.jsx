import PageLayout from './components/layout/PageLayout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Milestones from './components/sections/Milestones';
import Education from './components/sections/Education';
import Certificates from './components/sections/Certificates';
import Contact from './components/sections/Contact';

const App = () => {
  return (
    <PageLayout>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Milestones />
      <Education />
      <Certificates />
      <Contact />
    </PageLayout>
  );
};

export default App;
