import React from "react";

function Contact() {
  const openLinkedIn = () => {
    window.open(
      "https://www.linkedin.com/in/martin-donev-213377349/",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const openGitHub = () => {
    window.open("https://github.com/Marty207", "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-big-card">
        <p className="contact-label">Contact</p>

        <h2 className="contact-title">Let’s Connect</h2>

        <p className="contact-info"><strong>Email:</strong> donev.martin@yahoo.com</p>
        <p className="contact-info"><strong>Mobile:</strong> 224-535-0836</p>
        <p className="contact-info"><strong>Location:</strong> Chicago, IL</p>

        <div className="contact-links">
          <a href="mailto:donev.martin@yahoo.com" className="contact-main-btn">
            Email Me
          </a>

          <button
            type="button"
            className="contact-secondary-btn"
            onClick={openLinkedIn}
          >
            LinkedIn
          </button>

          <button
            type="button"
            className="contact-secondary-btn"
            onClick={openGitHub}
          >
            GitHub
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact;