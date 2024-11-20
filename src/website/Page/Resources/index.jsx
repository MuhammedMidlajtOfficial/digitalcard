

import React from "react";
import "./resources.css";
import { Helmet } from "react-helmet";
import ResourcesCards from "../../Components/Resources/ResourcesCards";

const Resources = () => {
  return (
    <>
      <Helmet>
        <title>Diskuss - Affordable Pricing Plans for Digital Cards</title>
        <meta
          name="description"
          content="Discover Diskuss' flexible and affordable pricing plans for 1000+ digital card designs. Choose the perfect plan for your needs and start creating stunning digital cards today."
        />
        <meta
          name="keywords"
          content="Diskuss pricing, digital card pricing, affordable digital cards, digital card plans, pricing options, card design pricing, flexible pricing plans, subscription plans for digital cards"
        />
      </Helmet>

      <div className="main-wrapper">
        <ResourcesCards />
      </div>
    </>
  );
};

export default Resources;
