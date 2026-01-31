import { useEffect, useRef, useState } from 'react';
import { Monitor, ExternalLink, Image, X, ChevronLeft, ChevronRight } from 'lucide-react';
import StarBackground from './StarBackground';

// Swiper Imports
import { Swiper, SwiperSlide } from 'swiper/react';
// IMPORT: EffectFade for the "dissolve/live show" look
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade'; // IMPORT FADE CSS

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

// Import AutoCare images
import ac1 from '@/assets/autocare/1.png';
import ac2 from '@/assets/autocare/2.png';
import ac3 from '@/assets/autocare/3.png';
import ac4 from '@/assets/autocare/4.png';
import ac5 from '@/assets/autocare/5.png';
import ac6 from '@/assets/autocare/6.png';
import ac7 from '@/assets/autocare/7.png';
import ac8 from '@/assets/autocare/8.png';
import ac9 from '@/assets/autocare/9.png';
import ac10 from '@/assets/autocare/10.png';
import ac11 from '@/assets/autocare/11.png';
import ac12 from '@/assets/autocare/12.png';

// Import EduRate images
import er1 from '@/assets/edurate/1.png';
import er2 from '@/assets/edurate/2.png';
import er3 from '@/assets/edurate/3.png';
import er4 from '@/assets/edurate/4.png';
import er5 from '@/assets/edurate/5.png';
import er6 from '@/assets/edurate/6.png';
import er7 from '@/assets/edurate/7.png';
import er8 from '@/assets/edurate/8.png';
import er9 from '@/assets/edurate/9.png';
import er10 from '@/assets/edurate/10.png';
import er11 from '@/assets/edurate/11.png';

// Import Medicare images
import mc2 from '@/assets/medicare/2.jpg';
import mc3 from '@/assets/medicare/3.jpg';
import mc4 from '@/assets/medicare/4.jpg';
import mc5 from '@/assets/medicare/5.jpg';
import mc6 from '@/assets/medicare/6.jpg';
import mc7 from '@/assets/medicare/7.jpg';

// Import Bear Anonymous Message images
import bear1 from '@/assets/bear/1.png';
import bear2 from '@/assets/bear/2.png';
import bear3 from '@/assets/bear/3.png';
import bear4 from '@/assets/bear/4.png';

// Import Prototype images
import proto1 from '@/assets/prototype/1.jpg';
import proto2 from '@/assets/prototype/2.jpg';
import proto3 from '@/assets/prototype/3.jpg';

