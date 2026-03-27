import { useEffect, useRef, useState } from 'react';
import { Monitor, ExternalLink, Image, X, ChevronLeft, ChevronRight, FolderOpen, Palette } from 'lucide-react';
import StarBackground from './StarBackground';

// Swiper Imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// --- IMAGES IMPORTS ---
import it1 from '@/assets/studio/2.png';
import it2 from '@/assets/studio/3.png';
import it3 from '@/assets/studio/4.png';
import it4 from '@/assets/studio/5.png';
import it5 from '@/assets/studio/6.png';

// BAGONG IMPORTS PARA SA DATA/HOUSING PROJECT
import data1 from '@/assets/data/1.png';
import data2 from '@/assets/data/2.png';
import data3 from '@/assets/data/3.png';
import data4 from '@/assets/data/4.png';

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

import mc2 from '@/assets/medicare/2.jpg';
import mc3 from '@/assets/medicare/3.jpg';
import mc4 from '@/assets/medicare/4.jpg';
import mc5 from '@/assets/medicare/5.jpg';
import mc6 from '@/assets/medicare/6.jpg';
import mc7 from '@/assets/medicare/7.jpg';

import bear1 from '@/assets/bear/1.png';
import bear2 from '@/assets/bear/2.png';
import bear3 from '@/assets/bear/3.png';
import bear4 from '@/assets/bear/4.png';

import proto1 from '@/assets/prototype/1.jpg';
import proto2 from '@/assets/prototype/2.jpg';
import proto3 from '@/assets/prototype/3.jpg';

