import React from "react";
import "./pricing.css";
import { Helmet } from "react-helmet";
import PricingBanner from "../../Components/Pricing/PricingBanner";
import PricingPlans from "../../Components/Pricing/PricingPlans";
import HomeFAQ from "../../Components/Home/HomFAQ";
import PricingBenefits from "../../Components/Pricing/PricingBenefits";
import PriceFeatureAction from "../../Components/Pricing/PriceFeatureAction";

const Pricing = () => {
  return (
    <>
      <Helmet>
        <title>KC (Know Connections) - Affordable Pricing Plans for Digital Cards</title>
        <meta
          name="description"
          content="Discover KC (Know Connections)' flexible and affordable pricing plans for 1000+ digital card designs. Choose the perfect plan for your needs and start creating stunning digital cards today."
        />
        <meta
          name="keywords"
          content="KC (Know Connections) pricing, digital card pricing, affordable digital cards, digital card plans, pricing options, card design pricing, flexible pricing plans, subscription plans for digital cards"
        />
      </Helmet>

      <div className="main-wrapper">
        <PricingBanner />
        <PricingPlans />
        <PricingBenefits />
        <PriceFeatureAction />
        {/* <HomeFAQ /> */}
      </div>
    </>
  );
};

export default Pricing;
