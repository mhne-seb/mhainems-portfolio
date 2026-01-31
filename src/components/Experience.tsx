import { useEffect, useRef, useState } from 'react';
import { Briefcase, Calendar } from 'lucide-react';

// --- IMAGES IMPORT ---
// Siguraduhin na tama ang path papunta sa 'org' folder mo.
// Kung nasa 'src/assets/org' ang images at nasa 'src/components' ito:
import org1 from '../assets/org/1.jpg';
import org2 from '../assets/org/2.jpg';
import org3 from '../assets/org/3.jpg';
import org4 from '../assets/org/4.jpg';
import org5 from '../assets/org/5.jpg';
import org6 from '../assets/org/6.jpg';
import org7 from '../assets/org/7.jpg';
import org8 from '../assets/org/8.jpg';
import org9 from '../assets/org/9.jpg';

const experiences = [
  {
    title: 'Web Development Cadet',
    organization: 'GDG PUP',
    period: '2025 – Present',
    type: 'Technical',
    logo: org2,
  },
    {
    title: 'Graphic Designer',
    organization: 'Cisco NetConnect ',
    period: '2024 – 2025',
    type: 'Creative',
    logo: org9,
  },
  {
    title: 'Head of Public Relations & Community Involvement',
    organization: 'IBITS',
    period: '2024 – 2025',
    type: 'Leadership',
    logo: org4,
  },
  {
    title: 'Web Development Team',
    organization: 'AWS Cloud Club PUP',
    period: '2024 – 2025',
    type: 'Technical',
    logo: org1,
  },
  {
    title: 'Creative Content Developer',
    organization: 'AWS Cloud Club PUP',
    period: '2024 – 2025',
    type: 'Creative',
    logo: org1,
  },
  {
    title: 'UI/UX Cadet',
    organization: 'GDG PUP',
    period: '2024 – 2025',
    type: 'Design',
    logo: org2,
  },
  {
    title: 'Senior Marketing Associate',
    organization: 'GDG PUP',
    period: '2024 – 2025',
    type: 'Marketing',
    logo: org2,
  },
  {
    title: 'Mid-Level Back-End Web Developer',
    organization: 'PUP MSC',
    period: '2024 – 2025',
    type: 'Technical',
    logo: org6,
  },
  {
    title: 'Media Committee',
    organization: 'JBECP PUP',
    period: '2024 – 2025',
    type: 'Media',
    logo: org5,
  },
  {
    title: 'Media Intern',
    organization: 'Youth Strike for Climate Change PH',
    period: '2022 – 2023',
    type: 'Media',
    logo: org8,
  },
  {
    title: 'Special Project Member',
    organization: 'PCSSG',
    period: '2022 – 2023',
    type: 'Project',
    logo: org7,
  },
  {
    title: 'Social Media Manager',
    organization: 'Gender & Development',
    period: '2022 – 2023',
    type: 'Marketing',
    logo: org3,
  },
  {
    title: 'Technical Working Group',
    organization: 'PROJECT SWAP',
    period: '2021 – 2022',
    type: 'Technical',
    logo: org7,
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
                  key={`${exp.organization}-${exp.title}`}
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
                        <div className="flex items-center gap-3 mb-4">
                          <Briefcase className="w-4 h-4 text-primary" />
                          <span
                            className={`text-xs px-3 py-1 rounded-full border ${
                              typeColors[exp.type] || 'bg-primary/20 text-primary border-primary/30'
                            }`}
                          >
                            {exp.type}
                          </span>
                        </div>

                        {/* --- ROLE TITLE WITH LARGER LOGO --- */}
                        <div className="flex items-center gap-4">
                            {exp.logo && (
                                <img
                                    src={exp.logo}
                                    alt={`${exp.organization} logo`}
                                    // Increased size to w-16 h-16 (64px)
                                    className="w-16 h-16 rounded-full object-cover border-2 border-primary/20 bg-white/5"
                                />
                            )}
                            <div>
                                <h3 className="text-xl font-display font-bold text-foreground group-hover:text-primary transition-colorsls">
                                    {exp.title}
                                </h3>
                                <p className="text-primary/80 font-medium mt-1">
                                    {exp.organization}
                                </p>
                            </div>
                        </div>
                        {/* ----------------------------- */}

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