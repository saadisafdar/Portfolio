import { useState } from 'react';
import { TypingEffect } from '../animations/text/TypingEffect';
import { FadeInText } from '../animations/text/FadeInText';
import { TextScrambler } from '../animations/text/TextScrambler';
import { Typewriter } from '../animations/text/Typewriter';

export function TextAnimationsDemo() {
  const [resetKey, setResetKey] = useState(0);

  const resetAnimations = () => {
    setResetKey(prev => prev + 1);
  };

  const typewriterLines = [
    "Hello, I'm a React Developer",
    "I love creating amazing UIs",
    "Text animations are fun!",
    "Let's build something great!"
  ];

  return (
    <div className="text-animations-demo">
      <div className="demo-header">
        <h3>🎭 Text Animations Gallery</h3>
        <button onClick={resetAnimations} className="reset-btn">
          🔄 Reset Animations
        </button>
      </div>

      <div className="animation-grid">
        <div className="animation-card">
          <h4>⌨️ Typing Effect</h4>
          <div className="animation-preview">
            <p>
              <TypingEffect 
                key={resetKey}
                text="This text types itself character by character. Perfect for introductions!"
                speed={40}
                cursor={true}
              />
            </p>
          </div>
        </div>

        <div className="animation-card">
          <h4>✨ Fade In Effects</h4>
          <div className="animation-preview">
            <p>
              <FadeInText 
                key={resetKey}
                text="Fading in from below" 
                delay={100}
                direction="up"
              />
            </p>
            <p>
              <FadeInText 
                key={resetKey + 1}
                text="Sliding from the left" 
                delay={400}
                direction="left"
              />
            </p>
            <p>
              <FadeInText 
                key={resetKey + 2}
                text="Appearing from right" 
                delay={700}
                direction="right"
              />
            </p>
          </div>
        </div>

        <div className="animation-card">
          <h4>🔀 Text Scrambler</h4>
          <div className="animation-preview">
            <p>
              <TextScrambler 
                key={resetKey}
                text="Watch me scramble and reveal!"
                speed={30}
                delay={200}
              />
            </p>
            <p>
              <TextScrambler 
                key={resetKey + 1}
                text="Another scrambled message"
                speed={50}
                delay={800}
              />
            </p>
          </div>
        </div>

        <div className="animation-card full-width">
          <h4>📜 Typewriter (Multi-line)</h4>
          <div className="animation-preview">
            <Typewriter 
              key={resetKey}
              lines={typewriterLines}
              speed={80}
              deleteSpeed={40}
              pauseBetween={1500}
            />
          </div>
        </div>
      </div>

      <div className="animation-tips">
        <h5>💡 Usage Tips:</h5>
        <ul>
          <li><strong>TypingEffect:</strong> Great for one-time messages</li>
          <li><strong>FadeInText:</strong> Perfect for staggered content</li>
          <li><strong>TextScrambler:</strong> Cool for attention-grabbing text</li>
          <li><strong>Typewriter:</strong> Ideal for rotating messages</li>
        </ul>
      </div>
    </div>
  );
}