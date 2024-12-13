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





// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { GiCheckMark } from "react-icons/gi";
// import { FaPlus } from "react-icons/fa6";
// import CreateSubscriptionPlan from "./CreateSubscriptionPlan";

// const FeatureCard = ({ title, price, features }) => (
//   <div className="col-lg-4 col-md-6">
//     <div className="card-subscription-plan">
//       <div className="pricing-plan-header d-flex align-items-center justify-content-center">
//         <h2>₹{price}</h2>
//         <div className="vertical-line-plans"></div>
//         <p>
//           PER
//           <br />
//           MONTH
//         </p>
//       </div>
//       <h3 className="price-plan-title">{title}</h3>
//       <div className="horizontal-line-plans"></div>
//       <h4 className="price-plan-content-head mt-3">Billed annually.</h4>
//       <ul className="features-list">
//         {features.map((feature, index) => (
//           <li key={index} className="plans-item">
//             <div className="icon-circle">
//               <GiCheckMark className="check-icon" />
//             </div>
//             <span className="feature-text">{feature}</span>
//           </li>
//         ))}
//       </ul>
//       <button className="plans-subscription-btn mt-3">Edit</button>
//     </div>
//   </div>
// );

// const ManageSubscriptionIndex = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [subscriptionPlans, setSubscriptionPlans] = useState([]);

//   const showModal = () => setIsModalOpen(true);
//   const handleCancel = () => setIsModalOpen(false);

//   // Fetch subscription plans from the backend
//   useEffect(() => {
//     const fetchPlans = async () => {
//       try {
//         const response = await axios.get("http://localhost:3000/api/v1/subscription-plans");
//         setSubscriptionPlans(response.data); // Assuming the backend returns an array
//       } catch (error) {
//         console.error("Error fetching subscription plans:", error);
//       }
//     };

//     fetchPlans();
//   }, []);

//   return (
//     <div className="view-subscription-static">
//       <div className="container">
//         <div className="view-subscription-heading d-flex justify-content-between flex-lg-row flex-xl-row flex-column">
//           <h1>Manage Subscription Plans</h1>
//           <button className="add-all-users" onClick={showModal}>
//             <FaPlus />
//             {""}Create
//           </button>
//         </div>
//         <div className="row mt-4">
//           {subscriptionPlans.map((plan, index) => (
//             <FeatureCard
//               key={plan.planId || index} // Use unique key
//               title={plan.name}
//               price={plan.price.$numberDecimal} // Handle Decimal128 properly
//               features={Object.values(plan.features || {})} // Convert features to array
//             />
//           ))}
//         </div>
//         <div className="d-flex justify-content-end gap-3">
//           <button className="view-subscription-create">Save</button>
//         </div>
//       </div>
//       <CreateSubscriptionPlan open={isModalOpen} handleCancel={handleCancel} />
//     </div>
//   );
// };

// export default ManageSubscriptionIndex;




// import React, { useState, useEffect } from "react";
// import { GiCheckMark } from "react-icons/gi";
// import { FaPlus } from "react-icons/fa6";
// import CreateSubscriptionPlan from "./CreateSubscriptionPlan";
// import axios from "axios";

// const FeatureCard = ({ title, price, features }) => {
//   return (
//     <div className="col-lg-4 col-md-6">
//       <div className="card-subscription-plan">
//         <div className="pricing-plan-header d-flex align-items-center justify-content-center">
//           <h2>₹{price}</h2>
//           <div className="vertical-line-plans"></div>
//           <p>
//             PER
//             <br />
//             MONTH
//           </p>
//         </div>
//         <h3 className="price-plan-title">{title}</h3>
//         <div className="horizontal-line-plans"></div>
//         <ul className="features-list">
//           {features.map((feature, index) => (
//             <li key={index} className="plans-item">
//               <div className="icon-circle">
//                 <GiCheckMark className="check-icon" />
//               </div>
//               <span className="feature-text">{feature}</span>
//             </li>
//           ))}
//         </ul>
//         <button className="plans-subscription-btn mt-3">Edit</button>
//       </div>
//     </div>
//   );
// };

// const ManageSubscriptionIndex = () => {
//   const [subscriptions, setSubscriptions] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const showModal = () => setIsModalOpen(true);
//   const handleCancel = () => setIsModalOpen(false);

//   const handlePlanCreated = (newPlan) => {
//     setSubscriptions((prevPlans) => [...prevPlans, newPlan]);
//   };
  
