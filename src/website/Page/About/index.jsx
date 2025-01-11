import React from "react";
import "./about.css";
import { Helmet } from "react-helmet";
import AboutBanner from "../../Components/About/AboutBanner";
import AboutWhoWeAre from "../../Components/About/AboutWhoWeAre";
import AboutVision from "../../Components/About/AboutVision";
import AboutCertification from "../../Components/About/AboutCertification";
import AboutAwards from "../../Components/About/AboutAwards";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Diskuss | Digital Card Solutions</title>
        <meta
          name="description"
          content="Learn more about Diskuss and our mission to provide innovative digital card solutions. Discover how we offer 1000+ unique card designs and our commitment to enhancing your card-making experience."
        />
        <meta
          name="keywords"
          content="About Diskuss, digital card solutions, Diskuss mission, digital card designs, card-making innovation, company background, Diskuss team, digital cards overview"
        />
      </Helmet>

      <div className="main-wrapper">
        <AboutBanner />
        <AboutWhoWeAre />
        <AboutVision />
        {/* <AboutTeam /> */}
        <AboutCertification />
        {/* <AboutAwards /> */}
      </div>
    </>
  );
};

export default About;
