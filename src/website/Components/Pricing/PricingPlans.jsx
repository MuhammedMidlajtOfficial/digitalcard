import React, { useState } from "react";
import { Radio } from "antd"; 

const pricingPlansData = {
  individual: [
    {
      name: "Silver Plan",
      monthlyPrice: "777",
      yearlyPrice: "777",
      perMonth: "per month",
      features: ["Essentials for Personal Contact Management."],
      buttonText: "Get Started",
    },
    {
      name: "Gold Plan",
      monthlyPrice: "999",
      yearlyPrice: "999",
      perMonth: "per month",
      popular: true,
      features: [
        "Premium Features for Enhanced Networking.",
      ],
      buttonText: "Try Now",
    },
    {
      name: "Contact Sales",
      monthlyPrice: "0",
      yearlyPrice: "0",
      perMonth: "per month",
      features: ["Custom Solutions for Unique Needs."],
      buttonText: "Choose Enterprise",
    },
  ],
  enterprise: [
    {
      name: "Silver Plan",
      monthlyPrice: "1,777",
      yearlyPrice: "1,777",
      perMonth: "per year",
      features: ["Comprehensive Tools for Small Teams."],
      buttonText: "Get Started",
    },
    {
      name: "Gold Plan",
      monthlyPrice: "1,999",
      yearlyPrice: "1,999",
      perMonth: "per year",
      popular: true,
      features: [
        "Advanced Capabilities for Large Teams.",
      ],
      buttonText: "Try Now",
    },
    {
      name: "Contact Sales",
      monthlyPrice: "0",
      yearlyPrice: "0",
      perMonth: "per year",
      features: ["Enterprise Custom Solutions."],
      buttonText: "Choose Enterprise",
    },
  ],
};

const PricingPlans = () => {
  const [selectedView, setSelectedView] = useState("individual");
  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
    <div className="pricing-plan-section">
      <div className="container">
        <h1>Diskuss Pricing Plans</h1>
        <p className="subtitles">
        Explore affordable Diskuss pricing plans for individuals and enterprises. Enjoy flexible plans with features like team collaboration, analytics, and contact sharing. Start your free trial today.
        </p>
        <div className="price-button-group">
          <button
            className={`price-explore-button ${
              selectedView === "individual" ? "active" : ""
            }`}
            onClick={() => setSelectedView("individual")}
          >
            Individual
          </button>
          <button
            className={`price-learn-more-btn ${
              selectedView === "enterprise" ? "active" : ""
            }`}
            onClick={() => setSelectedView("enterprise")}
          >
            Enterprise
          </button>
        </div>
        <Radio.Group
          onChange={(e) => setBillingCycle(e.target.value)}
          value={billingCycle}
          className="billing-cycle-radio-group white-text-radio-group"
        >
          <Radio value="monthly">Monthly</Radio>
          <Radio value="yearly">Annually</Radio>
        </Radio.Group>

        <div className="pricing-cards">
          {pricingPlansData[selectedView].map((plan, index) => (
            <div
              key={index}
              className={`pricing-card ${plan.popular ? "popular" : ""}`}
            >
              {plan.popular && <div className="popular-tag">Most Popular</div>}
              <center>
                <h2>{plan.name}</h2>
                <div className="price">
                  &#8377;{" "}
                  {billingCycle === "monthly"
                    ? plan.monthlyPrice
                    : plan.yearlyPrice}
                </div>
                <div className="per-month">
                  {billingCycle === "monthly" ? "per month" : "per year"}
                </div>
                <h3>1 User</h3>
              </center>
              <ul>
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <center>
                <button>{plan.buttonText}</button>
              </center>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
