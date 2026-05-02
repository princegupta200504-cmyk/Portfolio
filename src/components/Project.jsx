import React from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="text-center fw-bold mb-5 text-white">
          My <span className="text-success">Projects</span>
        </h2>

        <div className="row">

          {/* Project 1 */}
          <div className="col-lg-6 mb-4">
            <div className="project-card">

              <img
                src={project1}
                alt="project"
                className="project-img img-fluid"
              />

              <h5 className="text-success mt-3">WanderLust – Travel & Hotel Booking Platform</h5>
<div className="text-light-custom">
  <p className="lead fw-bold">
       Built a full-stack travel and hotel booking platform that allows users to explore destinations and book accommodations, while enabling property owners to manage listings efficiently.
  </p>
  
  <ul className="text-start">
    <li> Built a responsive booking platform with dynamic property listings</li>
    <li> Enabled scalable onboarding for hotels and resorts</li>
   <li> Designed backend using MVC architecture for maintainability</li>
    <li> Working on authentication and complete booking workflows</li>
  </ul>
</div>

              <div className="mb-3">
                <span className="badge bg-success me-2">Express.js</span>
                <span className="badge bg-success me-2">Node.js</span>
                <span className="badge bg-success me-2">MongoDB</span>
                <span className="badge bg-success me-2">MVC</span>
                <span className="badge bg-success me-2">Bootstrap</span>
                <span className="badge bg-success me-2">HTML & CSS </span>


              </div>

              <a href="https://wanderlust-o3qd.onrender.com" className="btn btn-outline-success me-2">
                Live
              </a>
             
            </div>
          </div>

          {/* Project 2 */}
          <div className="col-lg-6 mb-4">
            <div className="project-card">

              <img
                src={project2}
                alt="project"
                className="project-img img-fluid"
              />

              <h5 className="text-success mt-3">Stock-Viewer ( Zerodha Clone )</h5>

              <div className="text-light-custom">
  <p className="lead fw-bold">
    A high-performance full-stack fintech platform replicating real-time trading and portfolio management.
  </p>
  
  <ul className="text-start">
    <li><strong>Real-time Trading:</strong> Implemented live stock monitoring with dynamic data updates.</li>
    <li><strong>Portfolio Management:</strong> Built an intuitive dashboard for users to track investments efficiently.</li>
    <li><strong>Scalable Backend:</strong> Architected robust APIs for secure and fast trade execution.</li>
    <li><strong>Optimized UI/UX:</strong> Delivered a seamless, responsive experience using React and Bootstrap.</li>
  </ul>
</div>

              <div className="mb-3">
                <span className="badge bg-success me-2">React</span>
                <span className="badge bg-success me-2">Bootstrap</span>
                <span className="badge bg-success me-2">Node.js</span>
                <span className="badge bg-success me-2">Express.js</span>
                <span className="badge bg-success me-2">MongoDB</span>

              </div>

              <a href="https://stock-viewer-2uhw.vercel.app/" className="btn btn-outline-success me-2">
                Live
              </a>
             
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;