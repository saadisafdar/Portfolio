import { useState, useEffect } from 'react';

export function FadeIn({ 
  children, 
  delay = 0, 
  duration = 600,
  direction = 'none',
  className = '' 
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const getInitialTransform = () => {
    switch (direction) {
      case 'up': return 'translateY(30px)';
      case 'down': return 'translateY(-30px)';
      case 'left': return 'translateX(30px)';
      case 'right': return 'translateX(-30px)';
      case 'scale': return 'scale(0.8)';
      default: return 'none';
    }
  };

  const getFinalTransform = () => {
    switch (direction) {
      case 'up':
      case 'down':
      case 'left':
      case 'right': return 'translate(0, 0)';
      case 'scale': return 'scale(1)';
      default: return 'none';
    }
  };

  return (
    <div
      className={`fade-in-component ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? getFinalTransform() : getInitialTransform(),
        transition: `all ${duration}ms ease-out`,
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
}