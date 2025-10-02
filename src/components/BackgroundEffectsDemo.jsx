import { useState } from 'react';
import { AnimatedGradient } from '../animations/backgrounds/AnimatedGradient';
import { ParticleBackground } from '../animations/backgrounds/ParticleBackground';
import { WaveBackground } from '../animations/backgrounds/WaveBackground';
import { FloatingShapes } from '../animations/backgrounds/FloatingShapes';

export function BackgroundEffectsDemo() {
  const [activeEffect, setActiveEffect] = useState('gradient');

  const effects = {
    gradient: {
      name: '🌈 Animated Gradient',
      component: AnimatedGradient,
      description: 'Smooth color transitions with CSS gradients'
    },
    particles: {
      name: '⭐ Particle System',
      component: ParticleBackground,
      description: 'Floating particles with connection lines'
    },
    waves: {
      name: '🌊 Animated Waves',
      component: WaveBackground,
      description: 'Smooth waving animation with multiple layers'
    },
    shapes: {
      name: '💫 Floating Shapes',
      component: FloatingShapes,
      description: 'Geometric shapes floating and rotating'
    }
  };

  const ActiveBackground = effects[activeEffect].component;

  return (
    <div className="background-effects-demo">
      <div className="demo-header">
        <h3>🌈 Background Effects Gallery</h3>
        <p>Choose a background effect to see it in action!</p>
      </div>

      <div className="background-controls">
        {Object.entries(effects).map(([key, effect]) => (
          <button
            key={key}
            className={`effect-btn ${activeEffect === key ? 'active' : ''}`}
            onClick={() => setActiveEffect(key)}
          >
            {effect.name}
          </button>
        ))}
      </div>

      <div className="background-preview">
        <ActiveBackground>
          <div className="preview-content">
            <h4>{effects[activeEffect].name}</h4>
            <p>{effects[activeEffect].description}</p>
            <div className="content-card">
              <h5>Demo Content</h5>
              <p>This content is displayed over the background effect.</p>
              <p>Perfect for hero sections, landing pages, and portfolios!</p>
            </div>
          </div>
        </ActiveBackground>
      </div>

      <div className="background-tips">
        <h5>💡 Usage Tips:</h5>
        <ul>
          <li><strong>Animated Gradient:</strong> Great for hero sections and call-to-actions</li>
          <li><strong>Particle System:</strong> Perfect for tech websites and portfolios</li>
          <li><strong>Animated Waves:</strong> Ideal for creative and design-focused sites</li>
          <li><strong>Floating Shapes:</strong> Works well for modern, minimalist designs</li>
        </ul>
      </div>
    </div>
  );
}