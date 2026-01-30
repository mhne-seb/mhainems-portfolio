import { ChevronDown, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Radial glow overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsla(270,60%,30%,0.2)_0%,_transparent_70%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8 animate-fade-in-up">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Welcome to my Portfolio</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 animate-fade-in-up delay-100">
            <span className="text-foreground">Hi, I'm </span>
            <span className="bg-accent-gradient bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
              Mhaine Sebido
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-in-up delay-200 font-light">
            Software Engineer & Web Developer
          </p>
          
          <p className="text-lg text-muted-foreground/70 max-w-2xl mx-auto mb-12 animate-fade-in-up delay-300">
            Creating reliable, user-centered digital solutions through thoughtful design and efficient development.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-400">
            <a href="#projects" className="btn-cosmic text-primary-foreground">
              View My Work
            </a>
            <a href="#contact" className="btn-outline-cosmic">
              Get in Touch
            </a>
          </div>

          {/* Tech Stack Preview */}
          <div className="mt-16 flex items-center justify-center gap-8 opacity-50 animate-fade-in-up delay-500">
            <span className="text-xs uppercase tracking-widest text-muted-foreground">Tech Stack</span>
            <div className="h-px w-12 bg-border" />
            <div className="flex gap-4 text-muted-foreground">
              <span>React</span>
              <span>•</span>
              <span>Laravel</span>
              <span>•</span>
              <span>Python</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-float">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ChevronDown className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/10 rounded-full blur-[100px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
    </section>
  );
};

export default Hero;
