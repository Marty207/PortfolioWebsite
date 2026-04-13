import React from "react";

function Hero() {
  const goToProjects = () => {
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const goToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openGitHub = () => {
    window.open("https://github.com/Marty207", "_blank", "noopener,noreferrer");
  };

  const openLinkedIn = () => {
    window.open(
      "https://www.linkedin.com/in/martin-donev-213377349/",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section id="top" className="hero">
      <div className="hero-bg">
        <img src="/coding.gif" alt="Coding background" className="hero-bg-image" />
        <div className="hero-bg-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="hero-left">
          <p className="hero-tag"></p>

          <h1>Martin Donev</h1>

          <h2>CS Undergraduate @ Illinois State University</h2>

          <p className="hero-description">
          Backend-focused, with a strong interest in working with data and building real-world applications while integrating AI.
          </p>

          <div className="hero-buttons">
            <button type="button" className="primary-btn" onClick={goToProjects}>
              View Projects
            </button>

            <button type="button" className="secondary-btn" onClick={goToContact}>
              Contact
            </button>
          </div>

          <div className="hero-socials">
            <button type="button" className="hero-link-btn" onClick={openGitHub}>
              GitHub ↗
            </button>

            <button type="button" className="hero-link-btn" onClick={openLinkedIn}>
              LinkedIn ↗
            </button>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-image-shell">
            <img
              src="/martin-headshot.jpg"
              alt="Martin Donev"
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;