import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, Linkedin, Send, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'mhainesebido25@gmail.com',
    href: 'mailto:mhainesebido25@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '0995 208 0814',
    href: 'tel:+639952080814',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Mhaine Sebido',
    href: 'https://www.linkedin.com/in/mhaine-sebido-507871291/',
  },
];

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const { toast } = useToast();

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Message Sent!',
      description: "Thanks for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-32 overflow-hidden z-10"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          
          {/* --- ELEGANT HEADER SECTION ("contact me") --- */}
          <div className={`relative w-fit mb-8 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="absolute left-[-20px] top-[-20px] bottom-[-10px] w-[1px] bg-white/40" />
            <div className="absolute left-[-50px] right-[-50px] bottom-[10px] md:bottom-[14px] h-[1px] bg-white/40" />
            
            <div className="flex items-baseline pl-2 relative z-10">
              <h2 className="text-6xl md:text-8xl text-white font-normal lowercase tracking-wide font-serif-elegant">
                contact
              </h2>
              <span className="text-6xl md:text-8xl text-white lowercase ml-6 font-script">
                me
              </span>
            </div>
          </div>

          <p className={`text-gray-400 text-center mb-16 max-w-2xl mx-auto transition-all duration-1000 delay-150 font-sans font-normal tracking-wide uppercase text-[13px] ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>

          <div className="grid lg:grid-cols-2 gap-12 w-full">
            
            {/* Left: Contact Info */}
            <div className={`${isVisible ? 'animate-fade-in-left delay-300' : 'opacity-0'}`}>
              <h3 className="text-lg font-sans font-normal uppercase tracking-widest text-white mb-8 border-l-2 border-primary pl-4">
                Contact Information
              </h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={info.label}
                    href={info.href}
                    target={info.label === 'LinkedIn' ? '_blank' : undefined}
                    rel={info.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                    className="glass-card p-5 flex items-center gap-4 group hover:bg-white/[0.03] transition-all"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <info.icon className="w-4 h-4 text-gray-400 group-hover:text-primary" />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-widest text-gray-500 font-sans">{info.label}</p>
                      <p className="text-gray-300 font-sans font-normal text-[14px] tracking-wide group-hover:text-white transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Location */}
              <div className="mt-8 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-white font-sans font-normal uppercase tracking-widest text-xs">Location</span>
                </div>
                <p className="text-gray-400 font-sans text-sm tracking-wide">
                  Philippines • Open to Remote Opportunities
                </p>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className={`${isVisible ? 'animate-fade-in-right delay-500' : 'opacity-0'}`}>
              <div className="glass-card p-8 bg-white/[0.02]">
                <h3 className="text-lg font-sans font-normal uppercase tracking-widest text-white mb-6">
                  Send a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="text-[11px] uppercase tracking-widest text-gray-500 mb-2 block font-sans">
                      Your Name
                    </label>
                    <Input
                      type="text"
                      placeholder="NAME"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      className="bg-transparent border-white/10 focus:border-primary font-sans font-normal tracking-wide text-sm placeholder:text-gray-700"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] uppercase tracking-widest text-gray-500 mb-2 block font-sans">
                      Your Email
                    </label>
                    <Input
                      type="email"
                      placeholder="EMAIL"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      className="bg-transparent border-white/10 focus:border-primary font-sans font-normal tracking-wide text-sm placeholder:text-gray-700"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] uppercase tracking-widest text-gray-500 mb-2 block font-sans">
                      Message
                    </label>
                    <Textarea
                      placeholder="YOUR MESSAGE..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                      rows={5}
                      className="bg-transparent border-white/10 focus:border-primary font-sans font-normal tracking-wide text-sm resize-none placeholder:text-gray-700"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-white text-black hover:bg-gray-200 transition-all font-sans font-normal uppercase tracking-widest text-xs py-6">
                    <Send className="w-3 h-3 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-primary/5 rounded-full blur-[150px] -z-10" />
      <div className="absolute top-1/4 right-0 w-1/4 h-1/3 bg-accent/5 rounded-full blur-[150px] -z-10" />
    </section>
  );
};

export default Contact;