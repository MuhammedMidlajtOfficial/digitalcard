import React from "react";
import team1 from "../../Assets/image/about/team-1.svg";
import team2 from "../../Assets/image/about/team-2.svg";
import team3 from "../../Assets/image/about/team-3.svg";
import team4 from "../../Assets/image/about/team-4.svg";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";

const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    role: "Founder & CEO",
    description:
      "Tech enthusiast and software architect with a passion for creating scalable and user-friendly platforms.",
    imgSrc: team1,
    social: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
    },
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Chief Technology Officer",
    description:
      "Tech enthusiast and software architect with a passion for creating scalable and user-friendly platforms.",
    imgSrc: team2,
    social: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
    },
  },
  {
    id: 3,
    name: "Michael Lee",
    role: "Head of Product",
    description:
      "Product strategist with a keen eye for detail and a commitment to delivering the best user experience.",
    imgSrc: team3,
    social: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
    },
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "Chief Marketing Officer",
    description:
      "Marketing guru with a talent for crafting compelling brand stories and driving customer engagement.",
    imgSrc: team4,
    social: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
    },
  },
  {
    id: 5,
    name: "Emily Davis",
    role: "Chief Marketing Officer",
    description:
      "Marketing guru with a talent for crafting compelling brand stories and driving customer engagement.",
    imgSrc: team4,
    social: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
    },
    
  },
  {
    id: 6,
    name: "Michael Lee",
    role: "Head of Product",
    description:
      "Product strategist with a keen eye for detail and a commitment to delivering the best user experience.",
    imgSrc: team3,
    social: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
    },
  },
  {
    id: 7,
    name: "Jane Smith",
    role: "Chief Technology Officer",
    description:
      "Tech enthusiast and software architect with a passion for creating scalable and user-friendly platforms.",
    imgSrc: team2,
    social: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
    },
  },
  {
    id: 8,
    name: "John Doe",
    role: "Founder & CEO",
    description:
      "Tech enthusiast and software architect with a passion for creating scalable and user-friendly platforms.",
    imgSrc: team1,
    social: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
    },
  },
];

const AboutTeam = () => {
  return (
    <div className="about-team-section">
      <div className="container">
        <center>
          <h4>Our Team</h4>
          <h2>Meet the  Diskuss Team</h2>
          <p>
            Our success is driven by a dedicated team of professionals who share
            a passion for technology and a <br /> commitment to excellence.
            Together, we bring a diverse range of skills, experiences, and
            perspectives <br />
            to the table, ensuring that Diskuss is always at the forefront of
            innovation.
          </p>
        </center>
        <div className="row">
          {teamMembers.map((member) => (
            <div className="col-lg-3" key={member.id}>
              <div className="team-card mb-4">
                <img
                  src={member.imgSrc}
                  alt={member.name}
                  className="team-member-image"
                />
                <div className="team-data">
                  <h3 className="name">{member.name}</h3>
                  <div className="role">
                    <span>{member.role}</span>
                  </div>
                  <div className="desc">
                    <span>{member.description}</span>
                  </div>
                  <div className="social-links">
                    <a href={member.social.facebook}>
                      <FaFacebook />
                    </a>
                    <a href={member.social.instagram}>
                      <FaInstagram />
                    </a>
                    <a href={member.social.twitter}>
                      <FaXTwitter />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;
