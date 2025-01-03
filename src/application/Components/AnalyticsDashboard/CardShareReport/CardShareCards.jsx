import React, { useEffect, useState } from "react";
import { FiUser } from "react-icons/fi";
import { LuCalendar, LuVideo } from "react-icons/lu";
import axios from "axios";
import axiosInstanceForTicket from "../../../../AxiosContigForTicket";

// const analyticsData = {
//   "views": 0,
//   "uniqueVisitors": 0,
//   "shares": {
//     "total": 0,
//     "viewed": 0,
//     "unviewed": 0
//   },
//   "clicks": 0,
//   "clickThroughRate": "0.00"
// }

const CardShareCards = () => {
  const [cardData, setCardData] = useState([
    {
      icon: LuCalendar,
      title: "Total Users",
      value: "0", // Initial value
      bgColor: "#afa8ff",
      textColor: "#ffffff",
    },
    {
      icon: FiUser,
      title: "Total Shares",
      value: "0", // Initial value
      bgColor: "#ffa0a9",
      textColor: "#ffffff",
    },
    {
      icon: LuVideo,
      title: "Unique Users Sharing",
      value: "0", // Initial value
      bgColor: "#ffcb64",
      textColor: "#ffffff",
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstanceForTicket.get("analytic"); // Example API endpoint
        const { shares } = response.data;
        console.log("shares : ", shares);

        setCardData([
          {
            icon: LuCalendar,
            title: "Total Users",
            value: shares.toatal.toString(), // Convert to string for display
            bgColor: "#afa8ff",
            textColor: "#ffffff",
          },
          {
            icon: FiUser,
            title: "Viewed Shares",
            value: shares.viewed.toString(), // Convert to string for display
            bgColor: "#ffa0a9",
            textColor: "#ffffff",
          },
          {
            icon: LuVideo,
            title: "Unviewd Sharing",
            value: shares.unviewd.toString(), // Convert to string for display
            bgColor: "#ffcb64",
            textColor: "#ffffff",
          },
        ]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {cardData.map(({ icon: Icon, title, value, bgColor, textColor }, index) => (
          <div key={index} className="col-lg-4 mb-4">
            <div className="application-dashboard-card">
              <div className="card-body d-flex align-items-center">
                <div
                  className="icon-wrapper p-2 rounded-circle me-3"
                  style={{ backgroundColor: bgColor, color: textColor }}
                >
                  <Icon size={22} />
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

export default CardShareCards;
