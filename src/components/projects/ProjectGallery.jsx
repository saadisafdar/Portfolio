import { useState, useMemo } from 'react';
import { useDebounce } from '../../hooks/useDebounce';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { FadeIn } from '../../animations/components/FadeIn';
import { SlideIn } from '../../animations/components/SlideIn';
import { Bounce } from '../../animations/components/Bounce';
import { WaveBackground } from '../../animations/backgrounds/WaveBackground';

export function ProjectGallery({ projects }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [favorites, setFavorites] = useLocalStorage('favoriteProjects', []);
  const debouncedSearch = useDebounce(searchTerm, 300);

  // Get unique technologies for filters
  const allTechnologies = useMemo(() => {
    const techs = new Set();
    projects.forEach(project => {
      project.technologies.forEach(tech => techs.add(tech));
    });
    return ['all', ...Array.from(techs)];
  }, [projects]);

  // Filter projects based on search and filter
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch = 
        project.title.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        project.description.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        project.technologies.some(tech => 
          tech.toLowerCase().includes(debouncedSearch.toLowerCase())
        );
      
      const matchesFilter = 
        activeFilter === 'all' || 
        project.technologies.includes(activeFilter) ||
        (activeFilter === 'featured' && project.featured);

      return matchesSearch && matchesFilter;
    });
  }, [projects, debouncedSearch, activeFilter]);

  const toggleFavorite = (projectId) => {
    setFavorites(prev =>
      prev.includes(projectId)
        ? prev.filter(id => id !== projectId)
        : [...prev, projectId]
    );
  };

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="section">
      <WaveBackground>
        <div className="container">
          {/* Section Header */}
          <FadeIn direction="up">
            <div className="section-header">
              <h2>Featured Projects</h2>
              <p>A collection of my recent work and personal projects</p>
            </div>
          </FadeIn>

          {/* Featured Projects Banner */}
          {featuredProjects.length > 0 && (
            <FadeIn direction="up" delay={200}>
              <div className="featured-banner">
                <div className="banner-content">
                  <Bounce intensity="small">
                    <span className="banner-badge">🔥 Featured</span>
                  </Bounce>
                  <h3>Highlighted Work</h3>
                  <p>Check out my most notable projects</p>
                </div>
                <div className="featured-projects-preview">
                  {featuredProjects.slice(0, 3).map((project, index) => (
                    <Bounce key={project.id} delay={index * 200}>
                      <div className="featured-preview-card">
                        <div className="preview-icon">🚀</div>
                        <span>{project.title}</span>
                      </div>
                    </Bounce>
                  ))}
                </div>
              </div>
            </FadeIn>
          )}

          {/* Search and Filter Controls */}
          <FadeIn direction="up" delay={400}>
            <div className="projects-controls">
              <div className="search-container">
                <input
                  type="text"
                  placeholder="Search projects, technologies, or descriptions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
                <span className="search-icon">🔍</span>
              </div>
              
              <div className="filter-controls">
                <div className="technology-filters">
                  {allTechnologies.slice(0, 6).map(tech => (
                    <button
                      key={tech}
                      className={`tech-filter-btn ${activeFilter === tech ? 'active' : ''}`}
                      onClick={() => setActiveFilter(tech)}
                    >
                      {tech === 'all' ? 'All' : tech}
                    </button>
                  ))}
                </div>
                
                <button
                  className={`featured-filter-btn ${activeFilter === 'featured' ? 'active' : ''}`}
                  onClick={() => setActiveFilter(activeFilter === 'featured' ? 'all' : 'featured')}
                >
                  ⭐ Featured
                </button>
              </div>
            </div>
          </FadeIn>

          {/* Projects Grid */}
          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <SlideIn key={project.id} direction="up" delay={index * 100}>
                <div className="project-card">
                  {/* Favorite Button */}
                  <button
                    className={`favorite-btn ${favorites.includes(project.id) ? 'favorited' : ''}`}
                    onClick={() => toggleFavorite(project.id)}
                    aria-label={favorites.includes(project.id) ? 'Remove from favorites' : 'Add to favorites'}
                  >
                    {favorites.includes(project.id) ? '★' : '☆'}
                  </button>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="featured-badge">Featured</div>
                  )}

                  {/* Project Image Placeholder */}
                  <div className="project-image">
                    <div className="image-placeholder">
                      <span>🖼️</span>
                      <p>Project Preview</p>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="project-info">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    
                    {/* Technologies */}
                    <div className="tech-tags">
                      {project.technologies.map(tech => (
                        <span key={tech} className="tech-tag">{tech}</span>
                      ))}
                    </div>

                    {/* Project Links */}
                    <div className="project-links">
                      <a 
                        href={project.liveUrl} 
                        className="btn btn-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>🌐</span>
                        Live Demo
                      </a>
                      <a 
                        href={project.githubUrl} 
                        className="btn btn-secondary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>💻</span>
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              </SlideIn>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <FadeIn direction="up">
              <div className="empty-state">
                <div className="empty-icon">🔍</div>
                <h3>No projects found</h3>
                <p>Try adjusting your search or filter criteria</p>
                <button 
                  className="btn btn-primary"
                  onClick={() => {
                    setSearchTerm('');
                    setActiveFilter('all');
                  }}
                >
                  Clear Filters
                </button>
              </div>
            </FadeIn>
          )}

          {/* Projects Summary */}
          <FadeIn direction="up" delay={600}>
            <div className="projects-summary">
              <div className="summary-item">
                <Bounce intensity="small">
                  <div className="summary-number">{projects.length}</div>
                </Bounce>
                <p>Total Projects</p>
              </div>
              <div className="summary-item">
                <Bounce intensity="small" delay={200}>
                  <div className="summary-number">
                    {projects.filter(p => p.featured).length}
                  </div>
                </Bounce>
                <p>Featured</p>
              </div>
              <div className="summary-item">
                <Bounce intensity="small" delay={400}>
                  <div className="summary-number">{favorites.length}</div>
                </Bounce>
                <p>Favorited</p>
              </div>
              <div className="summary-item">
                <Bounce intensity="small" delay={600}>
                  <div className="summary-number">
                    {new Set(projects.flatMap(p => p.technologies)).size}
                  </div>
                </Bounce>
                <p>Technologies</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </WaveBackground>

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
        
        /* Featured Banner */
        .featured-banner {
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          color: white;
          padding: var(--space-xl);
          border-radius: var(--radius-xl);
          margin-bottom: var(--space-2xl);
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: var(--shadow-lg);
        }
        
        .banner-content h3 {
          color: white;
          margin-bottom: var(--space-xs);
        }
        
        .banner-content p {
          color: rgba(255, 255, 255, 0.9);
          margin: 0;
        }
        
        .banner-badge {
          background: rgba(255, 255, 255, 0.2);
          padding: 0.5rem 1rem;
          border-radius: var(--radius-lg);
          font-weight: 600;
          font-size: 0.875rem;
        }
        
        .featured-projects-preview {
          display: flex;
          gap: var(--space-md);
        }
        
        .featured-preview-card {
          background: rgba(255, 255, 255, 0.1);
          padding: var(--space-md);
          border-radius: var(--radius-lg);
          display: flex;
          align-items: center;
          gap: var(--space-sm);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .preview-icon {
          font-size: 1.5rem;
        }
        
        /* Controls */
        .projects-controls {
          background: white;
          padding: var(--space-lg);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--border);
          margin-bottom: var(--space-2xl);
        }
        
        .search-container {
          position: relative;
          margin-bottom: var(--space-lg);
        }
        
        .search-input {
          width: 100%;
          padding: 1rem 1rem 1rem 3rem;
          border: 2px solid var(--border);
          border-radius: var(--radius-md);
          font-size: 1rem;
          transition: all 0.3s ease;
        }
        
        .search-input:focus {
          border-color: var(--primary);
          outline: none;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }
        
        .search-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-light);
        }
        
        .filter-controls {
          display: flex;
          justify-content: between;
          align-items: center;
          gap: var(--space-md);
          flex-wrap: wrap;
        }
        
        .technology-filters {
          display: flex;
          gap: var(--space-sm);
          flex-wrap: wrap;
          flex: 1;
        }
        
        .tech-filter-btn, .featured-filter-btn {
          padding: 0.5rem 1rem;
          border: 2px solid var(--border);
          background: white;
          color: var(--text-light);
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 600;
          font-size: 0.875rem;
        }
        
        .tech-filter-btn:hover, .featured-filter-btn:hover {
          border-color: var(--primary);
          color: var(--primary);
          transform: translateY(-1px);
        }
        
        .tech-filter-btn.active, .featured-filter-btn.active {
          background: var(--primary);
          border-color: var(--primary);
          color: white;
          transform: translateY(-1px);
          box-shadow: var(--shadow-sm);
        }
        
        /* Projects Grid */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: var(--space-lg);
          margin-bottom: var(--space-2xl);
        }
        
        .project-card {
          background: white;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--border);
          overflow: hidden;
          transition: all 0.3s ease;
          position: relative;
        }
        
        .project-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
        }
        
        .favorite-btn {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: rgba(255, 255, 255, 0.9);
          border: none;
          border-radius: 50%;
          width: 2.5rem;
          height: 2.5rem;
          cursor: pointer;
          font-size: 1.2rem;
          z-index: 2;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }
        
        .favorite-btn:hover {
          background: white;
          transform: scale(1.1);
        }
        
        .favorite-btn.favorited {
          color: #ffd700;
        }
        
        .featured-badge {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: linear-gradient(135deg, #ff6b6b, #ff8e53);
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-sm);
          font-size: 0.75rem;
          font-weight: 600;
          z-index: 2;
        }
        
        .project-image {
          height: 200px;
          background: var(--surface);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .image-placeholder {
          text-align: center;
          color: var(--text-light);
        }
        
        .image-placeholder span {
          font-size: 3rem;
          display: block;
          margin-bottom: var(--space-sm);
        }
        
        .project-info {
          padding: var(--space-lg);
        }
        
        .project-info h3 {
          margin-bottom: var(--space-sm);
          color: var(--text-dark);
        }
        
        .project-info p {
          color: var(--text-light);
          margin-bottom: var(--space-md);
          line-height: 1.5;
        }
        
        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-xs);
          margin-bottom: var(--space-lg);
        }
        
        .tech-tag {
          background: var(--surface);
          color: var(--text-light);
          padding: 0.25rem 0.5rem;
          border-radius: var(--radius-sm);
          font-size: 0.75rem;
          font-weight: 600;
        }
        
        .project-links {
          display: flex;
          gap: var(--space-sm);
        }
        
        .project-links .btn {
          flex: 1;
          font-size: 0.875rem;
          padding: 0.5rem 1rem;
        }
        
        /* Empty State */
        .empty-state {
          text-align: center;
          padding: var(--space-2xl);
          color: var(--text-light);
        }
        
        .empty-icon {
          font-size: 4rem;
          margin-bottom: var(--space-lg);
        }
        
        .empty-state h3 {
          color: var(--text-dark);
          margin-bottom: var(--space-sm);
        }
        
        /* Projects Summary */
        .projects-summary {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: var(--space-lg);
          background: white;
          padding: var(--space-xl);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--border);
        }
        
        .summary-item {
          text-align: center;
        }
        
        .summary-number {
          font-size: 2rem;
          font-weight: 700;
          color: var(--primary);
          margin-bottom: var(--space-xs);
        }
        
        .summary-item p {
          color: var(--text-light);
          margin: 0;
          font-weight: 600;
        }
        
        @media (max-width: 768px) {
          .featured-banner {
            flex-direction: column;
            gap: var(--space-lg);
            text-align: center;
          }
          
          .featured-projects-preview {
            justify-content: center;
          }
          
          .projects-grid {
            grid-template-columns: 1fr;
          }
          
          .filter-controls {
            flex-direction: column;
            align-items: stretch;
          }
          
          .technology-filters {
            justify-content: center;
          }
          
          .project-links {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
}