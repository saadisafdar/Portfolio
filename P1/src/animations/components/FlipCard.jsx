import { useState } from 'react';

export function FlipCard({ 
  frontContent, 
  backContent,
  width = '200px',
  height = '250px',
  className = '' 
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className={`flip-card ${className}`}
      style={{ 
        width, 
        height,
        perspective: '1000px'
      }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div 
        className="flip-card-inner"
        style={{
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0)',
          transition: 'transform 0.6s',
          transformStyle: 'preserve-3d',
          position: 'relative',
          width: '100%',
          height: '100%'
        }}
      >
        {/* Front of card */}
        <div
          className="flip-card-front"
          style={{
            backfaceVisibility: 'hidden',
            position: 'absolute',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#667eea',
            color: 'white',
            borderRadius: '12px',
            padding: '20px',
            boxSizing: 'border-box'
          }}
        >
          {frontContent}
        </div>
        
        {/* Back of card */}
        <div
          className="flip-card-back"
          style={{
            backfaceVisibility: 'hidden',
            position: 'absolute',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#764ba2',
            color: 'white',
            borderRadius: '12px',
            padding: '20px',
            boxSizing: 'border-box',
            transform: 'rotateY(180deg)'
          }}
        >
          {backContent}
        </div>
      </div>
    </div>
  );
}