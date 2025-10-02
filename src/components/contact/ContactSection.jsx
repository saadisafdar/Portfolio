import { useState } from 'react';
import { useContactForm } from '../../hooks/useContactForm';
import { FadeIn } from '../../animations/components/FadeIn';
import { SlideIn } from '../../animations/components/SlideIn';
import { Bounce } from '../../animations/components/Bounce';
import { FloatingShapes } from '../../animations/backgrounds/FloatingShapes';
import { ParticleBackground } from '../../animations/backgrounds/ParticleBackground';

export function ContactSection({ contactInfo }) {
  const [activeTab, setActiveTab] = useState('form');
  
  const {
    formData,
    errors,
    isSubmitting,
    submitStatus,
    handleChange,
    handleSubmit,
    clearDraft
  } = useContactForm();

  const socialLinks = [
    { name: 'GitHub', url: `https://github.com/${contactInfo.social.github}`, icon: '💻', color: '#333' },
    { name: 'LinkedIn', url: `https://linkedin.com/in/${contactInfo.social.linkedin}`, icon: '💼', color: '#0077b5' },
    { name: 'Twitter', url: `https://twitter.com/${contactInfo.social.twitter}`, icon: '🐦', color: '#1da1f2' },
    { name: 'Email', url: `mailto:${contactInfo.email}`, icon: '📧', color: '#ea4335' }
  ];

  return (
    <section id="contact" className="section section-dark">
      <FloatingShapes>
        <div className="container">
          {/* Section Header */}
          <FadeIn direction="up">
            <div className="section-header">
              <h2>Get In Touch</h2>
              <p>Let's work together to bring your ideas to life</p>
            </div>
          </FadeIn>

          <div className="contact-layout">
            {/* Contact Info Sidebar */}
            <FadeIn direction="right" delay={200}>
              <div className="contact-info">
                <div className="info-card">
                  <Bounce intensity="small">
                    <div className="info-icon">💬</div>
                  </Bounce>
                  <h3>Let's Talk</h3>
                  <p>I'm always interested in new opportunities and creative projects.</p>
                  
                  <div className="contact-details">
                    <div className="detail-item">
                      <span className="detail-icon">📧</span>
                      <div>
                        <strong>Email</strong>
                        <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                      </div>
                    </div>
                    <div className="detail-item">
                      <span className="detail-icon">📍</span>
                      <div>
                        <strong>Location</strong>
                        <span>{contactInfo.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="social-links">
                    <h4>Follow Me</h4>
                    <div className="social-grid">
                      {socialLinks.map((social, index) => (
                        <Bounce key={social.name} delay={index * 100}>
                          <a
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            style={{ '--social-color': social.color }}
                          >
                            <span className="social-icon">{social.icon}</span>
                            <span>{social.name}</span>
                          </a>
                        </Bounce>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Contact Form */}
            <FadeIn direction="left" delay={400}>
              <div className="contact-form-container">
                {/* Form Tabs */}
                <div className="form-tabs">
                  <button
                    className={`tab-btn ${activeTab === 'form' ? 'active' : ''}`}
                    onClick={() => setActiveTab('form')}
                  >
                    📝 Contact Form
                  </button>
                  <button
                    className={`tab-btn ${activeTab === 'quick' ? 'active' : ''}`}
                    onClick={() => setActiveTab('quick')}
                  >
                    ⚡ Quick Connect
                  </button>
                </div>

                {/* Contact Form */}
                {activeTab === 'form' && (
                  <form onSubmit={handleSubmit} className="contact-form">
                    {/* Status Messages */}
                    {submitStatus === 'success' && (
                      <div className="status-message success">
                        ✅ Thank you! Your message has been sent successfully.
                      </div>
                    )}
                    
                    {submitStatus === 'error' && (
                      <div className="status-message error">
                        ❌ Sorry, there was an error sending your message. Please try again.
                      </div>
                    )}

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="name">Full Name *</label>
                        <input
                          type="text"
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                          className={errors.name ? 'error' : ''}
                          placeholder="Enter your full name"
                        />
                        {errors.name && <span className="error-message">{errors.name}</span>}
                      </div>

                      <div className="form-group">
                        <label htmlFor="email">Email Address *</label>
                        <input
                          type="email"
                          id="email"
                          value={formData.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          className={errors.email ? 'error' : ''}
                          placeholder="Enter your email address"
                        />
                        {errors.email && <span className="error-message">{errors.email}</span>}
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="subject">Subject *</label>
                      <input
                        type="text"
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => handleChange('subject', e.target.value)}
                        className={errors.subject ? 'error' : ''}
                        placeholder="What's this about?"
                      />
                      {errors.subject && <span className="error-message">{errors.subject}</span>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Message *</label>
                      <textarea
                        id="message"
                        rows="6"
                        value={formData.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        className={errors.message ? 'error' : ''}
                        placeholder="Tell me about your project or inquiry..."
                      />
                      {errors.message && <span className="error-message">{errors.message}</span>}
                    </div>

                    <div className="form-actions">
                      <button
                        type="button"
                        onClick={clearDraft}
                        className="btn btn-secondary"
                        disabled={isSubmitting}
                      >
                        🗑️ Clear Draft
                      </button>
                      
                      <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <span className="loading-spinner"></span>
                            Sending...
                          </>
                        ) : (
                          <>
                            🚀 Send Message
                          </>
                        )}
                      </button>
                    </div>

                    <div className="form-note">
                      <p>💡 Your form data is automatically saved as a draft!</p>
                    </div>
                  </form>
                )}

                {/* Quick Connect */}
                {activeTab === 'quick' && (
                  <div className="quick-connect">
                    <div className="quick-options">
                      <SlideIn direction="up" delay={100}>
                        <a
                          href={`mailto:${contactInfo.email}?subject=Let's Work Together&body=Hi there! I'd like to discuss a project with you.`}
                          className="quick-option primary"
                        >
                          <span className="option-icon">💼</span>
                          <div>
                            <strong>Project Inquiry</strong>
                            <p>Let's discuss your next project</p>
                          </div>
                        </a>
                      </SlideIn>

                      <SlideIn direction="up" delay={200}>
                        <a
                          href={`mailto:${contactInfo.email}?subject=Collaboration Opportunity&body=Hi! I have an interesting collaboration idea.`}
                          className="quick-option secondary"
                        >
                          <span className="option-icon">🤝</span>
                          <div>
                            <strong>Collaboration</strong>
                            <p>Work together on something amazing</p>
                          </div>
                        </a>
                      </SlideIn>

                      <SlideIn direction="up" delay={300}>
                        <a
                          href={`mailto:${contactInfo.email}?subject=Hello!&body=Hi! Just wanted to say hello and connect.`}
                          className="quick-option tertiary"
                        >
                          <span className="option-icon">👋</span>
                          <div>
                            <strong>Just Say Hi</strong>
                            <p>Connect and network</p>
                          </div>
                        </a>
                      </SlideIn>
                    </div>

                    <div className="quick-note">
                      <p>Prefer to talk? Feel free to reach out through any of my social channels!</p>
                    </div>
                  </div>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </FloatingShapes>

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
        
        /* Contact Layout */
        .contact-layout {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: var(--space-2xl);
          align-items: start;
        }
        
        /* Contact Info */
        .contact-info {
          position: sticky;
          top: var(--space-2xl);
        }
        
        .info-card {
          background: white;
          padding: var(--space-2xl);
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--border);
        }
        
        .info-icon {
          font-size: 4rem;
          margin-bottom: var(--space-md);
          text-align: center;
        }
        
        .info-card h3 {
          text-align: center;
          margin-bottom: var(--space-sm);
          color: var(--text-dark);
        }
        
        .info-card > p {
          text-align: center;
          color: var(--text-light);
          margin-bottom: var(--space-xl);
        }
        
        .contact-details {
          margin-bottom: var(--space-2xl);
        }
        
        .detail-item {
          display: flex;
          align-items: center;
          gap: var(--space-md);
          padding: var(--space-md) 0;
          border-bottom: 1px solid var(--border);
        }
        
        .detail-item:last-child {
          border-bottom: none;
        }
        
        .detail-icon {
          font-size: 1.5rem;
          width: 40px;
          text-align: center;
        }
        
        .detail-item strong {
          display: block;
          color: var(--text-dark);
          margin-bottom: 0.25rem;
        }
        
        .detail-item a, .detail-item span {
          color: var(--text-light);
          text-decoration: none;
        }
        
        .detail-item a:hover {
          color: var(--primary);
        }
        
        /* Social Links */
        .social-links h4 {
          margin-bottom: var(--space-lg);
          color: var(--text-dark);
          text-align: center;
        }
        
        .social-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-sm);
        }
        
        .social-link {
          display: flex;
          align-items: center;
          gap: var(--space-sm);
          padding: var(--space-md);
          background: var(--surface);
          border-radius: var(--radius-md);
          text-decoration: none;
          color: var(--text-dark);
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }
        
        .social-link:hover {
          border-color: var(--social-color);
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }
        
        .social-icon {
          font-size: 1.25rem;
        }
        
        /* Contact Form */
        .contact-form-container {
          background: white;
          padding: var(--space-2xl);
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--border);
        }
        
        .form-tabs {
          display: flex;
          margin-bottom: var(--space-xl);
          border-bottom: 2px solid var(--border);
        }
        
        .tab-btn {
          flex: 1;
          padding: var(--space-md);
          background: none;
          border: none;
          cursor: pointer;
          font-weight: 600;
          color: var(--text-light);
          transition: all 0.3s ease;
          border-bottom: 3px solid transparent;
        }
        
        .tab-btn.active {
          color: var(--primary);
          border-bottom-color: var(--primary);
        }
        
        .tab-btn:hover {
          color: var(--primary);
        }
        
        /* Form Styles */
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: var(--space-lg);
        }
        
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-lg);
        }
        
        .form-group {
          display: flex;
          flex-direction: column;
        }
        
        .form-group label {
          font-weight: 600;
          margin-bottom: var(--space-xs);
          color: var(--text-dark);
        }
        
        .form-group input,
        .form-group textarea {
          padding: 0.75rem 1rem;
          border: 2px solid var(--border);
          border-radius: var(--radius-md);
          font-size: 1rem;
          transition: all 0.3s ease;
          font-family: inherit;
        }
        
        .form-group input:focus,
        .form-group textarea:focus {
          border-color: var(--primary);
          outline: none;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }
        
        .form-group input.error,
        .form-group textarea.error {
          border-color: #e53e3e;
        }
        
        .error-message {
          color: #e53e3e;
          font-size: 0.875rem;
          margin-top: 0.25rem;
        }
        
        .status-message {
          padding: var(--space-md);
          border-radius: var(--radius-md);
          font-weight: 600;
        }
        
        .status-message.success {
          background: #f0fff4;
          color: #2d7d32;
          border: 1px solid #9ae6b4;
        }
        
        .status-message.error {
          background: #fed7d7;
          color: #c53030;
          border: 1px solid #feb2b2;
        }
        
        .form-actions {
          display: flex;
          gap: var(--space-md);
          justify-content: space-between;
          align-items: center;
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
        
        .form-note {
          text-align: center;
          padding: var(--space-md);
          background: var(--surface);
          border-radius: var(--radius-md);
          font-size: 0.875rem;
          color: var(--text-light);
        }
        
        .form-note p {
          margin: 0;
        }
        
        /* Quick Connect */
        .quick-connect {
          display: flex;
          flex-direction: column;
          gap: var(--space-lg);
        }
        
        .quick-options {
          display: flex;
          flex-direction: column;
          gap: var(--space-md);
        }
        
        .quick-option {
          display: flex;
          align-items: center;
          gap: var(--space-md);
          padding: var(--space-lg);
          border-radius: var(--radius-lg);
          text-decoration: none;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }
        
        .quick-option.primary {
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          color: white;
        }
        
        .quick-option.secondary {
          background: var(--surface);
          color: var(--text-dark);
          border-color: var(--border);
        }
        
        .quick-option.tertiary {
          background: white;
          color: var(--text-dark);
          border-color: var(--border);
        }
        
        .quick-option:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-lg);
        }
        
        .option-icon {
          font-size: 2rem;
        }
        
        .quick-option strong {
          display: block;
          margin-bottom: 0.25rem;
        }
        
        .quick-option p {
          margin: 0;
          opacity: 0.8;
        }
        
        .quick-note {
          text-align: center;
          padding: var(--space-md);
          background: var(--surface);
          border-radius: var(--radius-md);
          color: var(--text-light);
        }
        
        @media (max-width: 968px) {
          .contact-layout {
            grid-template-columns: 1fr;
            gap: var(--space-xl);
          }
          
          .contact-info {
            position: static;
          }
          
          .form-row {
            grid-template-columns: 1fr;
          }
          
          .social-grid {
            grid-template-columns: 1fr;
          }
        }
        
        @media (max-width: 768px) {
          .contact-form-container,
          .info-card {
            padding: var(--space-lg);
          }
          
          .form-actions {
            flex-direction: column;
          }
          
          .form-actions .btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}