import React from "react";
import {
  FaBolt,
  FaRegSnowflake,
  FaRegUser,
  FaMedal,
  FaShieldAlt,
} from "react-icons/fa";

const HomeWhyDiskuss = () => {
  const stats = [
    { value: "5.6M+", label: "Downloads" },
    { value: "3.2+", label: "Active Users" },
    { value: "4.9", label: "Ratings" },
  ];

  const features = [
    {
      icon: <FaRegSnowflake className="icon" />,
      title: "Innovative Solutions",
      description: "Cutting-edge tools for modern project management needs.",
      className: "primary",
    },
    {
      icon: <FaRegUser className="icon" />,
      title: "Reliable Support",
      description: "Dedicated assistance ensuring smooth operations.",
    },
    {
      icon: <FaMedal className="icon" />,
      title: "Proven Results",
      description:
        "Track record of driving success and delivering exceptional outcomes.",
    },
    {
      icon: <FaShieldAlt className="icon" />,
      title: "Trusted Security",
      description:
        "Robust measures safeguarding your data and ensuring confidentiality.",
    },
  ];

  return (
    <div className="home-why-diskuss">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="faq-tag">USER SATISFACTION</div>
            <h2>Most used  Contact app  used by millions of happy users</h2>
          </div>
          <div className="col-lg-5">
            <div className="downloads-label">
              <h4>1.5M+ </h4>
              <h5>Downloads on app store</h5>
            </div>
            <div className="downloads-label mt-4">
              <h4>4.9 </h4>
              
              <h5>Ratings out of 5</h5>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-lg-3">
            <div className="home-active-customers-card">
              <h4>150k+</h4>
              <p>Active Customers</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="home-active-customers-card">
              <h4>5% +</h4>
              <p>Spending reduction</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="home-active-customers-card">
              <h4>20% +</h4>
              <p>Increase Connections</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="home-active-customers-card">
              <h4>99k+</h4>
              <p>Positive Reviews</p>
            </div>
          </div>

        </div>
        <div className="mt-4">
          <p style={{ fontSize: "18px", color: "var(--silver-tag-color)" }}>Trusted by millions, this app offers seamless Contact management and personalised insights for user satisfaction.</p>
        </div>
      </div>
    </div>

  );
};

export default HomeWhyDiskuss;
