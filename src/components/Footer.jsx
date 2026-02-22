import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer id="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* About Section */}
          <div className="footer-about">
            <h3>Ruchitha Yeravelli</h3>
            <p>Creating beautiful digital experiences with modern web technologies.</p>
          </div>

          {/* Quick Links Section */}
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Connect Section */}
          <div className="footer-connect">
            <h4>Connect</h4>
            <div className="social-icons">
              <a
                href="https://github.com/ruchithayeravelli"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github />
              </a>
              <a

                href="https://www.linkedin.com/in/yeravelli-ruchitha-750b3a281"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin />
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter />
              </a>
              <a href="mailto:yeravelliruchitha@gmail.com">
                <Mail />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>&copy; 2026 Ruchitha Yeravelli. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;