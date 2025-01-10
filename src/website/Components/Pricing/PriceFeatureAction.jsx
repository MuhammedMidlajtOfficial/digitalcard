
import React from "react";
import {
  FaCircleCheck,
  FaExplosion,
  FaClipboardCheck,
  FaRocketchat,
  FaBarsProgress,
  FaSlideshare,
  FaListCheck,
  FaPodcast,
  FaRankingStar,
} from "react-icons/fa6";

const PriceFeatureAction = () => {
  const features = [
    {
      icon: <FaClipboardCheck />,
      title: "Smart Contact Management",
      description:
        "Diskuss makes it easy to keep your contacts organized. With customizable tags, detailed notes, and powerful search functionality, you will never lose track of an important connection.",
    },
    // {
    //   icon: <FaRocketchat />,
    //   title: "Seamless Integrations",
    //   description:
    //     "Diskuss integrates with popular CRM systems, email platforms, and other business tools, ensuring that your workflow remains uninterrupted and your data synchronized across platforms.",
    //   highlighted: true,
    // },
    {
      icon: <FaBarsProgress />,
      title: "Advanced Analytics & Reporting",
      description:
        "Diskuss offers analytics and reporting to help you understand contact engagement and interaction trends. Use data-driven insights to optimize your networking strategies, from individual interactions to team performance overviews.",
    },
    {
      icon: <FaSlideshare />,
      title: "NFC & QR Code Sharing",
      description:
        "Share your contact information instantly with a simple tap on NFC-enabled devices or by scanning a QR code. Diskuss ensures your information is accessible in just a few seconds.",
    },
    {
      icon: <FaListCheck />,
      title: "Secure Data and Privacy Controls",
      description:
        "Diskuss prioritizes data privacy with industry-standard encryption and access controls, ensuring that your information is stored securely. Role-based access and granular privacy settings make it easy to manage who sees what, giving you peace of mind"
    },
  ];

  return (
    <div className="pricing-diskuss-action">
      <div className="container">
        <div className="feature-content-action">
          <div className="row">
            <div className="col-lg-6">
              <div className="feature-description">
                <h3>Diskuss in Detail </h3>
                <p>
                Built to streamline and simplify your professional interactions, Diskuss offers a blend of powerful features like smart contact storage, real-time updates, data privacy controls, and analytics to keep you in charge of your networking efforts.
                </p>

                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <ul className="feature-list">
                      <li>
                        <FaRankingStar /> &nbsp; Intuitive User Interface for
                        Effortless Navigation
                      </li>
                      <li>
                        <FaCircleCheck /> &nbsp; Real-time collaboration for
                        seamless teamwork
                      </li>
                      <li>
                        <FaPodcast /> &nbsp; Advanced analytics for data-driven
                        decision-making
                      </li>
                      <li>
                        <FaExplosion /> &nbsp; Secure Data and Privacy Controls
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="action-line"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="feature-cards-action">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`feature-card-action ${
                      feature.highlighted ? "highlighted" : ""
                    }`}
                  >
                    <div className="d-flex align-items-center">
                      <div className="feature-icon">{feature.icon}</div>
                      <h3>{feature.title}</h3>
                    </div>
                    <p>{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceFeatureAction;