const systemProjects = [
  {
    title: 'MediCare',
    role: 'Full-stack Developer',
    description: 'A Barangay Health Center Management System designed to streamline daily operations and manage patient records efficiently.',
    tech: ['Java GUI', 'MySQL', 'XAMPP'],
    images: [mc2, mc3, mc4, mc5, mc6, mc7],
  },
  {
    title: 'AutoCare',
    role: 'Front-end Developer',
    description: 'An Online Booking System for vehicle maintenance, streamlining the process between car owners and service centers with real-time scheduling.',
    tech: ['PHP', 'Laravel', 'JavaScript', 'MySQL'],
    images: [ac1, ac2, ac3, ac4, ac5, ac6, ac7, ac8, ac9, ac10, ac11, ac12],
  },
  {
    title: 'EduRate',
    role: 'Full-stack Developer',
    description: 'A comprehensive faculty evaluation system designed to streamline the assessment of school educators through a secure and structured platform.',
    tech: ['PHP', 'Laravel', 'MySQL'],
    images: [er1, er2, er3, er4, er5, er6, er7, er8, er9, er10, er11],
  },
  {
    title: 'Bear Anonymous Message',
    role: 'Full-stack Developer', 
    description: 'An interactive messaging platform enabling users to receive anonymous feedback and messages through unique profile links.',
    tech: ['Typescript', 'React', 'MySQL'], 
    images: [bear1, bear2, bear3, bear4],
  },
  {
    title: 'Debug Your Brain',
    role: 'Game Developer',
    description: 'An innovative prototype designed to challenge cognitive skills and problem-solving abilities through interactive interfaces.',
    tech: ['Figma Prototyping'],
    images: [proto1, proto2, proto3],
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
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);
  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % publicMaterials.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + publicMaterials.length) % publicMaterials.length);

  return (
    <section id="projects" ref={sectionRef} className="relative py-32 overflow-hidden bg-transparent">
      {/* BACKGROUND INTEGRATION */}
      <div className="absolute inset-0 z-0">
        <StarBackground />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <span className="text-primary text-sm uppercase tracking-widest font-medium">
              PORTFOLIO
            </span>
            <h2 className="section-title mt-4">
              Featured Projects
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A showcase of system development projects and creative public materials I've worked on.
            </p>
          </div>

          {/* 1. SYSTEM PROJECTS */}
          <div className="flex flex-col gap-32 mb-40">
            {systemProjects.map((project, index) => (
              <div 
                key={project.title}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
              >
                <div className="w-full lg:w-3/5">
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl group">
                    <Swiper
                      // ENABLE FADE EFFECT
                      effect={'fade'}
                      fadeEffect={{ crossFade: true }}
                      
                      spaceBetween={0}
                      centeredSlides={true}
                      // AUTOPLAY: 3 seconds delay before fading
                      autoplay={{ delay: 3000, disableOnInteraction: false }}
                      // SPEED: 1.5s fade duration for "Live Show" feel
                      speed={1500} 
                      
                      pagination={{ clickable: true }}
                      // Add EffectFade to modules
                      modules={[Autoplay, Pagination, EffectFade]}
                      
                      className="aspect-video w-full"
                      // STYLING: Purple dots & Smaller size
                      style={{
                        "--swiper-pagination-color": "#a855f7",
                        "--swiper-pagination-bullet-inactive-color": "#ffffff",
                        "--swiper-pagination-bullet-inactive-opacity": "0.3",
                        "--swiper-pagination-bullet-size": "6px",
                        "--swiper-pagination-bullet-horizontal-gap": "4px"
                      }}
                    >
                      {project.images.map((img, i) => (
                        <SwiperSlide key={i}>
                          <img 
                            src={img} 
                            alt={`${project.title} screenshot ${i + 1}`} 
                            className="w-full h-full object-cover"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>

                <div className="w-full lg:w-2/5 space-y-4">
                  <h3 className="text-3xl font-bold text-white font-display">{project.title}</h3>
                  
                  {project.role && (
                    <div className="inline-block px-3 py-1 mb-2 rounded-full bg-primary/20 border border-primary/30 text-primary text-sm font-semibold tracking-wide">
                        {project.role}
                    </div>
                  )}

                  <p className="text-gray-400 text-lg leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs font-semibold text-gray-300 uppercase tracking-wider">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 flex gap-4">
                    <button className="flex items-center gap-2 text-sm font-bold text-white hover:text-primary transition-all group">
                      Live Preview <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 2. PUBLIC MATERIALS */}
          <div className={`relative ${isVisible ? 'animate-fade-in-up delay-300' : 'opacity-0'}`}>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Image className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-semibold text-white">Public Materials</h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {publicMaterials.map((item, index) => (
                <div
                  key={item.title}
                  onClick={() => openLightbox(index)}
                  className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20"
                >
                  <img 
                    src={item.src} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h4 className="font-bold text-white text-sm">{item.title}</h4>
                    <span className="text-xs text-primary font-medium">{item.category}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4" onClick={closeLightbox}>
          <button onClick={closeLightbox} className="absolute top-6 right-6 p-3 text-white hover:bg-white/10 rounded-full transition-all">
            <X size={32} />
          </button>
          
          <button onClick={(e) => { e.stopPropagation(); prevImage(); }} className="absolute left-4 p-3 text-white hover:bg-white/10 rounded-full transition-all">
            <ChevronLeft size={40} />
          </button>

          <button onClick={(e) => { e.stopPropagation(); nextImage(); }} className="absolute right-4 p-3 text-white hover:bg-white/10 rounded-full transition-all">
            <ChevronRight size={40} />
          </button>

          <img 
            src={publicMaterials[currentImageIndex].src} 
            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl" 
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Projects;