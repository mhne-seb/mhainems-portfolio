import { useEffect, useRef, useState } from 'react';
import { Monitor, ExternalLink, Image, X, ChevronLeft, ChevronRight } from 'lucide-react';

// Import material images
import material1 from '@/assets/materials/material-1.jpg';
import material2 from '@/assets/materials/material-2.jpg';
import material3 from '@/assets/materials/material-3.jpg';
import material4 from '@/assets/materials/material-4.jpg';
import material5 from '@/assets/materials/material-5.jpg';
import material6 from '@/assets/materials/material-6.jpg';
import material7 from '@/assets/materials/material-7.jpg';
import material8 from '@/assets/materials/material-8.jpg';
import material9 from '@/assets/materials/material-9.jpg';
import material10 from '@/assets/materials/material-10.jpg';

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
  { src: material1, title: 'IBITS Officers', category: 'Social Media' },
  { src: material2, title: 'IBITS Committees', category: 'Infographic' },
  { src: material3, title: 'Review Sessions', category: 'Event Graphics' },
  { src: material4, title: 'Academic Achievers', category: 'Recognition' },
  { src: material5, title: "President's Listers", category: 'Recognition' },
  { src: material6, title: 'Digital Cupid Dispatch', category: 'Event Graphics' },
  { src: material7, title: 'Class Officers', category: 'Social Media' },
  { src: material8, title: 'Org Announcements', category: 'Infographic' },
  { src: material9, title: 'Papyrus Cache', category: 'Branding' },
  { src: material10, title: 'iBalita Alert', category: 'News Graphics' },
];

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSide, setHoveredSide] = useState<'left' | 'right' | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % publicMaterials.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + publicMaterials.length) % publicMaterials.length);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

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

              {/* Image Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {publicMaterials.map((item, index) => (
                  <div
                    key={item.title}
                    onClick={() => openLightbox(index)}
                    className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {/* Image */}
                    <img 
                      src={item.src} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                      <h4 className="font-display font-semibold text-foreground text-sm leading-tight">
                        {item.title}
                      </h4>
                      <span className="text-xs text-primary">
                        {item.category}
                      </span>
                    </div>

                    {/* Border glow effect */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-xl transition-colors duration-300" />
                  </div>
                ))}
              </div>

              {/* Note */}
              <div className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/20">
                <p className="text-sm text-muted-foreground text-center">
                  Click on any image to view in full size
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-secondary/50 border border-border/50 flex items-center justify-center text-foreground hover:bg-primary/20 hover:border-primary/50 transition-all z-10"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-secondary/50 border border-border/50 flex items-center justify-center text-foreground hover:bg-primary/20 hover:border-primary/50 transition-all z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-secondary/50 border border-border/50 flex items-center justify-center text-foreground hover:bg-primary/20 hover:border-primary/50 transition-all z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image Container */}
          <div 
            className="max-w-5xl max-h-[85vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={publicMaterials[currentImageIndex].src}
              alt={publicMaterials[currentImageIndex].title}
              className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
            />
            
            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/90 to-transparent rounded-b-xl">
              <h4 className="font-display font-bold text-lg text-foreground">
                {publicMaterials[currentImageIndex].title}
              </h4>
              <span className="text-sm text-primary">
                {publicMaterials[currentImageIndex].category}
              </span>
              <span className="text-sm text-muted-foreground ml-4">
                {currentImageIndex + 1} / {publicMaterials.length}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Background Decoration */}
      <div className="absolute bottom-0 left-1/4 w-1/2 h-1/3 bg-primary/5 rounded-full blur-[150px]" />
    </section>
  );
};

export default Projects;
