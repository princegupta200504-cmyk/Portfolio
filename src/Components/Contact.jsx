import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">

        <h2 className="text-center fw-bold mb-5 text-white">
          Contact <span className="text-success">Me</span>
        </h2>

        <div className="contact-card">

          <div className="row text-center g-4">

            {/* LinkedIn */}
            <div className="col-lg-4">
              <div className="contact-box">
                <h5 className="text-success">LinkedIn</h5>
                <p className="text-light-custom">
                  Connect with me professionally
                </p>
                <a
                  href="https://www.linkedin.com/in/princegupta04/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-success"
                >
                  Visit Profile
                </a>
              </div>
            </div>

            {/* GitHub */}
            <div className="col-lg-4">
              <div className="contact-box">
                <h5 className="text-success">GitHub</h5>
                <p className="text-light-custom">
                  Check my projects & code
                </p>
                <a
                  href="https://github.com/princegupta200504-cmyk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-success"
                >
                  Visit Profile
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="col-lg-4">
              <div className="contact-box">
                <h5 className="text-success">Email</h5>
                <p className="text-light-custom">
                  Let's talk via email
                </p>
                <a
                 href="mailto:princegupta200504@gmail.com"
                  className="btn btn-outline-success"
                >
                  Send Email
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;