import React, { useEffect, useState } from "react";
import logo from "../Assets/image/logo.png";
import "../Page/PolicyPages/policy.css";
import {
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaGlobe,
} from "react-icons/fa";
import { BsSave, BsShare } from "react-icons/bs";
import { useLoading } from "../../application/Services/loadingService";
import { logInstance } from "../../AxiosConfig";
import { useParams } from "react-router-dom";

export const ProfilePage = () => {
  const { loading, startLoading, stopLoading } = useLoading();
  const { id } = useParams();
  const [userData, setUserData] = useState([]);

  const fetchUserData = () => {
    startLoading();
    logInstance
      .get(`/card/pn/${id}`)
      .then((response) => {
        console.log("User Data", response.data);
        setUserData(response.data || []);
      })
      .catch((error) => {
        console.error("Error fetching Data:", error);
      })
      .finally(() => stopLoading());
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="user-profile-page-section">
      <div className="container">
      {userData.map((user, index) => (
        <div className="row">
          <div className="profile-page-logo">
            <img src={user.image} alt="Logo" />
          </div>
          
            <div className="row" key={user._id || index}>
              <div className="col-lg-5">
                <div className="profile-page-intro-card mt-4">
                  <h2>{user.yourName || "Name not provided"}</h2>
                  <p>
                    {user.businessName || "Business Name not provided"} |{" "}
                    {user.businessType || "Type not provided"}
                  </p>
                </div>
                <div className="profile-page-intro-card mt-4">
                  <p>
                    Hello! I'm {user.yourName || "Unknown"}, a professional in{" "}
                    {user.businessType || "your industry"}.
                  </p>
                </div>
              </div>
              <div className="col-lg-5 mt-4">
                <div className="profile-page-intro-card ms-4">
                  <h3>CONTACT ME</h3>
                  <ul>
                    <li>
                      <FaPhone /> {user.phone || "Phone not available"}
                    </li>
                    <li>
                      <FaWhatsapp /> {user.whatsapp || "WhatsApp not available"}
                    </li>
                    <li>
                      <FaEnvelope /> {user.email || "Email not available"}
                    </li>
                    <li>
                      <FaInstagram /> Instagram
                    </li>
                    <li>
                      <FaFacebook /> Facebook
                    </li>
                    <li>
                      <FaLinkedin /> LinkedIn
                    </li>
                    <li>
                      <FaTwitter /> Twitter
                    </li>
                    <li>
                      <FaYoutube /> YouTube
                    </li>
                    <li>
                      <FaGlobe />{" "}
                      <a
                        href={user.website || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {user.website || "Website not available"}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="profile-social-icons mt-4">
                  <a
                    href={`tel:${user.phone}`}
                    className="profile-social-icon phone"
                  >
                    <FaPhone />
                  </a>
                  <a
                    href={`https://wa.me/${user.whatsapp}`}
                    className="profile-social-icon whatsapp"
                  >
                    <FaWhatsapp />
                  </a>
                  <a
                    href={`mailto:${user.email}`}
                    className="profile-social-icon email"
                  >
                    <FaEnvelope />
                  </a>
                  <a
                    href="https://www.instagram.com/yourprofile"
                    className="profile-social-icon instagram"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
        </div>
                  ))}

        <div className="profile-page-footer row mt-5">
          <div className="profile-footer-button save-contact col-lg-6">
            <BsSave className="profile-footer-icon" />
            Save Contact
          </div>
          <div className="profile-footer-button share-contact col-lg-6">
            <BsShare className="profile-footer-icon" />
            Share Contact
          </div>
        </div>
      </div>
    </div>
  );
};
