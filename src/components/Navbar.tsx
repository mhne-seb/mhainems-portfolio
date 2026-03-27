import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
// Import the mascot image
import mascot from '../assets/mascot.png'; 

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'About Me', href: '#about' },
  { name: 'Works', href: '#projects' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isScrolled
          ? 'bg-black/60 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      } py-5`} 
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        {/* LOGO SECTION */}
        <a
          href="#"
          className="flex items-center gap-3 transition-opacity hover:opacity-80 group"
        >
          <img 
            src={mascot} 
            alt="Mascot" 
            className="h-7 w-auto object-contain brightness-110" 
          />
          <span className="text-white text-base md:text-lg font-sans font-light tracking-[0.15em] uppercase transition-all group-hover:tracking-[0.25em]">
            mhaine sebido
          </span>
        </a>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          <div className="flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[11px] lg:text-[12px] text-gray-400 hover:text-white transition-all duration-300 font-sans font-normal tracking-[0.2em] uppercase relative group"
              >
                {link.name}
                {/* Minimalist Underline Hover */}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
          
          {/* ACTION BUTTONS */}
          <div className="flex items-center gap-4 lg:gap-6">
            {/* Download CV - Outline Style */}
            <a
              href="/Mhaine_Sebido_CV.pdf" 
              download="Mhaine_Sebido_CV.pdf"
              className="px-6 py-2 border border-white/30 text-white text-[11px] font-sans font-normal rounded-md hover:bg-white/10 hover:border-white transition-all duration-300 uppercase tracking-[0.2em]"
            >
              Download CV
            </a>

            {/* White Contact Button - Minimalist Square-ish Style */}
            <a
              href="#contact"
              className="px-7 py-2 bg-white text-black text-[11px] font-sans font-normal rounded-md hover:bg-purple-200 transition-all duration-300 uppercase tracking-[0.2em] shadow-lg shadow-white/5"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-white"
        >
          {isMobileMenuOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-3xl border-b border-white/10 transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'opacity-100 visible py-10' : 'opacity-0 invisible h-0'
        }`}
      >
        <div className="container mx-auto px-6 flex flex-col gap-8 text-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-400 text-[12px] font-sans font-normal tracking-[0.3em] uppercase hover:text-white"
            >
              {link.name}
            </a>
          ))}
          
          <div className="flex flex-col gap-4 mt-4">
            {/* Mobile Download CV */}
            <a
              href="/path-to-your-cv.pdf"
              download="Mhaine_Sebido_CV.pdf"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-6 py-4 border border-white/20 text-white rounded-lg font-normal font-sans uppercase tracking-[0.3em] text-[11px]"
            >
              Download CV
            </a>

            {/* Mobile Contact */}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-6 py-4 bg-white text-black rounded-lg font-normal font-sans uppercase tracking-[0.3em] text-[11px]"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;