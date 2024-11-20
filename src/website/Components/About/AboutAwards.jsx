import React from "react";
import award1 from "../../Assets/image/about/award/award-1.svg";
import award2 from "../../Assets/image/about/award/award-2.svg";
import award3 from "../../Assets/image/about/award/award-3.svg";
import award4 from "../../Assets/image/about/award/award-4.svg";
import award5 from "../../Assets/image/about/award/award-5.svg";
import award6 from "../../Assets/image/about/award/award-6.svg";
import ScrollAnimation from "../../../ScrollAnimation";

const awards = [
  {
    id: 1,
    imgSrc: award1,
    altText: "Clutch Top Web Designers 2021",
  },
  {
    id: 2,
    imgSrc: award2,
    altText: "Clutch Top Digital Marketing 2021",
  },
  {
    id: 3,
    imgSrc: award3,
    altText: "DesignRush Accredited Agency",
  },
  {
    id: 4,
    imgSrc: award4,
    altText: "UpCity Best of Ontario 2022",
  },
  {
    id: 5,
    imgSrc: award5,
    altText: "Top Web Design Companies 2022",
  },
  {
    id: 6,
    imgSrc: award6,
    altText: "Top Choice Award 2022",
  },
];

const AboutAwards = () => {
  return (
    <div className="about-awards-section">
      <div className="container">
        <div className="award-card">
          <center>
            <h2>Awards</h2>
            <p>
              We’re honored by awards recognizing our commitment to innovation,
              excellence, and top service{" "}
            </p>
          </center>

          <ScrollAnimation animationClass="animate__fadeInUp" className="awards-container">
            {awards.map((award) => (
              <div className="award-item" key={award.id}>
                <img
                  src={award.imgSrc}
                  alt={award.altText}
                  className="award-image img-fluid"
                />
              </div>
            ))}
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
};

export default AboutAwards;
