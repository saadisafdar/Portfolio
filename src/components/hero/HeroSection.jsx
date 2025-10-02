import { AnimatedGradient } from '../../animations/backgrounds/AnimatedGradient';
import { TypingEffect } from '../../animations/text/TypingEffect';
import { FadeIn } from '../../animations/components/FadeIn';
import { ParticleBackground } from '../../animations/backgrounds/ParticleBackground';

export function HeroSection({ personalInfo }) {
  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section id="home" className="hero-section">
      <AnimatedGradient 
        colors={['#667eea', '#764ba2', '#f093fb', '#f5576c']}
        duration={15000}
      >
        <ParticleBackground particleCount={30}>
          <div className="hero-container">
            <FadeIn direction="up" delay={200}>
              <h1 className="hero-title">
                <TypingEffect 
                  text={personalInfo.name} 
                  speed={100} 
                  cursor={true}
                />
              </h1>
            </FadeIn>
            
            <FadeIn direction="up" delay={400}>
              <h2 className="hero-subtitle">
                <TypingEffect 
                  text={personalInfo.title} 
                  speed={80} 
                  delay={1200}
                  cursor={true}
                />
              </h2>
            </FadeIn>
            
            <FadeIn direction="up" delay={600}>
              <p className="hero-bio">{personalInfo.bio}</p>
            </FadeIn>
            
            <FadeIn direction="up" delay={800}>
              <div className="hero-buttons">
                <button 
                  className="btn btn-primary"
                  onClick={scrollToProjects}
                >
                  <span>🚀</span>
                  View My Work
                </button>
                <button 
                  className="btn btn-secondary"
                  onClick={scrollToContact}
                >
                  <span>💬</span>
                  Get In Touch
                </button>
              </div>
            </FadeIn>
            
            <FadeIn direction="up" delay={1000}>
              <div className="scroll-indicator">
                <div className="scroll-arrow"></div>
                <span>Scroll to explore</span>
              </div>
            </FadeIn>
          </div>
        </ParticleBackground>
      </AnimatedGradient>
      
      <style jsx>{`
        .hero-section {
          position: relative;
        }
        
        .scroll-indicator {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.9rem;
        }
        
        .scroll-arrow {
          width: 20px;
          height: 20px;
          border-right: 2px solid rgba(255, 255, 255, 0.8);
          border-bottom: 2px solid rgba(255, 255, 255, 0.8);
          transform: rotate(45deg);
          animation: bounce 2s infinite;
        }
        
        @keyframes bounce {
          0%, 100% {
            transform: rotate(45deg) translate(0, 0);
          }
          50% {
            transform: rotate(45deg) translate(-5px, 5px);
          }
        }
      `}</style>
    </section>
  );
}