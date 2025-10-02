import { useState, useEffect } from 'react';

export function Bounce({ 
  children, 
  delay = 0,
  duration = 600,
  intensity = 'medium',
  trigger = 'mount',
  className = '' 
}) {
  const [isBouncing, setIsBouncing] = useState(false);

  useEffect(() => {
    if (trigger === 'mount') {
      const timer = setTimeout(() => {
        setIsBouncing(true);
        
        // Reset bounce after animation completes
        const resetTimer = setTimeout(() => {
          setIsBouncing(false);
        }, duration);
        
        return () => clearTimeout(resetTimer);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [delay, duration, trigger]);

  const getScale = () => {
    switch (intensity) {
      case 'small': return 1.1;
      case 'medium': return 1.2;
      case 'large': return 1.3;
      default: return 1.2;
    }
  };

  const handleClick = () => {
    if (trigger === 'click') {
      setIsBouncing(true);
      setTimeout(() => setIsBouncing(false), duration);
    }
  };

  return (
    <div
      className={`bounce-component ${className}`}
      style={{
        transform: isBouncing ? `scale(${getScale()})` : 'scale(1)',
        transition: `transform ${duration}ms cubic-bezier(0.68, -0.55, 0.265, 1.55)`,
        display: 'inline-block'
      }}
      onClick={handleClick}
    >
      {children}
    </div>
  );
}