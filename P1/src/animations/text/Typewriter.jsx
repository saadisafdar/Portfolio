import { useState, useEffect } from 'react';

export function Typewriter({ 
  lines = [], 
  speed = 100, 
  lineDelay = 1000,
  deleteSpeed = 50,
  pauseBetween = 2000 
}) {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (lines.length === 0) return;

    const currentLine = lines[currentLineIndex];
    
    if (!isDeleting && !isPaused) {
      // Typing mode
      if (currentText.length < currentLine.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentLine.substring(0, currentText.length + 1));
        }, speed);
        return () => clearTimeout(timeout);
      } else {
        // Finished typing, pause then start deleting
        const timeout = setTimeout(() => {
          setIsPaused(true);
          setTimeout(() => {
            setIsPaused(false);
            setIsDeleting(true);
          }, pauseBetween);
        }, lineDelay);
        return () => clearTimeout(timeout);
      }
    } else if (isDeleting && !isPaused) {
      // Deleting mode
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentLine.substring(0, currentText.length - 1));
        }, deleteSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Finished deleting, move to next line
        setIsDeleting(false);
        setCurrentLineIndex((prev) => (prev + 1) % lines.length);
      }
    }
  }, [currentText, isDeleting, isPaused, currentLineIndex, lines, speed, deleteSpeed, lineDelay, pauseBetween]);

  return (
    <div className="typewriter">
      <span>{currentText}</span>
      <span className="typewriter-cursor">|</span>
    </div>
  );
}