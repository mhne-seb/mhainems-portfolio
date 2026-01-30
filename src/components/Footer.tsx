import { Heart, Github, Linkedin, Mail } from 'lucide-react';

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
    <footer className="relative py-12 border-t border-border/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo & Copyright */}
            <div className="text-center md:text-left">
              <p className="text-2xl font-display font-bold bg-accent-gradient bg-clip-text text-transparent mb-2">
                MS
              </p>
              <p className="text-sm text-muted-foreground">
                © {currentYear} Mhaine Sebido. All rights reserved.
              </p>
            </div>

            {/* Made with Love */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" />
              <span>and</span>
              <span className="text-primary">code</span>
            </div>

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
          <div className="mt-8 text-center">
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
