
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholderColor?: string;
  priority?: boolean;
  loadingAnimation?: 'pulse' | 'blur' | 'none';
  hoverAnimation?: 'scale' | 'glow' | 'lift' | 'none';
}

export function AnimatedImage({
  src,
  alt,
  className,
  placeholderColor = '#f3f4f6',
  priority = false,
  loadingAnimation = 'blur',
  hoverAnimation = 'lift',
}: AnimatedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);
  
  // Handle image loading
  useEffect(() => {
    if (priority || isInView) {
      const img = new Image();
      img.src = src;
      img.onload = () => setIsLoaded(true);
    }
  }, [src, priority, isInView]);
  
  // Intersection observer for lazy loading
  useEffect(() => {
    if (!priority && imageRef.current) {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      }, { rootMargin: '200px' });
      
      observer.observe(imageRef.current);
      return () => observer.disconnect();
    }
    return undefined;
  }, [priority]);
  
  const hoverClasses = 
    hoverAnimation === 'scale' 
      ? 'transition-transform duration-300 hover:scale-105' 
      : hoverAnimation === 'glow' 
      ? 'transition-all duration-300 hover:shadow-lg hover:shadow-white/20' 
      : hoverAnimation === 'lift' 
      ? 'transition-all duration-300 hover:-translate-y-1 hover:shadow-lg' 
      : '';
  
  const loadingClasses = 
    loadingAnimation === 'pulse' && !isLoaded 
      ? 'animate-pulse' 
      : loadingAnimation === 'blur' && !isLoaded 
      ? 'blur-sm' 
      : '';
  
  return (
    <div 
      className={cn(
        'overflow-hidden relative',
        className
      )}
      ref={imageRef}
    >
      <div
        style={{ backgroundColor: placeholderColor }}
        className={cn(
          'w-full h-full absolute inset-0 transition-opacity duration-500',
          isLoaded ? 'opacity-0' : 'opacity-100'
        )}
      />
      
      {(priority || isInView) && (
        <img
          src={src}
          alt={alt}
          className={cn(
            'w-full h-full object-cover transition-all duration-500',
            hoverClasses,
            loadingClasses,
            isLoaded ? 'opacity-100' : 'opacity-0'
          )}
          onLoad={() => setIsLoaded(true)}
        />
      )}
    </div>
  );
}
