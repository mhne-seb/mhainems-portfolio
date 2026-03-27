import StarBackground from '@/components/StarBackground';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import AboutCombined from '@/components/AboutCombined';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden selection:bg-purple-500/30 selection:text-white">
      <style>{`
        @keyframes progress-bar {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
        .animate-progress-bar {
          animation: progress-bar linear;
        }
        /* Para sa smooth scrolling sa buong page */
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      {/* Animated Star Background - Nakalagay sa likod (z-0) */}
      <StarBackground />
      
      {/* Navigation - Dapat laging nasa taas (z-[100]) */}
      <Navbar />
      
      {/* Main Content - Naka-angat nang kaunti (z-10) para sa stars */}
      <main className="relative z-10">
        <Hero />
        <AboutCombined />
        <Projects />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;