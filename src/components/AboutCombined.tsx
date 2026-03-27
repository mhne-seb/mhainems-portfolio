import { useState, useEffect, useRef } from 'react';
import { Code2, Palette, Lightbulb, Users, GraduationCap, X, ChevronLeft, ChevronRight } from 'lucide-react';

// --- SKILL ICONS IMPORTS ---
import { 
  SiHtml5, SiCss3, SiTypescript, SiJavascript, SiPhp, 
  SiPython, SiReact, SiTailwindcss, SiGit, SiFigma, 
  SiCanva, SiAdobephotoshop 
} from 'react-icons/si';
import { FaJava, FaFilm } from 'react-icons/fa';

// --- IMAGES IMPORTS ---
import maenProfile from '../assets/maen.png'; 

import pupLogo from '../assets/org/11.png'; 
import shsLogo from '../assets/org/7.jpg';  
import jhsLogo from '../assets/org/10.jpg'; 

import cert1 from '../assets/certificate/ccert1.jpg'; 
import cert2 from '../assets/certificate/ccert2.jpg'; 
import cert3 from '../assets/certificate/ccert3.jpg';

// --- DATA ARRAYS ---
const highlights = [
  { icon: Code2, title: 'Developer', description: 'Building efficient, scalable solutions' },
  { icon: Palette, title: 'Designer', description: 'Crafting beautiful user experiences' },
  { icon: Lightbulb, title: 'Problem Solver', description: 'Turning ideas into reality' },
  { icon: Users, title: 'Team Player', description: 'Collaborative & communicative' },
];

const educationList = [
  { school: "Polytechnic University of the Philippines", subtext: "BS in Information Technology", year: "2023 – Present", logo: pupLogo },
  { school: "San Lorenzo Ruiz Senior High School", subtext: "STEM Strand", year: "2021 – 2023", logo: shsLogo },
  { school: "Manggahan High School", subtext: "Junior High School", year: "2017 – 2021", logo: jhsLogo }
];

const skills = [
  { name: 'HTML', icon: <SiHtml5 className="w-10 h-10" />, color: 'text-orange-500' },
  { name: 'CSS', icon: <SiCss3 className="w-10 h-10" />, color: 'text-blue-500' },
  { name: 'JavaScript', icon: <SiJavascript className="w-10 h-10" />, color: 'text-yellow-400' },
  { name: 'TypeScript', icon: <SiTypescript className="w-10 h-10" />, color: 'text-blue-600' },
  { name: 'React', icon: <SiReact className="w-10 h-10" />, color: 'text-cyan-400' },
  { name: 'Tailwind', icon: <SiTailwindcss className="w-10 h-10" />, color: 'text-teal-400' },
  { name: 'PHP (Laravel)', icon: <SiPhp className="w-10 h-10" />, color: 'text-purple-500' },
  { name: 'Java', icon: <FaJava className="w-10 h-10" />, color: 'text-red-500' },
  { name: 'Python', icon: <SiPython className="w-10 h-10" />, color: 'text-green-500' },
  { name: 'Git', icon: <SiGit className="w-10 h-10" />, color: 'text-orange-600' },
  { name: 'Figma', icon: <SiFigma className="w-10 h-10" />, color: 'text-pink-500' },
  { name: 'Photoshop', icon: <SiAdobephotoshop className="w-10 h-10" />, color: 'text-blue-500' },
  { name: 'Canva', icon: <SiCanva className="w-10 h-10" />, color: 'text-cyan-500' },
  { name: 'CapCut', icon: <FaFilm className="w-10 h-10" />, color: 'text-gray-300' },
];

