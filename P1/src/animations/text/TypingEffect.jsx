import { useState, useEffect } from 'react';

export function TypingEffect({ 
  text, 
  speed = 100, 
  delay = 0,  // Now we'll USE this delay!
  cursor = true,
  onComplete 
}) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setHasStarted(true);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!hasStarted) return;

    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    } else if (!isCompleted) {
      setIsCompleted(true);
      onComplete?.();
    }
  }, [currentIndex, text, speed, isCompleted, onComplete, hasStarted]);

  return (
    <span className="typing-effect">
      {displayText}
      {cursor && <span className="typing-cursor">|</span>}
    </span>
  );
}