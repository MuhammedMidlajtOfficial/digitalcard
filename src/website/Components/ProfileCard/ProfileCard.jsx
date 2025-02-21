import React, { useState, useEffect } from "react";
import { FaPhoneAlt, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { RiFacebookCircleLine } from "react-icons/ri";
import { PiPhoneFill } from "react-icons/pi";
import { Avatar } from "antd";
import { logInstance } from "../../../AxiosConfig";
import { useLoading } from "../../../application/Services/loadingService";
import { useParams } from "react-router-dom";
import { LuTwitter } from "react-icons/lu";

const ProfileCard = () => {
  const [cardsData, setCardsData] = useState([]);
  console.log("cardssssData", cardsData);

  const { loading, startLoading, stopLoading } = useLoading();
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
        console.log("Cards Data", response.data);
        setCardsData(response.data.card || []);
      })
      .catch((error) => {
        console.error("Error fetching Data:", error);
      })
      .finally(() => stopLoading());
  };

  useEffect(() => {
    fetchCardsData();
  }, []);

  return (
    <div className="cards-container ">
      {cardsData && (
        <div className="business-card" key={cardsData._id}>
          <div className="business-card-first-container">
            <h1 className="business-card-first-container-headtext">
              {cardsData.businessName}
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
                <div className="business-card-second-container">
                  <div className="business-card-profile">
                    <div className="business-card-image">
                      <Avatar src={cardsData.image} size={84} />
                    </div>
                  </div>
                  <div className="business-card-content">
                    <div className="business-card-button">
                      <p style={{ fontWeight: "700", paddingTop: "5px" }}>
                        {cardsData.yourName}
                      </p>
                      <p style={{ fontWeight: "500" }}>
                        {cardsData.designation}
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
                            style={{ margin: 0, padding: 0, fontSize: "15px" }}
                          >
                            {cardsData.mobile}
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
                          <p className="text-style">{cardsData.email}</p>
                        </a>
                      </span>
                    </div>
                    <div className="business-card-button">
                      <span className="business-card-iconss">
                        {cardsData.whatsappNo && (
                          <a
                            href={`https://wa.me/${cardsData.whatsappNo}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaWhatsapp />
                          </a>
                        )}
                        {cardsData.facebookLink && (
                          <a
                            href={cardsData.facebookLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <RiFacebookCircleLine />
                          </a>
                        )}
                        {cardsData.instagramLink && (
                          <a
                            href={cardsData.instagramLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaInstagram />
                          </a>
                        )}
                        {cardsData.twitterLink && (
                          <a
                            href={cardsData.twitterLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <LuTwitter />
                          </a>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="back">
                <h2 className="business-card-services-header">Services</h2>
                {cardsData?.services?.length > 0 && (
                  <div className="business-card-services-list">
                    <div>
                      <ul className="business-card-service-column">
                        {cardsData.services
                          .slice(0, Math.ceil(cardsData.services.length / 2))
                          .map((service, index) => (
                            <li key={index}>{service}</li>
                          ))}
                      </ul>
                    </div>
                    <div className="business-card-vertical-line"></div>
                    <div>
                      <ul className="business-card-service-column">
                        {cardsData.services
                          .slice(Math.ceil(cardsData.services.length / 2))
                          .map((service, index) => (
                            <li key={index}>{service}</li>
                          ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="business-contact-details">
            <h4 className="name">{cardsData.yourName}</h4>
            <h5 className="position">{cardsData.designation}</h5>
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
                  <p style={{ fontSize: "20px" }}>{cardsData.mobile}</p>
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
                  <IoMailSharp style={{ fontSize: "20px" }} />
                  <span style={{ fontSize: "20px" }}>{cardsData.email}</span>
                </a>
              </span>
            </div>
            <button
              className="save-contact"
              onClick={() => window.open(`tel:${cardsData.mobile}`, "_blank")}
            >
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
                {cardsData.whatsappNo && (
                  <a
                    href={`https://wa.me/${cardsData.whatsappNo}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp />
                  </a>
                )}
                {cardsData.facebookLink && (
                  <a
                    href={cardsData.facebookLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <RiFacebookCircleLine />
                  </a>
                )}
                {cardsData.instagramLink && (
                  <a
                    href={cardsData.instagramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram />
                  </a>
                )}
                {cardsData.twitterLink && (
                  <a
                    href={cardsData.twitterLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LuTwitter />
                  </a>
                )}
              </span>
              
            </div>
            <div className="secondend-container">
            <p className="secondtext">
                "Invite friends and family to KC (Know Connections) -
                seamless connections when you have everyone on{" "}
                KC (Know Connections)"
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;
