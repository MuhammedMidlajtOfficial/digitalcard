import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoPlus } from "react-icons/go";
import { Radio } from "antd";
import CreateSubscription from "./CreateSubscription";

const SubscriptionPriceData = {
  individual: [
    {
      name: "Gold",
      monthlyPrice: "777",
      yearlyPrice: "777",
      perMonth: "per month",
      userCount: "1 User",
      features: ["For individuals with basic customizations."],
      buttonText: "Edit",
    },
    {
      name: "Professional",
      monthlyPrice: "999",
      yearlyPrice: "999",
      perMonth: "per month",
      userCount: "1 User",
      popular: true,
      features: [
        "For individuals with fully customizations & advanced features.",
      ],
      buttonText: "Edit",
    },
    {
      name: "Premium",
      monthlyPrice: "1,111",
      yearlyPrice: "1,111",
      perMonth: "per month",
      userCount: "5+ Users",
      features: ["For businesses and teams with custom branding."],
      buttonText: "Edit",
    },
  ],
  enterprise: [
    {
      name: "Gold",
      monthlyPrice: "777",
      yearlyPrice: "777",
      perMonth: "per year",
      userCount: "1 User",
      features: ["Comprehensive Tools for Small Teams."],
      buttonText: "Edit",
    },
    {
      name: "Professional",
      monthlyPrice: "999",
      yearlyPrice: "999",
      perMonth: "per year",
      userCount: "1 User",
      popular: true,
      features: ["Advanced Capabilities for Large Teams."],
      buttonText: "Edit",
    },
    {
      name: "Premium",
      monthlyPrice: "1,111",
      yearlyPrice: "1,111",
      perMonth: "per year",
      userCount: "5+ Users",
      features: ["Enterprise-level Custom Branding."],
      buttonText: "Edit",
    },
  ],
};

const SubscriptionPrice = () => {
  const [selectedView, setSelectedView] = useState("individual");
  const [billingCycle, setBillingCycle] = useState("monthly");

  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => setIsModalOpen(false);

  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-between current-incentive-plan-head">
          <h4>Subscription Plans</h4>
          <button onClick={showModal} className="create-btn">
            <GoPlus />
            Create
          </button>
        </div>

        <div className="mt-3 subscription-price-section">
          <h1>KC (Know Connections) Plan</h1>
          <p className="subscription-price-subtitle">
            Lorem ipsum dolor sit amet, consectetur
          </p>
          <div className="subscription-price-button-group">
            <button
              className={`subscription-price-explore-button ${
                selectedView === "individual" ? "active" : ""
              }`}
              onClick={() => setSelectedView("individual")}
            >
              Individual
            </button>
            <button
              className={`subscription-price-explore-button ${
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
            className="subscription-price-radio-group"
          >
            <Radio value="monthly">Monthly</Radio>
            <Radio value="yearly">Annually</Radio>
          </Radio.Group>

          <div className="subscription-price-cards">
            {SubscriptionPriceData[selectedView].map((plan, index) => (
              <div
                key={index}
                className={`subscription-price-card ${
                  plan.popular ? "popular" : ""
                }`}
              >
                {plan.popular && (
                  <div className="subscription-price-popular-tag">
                    Most Popular
                  </div>
                )}
                <center>
                  <h2>{plan.name}</h2>
                  <div className="subscription-price">
                    &#8377;{" "}
                    {billingCycle === "monthly"
                      ? plan.monthlyPrice
                      : plan.yearlyPrice}
                  </div>
                  <div className="subscription-price-per-month">
                    {billingCycle === "monthly" ? "per month" : "per year"}
                  </div>
                  <h3>{plan.userCount}</h3>
                </center>
                <ul>
                  {plan.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <center>
                  <button className="subscription-price-edit-btn">
                    {plan.buttonText}
                  </button>
                </center>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CreateSubscription open={isModalOpen} handleCancel={handleCancel} />
    </>
  );
};

export default SubscriptionPrice;
