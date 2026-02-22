import React from "react";

export function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>

        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm a passionate developer with over 5 years of experience building modern web applications.
              I specialize in creating responsive, user-friendly interfaces that bring ideas to life.
            </p>

            <p>
              My expertise spans across frontend development, UI/UX design, and modern JavaScript frameworks.
              I'm constantly learning and staying up-to-date with the latest technologies to deliver the best solutions.
            </p>

            <p>
              When I'm not coding, you can find me exploring new design trends,
              contributing to open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>

          <div className="about-image-wrapper">
            <div className="about-image-box">
              <img
                src="https://images.unsplash.com/photo-1765371512336-99c2b1c6975f?auto=format&fit=crop&w=800&q=80"
                alt="Professional workspace"
                className="about-image"
              />
            </div>

            <div className="decor decor-blue"></div>
            <div className="decor decor-purple"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;