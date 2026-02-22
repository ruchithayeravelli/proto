import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-badge">
            <span>Welcome to my portfolio</span>
          </div>

          <h1 className="hero-title">
            Hi, I'm Ruchitha Yeravelli
          </h1>

          <p className="hero-description">
            A creative developer crafting beautiful digital experiences with modern web technologies
          </p>

          <div className="hero-buttons">
            <button 
              onClick={() => scrollToSection('projects')}
              className="primary-btn"
            >
              View My Work
              <ArrowRight size={18} />
            </button>

            {/* Optional: Add CV download link */}
            <a 
              href="/Ruchitharesume-4-12.pdf" 
              download 
              className="secondary-btn"
            >
              Download CV
            </a>
          </div>

          <div className="hero-socials">
            {/* GitHub */}
            <a 
              href="https://github.com/ruchithayeravelli" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>

            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/yeravelli-ruchitha-750b3a281" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>

            {/* Email */}
            <a 
              href="mailto:yeravelliruchitha@gmail.com"
              aria-label="Email"
            >
              <Mail size={22} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;