import { useEffect, useRef } from 'react';

export function WaveBackground({ 
  waveCount = 3,
  colors = ['rgba(102, 126, 234, 0.3)', 'rgba(118, 75, 162, 0.2)', 'rgba(240, 147, 251, 0.1)'],
  className = '' ,
  children
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const drawWave = (amplitude, frequency, speed, color, offset = 0) => {
      ctx.beginPath();
      ctx.moveTo(0, canvas.height / 2);

      for (let x = 0; x < canvas.width; x++) {
        const y = canvas.height / 2 + 
                  amplitude * Math.sin((x * frequency + time * speed + offset) * 0.01);
        ctx.lineTo(x, y);
      }

      ctx.lineTo(canvas.width, canvas.height);
      ctx.lineTo(0, canvas.height);
      ctx.closePath();
      ctx.fillStyle = color;
      ctx.fill();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < waveCount; i++) {
        const amplitude = 30 + i * 10;
        const frequency = 0.02 + i * 0.01;
        const speed = 0.5 + i * 0.2;
        const color = colors[i % colors.length];
        const offset = i * 100;
        
        drawWave(amplitude, frequency, speed, color, offset);
      }

      time += 1;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [waveCount, colors]);

  return (
    <div className={`wave-background ${className}`} style={{ position: 'relative', width: '100%', height: '100%' }}>
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0
        }}
      />
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
}