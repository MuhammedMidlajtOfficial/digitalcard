import React, { useState, useEffect } from "react";
import { GiCheckMark } from "react-icons/gi";
import { FaPlus } from "react-icons/fa6";
import CreateSubscriptionPlan from "./CreateSubscriptionPlan";
import { useLoading } from "../../../Services/loadingService";
import {axiosInstance} from "../../../../AxiosConfig";
import {
  showErrorToast,
  showSuccessToast,
} from "../../../Services/toastService";
import { Spin } from "antd";

const FeatureCard = ({
  title,
  price,
  type,
  features,
  onActive,
  onEdit,
  duration,
  status,
  planId,
}) => {
  const featureList = Array.isArray(features) ? features : [features];
  const cardClass = status === "inactive" ? "card-disabled" : "card-active";

  return (
    <div className="col-lg-4 col-md-6">
      <div className={`card-subscription-plan ${cardClass}`}>
        <h1 className="subscription-type-tag">{type}</h1>
        <h3 className="price-plan-title mt-4">{title}</h3>
        <div className="horizontal-line-plans"></div>
        <div className="pricing-plan-header ">
          <h2>₹{price}</h2>
          
          <div style={{ fontSize: "16px" }}>
            {type === "Enterprise"
              ? duration === 365
                ? "per year / per user / inclusive GST"
                : "per month / per user / inclusive GST"
              : duration === 365
              ? "per year / inclusive GST"
              : "per month / inclusive GST"}
          </div>
        </div>

        <ul className="features-list mt-4">
          {featureList.map((feature, index) => (
            <li key={index} className="plans-item">
              <div className="icon-circle">
                <GiCheckMark className="check-icon" />
              </div>
              <span className="feature-text">{feature}</span>
            </li>
          ))}
        </ul>
        <div className="d-flex gap-4">
          <button className="edit-subscription-btn mt-3" onClick={onEdit}>
            Edit
          </button>
          <button
            className={`edit-subscription-btn mt-3 ${
              status === "active" ? "btn-active" : "btn-inactive"
            }`}
            onClick={() => onActive(planId, status)}
          >
            {status === "active" ? "Disable" : "Enable"}
          </button>
        </div>
      </div>
    </div>
  );
};

const ManageSubscriptionIndex = () => {
  const [cards, setCards] = useState([]);
  const { loading, startLoading, stopLoading } = useLoading();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const fetchSubscriptions = async () => {
    try {
      startLoading();
      const response = await axiosInstance.get("subscription");
      const formattedPlans = response.data.SubscriptionPlans.map((plan) => ({
        ...plan,
        price: plan.price?.$numberDecimal || plan.price,
      }));
      console.log("formattedPlansdfgh", response.data);
      setCards(formattedPlans);
      stopLoading();
    } catch (error) {
      console.error("Error fetching subscriptions:", error);
    }
  };

  const handleCreateOrEdit = async (data) => {
    try {
      if (selectedCard) {
        console.log("selectedCard-true", data);
        await axiosInstance
          .put(`subscription/${selectedCard.planId}`, data)
          .then((response) => {
            if (response.status === 200 || response.status === 204) {
              showSuccessToast("Subscription Plan Updated");
            }
          })
          .catch((error) => {
            console.log(error);
            showErrorToast(error.meessage);
          });
      } else {
        console.log("selectedCard-false", data);
        await axiosInstance
          .post("subscription", data)
          .then((response) => {
            if (response.status === 201) {
              showSuccessToast("Subscription Plan Created");
            }
          })
          .catch((error) => {
            console.log(error);
            showErrorToast(error.meessage);
          });
      }
      fetchSubscriptions();
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error creating/editing subscription:", error);
    }
  };

  const handleActive = async (planId, currentStatus) => {
    try {
      const action = currentStatus === "active" ? "inactive" : "active";

      try {
        const response = await axiosInstance.patch(
          `subscription/${planId}/status`,
          { status: action }
        );
        showSuccessToast(
          response.data.message ||
            `Subscription plan ${action === "active" ? "enabled" : "disabled"}`
        );
        fetchSubscriptions();
      } catch (error) {
        console.error("Error updating subscription status:", error);
        showErrorToast(
          error.message ||
            `Failed to ${
              action === "active" ? "enable" : "disable"
            } the subscription plan`
        );
      }
    } catch (error) {
      console.error("Error handling subscription status:", error);
    }
  };

  const handleEdit = (card) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  const handleCreate = () => {
    setSelectedCard(null);
    setIsModalOpen(true);
  };

  useEffect(() => {
    fetchSubscriptions();
  }, []);

  return (
    <div className="view-subscription-static">
      <div className="container">
        <div className="view-subscription-heading d-flex justify-content-between flex-lg-row flex-xl-row flex-column">
          <h1>Manage Subscription Plans</h1>
          <button className="add-all-users" onClick={handleCreate}>
            <FaPlus /> Create
          </button>
        </div>
        <div className="row mt-4">
          {loading ? (
            <div className="d-flex justify-content-center w-100">
              <Spin size="large" />
            </div>
          ) : (
            cards.map((card) => (
              <FeatureCard
                key={card.planId}
                type={card.type}
                title={card.name}
                duration={card.duration}
                price={card.price}
                features={card.features}
                status={card.status}
                onEdit={() => handleEdit(card)}
                onActive={(planId, status) =>
                  handleActive(card.planId, card.status)
                }
              />
            ))
          )}
        </div>
      </div>
      <CreateSubscriptionPlan
        open={isModalOpen}
        handleCancel={() => setIsModalOpen(false)}
        onSubmit={handleCreateOrEdit}
        initialData={selectedCard}
      />
    </div>
  );
};

export default ManageSubscriptionIndex;
