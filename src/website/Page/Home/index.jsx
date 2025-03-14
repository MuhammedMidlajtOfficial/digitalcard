import React from "react";
import "./home.css";
import { Helmet } from "react-helmet";
import HomeBanner from "../../Components/Home/HomeBanner";
import HomeAboutUs from "../../Components/Home/HomeAboutUs";
// import HomeExplore from "../../Components/Home/HomeExplore";
import HomeTemplate from "../../Components/Home/HomeTemplate";
import HomeFeatures from "../../Components/Home/HomeFeatures";
import HomeBenefits from "../../Components/Home/HomeBenefits";
// import HomeChoose from "../../Components/Home/HomeChoose";
import HomeFAQ from "../../Components/Home/HomFAQ";
import HomeApps from "../../Components/Home/HomeApps";
import HomeNewTestimonial from "../../Components/Home/HomeNewTestimonial";
import HomeTrustedBusiness from "../../Components/Home/HomeTrustedBusiness";
import HowItWorks from "../../Components/Home/HomeHowItWorks";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>KC (Know Connections) - Business Contact Management</title>
        <meta
          name="description"
          content="Explore KC (Know Connections), your ultimate destination for 1000+ creative and unique digital card designs for every occasion. Whether you're celebrating a birthday, anniversary, or any special event, find the perfect digital card here."
        />
        <meta
          name="keywords"
          content="digital cards, unique card designs, custom digital cards, KC (Know Connections), digital greeting cards, card templates, online cards, special occasion cards, creative digital cards"
        />
      </Helmet>

      <div className="main-wrapper">
        <HomeBanner />
        {/* <HomeClients /> */}
        <HomeAboutUs />
        <HomeFeatures />
        <HomeTemplate />
        <HomeBenefits />
        <HowItWorks />
        {/* <HomeHowUse /> */}
        <HomeTrustedBusiness />
        <HomeNewTestimonial />
        <HomeFAQ />
        <HomeApps />
        {/* <HomeWhyDiskuss /> */}
      </div>
    </>
  );
};

export default Home;
