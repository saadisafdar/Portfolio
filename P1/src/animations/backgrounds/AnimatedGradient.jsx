import { useState, useEffect } from 'react';

export function AnimatedGradient({ 
  colors = ['#667eea', '#764ba2', '#f093fb', '#f5576c'],
  duration = 10000,
  children,
  className = '' 
}) {
  const [currentGradient, setCurrentGradient] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGradient(prev => (prev + 1) % colors.length);
    }, duration);

    return () => clearInterval(interval);
  }, [colors.length, duration]);

  const getNextColor = (index) => {
    return colors[(currentGradient + index) % colors.length];
  };

  return (
    <div 
      className={`animated-gradient ${className}`}
      style={{
        background: `linear-gradient(135deg, ${getNextColor(0)} 0%, ${getNextColor(1)} 25%, ${getNextColor(2)} 50%, ${getNextColor(3)} 100%)`,
        backgroundSize: '400% 400%',
        animation: `gradientShift ${duration}ms ease infinite`,
        minHeight: '100%',
        width: '100%',
        position: 'relative'
      }}
    >
      {children}
    </div>
  );
}