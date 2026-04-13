import React from "react";

function Header() {
  const goToTop = () => {
    const section = document.getElementById("top");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

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
    <header className="header">
      <button type="button" className="header-logo-btn" onClick={goToTop}>
        Martin Donev
      </button>

      <nav>
        <ul className="nav-links">
          <li>
            <button type="button" className="nav-btn" onClick={goToProjects}>
              Projects
            </button>
          </li>
          <li>
            <button type="button" className="nav-btn" onClick={goToContact}>
              Contact
            </button>
          </li>
          <li>
            <button type="button" className="nav-btn" onClick={openGitHub}>
              GitHub
            </button>
          </li>
          <li>
            <button type="button" className="nav-btn" onClick={openLinkedIn}>
              LinkedIn
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;