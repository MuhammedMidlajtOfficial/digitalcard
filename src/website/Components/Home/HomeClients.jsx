import React from "react";
import client1 from "../../Assets/image/home/Clients/b2b.svg";
import client2 from "../../Assets/image/home/Clients/b2b.svg";
import client3 from "../../Assets/image/home/Clients/b2b.svg";
import client4 from "../../Assets/image/home/Clients/b2b.svg";
import client5 from "../../Assets/image/home/Clients/b2b.svg";
import client6 from "../../Assets/image/home/Clients/b2b.svg";
import ScrollAnimation from "../../../ScrollAnimation";

const HomeClients = () => {
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
          {/* <h2>Trusted by Leading Businesses</h2>
          <p>
            Join the growing list of companies that trust KC (Know Connections) for their
            contact management needs.
          </p> */}
        </ScrollAnimation>
        <div className="marquee-container">
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

export default HomeClients;
