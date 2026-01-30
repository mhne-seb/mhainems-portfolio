import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
// IMPORT THE IMAGE HERE
import mhainePic from '../assets/mhaine.jpg'; 

const Typewriter = ({ words, typeSpeed = 100, deleteSpeed = 50, delayBeforeDelete = 2000 }) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(typeSpeed);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % words.length;
    let fullText = words[i];
    let updatedText = isDeleting 
      ? fullText.substring(0, text.length - 1) 
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(deleteSpeed);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(delayBeforeDelete);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(typeSpeed);
    }
  };

  return (
    <span className="inline-block border-r-4 border-primary animate-pulse pr-1 h-full align-middle">
      {text}
    </span>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Radial glow overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsla(270,60%,30%,0.2)_0%,_transparent_70%)]" />
      
      {/* Main Content Container - Increased max-width to allow text to be "pahaba" */}
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Profile Photo - UPDATED: Mas malaki na (w-56 to w-64) */}
          <div className="mb-8 animate-fade-in-up">
            <div className="relative w-56 h-56 md:w-64 md:h-64 mx-auto">
              <img 
                src={mhainePic} 
                alt="Mhaine Sebido" 
                className="w-full h-full rounded-full object-cover border-4 border-primary/20 shadow-[0_0_30px_rgba(124,58,237,0.3)]"
              />
            </div>
          </div>

          {/* Main Heading - UPDATED: Mas maliit na font at naka-layout na pahaba */}
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 animate-fade-in-up delay-100 whitespace-nowrap">
            <span className="text-foreground">Hi, I'm </span>
            <span className="bg-accent-gradient bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
              Mhaine Sebido
            </span>
          </h1>

          {/* Subtitle with Looping Typewriter Animation */}
          <div className="text-xl md:text-2xl text-muted-foreground mb-4 font-light h-10 flex items-center justify-center">
            <Typewriter 
              words={["Front-end Developer", "UI/UX Designer"]} 
              typeSpeed={100} 
              deleteSpeed={50} 
              delayBeforeDelete={2000} 
            />
          </div>
          
          <p className="text-lg text-muted-foreground/70 max-w-2xl mx-auto mb-12 animate-fade-in-up delay-300">
            Creating reliable, user-centered digital solutions through thoughtful design and efficient development.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-400">
            <a href="#projects" className="btn-cosmic text-primary-foreground">
              View My Work
            </a>
            <a href="#contact" className="btn-outline-cosmic">
              Get in Touch
            </a>
          </div>

        </div>
      </div>

      {/* Scroll Indicator - Fixed at bottom-2 */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 animate-float">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </a>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/10 rounded-full blur-[100px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
    </section>
  );
};

export default Hero;