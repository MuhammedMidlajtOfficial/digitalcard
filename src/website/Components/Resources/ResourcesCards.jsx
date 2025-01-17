import React from "react";
import card from "../../Assets/image/resources/card.svg";
import card1 from "../../Assets/image/resources/card1.svg";
import card2 from "../../Assets/image/resources/card2.svg";
import card3 from "../../Assets/image/resources/card3.svg";
import card4 from "../../Assets/image/resources/card4.svg";
import card5 from "../../Assets/image/resources/card5.svg";
import card6 from "../../Assets/image/resources/card6.svg";
import card7 from "../../Assets/image/resources/card7.svg";
import card8 from "../../Assets/image/resources/card8.svg";
import vector from "../../Assets/image/resources/vector.svg";
import ScrollAnimation from "../../../ScrollAnimation"; 

const ResourcesCards = () => {
  const cardData = [
    { id: 1, name: "Navneethan G", expiry: "01/25", bgImage: card },
    { id: 2, name: "Kiran B", expiry: "01/25", bgImage: card1 },
    { id: 3, name: "Siddu M", expiry: "01/25", bgImage: card2 },
    { id: 4, name: "Prathep R", expiry: "01/25", bgImage: card3 },
    { id: 5, name: "Charan C", expiry: "01/25", bgImage: card4 },
    { id: 6, name: "Madhu Gowda", expiry: "01/25", bgImage: card5 },
    { id: 7, name: "Tharun Gowda", expiry: "01/25", bgImage: card6 },
    { id: 8, name: "Bahanu Gowda", expiry: "01/25", bgImage: card7 },
    { id: 9, name: "Sonu Gowda", expiry: "01/25", bgImage: card8 },
  ];

  return (
    <div className="resources-banner">
      <div className="pricing-banner-section"></div>
      <div className="resources-banner-section">
        <div className="container">
          <ScrollAnimation animationClass="animate__fadeInDown">
            <h2>Cards Management</h2>
            <p className="subtitle">Connecting Businesses, Empowering Success.</p>
          </ScrollAnimation>
        </div>
      </div>
      <div className="container">
        <div className="row my-5">
          {cardData.map((cardInfo, index) => (
            <ScrollAnimation
              animationClass={index % 2 === 0 ? "animate__fadeInUp" : "animate__fadeInDown"}
              className="col-lg-4 mb-4"
              key={cardInfo.id}
            >
              <div className="resources-card-img" style={{ backgroundImage: `url(${cardInfo.bgImage})` }}>
                <div className="card-content">
                  <div className="d-flex justify-content-between mb-4">
                    <h1>Diskuss</h1>
                    <img src={vector} className="resources-card-icon" alt="" />
                  </div>
                  <h2>Levon Technologies</h2>
                  <div className="d-flex gap-4 mt-4">
                    <div>
                      <p>Card Holder name</p>
                      <h4>{cardInfo.name}</h4>
                    </div>
                    <div>
                      <p>Expiry date</p>
                      <h4>{cardInfo.expiry}</h4>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="d-flex justify-content-center">
                <button className="resources-edit">
                  Edit
                  <IoMdArrowRoundForward />
                </button>
              </div> */}
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourcesCards;
