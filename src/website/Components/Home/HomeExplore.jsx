import React from "react";
import explore1 from "../../Assets/image/home/explore-1.svg";
import explore2 from "../../Assets/image/home/explore-2.svg";
import explore3 from "../../Assets/image/home/explore-3.svg";
import ScrollAnimation from "../../../ScrollAnimation";

const HomeExplore = () => {
  return (
    <div className="home-explore">
      <div className="container">
        <ScrollAnimation animationClass="animate__fadeInDown">
          <h2>Explore a broad array of Corporate Solutions.</h2>
          <p className="subtitle">
            Flexible solutions for contemporary corporate challenges.
          </p>
        </ScrollAnimation>
        <div className="solutions-grid">
          <div className="solution-card">
            <img src={explore1} alt="Smart Contact Management" />
            <h3>Smart Contact Management</h3>
            <p>
              Organize your contacts with tags, notes, and easy search
              functions.
            </p>
          </div>

          <div className="solution-card">
            <img src={explore2} alt="Instant Networking" />
            <h3>Instant Networking</h3>
            <p>
              Exchange contact details with a tap, scan, or share via QR code.
            </p>
          </div>

          <div className="solution-card">
            <img src={explore3} alt="Powerful Integrations" />
            <h3>Powerful Integrations</h3>
            <p>
              Connect Diskuss with your CRM, email, and other tools to
              supercharge your workflow.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeExplore;
