import React, { useState } from "react";
import individual from "../../Assets/image/pricing/pricing-keybenefits.png";
import enterprise from "../../Assets/image/pricing/pricing-keybenefits.png";
import ScrollAnimation from "../../../ScrollAnimation";
import { FaCheckCircle } from "react-icons/fa";

const PricingBenefits = () => {
  const [selectedView, setSelectedView] = useState("individual");

  return (
    <div className="pricing-benefits-section">
      <div className="container">
        <ScrollAnimation animationClass="animate__fadeInDown">
          <center>
            <h2 className="benefits-title-tag">Key benefits</h2>
            <p className="subtitle">Benefits tailored for individual professionals and enterprises alike. 
            </p>
          </center>

          <div className="price-button-group">
            <button
              className={`price-explore-button ${
                selectedView === "individual" ? "active" : ""
              }`}
              onClick={() => setSelectedView("individual")}
            >
              Individual
            </button>
            <button
              className={`price-learn-more-btn ${
                selectedView === "enterprise" ? "active" : ""
              }`}
              onClick={() => setSelectedView("enterprise")}
            >
              Enterprise
            </button>
          </div>
        </ScrollAnimation>

        {selectedView === "individual" ? (
          <div className="row align-items-center price-benefits-bg justify-content-center mt-5">
            <ScrollAnimation animationClass="animate__fadeInDown" className="col-lg-6">
              <div className="benefits-content">
                <h2>Key Benefits for Individuals</h2>
                <hr className="price-line" />
                <ul className="benefits-list">
                  <li><FaCheckCircle /> Efficient contact storage.</li>
                  <li><FaCheckCircle /> Intuitive card design options.</li>
                  <li><FaCheckCircle /> Analytics on contact engagement.</li>
                  <li><FaCheckCircle /> Easy sharing with customizable formats.</li>
                </ul>
                <button className="get-started-benefit-btn">Get Started</button>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animationClass="animate__fadeInUp" className="col-lg-6">
              <div className="pricing-benefits-images">
                <img
                  src={individual}
                  alt="Individual Benefits"
                  className="projects-image"
                />
              </div>
            </ScrollAnimation>
          </div>
        ) : (
          <div className="row align-items-center price-benefits-bg justify-content-center mt-5">
            <ScrollAnimation animationClass="animate__fadeInDown" className="col-lg-6">
              <div className="pricing-benefits-images">
                <img
                  src={enterprise}
                  alt="Enterprise Benefits"
                  className="projects-image"
                />
              </div>
            </ScrollAnimation>
            <ScrollAnimation animationClass="animate__fadeInUp" className="col-lg-6">
              <div className="benefits-content">
                <h2>Key Benefits for Enterprise</h2>
                <hr />
                <ul className="benefits-list">
                  <li><FaCheckCircle /> Centralized team contact management.</li>
                  <li><FaCheckCircle /> Detailed analytics for team contacts.</li>
                  <li><FaCheckCircle /> Role-based access for enhanced security.</li>
                  <li><FaCheckCircle /> Scalable solutions for large teams.</li>
                </ul>
                <button className="get-started-benefit-btn">Learn More</button>
              </div>
            </ScrollAnimation>
          </div>
        )}
      </div>
    </div>
  );
};

export default PricingBenefits;
