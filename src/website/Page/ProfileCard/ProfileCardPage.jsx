import React from "react";
import "./ProfileCard.css"
import { Helmet } from "react-helmet";
import ProfileCard from "../../Components/ProfileCard/ProfileCard";


const ProfileCardPage = () => {
  return (
    <>
      <Helmet>
        <title>Profile - KC (Know Connections) | Digital Card Solutions</title>
        <meta
          name="description"
          content="Learn more about KC (Know Connections) and our mission to provide innovative digital card solutions. Discover how we offer 1000+ unique card designs and our commitment to enhancing your card-making experience."
        />
        <meta
          name="keywords"
          content="About KC (Know Connections), digital card solutions, KC (Know Connections) mission, digital card designs, card-making innovation, company background, KC (Know Connections) team, digital cards overview"
        />
      </Helmet>

      <div className="main-wrapper">
        <ProfileCard/>
      </div>
    </>
  );
};

export default ProfileCardPage;
