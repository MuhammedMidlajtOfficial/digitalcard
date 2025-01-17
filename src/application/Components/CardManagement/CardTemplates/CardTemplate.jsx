import React from "react";
import user from "../../../Assets/Images/card.svg";
import user1 from "../../../Assets/Images/card2.svg";
import user2 from "../../../Assets/Images/card3.svg";
import { useNavigate } from "react-router-dom";
const CardTemplate = () => {
  const navigate = useNavigate();
  const users = [
    {
      id: 1,
      image: user,
      value: "$50",
      memberTag: "Silver Member",
    },
    {
      id: 2,
      image: user1,
      value: "$40",
      memberTag: "Platinum Member",
    },
    {
      id: 3,
      image: user2,
      value: "$60",
      memberTag: "Gold Member",
    },
    {
      id: 4,
      image: user1,
      value: "$10",
      memberTag: "Gold Member",
    },
    {
      id: 5,
      image: user2,
      value: "$25",
      memberTag: "Gold Member",
    },
    {
      id: 6,
      image: user,
      value: "$30",
      memberTag: "Silver Member",
    },
    {
      id: 7,
      image: user,
      value: "$13",
      memberTag: "Gold Member",
    },
    {
      id: 8,
      image: user2,
      value: "$40",
      memberTag: "Platinum Member",
    },
    {
      id: 9,
      image: user1,
      value: "$20",
      memberTag: "Gold Member",
    },
  ];

  const renderUserProfileCard = (user) => {
    const { image, value, memberTag } = user;
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
          <div className="d-flex justify-content-center">
            <img src={image} alt=""/>
          </div>
          <div className="d-flex mt-4 justify-content-between align-items-center">
            <h2>{value}</h2>
            <div className="d-flex gap-3 align-items-center">
              <button className="card-template-view-btn" onClick={()=>navigate('/admin/cardmanagement/viewcardsdata')}>View</button>
              <p className={tagClass}>{memberTag}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="application-delete-cards-section">
      <div className="container">
        <div className="row">
          <div className="application-cards-section mb-3">
            <h2>Card Templates</h2>
          </div>
          <div className="row">
            {users.map((user) => renderUserProfileCard(user))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTemplate;
