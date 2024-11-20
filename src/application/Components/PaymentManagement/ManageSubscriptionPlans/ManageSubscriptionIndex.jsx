import React, { useState } from "react";
import { GiCheckMark } from "react-icons/gi";
import { FaPlus } from "react-icons/fa6";
import CreateSubscriptionPlan from "./CreateSubscriptionPlan";

const FeatureCard = ({ title, price, features }) => {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="card-subscription-plan">
        <div className="pricing-plan-header d-flex align-items-center justify-content-center">
          <h2>₹{price}</h2>
          <div className="vertical-line-plans"></div>
          <p>
            PER
            <br />
            MONTH
          </p>
        </div>
        <h3 className="price-plan-title">{title}</h3>
        <div className="horizontal-line-plans"></div>
        <h4 className="price-plan-content-head mt-3">Billed annually.</h4>
        <ul className="features-list">
          {features.map((feature, index) => (
            <li key={index} className="plans-item">
              <div className="icon-circle">
                <GiCheckMark className="check-icon" />
              </div>
              <span className="feature-text">{feature}</span>
            </li>
          ))}
        </ul>
        <button className="plans-subscription-btn mt-3">Edit</button>
      </div>
    </div>
  );
};

const ManageSubscriptionIndex = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => setIsModalOpen(false);
  const cards = [
    {
      title: "Silver",
      price: "1999",
      features: [
        "Access to all basic features",
        "Basic reporting and analytics",
        "Up to 10 individual users",
        "20GB individual data each user",
        "Basic chat and email support",
      ],
    },
    {
      title: "Gold",
      price: "2499",
      features: [
        "200+ integrations",
        "Advanced reporting and analytics",
        "Up to 20 individual users",
        "40GB individual data each user",
        "Priority chat and email support",
      ],
    },
    {
      title: "Platinum",
      price: "2999",
      features: [
        "Advanced custom fields",
        "Audit log and data history",
        "Unlimited individual users",
        "Unlimited individual data",
        "Personalized-priority service",
      ],
    },
  ];

  return (
    <div className="view-subscription-static">
      <div className="container">
        <div className="view-subscription-heading d-flex justify-content-between flex-lg-row flex-xl-row flex-column">
          <h1>Manage Subscription Plans</h1>
          <button className="add-all-users" onClick={showModal}>
            <FaPlus />
            {""}Create
          </button>{" "}
        </div>
        <div className="row mt-4">
          {cards.map((card, index) => (
            <FeatureCard
              key={index}
              title={card.title}
              price={card.price}
              features={card.features}
            />
          ))}
        </div>
        <div className="d-flex justify-content-end gap-3">
          <button className="view-subscription-create">Save</button>
        </div>
      </div>
      <CreateSubscriptionPlan open={isModalOpen} handleCancel={handleCancel} />
    </div>
  );
};

export default ManageSubscriptionIndex;
