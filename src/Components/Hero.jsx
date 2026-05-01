import React from "react";
import myImage from "../assets/Image.jpeg";  

const Hero = () => {
  return (
       <section className=" text-white d-flex align-items-center" style={{ minHeight: "90vh" }}>       <div className="container p-5">
        <div className="row align-items-center">
          
          {/* Left Content */}
          <div className="col-lg-6 text-center text-lg-start">
            <h1 className="fw-bold display-4">
              Hi, I'm <span className="text-success">Prince Gupta</span>
            </h1>

            <h3 className="my-3">
              I am a <span className="text-success">Full Stack Developer</span>
            </h3>

            <p className="text-secondary">
              I build modern, responsive, and high-performance web applications.
            </p>

            <div className="mt-4">
              <a href="#projects" className="btn btn-success me-3 btn-animate">
                View Project 
              </a>

                <a
                 href="mailto:princegupta200504@gmail.com"
               className="btn btn-outline-success btn-animate ms-3"
                >
  Let's Talk
</a>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-lg-6 text-center mt-5 mt-lg-0">
            <img
              src={myImage}
              alt="developer"
              className="img-fluid hero-img"
              style={{ maxWidth: "400px" }}
            />
          </div>


         


        </div>
      </div>
    </section>
  );
};

export default Hero;