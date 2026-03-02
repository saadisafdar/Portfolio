import { useState, useEffect } from 'react';

const chars = '!<>-_\\/[]{}—=+*^?#________';

export function TextScrambler({ 
  text, 
  speed = 50,
  delay = 0 
}) {
  const [displayText, setDisplayText] = useState('');
  const [isScrambling, setIsScrambling] = useState(false);

  useEffect(() => {
    let timeout;
    
    const scramble = (target, current = '', iterations = 0) => {
      if (current === target) {
        setIsScrambling(false);
        return;
      }

      setIsScrambling(true);
      
      let newText = '';
      const maxIterations = 5; // Number of scramble phases

      for (let i = 0; i < target.length; i++) {
        if (iterations < maxIterations && i >= current.length) {
          newText += chars[Math.floor(Math.random() * chars.length)];
        } else if (iterations < maxIterations && current[i] !== target[i]) {
          newText += chars[Math.floor(Math.random() * chars.length)];
        } else {
          newText += target[i];
        }
      }

      setDisplayText(newText);

      timeout = setTimeout(() => {
        scramble(target, newText, iterations + 1);
      }, speed);
    };

    const startTimeout = setTimeout(() => {
      scramble(text);
    }, delay);

    return () => {
      clearTimeout(timeout);
      clearTimeout(startTimeout);
    };
  }, [text, speed, delay]);

  return (
    <span className={`text-scrambler ${isScrambling ? 'scrambling' : ''}`}>
      {displayText || text}
    </span>
  );
}