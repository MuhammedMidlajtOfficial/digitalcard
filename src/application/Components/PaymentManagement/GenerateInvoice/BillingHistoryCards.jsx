import React from "react";
import { MdOutlineAirplaneTicket } from "react-icons/md";
import { PiNotepad } from "react-icons/pi";
import { TbTicketOff, TbFileX } from "react-icons/tb";

const cardData = [
  {
    icon: MdOutlineAirplaneTicket,
    title: "Total Invoice",
    value: "75",
    bgColor: "#afa8ff",
    textColor: "#ffffff",
  },
  {
    icon: PiNotepad,
    title: "Active invoice",
    value: "15",
    bgColor: "#ffa0a9",
    textColor: "#ffffff",
  },
  {
    icon: TbTicketOff,
    title: "Inactive invoice",
    value: "30",
    bgColor: "#ffcb64",
    textColor: "#ffffff",
  },
  {
    icon: TbFileX,
    title: "Deleted invoice",
    value: "30",
    bgColor: "#85bbff",
    textColor: "#ffffff",
  },
];

const BillingHistoryCards = ({total,active,inactive,deleted}) => {
  cardData[0].value = total;
  cardData[1].value = active;
  cardData[2].value = inactive;
  cardData[3].value = deleted;
  return (
    <div className="container">
      <div className="row">
        {cardData.map(
          ({ icon: Icon, title, value, bgColor, textColor }, index) => (
            <div key={index} className="col-lg-3 mb-4">
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

export default BillingHistoryCards;



// import React from "react";
// import { MdOutlineAirplaneTicket } from "react-icons/md";
// import { PiNotepad } from "react-icons/pi";
// import { TbTicketOff, TbFileX } from "react-icons/tb";

// const cardData = [
//   {
//     icon: MdOutlineAirplaneTicket,
//     title: "Total Invoice",
//     value: "75",
//     bgColor: "linear-gradient(135deg, #7f5eff, #afa8ff)",
//     textColor: "#ffffff",
//   },
//   {
//     icon: PiNotepad,
//     title: "Active Invoice",
//     value: "15",
//     bgColor: "linear-gradient(135deg, #ff757e, #ffa0a9)",
//     textColor: "#ffffff",
//   },
//   {
//     icon: TbTicketOff,
//     title: "Inactive Invoice",
//     value: "30",
//     bgColor: "linear-gradient(135deg, #ffab33, #ffcb64)",
//     textColor: "#ffffff",
//   },
//   {
//     icon: TbFileX,
//     title: "Deleted Invoice",
//     value: "30",
//     bgColor: "linear-gradient(135deg, #649fff, #85bbff)",
//     textColor: "#ffffff",
//   },
// ];

// const BillingHistoryCards = () => {
//   return (
//     <div className="container">
//       <div className="row">
//         {cardData.map(
//           ({ icon: Icon, title, value, bgColor, textColor }, index) => (
//             <div
//               key={index}
//               className="col-lg-3 col-md-6 col-sm-12 mb-4"
//               style={{
//                 display: "flex",
//                 justifyContent: "center",
//               }}
//             >
//               <div
//                 className="application-dashboard-card p-4 text-center rounded shadow-sm"
//                 style={{
//                   background: bgColor,
//                   color: textColor,
//                   transition: "transform 0.3s ease, box-shadow 0.3s ease",
//                   cursor: "pointer",
//                   transform: "translateY(0)",
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.transform = "translateY(-10px)";
//                   e.currentTarget.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.2)";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.transform = "translateY(0)";
//                   e.currentTarget.style.boxShadow = "none";
//                 }}
//               >
//                 <div
//                   className="icon-wrapper p-3 rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center"
//                   style={{
//                     backgroundColor: "rgba(255, 255, 255, 0.3)",
//                     transition: "transform 0.3s ease",
//                   }}
//                 >
//                   <Icon
//                     size={32}
//                     style={{
//                       transition: "transform 0.3s ease",
//                     }}
//                   />
//                 </div>
//                 <h6 className="cards-subtitle mb-2">{title}</h6>
//                 <h2 className="cards-title fw-bold mb-0">{value}</h2>
//               </div>
//             </div>
//           )
//         )}
//       </div>
//     </div>
//   );
// };

// export default BillingHistoryCards;
