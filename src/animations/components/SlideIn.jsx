import { useState, useEffect, useRef } from 'react';

export function SlideIn({ 
  children, 
  direction = 'left',
  threshold = 0.1,
  duration = 800,
  className = '' 
}) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    // Store the current ref value in a variable
    const currentElement = elementRef.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold]);

  const getSlideTransform = () => {
    const distance = '100px';
    switch (direction) {
      case 'left': return `translateX(-${distance})`;
      case 'right': return `translateX(${distance})`;
      case 'up': return `translateY(${distance})`;
      case 'down': return `translateY(-${distance})`;
      default: return `translateX(-${distance})`;
    }
  };

  return (
    <div
      ref={elementRef}
      className={`slide-in-component ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate(0, 0)' : getSlideTransform(),
        transition: `all ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
        willChange: 'transform, opacity'
      }}
    >
      {children}
    </div>
  );
}