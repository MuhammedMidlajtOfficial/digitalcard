import React, { useState } from "react";
import user from "../../../Assets/Images/card.png";
import user1 from "../../../Assets/Images/card2.png";
import user2 from "../../../Assets/Images/card3.png";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { ShareTemplate } from "./ShareTemplate";
const ShareCard = () => {
	const [isModalVisible, setIsModalVisible] = useState(false);

    const handleCreateTeamClick = () => {
      setIsModalVisible(true);
    };
  const users = [
    {
      image: user,
      value: "$50",
      memberTag: "Silver Member",
    },
    {
      image: user1,
      value: "$40",
      memberTag: "Platinum Member",
    },
    {
      image: user2,
      value: "$60",
      memberTag: "Gold Member",
    },
    {
      image: user1,
      value: "$10",
      memberTag: "Gold Member",
    },
    {
      image: user2,
      value: "$25",
      memberTag: "Gold Member",
    },
    {
      image: user,
      value: "$30",
      memberTag: "Silver Member",
    },
    {
      image: user,
      value: "$13",
      memberTag: "Gold Member",
    },
    {
      image: user2,
      value: "$40",
      memberTag: "Platinum Member",
    },
    {
      image: user1,
      value: "$20",
      memberTag: "Gold Member",
    },
  ];

  const renderUserProfileCard = (user) => {
    const { image, value } = user;
   
    return (
      <div className="col-lg-4 mb-4" key={`${value}-${image}`}>
        <div className="application-users-cards">
          <div className="d-flex justify-content-center">
            <img src={image} />
          </div>
          <div className="d-flex mt-4 justify-content-between align-items-center">
            <h2>{value}</h2>
            <div className="d-flex gap-3 align-items-center">
              <button
                onClick={handleCreateTeamClick}
                className="card-share-btn"
              >
                <FaArrowUpRightFromSquare
                  style={{ width: "12px", height: "12px" }}
                />
                &nbsp; Share
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="application-delete-cards-section">
        <div className="container">
          <div className="row">
            <div className="application-cards-section mb-3">
              <h2>Share Cards</h2>
            </div>
            <div className="row">
              {users.map((user) => renderUserProfileCard(user))}
            </div>
          </div>
        </div>
      </div>
      <ShareTemplate
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
    </>
  );
};

export default ShareCard;
