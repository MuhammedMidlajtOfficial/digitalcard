import React from "react";
import homeAbout from "../../Assets/image/home/home-about-us2.svg";
import { FaArrowRight } from "react-icons/fa6";
import about from "../../Assets/image/home/Icons/about.svg";
import ScrollAnimation from "../../../ScrollAnimation";
import { FaLeaf, FaPrint, FaBusinessTime, FaWallet } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
const HomeAboutUs = () => {
  const navigate=useNavigate();
  const stats = [
    {
      icon: <FaLeaf />,
      text: "Save paper and be a Green Hero",
    },
    {
      icon: <FaPrint />,
      text: "No headache of printing and storing cards",
    },
    {
      icon: <FaBusinessTime />,
      text: "Always ready with your digital business card",
    },
    {
      icon: <FaWallet />,
      text: "Spend less, gain more with Diskuss",
    },
  ];

  const description = [
    "Say goodbye to your traditional phone dial pad and make Diskuss your go-to app. Seamlessly manage your calls, streamline contacts, and enhance follow-ups, all in one place. With Diskuss, elevate your communication game and keep every relationship on track. It’s the ultimate tool for efficient business contact management.",
  ];

  return (
    <div className="home-about-us mt-5">
      <div className="container">
        <div className="content-wrapper row">
          <ScrollAnimation
            animationClass="animate__fadeInDown"
            className="left-content col-lg-6"
          >
            <div className="about-us-tag">
              <img src={about} alt="about-icon" /> - Business Contact Management
              Simplified
            </div>
            <h1>Effortless Contact Management, Reimagined.<br /></h1>
            <p>Diskuss transforms the way you handle communication by replacing the traditional phone dial pad with a smarter, more efficient solution. It’s your go-to app for managing calls, organizing contacts, and staying on top of follow-ups—all in one seamless platform.</p>
            <ul>
              <li><span>Seamlessly Manage Calls:</span> Organize and handle all your calls with ease, ensuring efficient communication.</li>
              <li><span>Streamline Contacts:</span>Simplify contact organization and access, saving time and reducing clutter.</li>
              <li><span>Enhance Follow-Ups:</span>Stay on top of your conversations with powerful follow-up tools to nurture relationships.</li>
            </ul>
            <div className="stats">
              <button className="home-learn-about-btn" onClick={()=>navigate('/features')}>
                Learn More <FaArrowRight className="learn-more-icon" />
              </button>
            </div>
          </ScrollAnimation>

          <ScrollAnimation
            animationClass="animate__fadeInUp"
            className="right-content col-lg-6 position-relative"
          >
            <lottie-player
              src="https://lottie.host/4c26e82c-364d-4af6-9222-c0276d965607/i8shBxCp9J.json"
              background="transparent"
              speed="1"
              style={{
                width: "100%",
                height: "500px",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: "-1"
              }}
              loop
              autoplay
            ></lottie-player>

            <img src={homeAbout} alt="Team meeting" />
          </ScrollAnimation>
        </div>
        <div className="features">
          {stats.map((stat, index) => (
            <div className="stat-item" key={index}>
              <h2>{stat.icon}</h2>
              <p>{stat.text}</p>
              {index < stats.length - 1 && (
                <div className="vertical-line"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeAboutUs;
