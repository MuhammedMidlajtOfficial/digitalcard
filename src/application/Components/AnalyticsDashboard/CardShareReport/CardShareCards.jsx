import React, {useEffect, useState} from "react";
import { FiUser } from "react-icons/fi";
import { LuCalendar, LuVideo } from "react-icons/lu";


const CardShareCards = () => {
  const [analyticsData, setAnalyticsData] = useState({
    views: 0,
    uniqueVisitors: 0,
    shares: {
      total: 0,
      viewed: 0,
      unviewed: 0,
    },
    clicks: 0,
    clickThroughRate: "0.00",
  });

  useEffect(() => {
    const fetchAnalyticsData = async () => {
      try {
        const response = await fetch(
          "https://diskuss-1mv4.onrender.com/api/v1/analytic/all?userId=6731d544ae68862f6cd0e6ad&period=week"
        );
        const data = await response.json();
        setAnalyticsData(data);
      } catch (error) {
        console.error("Error fetching analytics data: ", error);
      }
    };

    fetchAnalyticsData();
  }, []);

  const cardData = [
    {
      icon: LuCalendar,
      title: "Total Share",
      value: analyticsData.shares.total.toLocaleString() || "",
      bgColor: "#afa8ff",
      textColor: "#ffffff",
    },
    {
      icon: FiUser,
      title: "Viewed Shares",
      value: analyticsData.shares.viewed.toLocaleString() || "",
      bgColor: "#ffa0a9",
      textColor: "#ffffff",
    },
    {
      icon: LuVideo,
      title: "Unviewed Shares",
      value: analyticsData.shares.unviewed.toLocaleString() || "",
      bgColor: "#ffcb64",
      textColor: "#ffffff",
    },
  ];
  

  return (
    <div className="container">
      <div className="row">
        {cardData.map(
          (
            { icon: Icon, title, value, bgColor, textColor, onClick },
            index
          ) => (
            <div className="col-lg-4 mb-4">
              <div className="application-dashboard-card">
                <div className="card-body d-flex align-items-center">
                  <div
                    className="icon-wrapper p-2 rounded-circle me-3"
                    style={{ backgroundColor: bgColor, color: textColor }}
                  >
                    <Icon className="" size={22} />
                  </div>
                  <div>
                    <h6 className="cards-subtitle mb-2">{title}</h6>
                    <h2 className="cards-title mb-0">{value}</h2>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default CardShareCards;
