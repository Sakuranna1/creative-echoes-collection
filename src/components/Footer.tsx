
import React from 'react';
import { ArrowUpIcon } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-12 border-t">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-xl font-display font-medium mb-2">Anna Danilov</p>
            <p className="text-muted-foreground text-sm">
              Product designer crafting thoughtful digital experiences
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <button
              onClick={scrollToTop}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary mb-4 hover:bg-secondary/70 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUpIcon size={18} />
            </button>
            <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Anna Danilov. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
