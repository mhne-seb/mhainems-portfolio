import { useEffect, useRef, useState } from 'react';
// 1. Updated Imports: Removed SiCapcut
import { 
  SiHtml5, 
  SiCss3, 
  SiTypescript, 
  SiJavascript, 
  SiPhp, 
  SiPython,
  SiReact,
  SiTailwindcss,
  SiGit,
  SiFigma,
  SiCanva,
  SiAdobephotoshop,
} from 'react-icons/si';

// 2. Added FaFilm here to use as the CapCut icon
import { FaJava, FaFilm } from 'react-icons/fa';

const skills = [
  { 
    name: 'HTML', 
    icon: <SiHtml5 />, 
    color: 'from-orange-500 to-red-500' 
  },
  { 
    name: 'CSS', 
    icon: <SiCss3 />, 
    color: 'from-blue-500 to-cyan-500' 
  },
  { 
    name: 'JavaScript', 
    icon: <SiJavascript />, 
    color: 'from-yellow-400 to-yellow-500' 
  },
  { 
    name: 'TypeScript', 
    icon: <SiTypescript />, 
    color: 'from-blue-600 to-blue-400' 
  },
  { 
    name: 'React', 
    icon: <SiReact />, 
    color: 'from-cyan-400 to-blue-500' 
  },
  { 
    name: 'Tailwind', 
    icon: <SiTailwindcss />, 
    color: 'from-cyan-400 to-teal-500' 
  },
  { 
    name: 'PHP (Laravel)', 
    icon: <SiPhp />, 
    color: 'from-purple-600 to-violet-500' 
  },
  { 
    name: 'Java', 
    icon: <FaJava />, 
    color: 'from-red-600 to-orange-500' 
  },
  { 
    name: 'Python', 
    icon: <SiPython />, 
    color: 'from-green-500 to-emerald-500' 
  },
  { 
    name: 'Git', 
    icon: <SiGit />, 
    color: 'from-orange-600 to-red-500' 
  },
  { 
    name: 'Figma', 
    icon: <SiFigma />, 
    color: 'from-purple-500 to-pink-500' 
  },
  { 
    name: 'Photoshop', 
    icon: <SiAdobephotoshop />, 
    color: 'from-blue-800 to-blue-600' 
  },
  { 
    name: 'Canva', 
    icon: <SiCanva />, 
    color: 'from-teal-400 to-blue-500' 
  },
  { 
    name: 'CapCut', 
    // 3. Updated this to use the generic Film icon
    icon: <FaFilm />, 
    color: 'from-gray-900 to-gray-600'
  },
];

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <span className="text-primary text-sm uppercase tracking-widest font-medium">
              Technical Skills
            </span>
            <h2 className="section-title mt-4">
              My Tech Stack
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Technologies and languages I work with to bring ideas to life.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`glass-card p-6 group cursor-default text-center ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Skill Icon */}
                <div className="relative mb-4">
                  <div
                    className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${skill.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                  />
                  <span className={`absolute inset-0 flex items-center justify-center text-4xl bg-gradient-to-br ${skill.color} bg-clip-text text-transparent`}>
                      <span className="text-foreground/80 group-hover:text-foreground transition-colors">
                        {skill.icon}
                      </span>
                  </span>
                </div>

                {/* Skill Name */}
                <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                  {skill.name}
                </h3>

                {/* Hover Effect Line */}
                <div className="mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-500 mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/2 right-0 w-1/4 h-1/2 bg-accent/5 rounded-full blur-[150px] -translate-y-1/2" />
    </section>
  );
};

export default Skills;