const certifications = [
  { 
    title: 'Google Data Analytics Professional Certificate', 
    issuer: 'Google via Coursera', 
    image: cert1,
    description: 'An 8-course comprehensive program covering data cleaning, analysis, and visualization.'
  },
  { 
    title: 'Google Data Analytics Capstone', 
    issuer: 'Google via Coursera', 
    image: cert2,
    description: 'Practical application of data analytics skills to solve a real-world case study.'
  },
  { 
    title: 'Fundamentals of UI/UX Design', 
    issuer: 'Microsoft via Coursera', 
    image: cert3,
    description: 'Foundational principles of creating intuitive and visually appealing user interfaces.'
  }
];

const AboutCombined = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<'about' | 'skills' | 'certifications'>('about');

  // Lightbox States
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentCertIndex, setCurrentCertIndex] = useState(0);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [lightboxOpen]);

  // Lightbox Handlers
  const openLightbox = (index: number) => {
    setCurrentCertIndex(index);
    setLightboxOpen(true);
  };
  const closeLightbox = () => setLightboxOpen(false);
  const nextCert = () => setCurrentCertIndex((prev) => (prev + 1) % certifications.length);
  const prevCert = () => setCurrentCertIndex((prev) => (prev - 1 + certifications.length) % certifications.length);

  return (
    <section id="about" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden z-10 text-white min-h-screen">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* --- HEADER SECTION --- */}
        <div className={`relative w-fit mb-16 ml-4 md:ml-0 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="absolute left-0 top-[-20px] bottom-[-10px] w-[1px] bg-white/40" />
          <div className="absolute left-0 right-[-50px] bottom-[10px] md:bottom-[14px] h-[1px] bg-white/40" />
          <div className="flex items-baseline pl-5 relative z-10">
            <h2 className="text-6xl md:text-8xl text-white font-normal lowercase tracking-wide font-serif-elegant">about</h2>
            <span className="text-6xl md:text-8xl text-white lowercase ml-6 font-script">me</span>
          </div>
        </div>

        <div className={`flex flex-col lg:flex-row gap-12 lg:gap-16 items-start transition-all duration-1000 delay-200 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* LEFT: Profile Image */}
          <div className="w-full lg:w-1/3 flex-shrink-0 lg:sticky lg:top-32">
            <div className="rounded-3xl overflow-hidden border border-white/10 bg-[#151318] shadow-2xl">
              <img 
                src={maenProfile} 
                alt="Profile" 
                className="w-full h-auto aspect-[3/4] object-cover hover:scale-105 transition-transform duration-700" 
              />
            </div>
          </div>

          {/* RIGHT: Content Area */}
          <div className="w-full lg:w-2/3 flex flex-col">
            
            {/* Tabs Navigation */}
            <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#151318] border border-white/5 rounded-2xl w-max mb-10">
              {['about', 'skills', 'certifications'].map((tab) => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab as any)}
                  className={`px-5 py-2.5 text-[11px] uppercase tracking-[0.2em] font-sans font-normal rounded-xl transition-all ${
                    activeTab === tab ? 'bg-white text-black' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {tab === 'about' ? 'about me' : tab}
                </button>
              ))}
            </div>

            {/* TAB CONTENT: About Me */}
            {activeTab === 'about' && (
              <div className="space-y-12 animate-fade-in-up font-sans font-normal">
                <div className="space-y-6 text-[14px] md:text-[16px] text-gray-400 leading-relaxed tracking-wide">
                  <p>I am a third-year college student and an aspiring <span className="text-white">Software Engineer</span> and <span className="text-white">Web Developer</span> with a strong interest in building reliable solutions.</p>
                  <p>I am driven by the goal of creating technologies that address real-world problems through thoughtful design and continuous learning.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {highlights.map((item, index) => (
                    <div key={index} className="p-5 rounded-2xl bg-[#18151f]/50 border border-white/5 transition-colors">
                      <h3 className="text-[12px] uppercase tracking-widest text-white mb-2">{item.title}</h3>
                      <p className="text-[12px] text-gray-500 leading-snug">{item.description}</p>
                    </div>
                  ))}
                </div>

                <div>
                  <h3 className="text-[11px] uppercase tracking-[0.3em] text-gray-500 mb-6 flex items-center gap-3">
                    <GraduationCap size={16} /> Education
                  </h3>
                  <div className="space-y-4">
                    {educationList.map((edu, index) => (
                      <div key={index} className="flex items-center gap-5 p-5 rounded-2xl bg-[#18151f]/50 border border-white/5">
                        <img src={edu.logo} className="w-12 h-12 rounded-full object-contain" />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-[14px] font-normal text-gray-200 tracking-wide">{edu.school}</h4>
                          <p className="text-[11px] uppercase tracking-widest text-purple-400/70 mt-1">{edu.subtext} • {edu.year}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT: Skills Grid */}
            {activeTab === 'skills' && (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 animate-fade-in-up">
                {skills.map((skill, index) => (
                  <div key={index} className="flex flex-col items-center justify-center p-6 bg-[#18151f]/50 border border-white/5 rounded-2xl transition-all hover:bg-white/[0.03]">
                    <div className={`${skill.color} opacity-90 mb-4`}>{skill.icon}</div>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-sans font-normal text-gray-400">{skill.name}</span>
                  </div>
                ))}
              </div>
            )}

            {/* TAB CONTENT: Certifications (Click to View) */}
            {activeTab === 'certifications' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-[#18151f]/50 border border-white/5 rounded-2xl overflow-hidden group flex flex-col">
                    
                    {/* Clickable Image Container */}
                    <div 
                      className="aspect-[4/3] overflow-hidden cursor-pointer relative"
                      onClick={() => openLightbox(index)}
                    >
                      <img 
                        src={cert.image} 
                        alt={cert.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                      />
                      {/* Hover Overlay indicating it's clickable */}
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                        <span className="text-white text-[11px] uppercase tracking-[0.2em] font-sans font-normal border border-white/30 px-4 py-2 rounded-full">
                          View Certificate
                        </span>
                      </div>
                    </div>

                    {/* Static Text Content Below */}
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-[12px] uppercase tracking-widest text-white font-normal mb-1 leading-snug">
                        {cert.title}
                      </h3>
                      <p className="text-[10px] uppercase tracking-widest text-purple-400 font-normal mb-4">
                        {cert.issuer}
                      </p>
                      <p className="text-[11px] text-gray-500 font-sans tracking-wide leading-relaxed mt-auto">
                        {cert.description}
                      </p>
                    </div>

                  </div>
                ))}
              </div>
            )}

          </div>
        </div>
      </div>

      {/* ========================================= */}
      {/* LIGHTBOX MODAL FOR CERTIFICATES           */}
      {/* ========================================= */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[110] bg-black/95 flex items-center justify-center p-4 backdrop-blur-md" onClick={closeLightbox}>
          <button 
            onClick={closeLightbox} 
            className="absolute top-6 right-6 p-3 text-white/50 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-all"
          >
            <X size={24} />
          </button>
          
          <button 
            onClick={(e) => { e.stopPropagation(); prevCert(); }} 
            className="absolute left-4 p-3 text-white/50 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-all"
          >
            <ChevronLeft size={32} />
          </button>

          <button 
            onClick={(e) => { e.stopPropagation(); nextCert(); }} 
            className="absolute right-4 p-3 text-white/50 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-all"
          >
            <ChevronRight size={32} />
          </button>

          {/* Expanded Image */}
          <img 
            src={certifications[currentCertIndex].image} 
            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl" 
            onClick={(e) => e.stopPropagation()}
            alt={certifications[currentCertIndex].title}
          />
          
          {/* Certificate Title below image in Lightbox */}
          <div className="absolute bottom-6 text-center w-full" onClick={(e) => e.stopPropagation()}>
            <p className="text-white text-[12px] font-sans font-normal uppercase tracking-[0.2em] bg-black/50 inline-block px-6 py-2 rounded-full backdrop-blur-sm">
              {certifications[currentCertIndex].title}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutCombined;