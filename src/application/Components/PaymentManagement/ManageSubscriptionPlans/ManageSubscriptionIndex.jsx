import React, { useState, useEffect } from "react";
import axios from "axios";
import { GiCheckMark } from "react-icons/gi";
import { FaPlus } from "react-icons/fa6";
import CreateSubscriptionPlan from "./CreateSubscriptionPlan";
import { useLoading } from "../../../Services/loadingService";
import axiosInstance from "../../../../AxiosConfig";
import { showErrorToast, showSuccessToast } from "../../../Services/toastService";
import { showDeleteMessage } from "../../../../globalConstant";

const FeatureCard = ({ title, price, type, features, onDelete, onEdit }) => {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="card-subscription-plan">
        <div className="card-type-header">
        <h1 className="card-type">{type}</h1>
        </div>
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
        <div>
          <button className="plans-subscription-btn mt-3" onClick={onEdit}>
          Edit
        </button>
        <button className="plans-subscription-btn mt-3" onClick={onDelete}>
          Delete
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
      startLoading()
      const response = await axiosInstance.get("subscription");
      const formattedPlans = response.data.SubscriptionPlans.map(plan => ({
        ...plan,
        price: plan.price?.$numberDecimal || plan.price, // Ensure price is a string/number
      }));
      console.log('formattedPlans-',formattedPlans);
      setCards(formattedPlans);
      stopLoading()
    } catch (error) {
      console.error("Error fetching subscriptions:", error);
    }
  };

  const handleCreateOrEdit = async (data) => {
    try {
      if (selectedCard) {
        console.log('selectedCard-true',data);
        await axiosInstance.put(`subscription/${selectedCard.planId}`, data)
        .then(response =>{
          if(response.status === 201){
            showSuccessToast('Subscription Plan Updated')
          }
        })
        .catch(error =>{
          console.log(error);
          showErrorToast(error.meessage)
        })
      } else {
        console.log('selectedCard-false',data);
        await axiosInstance.post("subscription", data)
        .then(response =>{
          if(response.status === 201){
            showSuccessToast('Subscription Plan Created')
          }
        })
        .catch(error =>{
          console.log(error);
          showErrorToast(error.meessage)
        })
      }
      fetchSubscriptions();
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error creating/editing subscription:", error);
    }
  };

  const handleDelete = async (planId) => {
    try {
        showDeleteMessage({
            title: "Are you sure you want to delete this subscription plan?",
            onDelete: async () => {
                try {
                    const response = await axiosInstance.delete(`subscription/${planId}`);
                    showSuccessToast(response.data.message || 'Subscription Plan deleted');
                    fetchSubscriptions();
                } catch (error) {
                    console.error("Error deleting subscription:", error);
                    showErrorToast(error.message || 'Failed to delete the subscription plan');
                }
            },
        });
    } catch (error) {
        console.error("Error handling delete:", error);
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
          {cards.map((card) => (
            <FeatureCard
              key={card.planId}
              type={card.type}
              title={card.name}
              price={card.price}
              features={card.features}
              onEdit={() => handleEdit(card)}
              onDelete={() => handleDelete(card.planId)}
            />
          ))}
        </div>
      </div>
      <CreateSubscriptionPlan
        open={isModalOpen}
        handleCancel={() => setIsModalOpen(false) }
        onSubmit={handleCreateOrEdit}
        initialData={selectedCard}
      />
    </div>
  );
};

export default ManageSubscriptionIndex;