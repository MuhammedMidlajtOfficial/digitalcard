import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import icon from "../../Assets/image/about/icon/about-cert.svg";
import ScrollAnimation from "../../../ScrollAnimation";

const certifications = [
  {
    id: 1,
    title: "ISO 27001:2013 – Information Security Management",
    icon: icon,
    link: "#",
  },
  {
    id: 2,
    title: "GDPR Compliant – Data Protection and Privacy",
    icon: icon,
    link: "#",
  },
  {
    id: 3,
    title: "Certified by [Relevant Industry Body]",
    icon: icon,
    link: "#",
  },
  {
    id: 4,
    title: "Certified by [Relevant Industry Body]",
    icon: icon,
    link: "#",
  },
];

const AboutCertification = () => {
  return (
    <div className="about-certification-section">
      <div className="container">
        <center>
          <h2>Our Certifications</h2>
          <p>
          At Diskuss, we understand the importance of trust and data protection. <br /> That’s why we are certified by major security and privacy authorities<br /> to ensure that your information remains secure and private.Diskuss complies with top industry standards,<br /> so you can network with peace of mind.
          </p>
        </center>
        <div className="row">
          {certifications.map((cert) => (
            <ScrollAnimation animationClass="animate__fadeInDown" className="col-lg-3 mb-5" key={cert.id}>
              <div className="cert-card ">
                <img
                  src={cert.icon}
                  alt={cert.title}
                  className="cert-icon"
                />
                <h5>{cert.title}</h5>
                {/* <a href={cert.link} className="view-certification">
                  View Certification <FaArrowRight />
                </a> */}
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutCertification;
