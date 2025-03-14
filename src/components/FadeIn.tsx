
import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number; // in ms
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number; // in ms
  threshold?: number; // 0-1, percentage of element that needs to be visible
  once?: boolean; // if true, animation only happens once
}

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = 'up',
  duration = 500,
  threshold = 0.1,
  once = true,
}: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [once, threshold]);

  // Initial state styles
  const initialStyles: React.CSSProperties = {
    opacity: 0,
    transform: 
      direction === 'up' 
        ? 'translateY(20px)' 
        : direction === 'down' 
        ? 'translateY(-20px)' 
        : direction === 'left' 
        ? 'translateX(20px)' 
        : direction === 'right' 
        ? 'translateX(-20px)' 
        : 'none',
    transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
    transitionDelay: `${delay}ms`,
  };

  // Visible state styles
  const visibleStyles: React.CSSProperties = {
    opacity: 1,
    transform: 'translate(0)',
  };

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        ...initialStyles,
        ...(isVisible ? visibleStyles : {}),
      }}
    >
      {children}
    </div>
  );
}
