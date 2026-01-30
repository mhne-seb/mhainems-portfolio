import { Github, Linkedin, Mail } from 'lucide-react';
// Make sure the path to your assets folder is correct based on where this file is located
import mascot from '../assets/mascot.png'; 

const socialLinks = [
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/mhaine-sebido-507871291/',
    label: 'LinkedIn',
  },
  {
    icon: Mail,
    href: 'mailto:mhainesebido25@gmail.com',
    label: 'Email',
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    // Changed py-12 to py-6 to reduce height by half
    <footer className="relative py-6 border-t border-border/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Mascot & Copyright */}
            <div className="text-center md:text-left">
              {/* Replaced MS text with Mascot Image */}
              <img 
                src={mascot} 
                alt="Mascot" 
                className="h-10 w-auto mb-2 mx-auto md:mx-0 object-contain" 
              />
              <p className="text-sm text-muted-foreground">
                © {currentYear} Mhaine Sebido. All rights reserved.
              </p>
            </div>

            {/* REMOVED: "Made with love and code" section */}

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary/50 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                  aria-label={link.label}
                >
                  <link.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Back to Top */}
          <div className="mt-6 text-center">
            <a
              href="#"
              className="text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
            >
              Back to Top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;