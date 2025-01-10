import React from "react";
import who from "../../Assets/image/about/aboutus-image.svg";
import ScrollAnimation from "../../../ScrollAnimation";

const AboutWhoWeAre = () => {
  return (
    <div className="about-who-we-are-section">
      <div className="container">
        <div className="row align-items-center">
          <ScrollAnimation animationClass="animate__fadeInUp" className="col-lg-5">
            <div className="content">
              <h1>About Diskuss</h1>
              <p>
              Diskuss was created with a single purpose: to revolutionize business contact management. In a world moving beyond physical exchanges, Diskuss offers a smart, digital solution to manage your contacts seamlessly, providing real-time insights, instant sharing, and enhanced privacy to keep you connected efficiently."
              </p>
             
            </div>
          </ScrollAnimation>
          <ScrollAnimation animationClass="animate__fadeInUp" className="col-lg-7">
            <div className="image-container">
              <div className="image-wrapper">
                <img
                  src={who}
                  alt="Business professionals collaborating"
                />
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
};

export default AboutWhoWeAre;
