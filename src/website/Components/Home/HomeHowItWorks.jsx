import React, { useState } from "react";
import image1 from "../../Assets/image/home/howitworks1.svg"
import image2 from "../../Assets/image/home/howitworks2.svg"
import image3 from "../../Assets/image/home/howitworks3.svg"
import image4 from "../../Assets/image/home/howitworks4.svg"

const cardsData = [
  { id: 1, title: "Download Diskuss app", subtext: "Download the Diskuss app", videoSrc: "video1.mp4",bgImage:image1 },
  { id: 2, title: "Sign Up", subtext: "Sign up and provide essential details", videoSrc: "video2.mp4",bgImage:image3 },
  { id: 3, title: "Choose Type", subtext: " Choose your user type – Individual or Enterprise", videoSrc: "video3.mp4",bgImage:image2  },
  { id: 4, title: "Start Trail", subtext: "Start your trial and begin sharing contacts with ease", videoSrc: "video4.mp4",bgImage:image4  }
];

const HowItWorks = () => {
  const [hoveredCard, setHoveredCard] = useState("");

  return (
    <div className="how-it-works-container">
      <div className="container">
        <div className="row">
        <div className="col-lg-4">
        <div className="how-it-works-info">
        <h2>How It Works</h2>
        <h3>A Simple Start to Seamless Networking</h3>
        <p>From setup to connecting, we simplify the process, letting you focus on growing your network.</p>
      </div>
        </div>
      <div className="col-lg-8">
      <div className="how-it-works-cards-container">
        {cardsData.map((card, index) => (
          <div
            key={card.id}
            className={`work-card ${hoveredCard === index ? "expanded" : ""}`}
            style={{
              backgroundImage: `url(${card.bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              padding:"0 15px"
            }}
            
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
             <div className="work-card-video">
              {/* <video src={card.videoSrc} muted loop />
              <div className="work-play-button">▶</div> */}
            </div>
            {/* <h4 className="work-card-title">{card.title}</h4>
            <p className={`work-card-subtext ${hoveredCard === index ? "visible" : ""}`}>{card.subtext}</p> */}
          </div>
        ))}
      </div>
      </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
