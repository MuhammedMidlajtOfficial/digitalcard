import React, { useEffect, useState } from "react";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdOutlinePeople } from "react-icons/md";
import { FaUsersBetweenLines } from "react-icons/fa6";
import axios from "axios";

const RollCreationCard = () => {
  const [cardData, setCardData] = useState([
    { title: "Total Roles", value: "Loading...", bgColor: "#afa8ff", textColor: "#ffffff" },
    { title: "Total Active Roles", value: "Loading...", bgColor: "#ffa0a9", textColor: "#ffffff" },
  ]);

  useEffect(() => {
    const fetchRolesData = async () => {
      try {
        const response = await axios.get("http://localhost:9000/api/v1/employee/roles");
        const roles = response.data;

        const totalRoles = roles.length;
        const totalActive = roles.filter((role) => role.isActive).length;

        const updatedCardData = [
          { title: "Total Roles", value: totalRoles, bgColor: "#afa8ff", textColor: "#ffffff" },
          { title: "Total Active Roles", value: totalActive, bgColor: "#ffa0a9", textColor: "#ffffff" },
        ];

        setCardData(updatedCardData);
      } catch (error) {
        console.error("Error fetching roles data:", error);
      }
    };

    fetchRolesData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {cardData.map(({ title, value, bgColor, textColor }, index) => (
          <div key={index} className="col-lg-4 mb-4">
            <div className="application-AssignTicket-card SLA-Tracking-card">
              <div className="card-body d-flex align-items-center">
                <div
                  className="icon-wrapper p-2 rounded-circle me-3"
                  style={{ backgroundColor: bgColor, color: textColor }}
                >
                  {index === 0 ? (
                    <FaPeopleGroup size={22} />
                  ) : (
                    <MdOutlinePeople size={22} />
                  )}
                </div>
                <div>
                  <h6 className="cards-subtitle mb-2">{title}</h6>
                  <h2 className="cards-title mb-0">{value}</h2>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RollCreationCard;
