import React from "react";
import homeBanner from "../../Assets/image/home/home-banner2.png";
import ScrollAnimation from "../../../ScrollAnimation";
import { useNavigate } from "react-router-dom";
const HomeBanner = () => {
  const navigate=useNavigate();
  return (
    <div className="banner-container"> 
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <ScrollAnimation
              animationClass="animate__fadeInUp"
              className="image-content"
            >
              <img src={homeBanner} alt="Business Card App" />
            </ScrollAnimation>
          </div>
          <div className="col-lg-7">
            <ScrollAnimation
              animationClass="animate__fadeInDown"
              className="text-content"
            >
              
              <h1>
              Transform Your Networking <br /> Experience  Today <br />
              </h1>
              <p>
              Redefine the way you manage business contacts, connect seamlessly, and elevate your networking game. Your next big opportunity is just a tap away.
              </p>
              <div className="buttonss">
                {/* <button className="btn btn-primary explore-button d-lg-inline-block">
                  Watch Video
                </button> */}
                <button className="learn-more-btn" onClick={()=>navigate('/about-us')}>
                  Learn More
                </button>
              </div>
              {/* <div
                className="mt-4"
                style={{ display: "flex", alignItems: "center" }}
              >
                <Avatar
                  size="large"
                  src={user}
                  icon={<UserOutlined />}
                  style={{ marginRight: "-8px" }}
                />
                <Avatar
                  size="large"
                  src={user1}
                  icon={<UserOutlined />}
                  style={{ marginRight: "-8px" }}
                />
                <Avatar size="large" src={user2} icon={<UserOutlined />} />

                <p
                  style={{
                    margin: "0 16px",
                    verticalAlign: "middle",
                    display: "inline-block",
                  }}
                >
                  400k+{" "}
                  <span
                    className="home-span-text"
                    style={{ color: "#fff", fontWeight: "normal", fontSize: "14px" }}
                  >
                    users around the globe
                  </span>
                </p>
              </div> */}
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
