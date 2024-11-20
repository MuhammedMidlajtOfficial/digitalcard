import React from "react";
import user from "../../../Assets/Images/card.png";
import user1 from "../../../Assets/Images/card2.png";
import user2 from "../../../Assets/Images/card3.png";
import { RiDeleteBinLine } from "react-icons/ri";
const DeleteCards = () => {
  const users = [
    {
      id: 1,
      image: user,
      name: "John Doe",
      memberTag: "Silver Member",
    },
    {
      id: 2,
      image: user1,
      name: "Jane Smith",
      memberTag: "Platinum Member",
    },
    {
      id: 3,
      image: user2,
      name: "Emma Brown",
      memberTag: "Gold Member",
    },
    {
      id: 4,
      image: user1,
      name: "Emma Brown",
      memberTag: "Gold Member",
    },
    {
      id: 5,
      image: user2,
      name: "Emma Brown",
      memberTag: "Gold Member",
    },
    {
      id: 6,
      image: user,
      name: "John Doe",
      memberTag: "Silver Member",
    },
    {
      id: 7,
      image: user,
      name: "Cameron Williamson",
      memberTag: "Gold Member",
    },
    {
      id: 8,
      image: user2,
      name: "Jane Smith",
      memberTag: "Platinum Member",
    },
    {
      id: 9,
      image: user1,
      name: "Cameron Williamson",
      memberTag: "Gold Member",
    },
  ];

  const renderUserProfileCard = (user) => {
    const { image, name, memberTag } = user;
    let tagClass = "";
    switch (memberTag) {
      case "Gold Member":
        tagClass = "gold-card-tag";
        break;
      case "Silver Member":
        tagClass = "silver-card-tag";
        break;
      case "Platinum Member":
        tagClass = "platinum-card-tag";
        break;
      default:
        tagClass = "default-member-tag";
    }

    return (
      <div className="col-lg-4 mb-4" key={user.id}>
        <div className="application-users-cards">
          <div className="delete-card-container mb-2">
            <button className="cards-delete-btn">
              <RiDeleteBinLine/>
            </button>
          </div>
          <div className="d-flex justify-content-center">
            <img src={image} alt=""/>
          </div>
          <div className="d-flex mt-4 justify-content-between align-items-center">
            <h2>{name}</h2>
            <p className={tagClass}>{memberTag}</p>
          </div>
          <button className="cards-view-btn mt-4">View</button>
        </div>
      </div>
    );
  };
  return (
    <div className="application-delete-cards-section">
      <div className="container">
        <div className="row">
          <div className="application-cards-section mb-3">
            <h2>Delete Cards</h2>
          </div>
          <div className="row">
            {users.map((user) => renderUserProfileCard(user))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteCards;
