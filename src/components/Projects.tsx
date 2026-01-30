import { useEffect, useRef, useState } from 'react';
import { Monitor, ExternalLink, Image } from 'lucide-react';

const systemProjects = [
  {
    title: 'MediCare',
    description: 'Hospital Management System',
    tech: ['PHP', 'Laravel', 'MySQL'],
    gradient: 'from-blue-600 to-cyan-500',
  },
  {
    title: 'AutoCare',
    description: 'Online Booking System',
    tech: ['JavaScript', 'PHP', 'CSS'],
    gradient: 'from-purple-600 to-pink-500',
  },
  {
    title: 'EduRate',
    description: 'School Faculty Evaluation System',
    tech: ['Python', 'Django', 'PostgreSQL'],
    gradient: 'from-emerald-600 to-teal-500',
  },
];

const publicMaterials = [
  { title: 'Social Media Graphics', category: 'Design' },
  { title: 'Marketing Collaterals', category: 'Branding' },
  { title: 'Event Materials', category: 'Visual' },
  { title: 'Content Creations', category: 'Creative' },
];

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSide, setHoveredSide] = useState<'left' | 'right' | null>(null);

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
      id="projects"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <span className="text-primary text-sm uppercase tracking-widest font-medium">
              Portfolio
            </span>
            <h2 className="section-title mt-4">
              Featured Projects
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A showcase of system development projects and creative public materials I've worked on.
            </p>
          </div>

          {/* Split Layout */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left: System Projects */}
            <div
              className={`relative transition-all duration-500 ${
                hoveredSide === 'right' ? 'lg:opacity-50 lg:scale-[0.98]' : ''
              } ${isVisible ? 'animate-fade-in-left delay-200' : 'opacity-0'}`}
              onMouseEnter={() => setHoveredSide('left')}
              onMouseLeave={() => setHoveredSide(null)}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Monitor className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground">
                  System Projects
                </h3>
              </div>

              <div className="space-y-6">
                {systemProjects.map((project, index) => (
                  <div
                    key={project.title}
                    className="glass-card p-6 group relative overflow-hidden"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Gradient Overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    />

                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                            {project.title}
                          </h4>
                          <p className="text-muted-foreground mt-1">
                            {project.description}
                          </p>
                        </div>
                        <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100" />
                      </div>

                      <div className="flex flex-wrap gap-2 mt-4">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="skill-chip text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Public Materials */}
            <div
              className={`relative transition-all duration-500 ${
                hoveredSide === 'left' ? 'lg:opacity-50 lg:scale-[0.98]' : ''
              } ${isVisible ? 'animate-fade-in-right delay-200' : 'opacity-0'}`}
              onMouseEnter={() => setHoveredSide('right')}
              onMouseLeave={() => setHoveredSide(null)}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Image className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground">
                  Public Materials
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {publicMaterials.map((item, index) => (
                  <div
                    key={item.title}
                    className="glass-card aspect-square p-6 flex flex-col items-center justify-center text-center group cursor-pointer relative overflow-hidden"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Image className="w-8 h-8 text-primary" />
                      </div>
                      <h4 className="font-display font-semibold text-foreground mb-1">
                        {item.title}
                      </h4>
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">
                        {item.category}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Note */}
              <div className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/20">
                <p className="text-sm text-muted-foreground text-center">
                  Creative content including social media graphics, marketing materials, and event designs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute bottom-0 left-1/4 w-1/2 h-1/3 bg-primary/5 rounded-full blur-[150px]" />
    </section>
  );
};

export default Projects;
