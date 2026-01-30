import { useEffect, useRef, useState } from 'react';

const skills = [
  { name: 'HTML', icon: '🌐', color: 'from-orange-500 to-red-500' },
  { name: 'CSS', icon: '🎨', color: 'from-blue-500 to-cyan-500' },
  { name: 'TypeScript', icon: '📘', color: 'from-blue-600 to-blue-400' },
  { name: 'JavaScript', icon: '⚡', color: 'from-yellow-500 to-amber-500' },
  { name: 'PHP (Laravel)', icon: '🐘', color: 'from-purple-600 to-violet-500' },
  { name: 'Java', icon: '☕', color: 'from-red-600 to-orange-500' },
  { name: 'Python', icon: '🐍', color: 'from-green-500 to-emerald-500' },
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
      { threshold: 0.2 }
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
        <div className="max-w-5xl mx-auto">
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
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Skill Icon */}
                <div className="relative mb-4">
                  <div
                    className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${skill.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                  />
                  <span className="absolute inset-0 flex items-center justify-center text-3xl">
                    {skill.icon}
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

            {/* More Skills Card */}
            <div
              className={`glass-card p-6 flex items-center justify-center text-center ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${skills.length * 100}ms` }}
            >
              <div>
                <p className="text-muted-foreground text-sm">& more...</p>
                <p className="text-xs text-muted-foreground/60 mt-2">
                  Git • Figma • MySQL • Tailwind
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/2 right-0 w-1/4 h-1/2 bg-accent/5 rounded-full blur-[150px] -translate-y-1/2" />
    </section>
  );
};

export default Skills;
