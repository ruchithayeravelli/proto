import { Code2, Palette, Smartphone, Zap } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Expert in React, TypeScript, and modern JavaScript frameworks",
    technologies: ["React", "TypeScript", "Next.js", "Node.js"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Creating beautiful and intuitive user interfaces",
    technologies: [
      "Figma",
      "Tailwind CSS",
      "Design Systems",
      "Prototyping",
    ],
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description:
      "Building applications that work seamlessly on all devices",
    technologies: [
      "Mobile-First",
      "CSS Grid",
      "Flexbox",
      "Progressive Web Apps",
    ],
  },
  {
    icon: Zap,
    title: "Performance",
    description:
      "Optimizing applications for speed and efficiency",
    technologies: [
      "Web Vitals",
      "Code Splitting",
      "Lazy Loading",
      "Caching",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title">Skills & Expertise</h2>
        <p className="skills-subtitle">
          Here are some of the technologies and skills I work
          with to create amazing digital experiences
        </p>

        <div className="skills-grid">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div key={index} className="skill-card">
                <div className="skill-icon">
                  <Icon size={24} />
                </div>

                <h3 className="skill-heading">{skill.title}</h3>
                <p className="skill-description">
                  {skill.description}
                </p>

                <div className="skill-tags">
                  {skill.technologies.map((tech, i) => (
                    <span key={i} className="skill-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default Skills;