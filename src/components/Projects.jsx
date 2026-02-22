import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with shopping cart, payment integration, and admin dashboard",
    image:
      "https://images.unsplash.com/photo-1759884837460-a296cb57a3d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["React", "Node.js", "Stripe", "MongoDB"],
    github: "#",
    live: "#",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management tool with real-time updates and team features",
    image:
      "https://images.unsplash.com/photo-1637937459053-c788742455be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    github: "#",
    live: "#",
  },
  {
    title: "Mobile Fitness Tracker",
    description:
      "A mobile-first fitness tracking application with workout plans and progress analytics",
    image:
      "https://images.unsplash.com/photo-1661246627162-feb0269e0c07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["React Native", "Redux", "Chart.js", "REST API"],
    github: "#",
    live: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">Featured Projects</h2>
        <p className="projects-subtitle">
          A selection of my recent work showcasing various technologies
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              
              {/* Direct Image */}
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
              </div>

              <div className="project-content">
                <h3 className="project-heading">{project.title}</h3>
                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.github} className="project-link">
                    <Github size={16} />
                    Code
                  </a>

                  <a href={project.live} className="project-link">
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;