import React from "react";
import explore1 from "../../Assets/image/feature/feature-explore.svg";
import explore2 from "../../Assets/image/feature/feature-explore-2.svg";
import explore3 from "../../Assets/image/feature/feature-explore-3.svg";

const FeatureExplore = () => {
  const features = [
    {
      title: "Intelligent Notifications",
      description: (
        <>
          Lorem ipsum dolor sit amet, <br /> consectetur
        </>
      ),
      content: (
        <div className="feature-img-explore">
          <img src={explore1} alt="explore-1" />
        </div>
      ),
    },
    {
      title: "Schedule a meeting",
      description: (
        <>
          Lorem ipsum dolor sit amet, <br /> consectetur
        </>
      ),
      content: (
        <div className="feature-img-explore">
          <img src={explore2} alt="explore-1" />
        </div>
      ),
    },
    {
      title: "Add Contact",
      description: (
        <>
          Lorem ipsum dolor sit amet, <br /> consectetur
        </>
      ),
      content: (
        <div className="feature-img-explore">
          <img src={explore3} alt="explore-1" />
        </div>
      ),
    },
  ];

  return (
    <div className="features-explore-section">
      <div className="container">
        <h2>Explore Diskuss Features</h2>
        <p className="subtitles">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore
        </p>
        <div className="features-grid-explore">
          {features.map((feature, index) => (
            <div key={index} className="feature-card-explore">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
                <div className="arrow-template">
                  <span className="arrow-icon">↗</span>
                </div>
              </div>
              <div className="feature-content">{feature.content}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureExplore;
