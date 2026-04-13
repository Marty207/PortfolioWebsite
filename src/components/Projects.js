import React, { useState } from "react";

function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Credit Card Recommendation System",
      shortDescription:
        "A recommendation platform built with filtering and ranking logic based on user preferences.",
      description:
        "A full-stack project that helps users find strong credit card matches using rule-based scoring, filtering, and backend decision logic.",
      previewImage: "/CreditCardMain.png",
      video: "/CreditCardVideo.mp4",
      images: ["/CreditCardMain.png", "/CreditCardResults.png"],
      github: "https://github.com/Marty207",
      live: "",
      tech: ["React", "Java", "REST API"],
    },
    {
      id: 2,
      title: "Tradernal",
      shortDescription:
        "A trading journal with analytics, performance tracking, and AI-style feedback.",
      description:
        "A personalized trading journal focused on reviewing trades, tracking progress, and improving consistency through data and AI-based features.",
      previewImage: "/TradernalMain.png",
      video: "/TradernalVideo.mp4",
      images: ["/TradernalMain.png", "/TradernalDashboard.png"],
      github: "https://github.com/Marty207",
      live: "",
      tech: ["React", "Flask", "Python"],
    },
  ];

  function openProject(project) {
    setActiveProject(project);
    setSelectedImage(null);
  }

  function closeProject() {
    setActiveProject(null);
    setSelectedImage(null);
  }

  return (
    <section id="projects" className="projects-section">
      <div className="section-heading">
        <p className="section-label">Projects</p>
        <h2>What I've Built</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-card-image-wrap">
              <img
                src={project.previewImage}
                alt={project.title}
                className="project-card-image"
              />
            </div>

            <div className="project-card-content">
              <h3>{project.title}</h3>
              <p>{project.shortDescription}</p>

              <div className="tech-list">
                {project.tech.map((item, index) => (
                  <span key={index} className="tech-pill">
                    {item}
                  </span>
                ))}
              </div>

              <div className="project-actions">
                <button
                  type="button"
                  className="project-btn"
                  onClick={() => openProject(project)}
                >
                  View Details
                </button>

                <a
                  href={project.github}
                  className="project-link-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {activeProject && (
        <div className="modal-overlay" onClick={closeProject}>
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="close-btn"
              onClick={closeProject}
              aria-label="Close project modal"
            >
              ×
            </button>

            <h3>{activeProject.title}</h3>
            <p className="modal-description">{activeProject.description}</p>

            <div className="modal-video-wrapper">
              <video
                src={activeProject.video}
                controls
                className="modal-video"
              />
            </div>

            <div className="modal-top-links">
              {activeProject.live && (
                <a
                  href={activeProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-link-btn"
                >
                  Live Demo
                </a>
              )}

              <a
                href={activeProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-link-btn"
              >
                View GitHub
              </a>
            </div>

            <h4 className="gallery-title">Screenshots</h4>

            <div className="modal-gallery">
              {activeProject.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${activeProject.title} screenshot ${index + 1}`}
                  className="modal-gallery-image"
                  onClick={() => setSelectedImage(image)}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {selectedImage && (
        <div className="image-lightbox" onClick={() => setSelectedImage(null)}>
          <img
            src={selectedImage}
            alt="Expanded screenshot"
            className="lightbox-image"
          />
        </div>
      )}
    </section>
  );
}

export default Projects;