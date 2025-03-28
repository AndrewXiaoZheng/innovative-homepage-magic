
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { name: 'Hustarについて', href: '#about' },
    { name: 'Service', href: '#services' },
    { name: 'ご利用の流れ', href: '#flow' },
    { name: 'Contact Us', href: '#contact' },
  ];
  
  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out backdrop-blur-sm',
        isScrolled 
          ? 'py-3 bg-white/90 shadow-sm' 
          : 'py-5 bg-white/80'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.slice(0, 2).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-700 transition-colors hover:text-primary"
              >
                {link.name}
              </a>
            ))}
            
            {/* Logo */}
            <a href="#" className="flex items-center mx-8">
              <img 
                src="/innovative-homepage-magic/images/image_logo.png" 
                alt="Hustar Logo" 
                className="h-16 w-auto" 
              />
            </a>
            
            {navLinks.slice(2).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-700 transition-colors hover:text-primary"
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center justify-between w-full">
            <a href="#" className="flex items-center">
              <img 
                src="/innovative-homepage-magic/images/image_logo.png" 
                alt="Hustar Logo" 
                className="h-12 w-auto" 
              />
            </a>
            <button
              className="flex items-center"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-primary" />
              ) : (
                <Menu className="h-6 w-6 text-primary" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Drawer */}
      <div
        className={cn(
          'fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out md:hidden pt-20',
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <nav className="flex flex-col items-center space-y-6 p-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button className="w-full rounded-full justify-center mt-4">
            お問い合わせ
          </Button>
        </nav>
      </div>
    </header>
  );
}