const systemProjects = [
  {
    title: 'BSIT 3-3 Website',
    role: 'UI/UX Designer & Front-end Developer',
    description: 'A centralized web platform created for BSIT 3-3 students to easily access announcements, subject updates, shared resources, and important schedules. Designed with a user-friendly interface, the portal enhances communication, organization, and overall student experience.',
    tech: ['Next.js', 'CSS', 'Figma', 'MySQL'],
    images: [it1, it2, it3, it4, it5], 
  },
  // DINAGDAG KO DITO ANG BAGONG PROJECT MO
  {
    title: 'Assessing Affordable Housing Prices in Relation to Income Brackets',
    role: 'UI/UX Designer',
    description: 'A Figma-based prototype designed to visualize and analyze housing affordability across different income brackets. The interface focuses on clarity and usability, helping users easily compare prices, understand financial capacity, and make informed housing decisions through an intuitive and user-centered design.',
    tech: ['Figma Prototyping'],
    images: [data1, data2, data3, data4],
  },
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
  
  const [activeFolder, setActiveFolder] = useState<null | 'dev' | 'pubmat'>(null);
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

  useEffect(() => {
    if (activeFolder || lightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [activeFolder, lightboxOpen]);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };
  const closeLightbox = () => setLightboxOpen(false);
  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % publicMaterials.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + publicMaterials.length) % publicMaterials.length);

  return (
    <section id="projects" ref={sectionRef} className="relative py-32 min-h-screen overflow-hidden bg-transparent">
      <div className="absolute inset-0 z-0">
        <StarBackground />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          
          <div className={`relative w-fit mb-24 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="absolute left-[-20px] top-[-20px] bottom-[-10px] w-[1px] bg-white/40" />
            <div className="absolute left-[-50px] right-[-50px] bottom-[10px] md:bottom-[14px] h-[1px] bg-white/40" />
            
            <div className="flex items-baseline pl-2 relative z-10">
              <h2 className="text-6xl md:text-8xl text-white font-normal lowercase tracking-wide font-serif-elegant">
                my
              </h2>
              <span className="text-6xl md:text-8xl text-white lowercase ml-6 font-script">
                works
              </span>
            </div>
          </div>

          <p className={`text-gray-400 text-center mb-16 max-w-2xl mx-auto transition-all duration-1000 delay-150 font-sans font-normal tracking-wide uppercase text-[12px] ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            Explore my portfolio by opening the folders below. Inside, you'll find a showcase of my projects.
          </p>

          <div className={`grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-4xl transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            
            {/* Folder 1: Development Projects */}
            <div 
              onClick={() => setActiveFolder('dev')}
              className="group cursor-pointer relative p-1 rounded-3xl bg-gradient-to-b from-purple-500/30 to-transparent hover:from-purple-400/50 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="bg-[#151318] rounded-[22px] p-8 md:p-12 h-full flex flex-col items-center text-center relative overflow-hidden">
                <FolderOpen className="w-16 h-16 text-purple-400 mb-6 group-hover:scale-110 transition-transform duration-500" />
                <h3 className="text-xl font-sans font-normal uppercase tracking-[0.2em] text-white mb-3">Development Projects</h3>
                <p className="text-gray-500 text-[11px] uppercase tracking-widest font-sans font-normal">System Architectures & Apps</p>
                <div className="mt-8 px-5 py-2 rounded-lg border border-purple-500/30 text-purple-300 text-[10px] font-sans font-normal uppercase tracking-widest group-hover:bg-purple-500/10 transition-colors">
                  Open Folder
                </div>
              </div>
            </div>

            {/* Folder 2: Public Materials */}
            <div 
              onClick={() => setActiveFolder('pubmat')}
              className="group cursor-pointer relative p-1 rounded-3xl bg-gradient-to-b from-pink-500/30 to-transparent hover:from-pink-400/50 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="bg-[#151318] rounded-[22px] p-8 md:p-12 h-full flex flex-col items-center text-center relative overflow-hidden">
                <Palette className="w-16 h-16 text-pink-400 mb-6 group-hover:scale-110 transition-transform duration-500" />
                <h3 className="text-xl font-sans font-normal uppercase tracking-[0.2em] text-white mb-3">Pubmat Materials</h3>
                <p className="text-gray-500 text-[11px] uppercase tracking-widest font-sans font-normal">Graphics & Designs</p>
                <div className="mt-8 px-5 py-2 rounded-lg border border-pink-500/30 text-pink-300 text-[10px] font-sans font-normal uppercase tracking-widest group-hover:bg-pink-500/10 transition-colors">
                  Open Folder
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* MODAL 1: DEVELOPMENT */}
      <div 
        className={`fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 transition-all duration-500 ${activeFolder === 'dev' ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      >
        <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={() => setActiveFolder(null)} />
        <div className="relative w-full max-w-6xl max-h-[90vh] bg-[#0c0a10] border border-white/5 rounded-3xl shadow-2xl overflow-y-auto z-10">
          <div className="sticky top-0 z-50 flex items-center justify-between p-6 md:p-8 bg-[#0c0a10]/95 backdrop-blur-md border-b border-white/5">
            <h2 className="text-sm font-sans font-normal uppercase tracking-[0.4em] text-white">Development Projects</h2>
            <button onClick={() => setActiveFolder(null)} className="p-2 text-gray-500 hover:text-white transition-colors"><X size={20} /></button>
          </div>

          <div className="p-6 md:p-10 flex flex-col gap-24">
            {systemProjects.map((project, index) => (
              <div key={project.title} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                <div className="w-full lg:w-3/5">
                  <div className="relative rounded-2xl overflow-hidden border border-white/5 bg-white/5 shadow-xl">
                    <Swiper
                      effect={'fade'}
                      fadeEffect={{ crossFade: true }}
                      autoplay={{ delay: 3000, disableOnInteraction: false }}
                      speed={1500} 
                      pagination={{ clickable: true }}
                      modules={[Autoplay, Pagination, EffectFade]}
                      className="aspect-video w-full"
                    >
                      {project.images.map((img, i) => (
                        <SwiperSlide key={i}><img src={img} className="w-full h-full object-cover"/></SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
                <div className="w-full lg:w-2/5 space-y-5 text-center lg:text-left">
                  <h3 className="text-2xl font-serif-elegant tracking-wide text-white">{project.title}</h3>
                  <div className="inline-block px-3 py-1 rounded-full border border-purple-500/20 text-purple-400 text-[10px] font-sans font-normal uppercase tracking-widest">
                      {project.role}
                  </div>
                  <p className="text-gray-400 text-[14px] leading-relaxed font-sans font-normal">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2 justify-center lg:justify-start">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-white/5 border border-white/5 rounded text-[10px] font-sans font-normal text-gray-500 uppercase tracking-widest">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button className="pt-4 flex items-center gap-2 text-[11px] font-sans font-normal uppercase tracking-widest text-white hover:text-purple-400 transition-colors mx-auto lg:mx-0">
                    Live Preview <ExternalLink size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MODAL 2: PUBMAT */}
      <div 
        className={`fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 transition-all duration-500 ${activeFolder === 'pubmat' ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      >
        <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={() => setActiveFolder(null)} />
        <div className="relative w-full max-w-6xl max-h-[90vh] bg-[#0c0a10] border border-white/5 rounded-3xl shadow-2xl overflow-y-auto z-10">
          <div className="sticky top-0 z-50 flex items-center justify-between p-6 md:p-8 bg-[#0c0a10]/95 backdrop-blur-md border-b border-white/5">
            <h2 className="text-sm font-sans font-normal uppercase tracking-[0.4em] text-white">Pubmat Materials</h2>
            <button onClick={() => setActiveFolder(null)} className="p-2 text-gray-500 hover:text-white transition-colors"><X size={20} /></button>
          </div>

          <div className="p-6 md:p-10">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {publicMaterials.map((item, index) => (
                <div key={item.title} onClick={() => openLightbox(index)} className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group border border-white/5">
                  <img src={item.src} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4 text-center">
                    <h4 className="font-sans font-normal text-white text-[10px] uppercase tracking-widest">{item.title}</h4>
                    <span className="text-[9px] text-pink-400 font-sans uppercase tracking-[0.2em] mt-1">{item.category}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* LIGHTBOX */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[110] bg-black/95 flex items-center justify-center p-4" onClick={closeLightbox}>
          <button onClick={closeLightbox} className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"><X size={30} /></button>
          <button onClick={(e) => { e.stopPropagation(); prevImage(); }} className="absolute left-4 p-3 text-white/50 hover:text-white transition-all"><ChevronLeft size={40} /></button>
          <button onClick={(e) => { e.stopPropagation(); nextImage(); }} className="absolute right-4 p-3 text-white/50 hover:text-white transition-all"><ChevronRight size={40} /></button>
          <img src={publicMaterials[currentImageIndex].src} className="max-w-full max-h-[85vh] object-contain rounded shadow-2xl" onClick={(e) => e.stopPropagation()}/>
        </div>
      )}
    </section>
  );
};

export default Projects;