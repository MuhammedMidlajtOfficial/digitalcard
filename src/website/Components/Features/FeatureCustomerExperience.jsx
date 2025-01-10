import React from "react";
import image1 from "../../Assets/image/feature/featureCustomerExp.svg";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { FaCheck, FaShield } from "react-icons/fa6";
import { FiLayers } from "react-icons/fi";
import { MdAccessTimeFilled } from "react-icons/md";
import ScrollAnimation from "../../../ScrollAnimation";
export const FeatureCustomerExperience = () => {
  return (
    <div className="features-customer-experience-section">
      <div className="container-lg-fluid p-lg-4">
        <div className="row align-items-center">
          <div animationClass="animate__fadeInRight" className="col-lg-4">
            <div className="features-customer-experience">
              <img src={image1} alt="" />
            </div>
          </div>
          <ScrollAnimation className="col-lg-8" animationClass="animate__fadeInUp">
            <div className="features-customer-tag">
              <AiOutlineThunderbolt />
              Benefits
            </div>
            <h2>Seamless Customer Experience</h2>

            <div className="row">
              <div className="col-lg-6 mt-4">
                <div className="feature-seamless-cards">
                  <div className="feature-seamless-icon mb-2">
                    <FaCheck />
                  </div>
                  <h5>Data driven results</h5>
                  <p>
                    Turn data into actionable insights. With complete visibility
                    across the payment process journey, drive enhanced approval
                    rates and revenues for rapid performance monitoring.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 mt-4">
                <div className="feature-seamless-cards">
                  <div className="feature-seamless-icon mb-2">
                  <FiLayers />
                  </div>
                  <h5>Compliance management</h5>
                  <p>
                    Centrally managed compliance and authentication
                    requirements, freeing up your valuable time and resources to
                    focus on the important stuff.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 mt-4">
                <div className="feature-seamless-cards">
                  <div className="feature-seamless-icon mb-2">
                  <MdAccessTimeFilled />
                  </div>
                  <h5>Scalable & customizable</h5>
                  <p>
                    Opt for a hosted checkout solution or integrate directly to
                    the various payment providers available, giving your brand
                    pride of place.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 mt-4">
                <div className="feature-seamless-cards">
                  <div className="feature-seamless-icon mb-2">
                  <FaShield />

                  </div>
                  <h5>Rigorously Protected</h5>
                  <p>
                    PCI DSS Level 1 Certification, full PSD2 compliance,
                    encrypted transactions, and best practice technical and
                    operational standards.
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
};
