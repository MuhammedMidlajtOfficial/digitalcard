import React from "react";
import exp1 from "../../Assets/image/feature/feature-exp-1.svg";
import exp3 from "../../Assets/image/feature/feature-exp-3.svg";
import exp2 from "../../Assets/image/feature/feature-exp-2.svg";
import exp4 from "../../Assets/image/feature/feature-exp-4.svg";
import { FaPlay } from "react-icons/fa6";

const FeatureDiskussExp = () => {
  const features = [
    {
      title: "Multi-User Profiles",
      description:
        "Ideal for professionals who wear multiple hats or manage several businesses, Diskuss allows you to create and manage multiple profiles under one account, each with its own unique business card.",
      image: exp1,
    },
    {
      title: "Geolocation Tagging",
      description:
        "Know where your business cards are making an impact with geolocation tagging. Track where your cards are being shared and viewed, giving you insights into your networking reach.",
      image: exp2,
    },
    {
      title: "Referral Program",
      description:
        "Diskuss rewards you for spreading the word. Refer new users to Diskuss and earn rewards or discounts on your subscription.",
      image: exp3,
    },
    {
      title: "Virtual Meeting Integration",
      description:
        "Integrate Diskuss with your preferred virtual meeting tools like Zoom, Google Meet, or Microsoft Teams, allowing you to schedule, join, and manage meetings directly from within the app.",
      image: exp4,
      video: true,
    },
  ];

  return (
    <div className="feature-dis-exp-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4">
            <h1>Explore Diskuss Features</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore
            </p>
            <div className="buttons">
              <button className="get-start">Get Start</button>
              <button className="book-demo">Book Demo →</button>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="feature-grid-exp">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`feature-card-exp ${
                    feature.video ? "video-card" : ""
                  }`}
                >
                  <div className="feature-image-exp">
                    <img src={feature.image} alt={feature.title} />
                    {feature.video && (
                      <div className="play-button">
                        <FaPlay />
                      </div>
                    )}
                  </div>
                  <div
                    className={`feature-content-exp ${
                      feature.video ? "video-content" : ""
                    }`}
                  >
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureDiskussExp;
