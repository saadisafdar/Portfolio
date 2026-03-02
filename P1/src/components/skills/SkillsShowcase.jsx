import { useState } from 'react';
import { SlideIn } from '../../animations/components/SlideIn';
import { Bounce } from '../../animations/components/Bounce';
import { FlipCard } from '../../animations/components/FlipCard';
import { FadeIn } from '../../animations/components/FadeIn';

export function SkillsShowcase({ skills }) {
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Get unique categories
  const categories = ['all', ...new Set(skills.map(skill => skill.category))];
  
  // Filter skills based on active category
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="section section-dark">
      <div className="container">
        <FadeIn direction="up">
          <div className="section-header">
            <h2>Skills & Technologies</h2>
            <p>Technologies I work with and continuously learn</p>
          </div>
        </FadeIn>

        {/* Category Filters */}
        <FadeIn direction="up" delay={200}>
          <div className="category-filters">
            {categories.map(category => (
              <button
                key={category}
                className={`category-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Skills Grid */}
        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <SlideIn key={skill.name} direction="up" delay={index * 100}>
              <FlipCard
                width="280px"
                height="200px"
                frontContent={
                  <div className="skill-card-front">
                    <div className="skill-icon">{skill.icon}</div>
                    <h3>{skill.name}</h3>
                    <span className="skill-category">{skill.category}</span>
                    <div className="flip-hint">Click to see details →</div>
                  </div>
                }
                backContent={
                  <div className="skill-card-back">
                    <h3>{skill.name}</h3>
                    <div className="skill-level-container">
                      <div className="skill-level-info">
                        <span>Proficiency</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="skill-level-bar">
                        <div 
                          className="skill-level-progress"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                    <p>Years of experience and continuous learning</p>
                    <div className="flip-hint">Click to flip back</div>
                  </div>
                }
              />
            </SlideIn>
          ))}
        </div>

        {/* Skills Summary */}
        <FadeIn direction="up" delay={400}>
          <div className="skills-summary">
            <div className="summary-card">
              <Bounce intensity="small">
                <div className="summary-number">{skills.length}+</div>
              </Bounce>
              <p>Technologies</p>
            </div>
            <div className="summary-card">
              <Bounce intensity="small" delay={200}>
                <div className="summary-number">
                  {Math.round(skills.reduce((acc, skill) => acc + skill.level, 0) / skills.length)}%
                </div>
              </Bounce>
              <p>Average Proficiency</p>
            </div>
            <div className="summary-card">
              <Bounce intensity="small" delay={400}>
                <div className="summary-number">
                  {new Set(skills.map(skill => skill.category)).size}
                </div>
              </Bounce>
              <p>Categories</p>
            </div>
          </div>
        </FadeIn>
      </div>

      <style jsx>{`
        .section-header {
          text-align: center;
          margin-bottom: var(--space-2xl);
        }
        
        .section-header h2 {
          color: var(--text-dark);
          margin-bottom: var(--space-sm);
        }
        
        .section-header p {
          color: var(--text-light);
          font-size: 1.2rem;
        }
        
        .category-filters {
          display: flex;
          justify-content: center;
          gap: var(--space-sm);
          margin-bottom: var(--space-2xl);
          flex-wrap: wrap;
        }
        
        .category-btn {
          padding: 0.75rem 1.5rem;
          border: 2px solid var(--border);
          background: white;
          color: var(--text-light);
          border-radius: var(--radius-lg);
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 600;
        }
        
        .category-btn:hover {
          border-color: var(--primary);
          color: var(--primary);
          transform: translateY(-2px);
        }
        
        .category-btn.active {
          background: var(--primary);
          border-color: var(--primary);
          color: white;
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }
        
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: var(--space-lg);
          margin-bottom: var(--space-2xl);
        }
        
        .skill-card-front, .skill-card-back {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          height: 100%;
          padding: var(--space-lg);
        }
        
        .skill-icon {
          font-size: 3rem;
          margin-bottom: var(--space-md);
        }
        
        .skill-card-front h3 {
          margin-bottom: var(--space-xs);
          color: var(--text-dark);
        }
        
        .skill-category {
          background: var(--surface);
          color: var(--text-light);
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-sm);
          font-size: 0.875rem;
          font-weight: 600;
        }
        
        .flip-hint {
          margin-top: auto;
          font-size: 0.875rem;
          color: var(--text-light);
          opacity: 0.7;
        }
        
        .skill-card-back h3 {
          margin-bottom: var(--space-md);
          color: white;
        }
        
        .skill-level-container {
          width: 100%;
          margin-bottom: var(--space-md);
        }
        
        .skill-level-info {
          display: flex;
          justify-content: space-between;
          margin-bottom: var(--space-xs);
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.9);
        }
        
        .skill-level-bar {
          width: 100%;
          height: 6px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 3px;
          overflow: hidden;
        }
        
        .skill-level-progress {
          height: 100%;
          background: linear-gradient(90deg, #ffeb3b, #ff9800);
          border-radius: 3px;
          transition: width 1s ease-in-out;
        }
        
        .skill-card-back p {
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.9rem;
          margin-bottom: var(--space-md);
        }
        
        .skills-summary {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: var(--space-lg);
          margin-top: var(--space-2xl);
        }
        
        .summary-card {
          background: white;
          padding: var(--space-lg);
          border-radius: var(--radius-lg);
          text-align: center;
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--border);
          transition: transform 0.3s ease;
        }
        
        .summary-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
        }
        
        .summary-number {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--primary);
          margin-bottom: var(--space-xs);
        }
        
        .summary-card p {
          color: var(--text-light);
          margin: 0;
          font-weight: 600;
        }
        
        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
          
          .category-filters {
            gap: var(--space-xs);
          }
          
          .category-btn {
            padding: 0.5rem 1rem;
            font-size: 0.875rem;
          }
        }
      `}</style>
    </section>
  );
}