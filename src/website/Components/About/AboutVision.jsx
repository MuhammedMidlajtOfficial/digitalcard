import React from "react";
import vision from "../../Assets/image/about/about-vision.svg";
import rocket from "../../Assets/image/about/icon/rocket.png";
import bulb from "../../Assets/image/about/icon/bulb.png";
import degree from "../../Assets/image/about/icon/360degrees.png";
import ScrollAnimation from "../../../ScrollAnimation";

const AboutVision = () => {
  return (
    <>
      <div className="about-vision-section">
        <div className="container">
          <div className="row">
            <div className="about-features-section">
              <div className="about-stat-item">
                <ScrollAnimation animationClass="animate__fadeInDown" className="d-flex gap-4">
                  <div className="about-features-icons">
                    <img src={rocket} alt="" />
                  </div>
                  <div>
                    <h2> Innovative Networking Solutions</h2>
                    <p>
                    Transforming professional networking for a digital-first world to enhance Connections.
                    </p>
                  </div>
                </ScrollAnimation>
                <div className="about-vertical-line"></div>
              </div>
              <div className="about-stat-item">
              <ScrollAnimation animationClass="animate__fadeInUp" className="d-flex gap-4">
                  <div className="about-features-icons">
                    <img src={bulb} alt="" />
                  </div>
                  <div>
                    <h2>Empowering Connections</h2>
                    <p>
                    Enabling professionals to forge meaningful connections through simplified contact management.
                    </p>
                  </div>
                </ScrollAnimation>
                <div className="about-vertical-line"></div>
              </div>
              <div className="about-stat-item">
              <ScrollAnimation animationClass="animate__fadeInUp" className="d-flex gap-4">
                  <div className="about-features-icons">
                    <img src={degree} alt="" />
                  </div>
                  <div>
                    <h2>Comprehensive Control</h2>
                    <p>
                    Prioritizing integrity and security while ensuring user-friendly network control.
                    </p>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
          <div className="row align-items-center mt-5">
              <ScrollAnimation animationClass="animate__fadeInDown"  className="col-lg-6">
              <div className="about-vision-img">
                <img src={vision} alt="vision-img" />
              </div>
            </ScrollAnimation>
              <ScrollAnimation animationClass="animate__fadeInUp"  className="col-lg-6">
              <div className="about-content-section">
                <div className="about-vision-content">
                  <h3>Vision</h3>
                  <p>
                  To reshape the professional networking experience for a digital-first world.
                  </p>
                </div>
                <div className="about-mission-content">
                  <h3>Mission</h3>
                  <p>
                  Empowering professionals to create meaningful connections by simplifying contact management and enhancing business collaboration.
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutVision;
