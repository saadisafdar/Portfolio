import { useState } from 'react';
import { FadeIn } from '../animations/components/FadeIn';
import { SlideIn } from '../animations/components/SlideIn';
import { Bounce } from '../animations/components/Bounce';
import { FlipCard } from '../animations/components/FlipCard';

export function ComponentAnimationsDemo() {
  const [resetKey, setResetKey] = useState(0);

  const resetAnimations = () => {
    setResetKey(prev => prev + 1);
  };

  return (
    <div className="component-animations-demo">
      <div className="demo-header">
        <h3>🎬 Component Animations Gallery</h3>
        <button onClick={resetAnimations} className="reset-btn">
          🔄 Reset Animations
        </button>
      </div>

      <div className="animations-grid">
        {/* Fade In Animations */}
        <div className="animation-category">
          <h4>✨ Fade In Animations</h4>
          <div className="animation-showcase">
            <FadeIn key={resetKey} delay={0}>
              <div className="demo-card">Fade In (No delay)</div>
            </FadeIn>
            
            <FadeIn key={resetKey + 1} delay={300} direction="up">
              <div className="demo-card">Fade Up</div>
            </FadeIn>
            
            <FadeIn key={resetKey + 2} delay={600} direction="left">
              <div className="demo-card">Fade Left</div>
            </FadeIn>
            
            <FadeIn key={resetKey + 3} delay={900} direction="scale">
              <div className="demo-card">Scale In</div>
            </FadeIn>
          </div>
        </div>

        {/* Slide In Animations */}
        <div className="animation-category">
          <h4>🎯 Slide In Animations</h4>
          <div className="animation-showcase">
            <SlideIn key={resetKey} direction="left">
              <div className="demo-card">Slide from Left</div>
            </SlideIn>
            
            <SlideIn key={resetKey + 1} direction="right">
              <div className="demo-card">Slide from Right</div>
            </SlideIn>
            
            <SlideIn key={resetKey + 2} direction="up">
              <div className="demo-card">Slide from Bottom</div>
            </SlideIn>
            
            <SlideIn key={resetKey + 3} direction="down">
              <div className="demo-card">Slide from Top</div>
            </SlideIn>
          </div>
        </div>

        {/* Bounce Animations */}
        <div className="animation-category">
          <h4>🌀 Bounce Animations</h4>
          <div className="animation-showcase">
            <Bounce key={resetKey} intensity="small">
              <div className="demo-card">Small Bounce</div>
            </Bounce>
            
            <Bounce key={resetKey + 1} intensity="medium" delay={200}>
              <div className="demo-card">Medium Bounce</div>
            </Bounce>
            
            <Bounce key={resetKey + 2} intensity="large" delay={400}>
              <div className="demo-card">Large Bounce</div>
            </Bounce>
            
            <Bounce key={resetKey + 3} trigger="click">
              <div className="demo-card clickable">Click to Bounce!</div>
            </Bounce>
          </div>
        </div>

        {/* Flip Card Animation */}
        <div className="animation-category full-width">
          <h4>🎪 Flip Card Animation</h4>
          <div className="flip-cards-showcase">
            <FlipCard
              frontContent={
                <div className="card-content">
                  <h5>Front Side</h5>
                  <p>Click to flip!</p>
                </div>
              }
              backContent={
                <div className="card-content">
                  <h5>Back Side</h5>
                  <p>Amazing flip effect!</p>
                  <small>Click again to flip back</small>
                </div>
              }
            />
            
            <FlipCard
              frontContent={
                <div className="card-content">
                  <h5>React</h5>
                  <p>Learn More →</p>
                </div>
              }
              backContent={
                <div className="card-content">
                  <h5>React Features</h5>
                  <ul>
                    <li>Component-based</li>
                    <li>Virtual DOM</li>
                    <li>Hooks</li>
                  </ul>
                </div>
              }
              width="220px"
              height="280px"
            />
          </div>
        </div>
      </div>

      <div className="animation-tips">
        <h5>💡 Usage Tips:</h5>
        <ul>
          <li><strong>FadeIn:</strong> Perfect for staggered content loading</li>
          <li><strong>SlideIn:</strong> Great for scroll-triggered animations</li>
          <li><strong>Bounce:</strong> Attention-grabbing for important elements</li>
          <li><strong>FlipCard:</strong> Interactive cards with two sides</li>
        </ul>
      </div>
    </div>
  );
}