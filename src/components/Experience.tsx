import { useEffect, useRef, useState } from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    role: 'Head of Public Relations & Community Involvement',
    organization: 'IBITS',
    period: '2024 – Present',
    type: 'Leadership',
  },
  {
    role: 'Web Development Team',
    organization: 'AWS Cloud Club PUP',
    period: '2024 – Present',
    type: 'Technical',
  },
  {
    role: 'Creative Content Developer',
    organization: 'AWS Cloud Club PUP',
    period: '2024 – Present',
    type: 'Creative',
  },
  {
    role: 'UI/UX Cadet',
    organization: 'GDG PUP',
    period: '2024 – Present',
    type: 'Design',
  },
  {
    role: 'Senior Marketing Associate',
    organization: 'GDG PUP',
    period: '2024 – Present',
    type: 'Marketing',
  },
  {
    role: 'Mid-Level Back-End Web Developer',
    organization: 'PUP MSC',
    period: '2024 – Present',
    type: 'Technical',
  },
  {
    role: 'Media Committee',
    organization: 'JBECP PUP',
    period: '2024 – Present',
    type: 'Media',
  },
  {
    role: 'Media Intern',
    organization: 'Youth Strike for Climate Change PH',
    period: '2022 – 2023',
    type: 'Media',
  },
  {
    role: 'Special Project Member',
    organization: 'PCSSG',
    period: '2022 – 2023',
    type: 'Project',
  },
  {
    role: 'Social Media Manager',
    organization: 'Gender & Development',
    period: '2022 – 2023',
    type: 'Marketing',
  },
  {
    role: 'Technical Working Group',
    organization: 'PROJECT SWAP',
    period: '2021 – 2022',
    type: 'Technical',
  },
];

const typeColors: Record<string, string> = {
  Leadership: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  Technical: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  Creative: 'bg-pink-500/20 text-pink-300 border-pink-500/30',
  Design: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
  Marketing: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
  Media: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
  Project: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
};

const Experience = () => {
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
      id="experience"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <span className="text-primary text-sm uppercase tracking-widest font-medium">
              Experience & Roles
            </span>
            <h2 className="section-title mt-4">
              My Journey
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A collection of leadership positions, technical roles, and creative endeavors that have shaped my professional growth.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary/20 hidden md:block" />

            {/* Experience Cards */}
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div
                  key={`${exp.organization}-${exp.role}`}
                  className={`relative pl-0 md:pl-20 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-6 hidden md:block">
                    <div className="w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_hsl(270,80%,65%)]" />
                  </div>

                  {/* Card */}
                  <div className="glass-card p-6 group">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Briefcase className="w-4 h-4 text-primary" />
                          <span
                            className={`text-xs px-3 py-1 rounded-full border ${
                              typeColors[exp.type] || 'bg-primary/20 text-primary border-primary/30'
                            }`}
                          >
                            {exp.type}
                          </span>
                        </div>
                        <h3 className="text-lg font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-primary/80 font-medium mt-1">
                          {exp.organization}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/3 right-0 w-1/3 h-1/2 bg-accent/5 rounded-full blur-[150px]" />
    </section>
  );
};

export default Experience;
