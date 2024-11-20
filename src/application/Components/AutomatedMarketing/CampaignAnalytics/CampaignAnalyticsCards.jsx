import React from "react";
import { BiRepeat } from "react-icons/bi";
import { GrShare } from "react-icons/gr";
import { LuFolderSymlink } from "react-icons/lu";
import { MdMailOutline } from "react-icons/md";

const CampaignAnalyticsCards = () => {
  const cardData = [
    {
      icon: MdMailOutline,
      title: "Total Email/SMS",
      value: "5,000",
      bgColor: "#afa8ff",
      textColor: "#ffffff",
    },
    {
      icon: BiRepeat,
      title: "Delivered ",
      value: "4,999",
      bgColor: "#ffa0a9",
      textColor: "#ffffff",
    },
    {
      icon: GrShare,
      title: "Open rate",
      value: "45%",
      bgColor: "#ffcb64",
      textColor: "#ffffff",
    },
    {
      icon: LuFolderSymlink,
      title: "CTR",
      value: "20%",
      bgColor: "#85bbff",
      textColor: "#ffffff",
    },
  ];
  return (
    <div className="container">
      <div className="row">
        {cardData.map(
          ({ icon: Icon, title, value, bgColor, textColor }, index) => (
            <div key={index} className="col-lg-3 mb-4">
              <div className="application-AssignTicket-card SLA-Tracking-card">
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

export default CampaignAnalyticsCards;
