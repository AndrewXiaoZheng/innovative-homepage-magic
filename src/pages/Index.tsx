
import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Flow from '@/components/Flow';
import Features from '@/components/Features';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  // Smooth scroll implementation
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isAnchor = target.tagName === 'A' && target.getAttribute('href')?.startsWith('#');
      
      if (isAnchor) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id as string);
        
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80, // Account for header height
            behavior: 'smooth'
          });
        }
      }
    };
    
    document.addEventListener('click', handleLinkClick);
    return () => document.removeEventListener('click', handleLinkClick);
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Flow />

        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
