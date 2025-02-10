import React from "react";
import phoneImage from "../../Assets/image/home/home-about-us2.svg";
import image1 from "../../Assets/image/home/features1.svg";
import image2 from "../../Assets/image/home/features2.svg";
import leftArrow from "../../Assets/image/home/Icons/left-arrow.svg";
import rightArrow from "../../Assets/image/home/Icons/right-arrow.svg";
import {
  FaChartArea,
  FaLock,
  FaMonero,
  FaRankingStar,
  FaSignal,
} from "react-icons/fa6";
import { FaFighterJet } from "react-icons/fa";
import ScrollAnimation from "../../../ScrollAnimation";
import { useNavigate } from "react-router-dom";
const HomeFeatures = () => {
  const navigate = useNavigate();
  const features = [
    {
      icon: <FaFighterJet className="icon" />,
      title: "Smart Contact Organization",
      description: "Easily categorize and find contacts when you need them.",
      className: "primary",
    },
    {
      icon: <FaMonero className="icon" />,
      title: "Instant Sharing",
      description:
        " Share contacts effortlessly via NFC, QR code, or WhatsApp.",
    },
    {
      icon: <FaChartArea className="icon" />,
      title: "Real-time Updates",
      description: "Stay informed with live updates on contact interactions.",
    },
    {
      icon: <FaLock className="icon" />,
      title: "Quick Contact Storage",
      description:
        "Instantly save business contacts for seamless accessibility.",
    },
    {
      icon: <FaSignal className="icon" />,
      title: "Save New Connection Requirements",
      description: "Capture specific details for new contacts.",
    },
    {
      icon: <FaRankingStar className="icon" />,
      title: "Scalability",
      description:
        "Easily scale to meet evolving business needs and project requirements.",
    },
  ];

  return (
    <div className="home-features-section">
      <div className="container">
        <ScrollAnimation animationClass="animate__fadeInDown">
          <h2>Unique Features</h2>
          <p className="subtitles">
            Innovative features tailored for effective business networking.
          </p>

          <div className="row">
            {/* {features.slice(0, 1).map((feature, index) => (
                            <button className={`feature-cards ${feature.className || ''}`} key={index} onClick={()=>navigate('/features')}>
                                <div className="d-flex align-items-center feature-padding">
                                    <div className='feature-KC (Know Connections)-icon me-2' style={{ marginBottom: "0" }}>
                                        {feature.icon}
                                    </div>
                                    <h3>{feature.title}</h3>
                                </div>
                                <div style={{ paddingLeft: "6px" }}>
                                    <span>{feature.description}</span>
                                </div>
                            </button>
                        ))} */}

            <div className="phone-container col-lg-3  align-items-end d-flex justify-content-center ">
              <img
                src={image1}
                alt="KC (Know Connections) App Interface"
                className="phone-image"
              />
              <div className="phone-image-description">
                <div className="d-flex gap-2 align-items-center"><div className="phone-image-desc-icon">
                <FaRankingStar/> 
                </div>
               Unique Themes</div>
                <p>
                Select from a variety of professional templates and customize them to suit your style and needs.
                </p>
              </div>
            </div>
            <div className="phone-container col-lg-6 my-4">
              <img
                src={phoneImage}
                alt="KC (Know Connections) App Interface"
                className="phone-image1"
              />
            </div>
            <div className="phone-container col-lg-3 mb-4 align-items-end d-flex justify-content-center">
              <img
                src={image2}
                alt="KC (Know Connections) App Interface"
                className="phone-image"
              />
              <div className="phone-image-description">
                <div className="d-flex gap-2 align-items-center"><div className="phone-image-desc-icon">
                <FaRankingStar/> 
                </div>
                Chat with Your Connections</div>
                <p>
                Store Business cards of your connections without loosing the feel of a physical business card 

                </p>
              </div>
            </div>
            {/* {features.slice(1).map((feature, index) => (
                            <button className={`feature-cards ${feature.className || ''}`} key={index} onClick={()=>navigate('/features')}>
                                <div className="d-flex align-items-center feature-padding">
                                    <div className='feature-diskuss-icon me-2' style={{ marginBottom: "0" }}>
                                        {feature.icon}
                                    </div>
                                    <h3>{feature.title}</h3>
                                </div>
                                <div style={{ paddingLeft: "6px" }}>
                                    <span>{feature.description}</span>
                                </div>
                            </button>
                        ))} */}
          </div>
        </ScrollAnimation>
      </div>

      <div className="arrow top-right">
        <img src={rightArrow} alt="rightArrow" />
      </div>
      <div className="arrow bottom-left">
        <img src={leftArrow} alt="leftArrow" />
      </div>
    </div>
  );
};

export default HomeFeatures;
