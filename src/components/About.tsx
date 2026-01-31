import { Code2, Palette, Lightbulb, Users, GraduationCap, User } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

// --- IMPORTS NG LOGO (CORRECTED) ---
// Base sa screenshot mo: 11 is .png, others are .jpg
import pupLogo from '../assets/org/11.png'; // PUP (PNG pala ito)
import shsLogo from '../assets/org/7.jpg';  // Senior High
import jhsLogo from '../assets/org/10.jpg'; // Junior High

const highlights = [
  {
    icon: Code2,
    title: 'Developer',
    description: 'Building efficient, scalable solutions',
  },
  {
    icon: Palette,
    title: 'Designer',
    description: 'Crafting beautiful user experiences',
  },
  {
    icon: Lightbulb,
    title: 'Problem Solver',
    description: 'Turning ideas into reality',
  },
  {
    icon: Users,
    title: 'Team Player',
    description: 'Collaborative & communicative',
  },
];

const educationList = [
  {
    school: "Polytechnic University of the Philippines",
    subtext: "Bachelor of Science in Information Technology",
    year: "2023 – Present",
    logo: pupLogo,
  },
  {
    school: "San Lorenzo Ruiz Senior High School",
    subtext: "STEM Strand",
    year: "2021 – 2023",
    logo: shsLogo,
  },
  {
    school: "Manggahan High School",
    subtext: "Junior High School",
    year: "2017 – 2021",
    logo: jhsLogo,
  }
];

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-24"> 
          
          {/* Main Section Header */}
          <div className={`text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <span className="text-primary text-sm uppercase tracking-widest font-medium">
             ABOUT ME 
            </span>
            <h2 className="section-title mt-4">
              Passionate About Technology
            </h2>
          </div>

          {/* --- PART 1: EDUCATION SECTION (Full Width) --- */}
          <div className={`${isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}>
            <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-primary/10 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground">
                    Education
                </h3>
            </div>

            {/* Grid for Education - Full Width */}
            <div className="grid grid-cols-1 gap-4">
                {educationList.map((edu, index) => (
                    <div 
                    key={index}
                    className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors group w-full"
                    >
                    {/* School Logo */}
                    <img 
                        src={edu.logo} 
                        alt={`${edu.school} Logo`} 
                        className="w-16 h-16 rounded-full object-cover shadow-lg border border-primary/20 bg-white/5 group-hover:scale-110 transition-transform duration-300"
                    />
                    
                    {/* Details */}
                    <div className="flex-1 min-w-0">
                        <h4 className="text-lg md:text-xl font-semibold text-gray-100 leading-tight">
                            {edu.school}
                        </h4>
                        <div className="flex flex-col md:flex-row md:items-center gap-y-1 gap-x-3 text-sm text-muted-foreground mt-2">
                            <span className="text-primary/90 font-medium">
                                {edu.subtext}
                            </span>
                            <span className="hidden md:inline w-1.5 h-1.5 rounded-full bg-muted-foreground/50" />
                            <span>{edu.year}</span>
                        </div>
                    </div>
                    </div>
                ))}
            </div>
          </div>

          {/* --- PART 2: ABOUT ME & HIGHLIGHTS (Side by Side) --- */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* LEFT: About Me */}
            <div className={`space-y-8 ${isVisible ? 'animate-fade-in-left delay-200' : 'opacity-0'}`}>
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-accent/10 rounded-lg">
                        <User className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-foreground">
                        About Me
                    </h3>
                </div>

                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                    <p>
                    I am a third-year college student and an aspiring{' '}
                    <span className="text-foreground font-medium">Software Engineer</span> and{' '}
                    <span className="text-foreground font-medium">Web Developer</span> with a strong 
                    interest in building reliable, user-centered digital solutions.
                    </p>
                    
                    <p>
                    I am driven by the goal of creating technologies that address real-world problems 
                    through thoughtful design, efficient development, and continuous learning.
                    </p>
                    
                    <p>
                    With experience in both technical and creative roles, I aim to bridge{' '}
                    <span className="text-primary">functionality</span> and{' '}
                    <span className="text-accent">aesthetics</span> to deliver impactful digital experiences.
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
                    <div>
                    <p className="text-3xl font-display font-bold text-primary">10+</p>
                    <p className="text-sm text-muted-foreground">Roles & Positions</p>
                    </div>
                    <div>
                    <p className="text-3xl font-display font-bold text-primary">5+</p>
                    <p className="text-sm text-muted-foreground">System Projects</p>
                    </div>
                    <div>
                    <p className="text-3xl font-display font-bold text-primary">3+</p>
                    <p className="text-sm text-muted-foreground">Years Experience</p>
                    </div>
                </div>
            </div>

            {/* RIGHT: Highlights Cards */}
            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 ${isVisible ? 'animate-fade-in-right delay-300' : 'opacity-0'}`}>
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="glass-card p-6 group cursor-default hover:-translate-y-1 transition-transform duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/2 left-0 w-1/3 h-1/2 bg-primary/5 rounded-full blur-[150px] -translate-y-1/2" />
    </section>
  );
};

export default About;