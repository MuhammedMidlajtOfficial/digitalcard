import React, { useEffect, useState } from "react";
import { Radio } from "antd";
import { axiosInstance } from "../../../AxiosConfig";
import { RiCheckboxCircleFill } from "react-icons/ri";

const PricingPlans = () => {
  const [selectedView, setSelectedView] = useState("individual");
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchSubscriptions = async () => {
    try {
      setIsLoading(true);
      const response = await axiosInstance.get("subscription");
      const formattedPlans = response.data.SubscriptionPlans.map((plan) => ({
        ...plan,
        price: plan.price?.$numberDecimal || plan.price,
        features: Array.isArray(plan.features) ? plan.features : [],
      }));
      console.log("res", response);
      setCards(formattedPlans);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching subscriptions:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSubscriptions();
  }, []);

  const filteredPlans = cards.filter((plan) => {
    return (
      plan.status === "active" && 
      plan.type.toLowerCase() === selectedView
    );
  });
  

  return (
    <div className="pricing-plan-section">
      <div className="container">
        <h1>KC (Know Connections) Pricing Plans</h1>
        <p className="subtitles">
          Explore affordable KC (Know Connections) pricing plans for individuals and
          enterprises. Enjoy flexible plans with features like team
          collaboration, analytics, and contact sharing. Start your free trial
          today.
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
        {/* <Radio.Group
          onChange={(e) => setBillingCycle(e.target.value)}
          value={billingCycle}
          className="billing-cycle-radio-group white-text-radio-group"
        >
          <Radio value="monthly">Monthly</Radio>
          <Radio value="yearly">Annually</Radio>
        </Radio.Group> */}

        <div className="pricing-cards mt-4">
          {filteredPlans.length > 0 ? (
            filteredPlans.map((plan, index) => (
              <div
                key={index}
                className={`pricing-card ${plan.popular ? "popular" : ""}`}
              >
                {plan.popular && (
                  <div className="popular-tag">Most Popular</div>
                )}
                <center>
                  <h2>{plan.name}</h2>
                  <div className="price">&#8377; {plan.price}</div>
                  <div style={{ fontSize: "14px" }}>
                    {plan.type === "Enterprise"
                      ? plan.duration === 365
                        ? "per year / per user / inclusive GST"
                        : "per month / per user / inclusive GST"
                      : plan.duration === 365
                      ? "per year / inclusive GST"
                      : "per month / inclusive GST"}
                  </div>
                </center>
                <ul className="mt-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="plans-item">
                      <div className="d-flex align-items-center gap-2">
                        <RiCheckboxCircleFill className="check-blue-icon" />
                        <span className="feature-text">{feature}</span>
                      </div>
                    </li>
                  ))}
                </ul>
                <center>
                  <button>Get Started</button>
                </center>
              </div>
            ))
          ) : (
            <div>
              No plans are available for the selected billing cycle and type.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
