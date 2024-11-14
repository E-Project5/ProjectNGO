import React from "react";

const Program = () => {
  return (
    <main>
      {/* Hero Start */}
      <div className="slider-area2">
        <div className="slider-height2 d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="hero-cap hero-cap2 pt-20 text-center">
                  <h2>latest causes</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Hero End */}

      {/* Our Cases Start */}
      <div className="our-cases-area section-padding30">
        <div className="container">
          <div className="row">
            {["case1.png", "case2.png", "case3.png"].map((img, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-cases mb-40">
                  <div className="cases-img">
                    <img src={`assets/img/gallery/${img}`} alt="" />
                  </div>
                  <div className="cases-caption">
                    <h3>
                      <a href="#">Ensure Education For Every Poor Children</a>
                    </h3>
                    {/* Progress Bar */}
                    <div className="single-skill mb-15">
                      <div className="bar-progress">
                        <div className="barfiller">
                          <div className="tipWrap">
                            <span className="tip"></span>
                          </div>
                          <span
                            className="fill"
                            data-percentage={
                              index === 0 ? "70" : index === 1 ? "25" : "50"
                            }
                          ></span>
                        </div>
                      </div>
                    </div>
                    {/* / progress */}
                    <div className="prices d-flex justify-content-between">
                      <p>
                        Raised:<span> $20,000</span>
                      </p>
                      <p>
                        Goal:<span> $35,000</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Our Cases End */}
    </main>
  );
};

export default Program;
