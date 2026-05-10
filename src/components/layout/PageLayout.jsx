import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import { personal } from '../../data/portfolioData';

const Orb = ({ className, animate, transition }) => (
  <motion.div
    aria-hidden
    className={`pointer-events-none absolute rounded-full blur-3xl ${className}`}
    animate={animate}
    transition={transition}
  />
);

const PageLayout = ({ children }) => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background layers */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <Orb
          className="left-[-10%] top-[-10%] h-[420px] w-[420px] bg-neon-cyan/25"
          animate={{ x: [0, 30, -10, 0], y: [0, 20, -10, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <Orb
          className="right-[-12%] top-[20%] h-[460px] w-[460px] bg-neon-violet/25"
          animate={{ x: [0, -20, 20, 0], y: [0, -30, 10, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        />
        <Orb
          className="left-[20%] bottom-[-10%] h-[380px] w-[380px] bg-neon-teal/20"
          animate={{ x: [0, 25, -15, 0], y: [0, -20, 25, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <Orb
          className="right-[10%] bottom-[5%] h-[280px] w-[280px] bg-neon-blue/20"
          animate={{ x: [0, -30, 10, 0], y: [0, 15, -20, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <Navbar />
      <main className="relative">{children}</main>
      <Footer />

      <a
        href={`https://wa.me/${personal.whatsappWaMe}`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-[100] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/35 transition hover:scale-105 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 md:bottom-7 md:right-7"
        aria-label="Message on WhatsApp"
      >
        <FaWhatsapp className="h-8 w-8" aria-hidden />
      </a>
    </div>
  );
};

export default PageLayout;
