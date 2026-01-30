import { Code2, Palette, Lightbulb, Users } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

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
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <span className="text-primary text-sm uppercase tracking-widest font-medium">
              About Me
            </span>
            <h2 className="section-title mt-4">
              Passionate About Technology
            </h2>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: About Text */}
            <div className={`space-y-6 ${isVisible ? 'animate-fade-in-left delay-200' : 'opacity-0'}`}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am a third-year college student and an aspiring{' '}
                <span className="text-foreground font-medium">Software Engineer</span> and{' '}
                <span className="text-foreground font-medium">Web Developer</span> with a strong 
                interest in building reliable, user-centered digital solutions.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am driven by the goal of creating technologies that address real-world problems 
                through thoughtful design, efficient development, and continuous learning.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                With experience in both technical and creative roles, I aim to bridge{' '}
                <span className="text-primary">functionality</span> and{' '}
                <span className="text-accent">aesthetics</span> to deliver impactful digital experiences.
              </p>

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

            {/* Right: Highlight Cards */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className={`glass-card p-6 group cursor-default ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${300 + index * 100}ms` }}
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
