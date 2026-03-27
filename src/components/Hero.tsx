import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

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
    <span className="inline-block border-r-2 border-purple-500 pr-1 h-full align-middle text-purple-400 font-normal uppercase tracking-[0.2em]">
      {text}
    </span>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden z-10">
      {/* Radial glow overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsla(270,60%,30%,0.15)_0%,_transparent_70%)]" />
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* NAME SECTION - Minimalist Style */}
          <div className="relative w-fit mx-auto mb-10 animate-fade-in-up">
            <div className="flex items-baseline relative z-10 flex-wrap justify-center">
              <span className="text-gray-500 text-4xl md:text-5xl font-serif-elegant mr-4 md:mr-6 lowercase font-normal italic">
                hi, i'm
              </span>
              <h1 className="text-6xl md:text-8xl text-white font-normal lowercase tracking-tight font-serif-elegant">
                mhaine
              </h1>
              <span className="text-6xl md:text-8xl text-white lowercase ml-4 md:ml-6 font-script font-normal">
                sebido
              </span>
            </div>
          </div>

          {/* Subtitle with Typewriter - Updated to font-normal & uppercase */}
          <div className="text-sm md:text-lg text-gray-400 mb-8 font-sans font-normal tracking-[0.3em] uppercase h-12 flex items-center justify-center animate-fade-in-up delay-200">
            <Typewriter 
              words={["Web Developer", "UI/UX Designer"]} 
              typeSpeed={100} 
              deleteSpeed={50} 
              delayBeforeDelete={2000} 
            />
          </div>
          
          <p className="text-[13px] md:text-sm text-gray-500 max-w-xl mx-auto mb-12 animate-fade-in-up delay-300 leading-relaxed font-sans font-normal uppercase tracking-widest">
            Creating reliable, user-centered digital solutions through <span className="text-white">thoughtful design</span> and <span className="text-white">efficient development</span>.
          </p>

          {/* CTA Buttons - Matching Navbar Contact Style */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up delay-400 font-sans font-normal uppercase tracking-widest text-[11px]">
            <a href="#projects" className="bg-white text-black px-10 py-4 rounded-lg hover:bg-gray-200 transition-all shadow-lg shadow-white/5">
              View My Work
            </a>
            <a href="#contact" className="border border-white/10 text-white hover:bg-white/5 px-10 py-4 rounded-lg transition-all">
              Get in Touch
            </a>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 animate-float">
        <a
          href="#about"
          className="flex flex-col items-center gap-3 text-gray-600 hover:text-purple-400 transition-colors"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] font-normal font-sans">Scroll</span>
          <ChevronDown className="w-4 h-4 opacity-50" />
        </a>
      </div>

      {/* Background Decorative Glows */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-[120px] animate-pulse-glow opacity-50" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-900/10 rounded-full blur-[150px] animate-pulse-glow opacity-50" style={{ animationDelay: '2s' }} />
    </section>
  );
};

export default Hero;