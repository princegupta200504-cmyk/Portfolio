import React from "react";
import myImage from  "../assets/image2.png.jpeg";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-card">
          <div className="row align-items-center g-5">

            {/* Image */}
            <div className="col-lg-4 text-center">
              <img
                src={myImage}
                alt="profile"
                className="about-img img-fluid"
              />
            </div>

            {/* Content */}
            <div className="col-lg-8">
              <h2 className="fw-bold mb-3 text-white">
                About <span className="text-success">Me</span>
              </h2>

              <p className="text-light-custom">
                I am a Computer Science undergraduate and a full-stack developer
                dedicated to building scalable, efficient, and user-focused web applications.
              </p>

              <p className="text-light-custom">
                With hands-on experience in the MERN stack (React, Node.js, and MongoDB),
                I focus on writing clean, maintainable code to deliver high-quality digital solutions.
              </p>

              {/* Skills */}
              <div className="mt-4">

                <h6 className="section-title">Languages</h6>
                <p className="text-light-custom">Java, JavaScript, SQL, HTML, CSS</p>

                <h6 className="section-title">Technologies</h6>
                <p className="text-light-custom">React.js, Node.js, Express.js, MongoDB, MVC</p>

                <h6 className="section-title">Tools</h6>
                <p className="text-light-custom">
                  VS Code, Git, GitHub, Postman, MongoDB Atlas
                </p>

                <h6 className="section-title">Core Skills</h6>
                <p className="text-light-custom">
                  Problem Solving, Debugging
                </p>

              </div>

              {/* Button */}
              <div className="mt-4">
              <a
                 href= "\Prince Gupta Resume  (1).pdf"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="btn btn-outline-success" >
                Download Resume
                </a>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;