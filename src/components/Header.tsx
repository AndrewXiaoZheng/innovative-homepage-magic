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
  
  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);
  
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
                className="h-10 w-auto" 
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
                className="h-8 w-auto" 
              />
            </a>
            <button
              className="flex items-center bg-gray-100 p-2 rounded-md"
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
          'md:hidden fixed inset-0 bg-black/50 z-[100] transition-opacity duration-300 ease-in-out',
          mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={(e) => {
          if (e.target === e.currentTarget) setMobileMenuOpen(false);
        }}
      >
        <div 
          className={cn(
            'fixed right-0 top-0 h-screen w-4/5 bg-white shadow-xl transition-transform duration-300 ease-in-out z-[101] flex flex-col',
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <div className="flex flex-col h-full overflow-y-auto">
            <div className="sticky top-0 z-10 bg-white p-6 border-b">
              <div className="flex justify-between items-center">
                <img 
                  src="/innovative-homepage-magic/images/image_logo.png" 
                  alt="Hustar Logo" 
                  className="h-8 w-auto" 
                />
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-100"
                >
                  <X className="h-6 w-6 text-primary" />
                </button>
              </div>
            </div>
            
            <div className="flex-1 p-6 overflow-y-auto">
              <nav className="flex flex-col space-y-6 w-full">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-lg font-medium text-gray-800 hover:text-primary py-2 border-b border-gray-100 block w-full"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">クイックナビゲーション</h3>
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" asChild className="justify-start hover:bg-gray-100 active:bg-gray-200">
                    <a href="#about" onClick={() => setMobileMenuOpen(false)} className="w-full py-2">
                      <span className="block">Hustarについて</span>
                    </a>
                  </Button>
                  <Button variant="outline" asChild className="justify-start hover:bg-gray-100 active:bg-gray-200">
                    <a href="#services" onClick={() => setMobileMenuOpen(false)} className="w-full py-2">
                      <span className="block">サービス</span>
                    </a>
                  </Button>
                  <Button variant="outline" asChild className="justify-start hover:bg-gray-100 active:bg-gray-200">
                    <a href="#flow" onClick={() => setMobileMenuOpen(false)} className="w-full py-2">
                      <span className="block">ご利用の流れ</span>
                    </a>
                  </Button>
                  <Button variant="outline" asChild className="justify-start hover:bg-gray-100 active:bg-gray-200">
                    <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="w-full py-2">
                      <span className="block">お問い合わせ</span>
                    </a>
                  </Button>
                </div>
              </div>
              
              {/* Add padding at the bottom to ensure all content is accessible */}
              <div className="py-6"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
