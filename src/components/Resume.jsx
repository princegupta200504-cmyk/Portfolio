import React from "react";

const Resume = () => {
  return (
    <section id="resume" className="resume-section">
      <div className="container text-center">
        
        <div className="resume-card">
          <h2 className="text-white fw-bold mb-3">
            My <span className="text-success">Resume</span>
          </h2>

          <p className="text-light-custom">
            Download my resume to know more about my skills, experience, and projects.
          </p>

          <a
            href="\Prince Gupta Resume  (1).pdf"
            download
            className="btn btn-success mt-3 px-4"
          >
            Download Resume
          </a>
        </div>

      </div>
    </section>
  );
};

export default Resume;