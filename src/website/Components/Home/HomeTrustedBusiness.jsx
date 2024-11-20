import React from "react";
import client1 from "../../Assets/image/home/Clients/client-1.png";
import client2 from "../../Assets/image/home/Clients/client-2.png";
import client3 from "../../Assets/image/home/Clients/client-3.png";
import client4 from "../../Assets/image/home/Clients/client-4.png";
import client5 from "../../Assets/image/home/Clients/client-5.png";
import client6 from "../../Assets/image/home/Clients/client-6.png";
import ScrollAnimation from "../../../ScrollAnimation";

const HomeTrustedBusiness = () => {
  const items = [
    { label: "Tech Mahindra", picture: client1 },
    { label: "MakeMyTrip", picture: client2 },
    { label: "NxtGen", picture: client3 },
    { label: "Tata Md", picture: client4 },
    { label: "Rahela Universal", picture: client5 },
    { label: "P&G", picture: client6 },
    { label: "Tech Mahindra", picture: client1 },
    { label: "MakeMyTrip", picture: client2 },
    { label: "NxtGen", picture: client3 },
    { label: "Tata Md", picture: client4 },
    { label: "Rahela Universal", picture: client5 },
    { label: "P&G", picture: client6 },
    { label: "Tech Mahindra", picture: client1 },
    { label: "MakeMyTrip", picture: client2 },
    { label: "NxtGen", picture: client3 },
    { label: "Tata Md", picture: client4 },
    { label: "Rahela Universal", picture: client5 },
    { label: "P&G", picture: client6 },
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
            Join the growing list of companies that trust Diskuss for their
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
