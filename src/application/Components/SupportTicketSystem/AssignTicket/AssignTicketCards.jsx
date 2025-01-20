import React, { useEffect, useState } from "react";
import { BsTicket } from "react-icons/bs";
import { MdOutlineCancel } from "react-icons/md";
import { TbClockBolt, TbClock } from "react-icons/tb";
import axios from "axios";
import axiosInstanceForTicket from "../../../../AxiosContigForTicket";

const AssignTicketCards = () => {
  const [ticketStats, setTicketStats] = useState({
    totalTickets: 0,
    progressTickets: 0,
    awaitingTickets: 0,
    closedTickets: 0,
  });

  useEffect(() => {
    const fetchTicketStats = async () => {
      try {
        const response = await axiosInstanceForTicket.get("/ticket/stats");
        setTicketStats({
          totalTickets: response.data.totalTickets,
          progressTickets: response.data.onGoingTickets, // Assuming progress tickets are open tickets
          awaitingTickets: response.data.openTickets || 0, // Placeholder if this data is not available
          closedTickets: response.data.closedTickets,
        });
      } catch (error) {
        console.error("Error fetching ticket stats:", error);
      }
    };

    fetchTicketStats();
  }, []);

  const cardData = [
    {
      icon: BsTicket,
      title: "Total Tickets",
      value: ticketStats.totalTickets,
      bgColor: "#afa8ff",
      textColor: "#ffffff",
    },
    {
      icon: TbClockBolt,
      title: "Progress Ticket",
      value: ticketStats.progressTickets,
      bgColor: "#ffa0a9",
      textColor: "#ffffff",
    },
    {
      icon: TbClock,
      title: "Awaiting Tickets",
      value: ticketStats.awaitingTickets,
      bgColor: "#ffcb64",
      textColor: "#ffffff",
    },
    {
      icon: MdOutlineCancel,
      title: "Ticket Closed",
      value: ticketStats.closedTickets,
      bgColor: "#85bbff",
      textColor: "#ffffff",
    },
  ];

  return (
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
                  <Icon size={22} />
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
  );
};

export default AssignTicketCards;
