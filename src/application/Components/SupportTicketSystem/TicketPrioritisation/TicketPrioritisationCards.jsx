import React, {useState, useEffect} from "react";
import { BsTicket } from "react-icons/bs";
import {
  LuArrowUpToLine,
  LuArrowRightFromLine,
  LuArrowDownToLine,
} from "react-icons/lu";

// const TicketData = {
//   totalTickets: 5,
//   openTickets: 3,
//   closedTickets: 1,
//   highPriorityTickets: 2,
//   mediumPriorityTickets: 2,
//   lowPriorityTickets: 0
//   }

const TicketPrioritisationCards = () => {
  const [ticketData, setTicketData] = useState({
    totalTickets: 0,
    openTickets: 0,
    closedTickets: 0,
    highPriorityTickets: 0,
    mediumPriorityTickets: 0,
    lowPriorityTickets: 0,
  });
   
  const cardData = [
    {
      icon: BsTicket,
      title: "Total Active Tickets",
      value: ticketData.totalTickets,
      bgColor: "#afa8ff",
      textColor: "#ffffff",
    },
    {
      icon: LuArrowUpToLine,
      title: "High Priority",
      value: ticketData.highPriorityTickets,
      bgColor: "#ffa0a9",
      textColor: "#ffffff",
    },
    {
      icon: LuArrowRightFromLine,
      title: "Medium Priority",
      value: ticketData.mediumPriorityTickets,
      bgColor: "#ffcb64",
      textColor: "#ffffff",
    },
    {
      icon: LuArrowDownToLine,
      title: "Low Priority",
      value: ticketData.lowPriorityTickets,
      bgColor: "#85bbff",
      textColor: "#ffffff",
    },
  ];

  useEffect(() => {
    const fetchTicketStats = async () => {
      try {
        const response = await fetch("https://diskuss-1mv4.onrender.com/api/v1/ticket/stats");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setTicketData(data); // Set fetched categories
      } catch (error) {
        console.error("Error fetching ticket stats:", error);
      }
    };

    fetchTicketStats();
  }, []);
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

export default TicketPrioritisationCards;
