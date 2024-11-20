import React from "react";
import "./feature.css";
import { Helmet } from "react-helmet";
import FeatureBanner from "../../Components/Features/FeatureBanner";
import FeatureKeyFeatures from "../../Components/Features/FeatureKeyFeatures";
import FeatureExplore from "../../Components/Features/FeatureExplore";
import FeatureAction from "../../Components/Features/FeatureAction";
import FeatureDiskussExp from "../../Components/Features/FeatureDiskussExp";
import HomeTemplate from "../../Components/Home/HomeTemplate";
import HomeFAQ from "../../Components/Home/HomFAQ";
import HomeApps from "../../Components/Home/HomeApps";
import FeatureIntegration from "../../Components/Features/FeatureIntegration";
import { FeaturesDigitalCard } from "../../Components/Features/FeaturesDigitalCard";
import { FeaturesCards } from "../../Components/Features/FeaturesCards";
import { FeatureCustomerExperience } from "../../Components/Features/FeatureCustomerExperience";

const Features = () => {
  return (
    <>
      <Helmet>
        <title>Diskuss - Innovative Features for Creating Digital Cards</title>
        <meta
          name="description"
          content="Explore Diskuss' powerful features, including 1000+ digital card designs, customizable templates, user-friendly design tools, and seamless sharing options. Elevate your card-making experience with Diskuss."
        />
        <meta
          name="keywords"
          content="Diskuss features, digital card features, customizable card templates, card design tools, online card creator, user-friendly design, card sharing options, innovative digital card platform"
        />
      </Helmet>

      <div className="main-wrapper">
        <FeatureBanner />
        <FeaturesDigitalCard/>
        <FeaturesCards/>
        <FeatureCustomerExperience/>
        {/* <FeatureKeyFeatures />
        <FeatureExplore />
        <FeatureAction />
        <FeatureDiskussExp />
        <FeatureIntegration />
        <HomeTemplate />
        <HomeApps /> */}
        <HomeFAQ />
      </div>
    </>
  );
};

export default Features;
