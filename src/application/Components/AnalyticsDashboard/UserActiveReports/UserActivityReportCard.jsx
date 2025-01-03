import React, { useEffect, useState } from "react";
import { FiUser } from "react-icons/fi";
import { LuCalendar, LuVideo } from "react-icons/lu";
import { useNavigate } from "react-router-dom";



const UserActivityReportCard = () => {
  const navigate = useNavigate();
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
        console.log("response", response);
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
      title: "Total View",
      value: analyticsData.views.toLocaleString() || "",
      bgColor: "#afa8ff",
      textColor: "#ffffff",
      onClick: (navigate) => navigate("/admin/analyticsdashboad/allusersview"),
    },
    {
      icon: FiUser,
      title: "Unique Visitor",
      value: analyticsData.uniqueVisitors.toLocaleString() || "",
      bgColor: "#ffa0a9",
      textColor: "#ffffff",
      onClick: (navigate) => navigate("/admin/analyticsdashboad/uniquevisitors"),
    },
    {
      icon: LuVideo,
      title: "Numbers of Shares",
      value: analyticsData.shares.total.toLocaleString() || "",
      bgColor: "#ffcb64",
      textColor: "#ffffff",
      onClick: (navigate) => navigate("/admin/analyticsdashboad/numberofshares"),
    },
  ];

  return (
    <div className="container">
      <div className="row">
        {cardData?.map(
          (
            { icon: Icon, title, value, bgColor, textColor, onClick },
            index
          ) => (
            <div
              key={index}
              className="col-lg-4 mb-4"
              onClick={() => onClick && onClick(navigate)}
              style={{ cursor: onClick ? "pointer" : "default" }}
            >
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
                  { value === "" ? <h2 className="cards-title mb-0">...</h2> :
                    <h2 className="cards-title mb-0">{value}</h2>
                  }
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

export default UserActivityReportCard;
