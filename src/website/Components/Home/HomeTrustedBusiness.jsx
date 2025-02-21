import React from "react";
import client1 from "../../Assets/image/home/Clients/levon.svg";
import client2 from "../../Assets/image/home/Clients/b2b.svg";

import ScrollAnimation from "../../../ScrollAnimation";

const HomeTrustedBusiness = () => {
  const items = [
    { label: "Levon Techo", picture: client1 },
    { label: "B2BCert", picture: client2 },

  ];

  return (
    <>
      <div className="client-container">
        <ScrollAnimation
          animationClass="animate__fadeInDown"
          className="client-title"
        >
          <h2>Trusted by Leading Businesses</h2>
          <p>
            Join the growing list of companies that trust KC (Know Connections) for their
            contact management needs.
          </p>
        </ScrollAnimation>
        <div className="marquee-container mt-4">
          {items.map((item, index) => (
            <div key={index} className="marquee">
              <img src={item.picture} alt={item.label} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeTrustedBusiness;
