import { useState, useRef } from 'react';
import { FadeIn } from '../../animations/components/FadeIn';
import { SlideIn } from '../../animations/components/SlideIn';
import { Bounce } from '../../animations/components/Bounce';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent, Tabs, TabsList, Tab, TabPanel } from '../CompoundDemo/index.jsx';
import { ParticleBackground } from '../../animations/backgrounds/ParticleBackground';

export function ResumeSection({ experience, education }) {
  const [exporting, setExporting] = useState(false);
  const resumeRef = useRef();

  // Function to export resume as PDF (simulated)
  const exportResume = async () => {
    setExporting(true);
    
    // Simulate PDF generation
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Create a temporary download link
    const link = document.createElement('a');
    link.href = '/api/resume.pdf'; // This would be your actual PDF endpoint
    link.download = 'Saadi_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setExporting(false);
  };

  // Calculate total experience
  const totalExperience = experience.reduce((total, exp) => {
    const years = parseInt(exp.period.split(' - ')[1]) - parseInt(exp.period.split(' - ')[0]);
    return total + (isNaN(years) ? 0 : years);
  }, 0);

  const skillsSummary = [
    { category: 'Frontend', count: 5, icon: '🎨' },
    { category: 'Backend', count: 3, icon: '⚙️' },
    { category: 'Tools', count: 4, icon: '🛠️' },
    { category: 'Design', count: 2, icon: '✨' }
  ];

  return (
    <section id="resume" className="section">
      <ParticleBackground particleCount={25} particleColor="rgba(102, 126, 234, 0.3)">
        <div className="container">
          {/* Section Header */}
          <FadeIn direction="up">
            <div className="section-header">
              <h2>Professional Resume</h2>
              <p>My journey, experience, and qualifications</p>
            </div>
          </FadeIn>

          {/* Resume Summary */}
          <FadeIn direction="up" delay={200}>
            <div className="resume-summary">
              <div className="summary-stats">
                <Bounce intensity="small">
                  <div className="stat-card">
                    <div className="stat-icon">💼</div>
                    <div className="stat-content">
                      <div className="stat-number">{totalExperience}+</div>
                      <div className="stat-label">Years Experience</div>
                    </div>
                  </div>
                </Bounce>

                <Bounce intensity="small" delay={200}>
                  <div className="stat-card">
                    <div className="stat-icon">🏆</div>
                    <div className="stat-content">
                      <div className="stat-number">{experience.length}</div>
                      <div className="stat-label">Positions</div>
                    </div>
                  </div>
                </Bounce>

                <Bounce intensity="small" delay={400}>
                  <div className="stat-card">
                    <div className="stat-icon">🎓</div>
                    <div className="stat-content">
                      <div className="stat-number">{education.length}</div>
                      <div className="stat-label">Degrees</div>
                    </div>
                  </div>
                </Bounce>

                <Bounce intensity="small" delay={600}>
                  <div className="stat-card">
                    <div className="stat-icon">🚀</div>
                    <div className="stat-content">
                      <div className="stat-number">10+</div>
                      <div className="stat-label">Projects</div>
                    </div>
                  </div>
                </Bounce>
              </div>

              {/* Export Button */}
              <div className="export-actions">
                <button
                  onClick={exportResume}
                  disabled={exporting}
                  className="btn btn-primary export-btn"
                >
                  {exporting ? (
                    <>
                      <span className="loading-spinner"></span>
                      Generating PDF...
                    </>
                  ) : (
                    <>
                      📄 Download Resume
                    </>
                  )}
                </button>
                
                <button className="btn btn-secondary">
                  📧 Email Resume
                </button>
              </div>
            </div>
          </FadeIn>

          {/* Main Resume Content */}
          <div className="resume-content" ref={resumeRef}>
            <FadeIn direction="up" delay={400}>
              <Tabs defaultValue="experience">
                <TabsList>
                  <Tab value="experience">💼 Experience</Tab>
                  <Tab value="education">🎓 Education</Tab>
                  <Tab value="skills">🛠️ Skills Overview</Tab>
                </TabsList>

                {/* Experience Tab */}
                <TabPanel value="experience">
                  <div className="timeline">
                    {experience.map((exp, index) => (
                      <SlideIn key={exp.id} direction="up" delay={index * 100}>
                        <div className="timeline-item">
                          <div className="timeline-marker">
                            <div className="marker-dot"></div>
                            {index < experience.length - 1 && <div className="timeline-line"></div>}
                          </div>
                          
                          <div className="timeline-content">
                            <div className="timeline-header">
                              <h3>{exp.position}</h3>
                              <span className="timeline-period">{exp.period}</span>
                            </div>
                            
                            <div className="company-info">
                              <span className="company-name">{exp.company}</span>
                            </div>
                            
                            <p className="timeline-description">{exp.description}</p>
                            
                            {exp.achievements && exp.achievements.length > 0 && (
                              <div className="achievements">
                                <h4>Key Achievements:</h4>
                                <ul>
                                  {exp.achievements.map((achievement, achIndex) => (
                                    <li key={achIndex}>{achievement}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        </div>
                      </SlideIn>
                    ))}
                  </div>
                </TabPanel>

                {/* Education Tab */}
                <TabPanel value="education">
                  <div className="education-grid">
                    {education.map((edu, index) => (
                      <SlideIn key={edu.id} direction="up" delay={index * 150}>
                        <div className="education-card">
                          <div className="education-icon">🎓</div>
                          
                          <div className="education-content">
                            <h3>{edu.degree}</h3>
                            <div className="institution">{edu.institution}</div>
                            <div className="education-period">{edu.period}</div>
                            <p>{edu.description}</p>
                          </div>
                          
                          <div className="education-badge">
                            Degree
                          </div>
                        </div>
                      </SlideIn>
                    ))}
                  </div>
                </TabPanel>

                {/* Skills Overview Tab */}
                <TabPanel value="skills">
                  <div className="skills-overview">
                    <div className="skills-categories">
                      {skillsSummary.map((category, index) => (
                        <Bounce key={category.category} delay={index * 100}>
                          <div className="category-card">
                            <div className="category-icon">{category.icon}</div>
                            <h4>{category.category}</h4>
                            <div className="skill-count">{category.count} Skills</div>
                            <div className="skill-level">
                              <div 
                                className="level-bar"
                                style={{ width: `${(category.count / 6) * 100}%` }}
                              ></div>
                            </div>
                          </div>
                        </Bounce>
                      ))}
                    </div>

                    {/* Skills Accordion */}
                    <div className="skills-details">
                      <Accordion defaultOpen={['frontend']}>
                        <AccordionItem id="frontend">
                          <AccordionTrigger id="frontend">
                            🎨 Frontend Development
                          </AccordionTrigger>
                          <AccordionContent id="frontend">
                            <div className="skills-list">
                              <span className="skill-tag">React</span>
                              <span className="skill-tag">JavaScript</span>
                              <span className="skill-tag">TypeScript</span>
                              <span className="skill-tag">HTML/CSS</span>
                              <span className="skill-tag">Vue.js</span>
                              <span className="skill-tag">Responsive Design</span>
                            </div>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem id="backend">
                          <AccordionTrigger id="backend">
                            ⚙️ Backend Development
                          </AccordionTrigger>
                          <AccordionContent id="backend">
                            <div className="skills-list">
                              <span className="skill-tag">Node.js</span>
                              <span className="skill-tag">Express</span>
                              <span className="skill-tag">Python</span>
                              <span className="skill-tag">MongoDB</span>
                              <span className="skill-tag">PostgreSQL</span>
                              <span className="skill-tag">REST APIs</span>
                            </div>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem id="tools">
                          <AccordionTrigger id="tools">
                            🛠️ Development Tools
                          </AccordionTrigger>
                          <AccordionContent id="tools">
                            <div className="skills-list">
                              <span className="skill-tag">Git & GitHub</span>
                              <span className="skill-tag">Docker</span>
                              <span className="skill-tag">VS Code</span>
                              <span className="skill-tag">Webpack</span>
                              <span className="skill-tag">Jest</span>
                              <span className="skill-tag">Figma</span>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </div>
                </TabPanel>
              </Tabs>
            </FadeIn>
          </div>

          {/* Call to Action */}
          <FadeIn direction="up" delay={600}>
            <div className="resume-cta">
              <div className="cta-content">
                <h3>Ready to Work Together?</h3>
                <p>Let's discuss how we can bring your ideas to life</p>
                <div className="cta-actions">
                  <a href="#contact" className="btn btn-primary">
                    💬 Get In Touch
                  </a>
                  <a href="#projects" className="btn btn-secondary">
                    🚀 View Projects
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </ParticleBackground>

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
        
        /* Resume Summary */
        .resume-summary {
          background: white;
          padding: var(--space-2xl);
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--border);
          margin-bottom: var(--space-2xl);
        }
        
        .summary-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: var(--space-lg);
          margin-bottom: var(--space-xl);
        }
        
        .stat-card {
          display: flex;
          align-items: center;
          gap: var(--space-md);
          padding: var(--space-lg);
          background: var(--surface);
          border-radius: var(--radius-lg);
          transition: transform 0.3s ease;
        }
        
        .stat-card:hover {
          transform: translateY(-2px);
        }
        
        .stat-icon {
          font-size: 2.5rem;
        }
        
        .stat-number {
          font-size: 2rem;
          font-weight: 700;
          color: var(--primary);
          line-height: 1;
        }
        
        .stat-label {
          color: var(--text-light);
          font-weight: 600;
          font-size: 0.875rem;
        }
        
        .export-actions {
          display: flex;
          gap: var(--space-md);
          justify-content: center;
          flex-wrap: wrap;
        }
        
        .export-btn {
          min-width: 200px;
        }
        
        .loading-spinner {
          width: 16px;
          height: 16px;
          border: 2px solid transparent;
          border-top: 2px solid currentColor;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-right: 0.5rem;
        }
        
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        
        /* Resume Content */
        .resume-content {
          background: white;
          padding: var(--space-2xl);
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--border);
          margin-bottom: var(--space-2xl);
        }
        
        /* Timeline Styles */
        .timeline {
          position: relative;
          padding-left: var(--space-lg);
        }
        
        .timeline-item {
          display: flex;
          margin-bottom: var(--space-2xl);
          position: relative;
        }
        
        .timeline-marker {
          position: relative;
          margin-right: var(--space-lg);
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .marker-dot {
          width: 16px;
          height: 16px;
          background: var(--primary);
          border-radius: 50%;
          border: 3px solid white;
          box-shadow: 0 0 0 3px var(--primary);
          z-index: 2;
        }
        
        .timeline-line {
          width: 2px;
          background: var(--border);
          flex: 1;
          margin-top: var(--space-sm);
          min-height: 40px;
        }
        
        .timeline-content {
          flex: 1;
          padding-bottom: var(--space-lg);
        }
        
        .timeline-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: var(--space-sm);
          flex-wrap: wrap;
          gap: var(--space-sm);
        }
        
        .timeline-header h3 {
          margin: 0;
          color: var(--text-dark);
        }
        
        .timeline-period {
          background: var(--primary);
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-sm);
          font-size: 0.875rem;
          font-weight: 600;
        }
        
        .company-info {
          margin-bottom: var(--space-md);
        }
        
        .company-name {
          font-weight: 600;
          color: var(--text-light);
          font-size: 1.1rem;
        }
        
        .timeline-description {
          color: var(--text-light);
          margin-bottom: var(--space-md);
          line-height: 1.6;
        }
        
        .achievements h4 {
          color: var(--text-dark);
          margin-bottom: var(--space-sm);
          font-size: 1rem;
        }
        
        .achievements ul {
          color: var(--text-light);
          padding-left: var(--space-lg);
        }
        
        .achievements li {
          margin-bottom: var(--space-xs);
          line-height: 1.5;
        }
        
        /* Education Grid */
        .education-grid {
          display: grid;
          gap: var(--space-lg);
        }
        
        .education-card {
          display: flex;
          align-items: flex-start;
          gap: var(--space-lg);
          padding: var(--space-xl);
          background: var(--surface);
          border-radius: var(--radius-lg);
          border: 1px solid var(--border);
          position: relative;
          transition: transform 0.3s ease;
        }
        
        .education-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }
        
        .education-icon {
          font-size: 3rem;
          flex-shrink: 0;
        }
        
        .education-content {
          flex: 1;
        }
        
        .education-content h3 {
          margin-bottom: var(--space-xs);
          color: var(--text-dark);
        }
        
        .institution {
          font-weight: 600;
          color: var(--primary);
          margin-bottom: var(--space-xs);
        }
        
        .education-period {
          color: var(--text-light);
          font-size: 0.875rem;
          margin-bottom: var(--space-sm);
        }
        
        .education-badge {
          position: absolute;
          top: var(--space-lg);
          right: var(--space-lg);
          background: var(--primary);
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-sm);
          font-size: 0.75rem;
          font-weight: 600;
        }
        
        /* Skills Overview */
        .skills-overview {
          display: flex;
          flex-direction: column;
          gap: var(--space-2xl);
        }
        
        .skills-categories {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: var(--space-lg);
        }
        
        .category-card {
          background: var(--surface);
          padding: var(--space-xl);
          border-radius: var(--radius-lg);
          text-align: center;
          border: 1px solid var(--border);
          transition: transform 0.3s ease;
        }
        
        .category-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
        }
        
        .category-icon {
          font-size: 3rem;
          margin-bottom: var(--space-md);
        }
        
        .category-card h4 {
          margin-bottom: var(--space-sm);
          color: var(--text-dark);
        }
        
        .skill-count {
          color: var(--text-light);
          margin-bottom: var(--space-md);
          font-weight: 600;
        }
        
        .skill-level {
          height: 6px;
          background: var(--border);
          border-radius: 3px;
          overflow: hidden;
        }
        
        .level-bar {
          height: 100%;
          background: linear-gradient(90deg, var(--primary), var(--secondary));
          border-radius: 3px;
          transition: width 1s ease-in-out;
        }
        
        .skills-details {
          background: white;
          border-radius: var(--radius-lg);
          border: 1px solid var(--border);
          overflow: hidden;
        }
        
        .skills-list {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-sm);
          padding: var(--space-md);
        }
        
        .skill-tag {
          background: var(--surface);
          color: var(--text-dark);
          padding: 0.5rem 1rem;
          border-radius: var(--radius-md);
          font-size: 0.875rem;
          font-weight: 600;
          border: 1px solid var(--border);
          transition: all 0.3s ease;
        }
        
        .skill-tag:hover {
          background: var(--primary);
          color: white;
          transform: translateY(-1px);
        }
        
        /* Call to Action */
        .resume-cta {
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          color: white;
          padding: var(--space-2xl);
          border-radius: var(--radius-xl);
          text-align: center;
          box-shadow: var(--shadow-lg);
        }
        
        .cta-content h3 {
          color: white;
          margin-bottom: var(--space-sm);
        }
        
        .cta-content p {
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: var(--space-xl);
          font-size: 1.1rem;
        }
        
        .cta-actions {
          display: flex;
          gap: var(--space-md);
          justify-content: center;
          flex-wrap: wrap;
        }
        
        @media (max-width: 768px) {
          .resume-summary,
          .resume-content {
            padding: var(--space-lg);
          }
          
          .summary-stats {
            grid-template-columns: 1fr;
          }
          
          .timeline-header {
            flex-direction: column;
            align-items: flex-start;
          }
          
          .education-card {
            flex-direction: column;
            text-align: center;
          }
          
          .skills-categories {
            grid-template-columns: 1fr;
          }
          
          .export-actions,
          .cta-actions {
            flex-direction: column;
            align-items: center;
          }
          
          .export-actions .btn,
          .cta-actions .btn {
            width: 100%;
            max-width: 300px;
          }
        }
      `}</style>
    </section>
  );
}