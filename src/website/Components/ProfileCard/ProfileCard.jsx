import React, { useState, useEffect } from "react";
import { FaPhoneAlt, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import { RiFacebookCircleLine } from "react-icons/ri";
import { PiPhoneFill } from "react-icons/pi";
import { Avatar, message } from "antd";
import { logInstance } from "../../../AxiosConfig";
import { useLoading } from "../../../application/Services/loadingService";
import { useParams } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import defaultimage from "../../Assets/image/Notfound.png";
const ProfileCard = () => {
  const [cardsData, setCardsData] = useState([]);

  const { startLoading, stopLoading } = useLoading();
  const { id } = useParams();

  // Manage flip state for multiple cards
  const [flippedCards, setFlippedCards] = useState({});

  const handleFlip = (cardId) => {
    setFlippedCards((prev) => ({
      ...prev,
      [cardId]: !prev[cardId],
    }));
  };

  const fetchCardsData = () => {
    startLoading();
    logInstance
      .get(`/card/cardId/${id}`)
      .then((response) => {
        setCardsData(response?.data?.card || []);
      })
      .catch((error) => {
        console.error("Error fetching Data:", error);
      })
      .finally(() => stopLoading());
  };

  useEffect(() => {
    fetchCardsData();
  }, []);
  const generateVCF = () => {
    if (!cardsData) return;

    const vcfData = `BEGIN:VCARD
VERSION:3.0
FN:${cardsData.yourName}
ORG:${cardsData.businessName}
TITLE:${cardsData.designation}
TEL;TYPE=CELL:${cardsData.mobile}
${cardsData.whatsappNo ? `TEL;TYPE=WHATSAPP:${cardsData.whatsappNo}` : ""}
EMAIL:${cardsData.email}
URL:${window.location.href}
END:VCARD`;

    const blob = new Blob([vcfData], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `${cardsData.yourName}.vcf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  const handleLinkClick = (event, link) => {
    if (!link) {
      event.preventDefault();
      message.error("Not Found");
    }
  };
  return (
    <div className="cards-container ">
      {cardsData && (
        <div className="business-card" key={cardsData._id}>
          <div className="business-card-first-container">
            <h1 className="business-card-first-container-headtext">
              {cardsData.businessName || "N/A"}
            </h1>
          </div>

          <div
            className="flip-container"
            onClick={() => handleFlip(cardsData._id)}
          >
            <div
              className={`flipper ${
                flippedCards[cardsData._id] ? "flipped" : ""
              }`}
            >
              <div className="front">
                <div className="business-card-container">
                  <div className="business-card-second-container">
                    <div className="business-card-profile">
                      <div className="business-card-image">
                        <Avatar
                          src={cardsData?.image || defaultimage}
                          size={84}
                        />
                      </div>
                    </div>
                    <div className="business-card-content">
                      <div className="business-card-button">
                        <p style={{ fontWeight: "700", paddingTop: "5px" }}>
                          {cardsData?.yourName || "No Name Available"}
                        </p>
                        <p style={{ fontWeight: "500" }}>
                          {cardsData?.designation || "No Designation Available"}
                        </p>
                        <hr style={{ width: "100%" }} />
                      </div>
                      <div className="business-card-button">
                        <p style={{ fontWeight: "700" }}>Contact</p>
                        <span
                          className="business-card-icon"
                          style={{ display: "flex", alignItems: "center" }}
                        >
                          <a
                            href={`tel:${cardsData.mobile}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              display: "flex",
                              alignItems: "center",
                              textDecoration: "none",
                              color: "white",
                              gap: "9px",
                              marginTop: "3px",
                            }}
                          >
                            <PiPhoneFill
                              className="business-card-icon-style"
                              style={{ margin: 0, padding: 0 }}
                            />
                            <p
                              className="text-style"
                              style={{
                                margin: 0,
                                padding: 0,
                                fontSize: "15px",
                              }}
                            >
                              {cardsData?.mobile || "No Contact Available"}
                            </p>
                          </a>
                        </span>

                        <span className="business-card-icon">
                          <a
                            href={`mailto:${cardsData.email}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              display: "flex",
                              textDecoration: "none",
                              color: "white",
                              gap: "10px",
                              marginTop: "5px",
                              alignItems: "start",
                            }}
                          >
                            <IoMailSharp
                              className="business-card-icon-style"
                              style={{ marginTop: "3px", padding: 0 }}
                            />
                            <p className="text-style">
                              {cardsData?.email || "No Email Available"}
                            </p>
                          </a>
                        </span>
                      </div>
                      <div className="business-card-button">
                        <span className="business-card-iconss">
                          <a
                            href={
                              cardsData.whatsappNo
                                ? `https://wa.me/${cardsData.whatsappNo}`
                                : "#"
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleLinkClick(e, cardsData.whatsappNo);
                            }}
                          >
                            <FaWhatsapp />
                          </a>

                          <a
                            href={cardsData.facebookLink || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleLinkClick(e, cardsData.facebookLink);
                            }}
                          >
                            <RiFacebookCircleLine />
                          </a>

                          <a
                            href={cardsData.instagramLink || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleLinkClick(e, cardsData.instagramLink);
                            }}
                          >
                            <FaInstagram />
                          </a>

                          <a
                            href={cardsData.twitterLink || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleLinkClick(e, cardsData.twitterLink);
                            }}
                          >
                            <FaLinkedin />
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="back">
                <div className="business-card-container">
                  <div className="business-card-second-container">
                    <div className="business-card-profile">
                      <div className="business-card-image">
                        <Avatar
                          src={cardsData?.image || defaultimage}
                          size={84}
                        />
                      </div>
                    </div>
                    <div className="business-card-content">
                      <div className="business-card-button">
                        <p style={{ fontWeight: "700" }}>
                          Top Product / Services
                        </p>
                        <hr style={{ width: "100%" }} />
                        {cardsData?.services?.length > 0 ? (
                          <div className="business-card-services-list">
                            <ul className="business-card-service-column">
                              {cardsData.services.map((service, index) => (
                                <li key={index}>- {service}</li>
                              ))}
                            </ul>
                          </div>
                        ) : (
                          <p className="no-services">No services available</p>
                        )}
                      </div>
                      {cardsData?.website && (
                        <a
                          href={`https://${cardsData.website}`}
                          className="business-card-website-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {cardsData.website}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="business-contact-details mt-1">
            <h4 className="name">
              {cardsData.yourName || "No Name Available"}
            </h4>
            <h5 className="position">
              {cardsData.designation || "No Designation Available"}
            </h5>
            <hr
              style={{
                height: "2px",
                border: "none",
                margin: "15px 10px",
                background: "linear-gradient(to right, #2986D6, #2B4962)",
              }}
            />

            <div>
              <span className="business-card-icons">
                <a
                  href={`tel:${cardsData.mobile}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    textDecoration: "none",
                    color: "black",
                    gap: "15px",
                  }}
                >
                  <FaPhoneAlt style={{ fontSize: "20px" }} />
                  <p style={{ fontSize: "20px" }}>
                    {cardsData.mobile || "N/A"}
                  </p>
                </a>
              </span>

              <span className="business-card-icons">
                <a
                  href={`mailto:${cardsData.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    textDecoration: "none",
                    color: "black",
                    gap: "15px",
                  }}
                >
                  <IoMailSharp
                    style={{ fontSize: "20px", marginTop: "10px" }}
                  />
                  <span className="user-email">{cardsData.email}</span>
                </a>
              </span>
            </div>
            <button className="save-contact" onClick={generateVCF}>
              SAVE CONTACT
            </button>
            <hr
              style={{
                height: "2px",
                border: "none",
                background: "linear-gradient(to right, #2986D6, #2B4962)",
                margin: "15px 10px",
              }}
            />
          </div>

          <div className="business-card-services-list2">
            <h3>🔹Why Use KC (Know Connections)!</h3>
            <ul style={{ listStyle: "none", paddingLeft: 0 }}>
              {[
                {
                  icon: "🔗",
                  text: "Effortless Contact Sharing & Organization",
                },
                { icon: "👥", text: "Stay Connected with Your Network & Team" },
                {
                  icon: "📊",
                  text: "Smart Contact Management for Business Growth",
                },
              ].map((item, index) => (
                <li key={index}>
                  <span className="icon1">{item.icon}</span>{" "}
                  <span className="text">{item.text}</span>
                </li>
              ))}
            </ul>
            <ul
              className="second-ul"
              style={{ listStyle: "none", paddingLeft: 0 }}
            >
              {[
                {
                  icon: "📩",
                  text: `Join ${cardsData.businessName} Today & Simplify Networking!`,
                },
                { icon: "🤝", text: "Let's stay in touch and grow together!" },
              ].map((item, index) => (
                <li key={index}>
                  <span className="icon1">{item.icon}</span>
                  <span className="text">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="firstend-container">
              <span className="footer-icons">
                <a
                  href={
                    cardsData.whatsappNo
                      ? `https://wa.me/${cardsData.whatsappNo}`
                      : "#"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => handleLinkClick(e, cardsData.whatsappNo)}
                >
                  <FaWhatsapp />
                </a>

                <a
                  href={cardsData.facebookLink || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => handleLinkClick(e, cardsData.facebookLink)}
                >
                  <RiFacebookCircleLine />
                </a>

                <a
                  href={cardsData.instagramLink || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => handleLinkClick(e, cardsData.instagramLink)}
                >
                  <FaInstagram />
                </a>

                <a
                  href={cardsData.twitterLink || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => handleLinkClick(e, cardsData.twitterLink)}
                >
                  <FaLinkedin />
                </a>
              </span>
            </div>
            <div className="secondend-container">
              <p className="secondtext">
                "Invite friends and family to KC (Know Connections) - seamless
                connections when you have everyone on KC (Know Connections)"
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;
