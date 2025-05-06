
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-background py-8 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#hero" className="text-xl font-bold tracking-tight">
              <span className="highlight-text">Dev</span>Portfolio
            </a>
            <p className="text-sm text-muted-foreground mt-1">
              Creating beautiful web experiences.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <button 
              onClick={scrollToTop}
              className="mb-4 p-2 bg-secondary rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
            
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} John Doe. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
