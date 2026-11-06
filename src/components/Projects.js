import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Capital AI",
      shortDescription:
        "A personal finance app where you link your bank, set savings goals, and ask Capito questions about your money.",
      description:
        "I built a full stack finance app that connects bank accounts through Plaid, tracks goals and spending, and includes Capito, an assistant powered by DeepSeek that answers questions using your real balances and transactions.",
      previewImage: "/Capital_LandingPage.png",
      video: "",
      images: [
        "/Capital_LandingPage.png",
        "/Capital_Dashboard.png",
        "/Capital_Dashboard2.png",
        "/Capital_AIBot.png",
        "/Capital_Transactions.png",
      ],
      github: "https://github.com/Marty207",
      live: "",
      tech: ["Python", "React", "Supabase", "Plaid", "DeepSeek"],
    },
    {
      id: 2,
      title: "TradePilot AI",
      shortDescription:
        "A Chrome extension that gives day traders instant AI chart analysis, market insights, and trade feedback.",
      description:
        "I built and deployed a Chrome extension that gives day traders instant AI chart analysis, market insights, and trade feedback. It runs on OpenAI and a Flask backend.",
      previewImage: "/TradePilot.png",
      logoPreview: true,
      video: "/TradePilotRecording.mp4",
      images: [],
      github: "https://github.com/Marty207",
      live: "",
      tech: ["Python", "Flask", "OpenAI API", "Chrome Extension"],
    },
    {
      id: 3,
      title: "Credit Card Recommendation System",
      shortDescription:
        "Helps users find credit cards that match their spending habits and financial profile.",
      description:
        "A full stack app that helps users find credit cards that fit their profile, using custom scoring, filtering, and backend logic.",
      previewImage: "/CreditCardMain.png",
      video: "/CreditCardVideo.mp4",
      images: ["/CreditCardMain.png", "/CreditCardResults.png"],
      github: "https://github.com/Marty207",
      live: "",
      tech: ["React", "Java", "REST API"],
    },
    {
      id: 4,
      title: "Tradernal",
      shortDescription:
        "A trading journal with analytics, performance tracking, and AI feedback on your trades.",
      description:
        "A trading journal for reviewing trades, tracking progress, and spotting patterns in your performance with data and AI.",
      previewImage: "/TradernalMain.png",
      video: "/TradernalVideo.mp4",
      images: ["/TradernalMain.png", "/TradernalDashboard.png"],
      github: "https://github.com/Marty207",
      live: "",
      tech: ["React", "Flask", "Python"],
    },
  ];

  useEffect(() => {
    if (activeProject || selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeProject, selectedImage]);

  useEffect(() => {
    if (!activeProject?.images?.length) {
      return undefined;
    }

    function onKeyDown(event) {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        stepGallery(-1);
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        stepGallery(1);
      }
      if (event.key === "Escape" && selectedImage) {
        setSelectedImage(null);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeProject, galleryIndex, selectedImage]);

  function stepGallery(step) {
    if (!activeProject?.images?.length) {
      return;
    }

    const images = activeProject.images;
    const nextIndex = (galleryIndex + step + images.length) % images.length;
    setGalleryIndex(nextIndex);
    if (selectedImage) {
      setSelectedImage(images[nextIndex]);
    }
  }

  function openProject(project) {
    setActiveProject(project);
    setSelectedImage(null);
    setGalleryIndex(0);
  }

  function closeProject() {
    setActiveProject(null);
    setSelectedImage(null);
    setGalleryIndex(0);
  }

  function openLightbox(index) {
    if (!activeProject?.images?.length) {
      return;
    }
    setGalleryIndex(index);
    setSelectedImage(activeProject.images[index]);
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
            <div
              className={`project-card-image-wrap${
                project.logoPreview ? " logo-preview" : ""
              }`}
            >
              <img
                src={project.previewImage}
                alt={project.title}
                className={`project-card-image${
                  project.logoPreview ? " logo-preview" : ""
                }`}
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

      {/* PROJECT MODAL — rendered via portal directly on body */}
      {activeProject &&
        ReactDOM.createPortal(
          <div className="modal-overlay" onClick={closeProject}>
            <div
              className="project-modal"
              onClick={(e) => e.stopPropagation()}
            >
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

              {activeProject.video && (
                <div className="modal-video-wrapper">
                  <video
                    src={activeProject.video}
                    controls
                    className="modal-video"
                  />
                </div>
              )}

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

              {activeProject.images.length > 0 && (
                <>
                  <h4 className="gallery-title">Screenshots</h4>
                  <div className="gallery-carousel">
                    <button
                      type="button"
                      className="gallery-nav-btn"
                      onClick={() => stepGallery(-1)}
                      aria-label="Previous screenshot"
                    >
                      ←
                    </button>
                    <div className="gallery-carousel-main">
                      <img
                        src={activeProject.images[galleryIndex]}
                        alt={`${activeProject.title} screenshot ${galleryIndex + 1}`}
                        className="modal-gallery-image"
                        onClick={() => openLightbox(galleryIndex)}
                      />
                      <p className="gallery-counter">
                        {galleryIndex + 1} of {activeProject.images.length}
                      </p>
                    </div>
                    <button
                      type="button"
                      className="gallery-nav-btn"
                      onClick={() => stepGallery(1)}
                      aria-label="Next screenshot"
                    >
                      →
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>,
          document.body
        )}

      {/* LIGHTBOX — also rendered via portal */}
      {selectedImage &&
        ReactDOM.createPortal(
          <div
            className="image-lightbox"
            onClick={() => setSelectedImage(null)}
          >
            <button
              type="button"
              className="lightbox-close-btn"
              onClick={() => setSelectedImage(null)}
              aria-label="Close image"
            >
              ×
            </button>
            {activeProject?.images?.length > 1 && (
              <>
                <button
                  type="button"
                  className="lightbox-nav-btn lightbox-nav-prev"
                  onClick={(e) => {
                    e.stopPropagation();
                    stepGallery(-1);
                  }}
                  aria-label="Previous screenshot"
                >
                  ←
                </button>
                <button
                  type="button"
                  className="lightbox-nav-btn lightbox-nav-next"
                  onClick={(e) => {
                    e.stopPropagation();
                    stepGallery(1);
                  }}
                  aria-label="Next screenshot"
                >
                  →
                </button>
              </>
            )}
            <img
              src={selectedImage}
              alt="Expanded screenshot"
              className="lightbox-image"
              onClick={(e) => e.stopPropagation()}
            />
            {activeProject?.images?.length > 1 && (
              <p className="lightbox-counter">
                {galleryIndex + 1} of {activeProject.images.length}
              </p>
            )}
          </div>,
          document.body
        )}
    </section>
  );
}

export default Projects;