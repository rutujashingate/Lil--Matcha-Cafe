import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="font-script text-2xl md:text-3xl text-primary cursor-pointer" onClick={() => scrollToSection('hero')}>
              Lil' Matcha Cafe
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 animate-fade-in">
            <button 
              onClick={() => scrollToSection('hero')}
              className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