//   useEffect(() => {
//     // Fetch subscription plans from the backend
//     axios
//       .get("/api/subscription-plans")
//       .then((response) => {
//         setSubscriptions(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching subscriptions:", error);
//       });
//   }, []);

//   return (
//     <div className="view-subscription-static">
//       <div className="container">
//         <div className="view-subscription-heading d-flex justify-content-between flex-lg-row flex-xl-row flex-column">
//           <h1>Manage Subscription Plans</h1>
//           <button className="add-all-users" onClick={showModal}>
//             <FaPlus /> Create
//           </button>
//         </div>
//         <div className="row mt-4">
//           {subscriptions.map((subscription, index) => (
//             <FeatureCard
//               key={index}
//               title={subscription.name}
//               price={subscription.price}
//               features={subscription.features || []}
//             />
//           ))}
//         </div>
//         <div className="d-flex justify-content-end gap-3">
//           <button className="view-subscription-create">Save</button>
//         </div>
//       </div>
//       <CreateSubscriptionPlan open={isModalOpen} handleCancel={handleCancel} />
//     </div>
//   );
// };

// export default ManageSubscriptionIndex;




// import React, { useState, useEffect } from "react";
// import { GiCheckMark } from "react-icons/gi";
// import { FaPlus } from "react-icons/fa6";
// import CreateSubscriptionPlan from "./CreateSubscriptionPlan";
// import axios from "axios";

// // Component to render individual feature cards
// const FeatureCard = ({ title, price, features }) => {
//   return (
//     <div className="col-lg-4 col-md-6">
//       <div className="card-subscription-plan">
//         <div className="pricing-plan-header d-flex align-items-center justify-content-center">
//           <h2>₹{price}</h2>
//           <div className="vertical-line-plans"></div>
//           <p>
//             PER
//             <br />
//             MONTH
//           </p>
//         </div>
//         <h3 className="price-plan-title">{title}</h3>
//         <div className="horizontal-line-plans"></div>
//         <ul className="features-list">
//           {features.map((feature, index) => (
//             <li key={index} className="plans-item">
//               <div className="icon-circle">
//                 <GiCheckMark className="check-icon" />
//               </div>
//               <span className="feature-text">{feature}</span>
//             </li>
//           ))}
//         </ul>
//         <button className="plans-subscription-btn mt-3">Edit</button>
//       </div>
//     </div>
//   );
// };

// const ManageSubscriptionIndex = () => {
//   const [subscriptions, setSubscriptions] = useState([]); // State for subscription plans
//   const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

//   // Function to open the modal
//   const showModal = () => setIsModalOpen(true);

//   // Function to close the modal
//   const handleCancel = () => setIsModalOpen(false);

//   // Function to handle newly created plans and update the state
//   const handlePlanCreated = (newPlan) => {
//     setSubscriptions((prevPlans) => [...prevPlans, newPlan]); // Add the new plan to the existing list
//   };

//   // Fetch subscription plans from the backend when the component mounts
//   useEffect(() => {
//     axios
//       .get("http://localhost:9001/api/v1/subscription-plans") // Adjust the API endpoint if needed
//       .then((response) => {
//         setSubscriptions(response.data); // Update the state with fetched plans
//       })
//       .catch((error) => {
//         console.error("Error fetching subscriptions:", error); // Log errors if any
//       });
//   }, []);

//   return (
//     <div className="view-subscription-static">
//       <div className="container">
//         {/* Page heading */}
//         <div className="view-subscription-heading d-flex justify-content-between flex-lg-row flex-xl-row flex-column">
//           <h1>Manage Subscription Plans</h1>
//           <button className="add-all-users" onClick={showModal}>
//             <FaPlus /> Create
//           </button>
//         </div>

//         {/* Display subscription cards */}
//         <div className="row mt-4">
//           {subscriptions.map((subscription, index) => (
//             <FeatureCard
//               key={index}
//               title={subscription.name}
//               price={subscription.price}
//               features={subscription.features || []}
//             />
//           ))}
//         </div>

//         {/* Save button (optional, depending on requirements) */}
//         <div className="d-flex justify-content-end gap-3">
//           <button className="view-subscription-create">Save</button>
//         </div>
//       </div>

//       {/* Modal for creating a new subscription plan */}
//       <CreateSubscriptionPlan
//         open={isModalOpen}
//         handleCancel={handleCancel}
//         onPlanCreated={handlePlanCreated} // Pass the handler to the modal
//       />
//     </div>
//   );
// };

// export default ManageSubscriptionIndex;
