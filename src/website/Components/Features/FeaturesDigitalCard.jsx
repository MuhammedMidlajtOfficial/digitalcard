import React from "react";
import image1 from "../../Assets/image/feature/feature-digital-card.png";
import image2 from "../../Assets/image/feature/feature-share-analytics.svg"
import ScrollAnimation from "../../../ScrollAnimation";
export const FeaturesDigitalCard = () => {
  return (
    <div className="about-who-we-are-section">
      <div className="container">
        <div className="row align-items-center">
        <ScrollAnimation
            animationClass="animate__fadeInUp"
            className="col-lg-4"
          >
          {/* <div className="col-lg-4"> */}
            <div className="features-image-container">
              <img src={image1} alt="Business professionals collaborating" />
            </div>
          {/* </div> */}
          </ScrollAnimation>
          <ScrollAnimation
            animationClass="animate__fadeInDown"
            className=" col-lg-8"
          >
            <div className="content p-5 mt-4">
              <h1>Personalized tools for independent professionals</h1>
              <ul>
                <li>Unlimited contact storage</li>
                <li>Digital business cards</li>
                <li>Custom reminders</li>
                <li>Analytics</li>
              </ul>
              <p>Stay organized, share contacts effortlessly, and manage your professional relationships with ease.</p>
            </div>
          </ScrollAnimation>
        </div>
        <div className="row align-items-center mt-4">
        <ScrollAnimation
            animationClass="animate__fadeInDown"
            className=" col-lg-7"
          >
            <div className="content p-5">
              <h1>Enhanced tools for team collaboration and management.</h1>
              <p>
              KC (Know Connections) supports businesses by providing tools to manage team contacts, track engagement, and collaborate effectively. From customizable business card designs to role-based access and automated marketing, KC (Know Connections) makes team management smooth and efficient.
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animationClass="animate__fadeInUp"
            className="col-lg-5"
          >
            <div className="features-image-container">
              <img src={image2} alt="Business professionals collaborating" />
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
};
