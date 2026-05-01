import React from "react";

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="text-center fw-bold mb-5 text-white">
          <span className="text-success">Education</span>
        </h2>

        <div className="education-card">
          <div className="row">

            {/* Item 1 */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="edu-item">
                <h5 className="text-success">
                  B.Tech in Computer Science & Engineering
                </h5>
                <p className="text-light-custom mb-1">
                  Institute of Technology & Management (ITM), <br />
                  RGPV Affiliated, Gwalior, MP
                </p>
                <span className="edu-year">2023 - 2027</span>
              </div>
            </div>

            {/* Item 2 */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="edu-item">
                <h5 className="text-success">Higher Secondary (12th)</h5>
                <p className="text-light-custom mb-1">
                  Green Field Hr Sec School
                </p>
                <span className="edu-year">2023</span>
              </div>
            </div>

            {/* Item 3 */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="edu-item">
                <h5 className="text-success">Secondary (10th)</h5>
                <p className="text-light-custom mb-1">
                  Green Field Hr Sec School
                </p>
                <span className="edu-year">2021</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;