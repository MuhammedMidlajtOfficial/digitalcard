
import React, { useEffect, useState } from "react";
import "./Tickets.css";
import john_img from "../../../Assets/Images/John_img.png";
import { useNavigate } from "react-router-dom";

import { Spin, Divider, Flex } from "antd"; // Import Spin for loading indicator
import { useLoading } from "../../../Services/loadingService";

const AllTicket = () => {
    const [tickets, setTickets] = useState([]);
    const { loading, startLoading, stopLoading } = useLoading();
    const navigate = useNavigate();

    // Fetch tickets from the API
    useEffect(() => {
        startLoading(); // Start loading indicator
        const fetchTickets = async () => {
            try {
                const response = await fetch("http://localhost:2000/api/v1/ticket");
                const data = await response.json();
                setTickets(data);
                console.log("data------",response);
            } catch (error) {
                // stopLoading();
                console.error("Error fetching tickets:", error);
            } finally {
                stopLoading(); // Stop loading regardless of success or error
            }
        };
        fetchTickets();
    }, []);

    const handleClick = (ticketId) => {
        navigate(`/admin/supportticketsystem/viewandrespondticket/open-ticket/${ticketId}`);
    };

    return (
        <div className="container">
            {loading ? ( // Conditional rendering based on loading state
              <Flex align="center" gap="middle">
                <Spin size="large" tip="Loading tickets..." /> 
              </Flex>
            ) : (
                (tickets.length === 0) ?
                <p> No Tickets Found </p> :
                tickets?.map((ticket) => (
                    <div className="allTicket-details-div mb-4" key={ticket._id}>
                        <div className="d-flex justify-content-between">
                            <div className="d-flex align-items-center gap-2">
                                <div className="view-ticket-circle" style={{ backgroundColor: ticket.priority === "High" ? "#F8A534" : ticket.priority === "Medium" ? "#3B8AFF" : "#54C104" }} />
                                <div className="allTickets-ticket-title">Ticket# {ticket.ticketNumber}</div>
                                {ticket.priority && 
                                  ticket.priority === "Low" ? 
                                    <div className="allTickets-low-priority-p">{ticket.priority} Priority</div>
                                  : ticket.priority === "Medium" ? 
                                    <div className="allTickets-medium-priority-p">{ticket.priority} Priority</div>
                                    :
                                  <div className="allTickets-high-priority-p">{ticket.priority} Priority</div>

                                }
                            </div>
                            <div>Posted at {new Date(ticket.createdAt).toLocaleTimeString()}</div>
                        </div>
                        <div className="mt-2">
                            <p className="allTickets-p">{ticket.title}</p>
                            <p className="allTickets-p">{ticket.description}</p>
                        </div>
                        <Divider style={{ margin: "0px" }} />
                        <div className="d-flex justify-content-between mt-2">
                            <div className="d-flex gap-2 align-items-center">
                            <img 
                              src={ticket?.createdBy?.image ? ticket?.createdBy?.image : john_img} 
                              alt="" 
                              style={{ 
                                width: "30px", 
                                height: "30px", 
                                borderRadius: "30px", 
                                objectFit: "cover" 
                              }} 
                            />                                
                            <p className="allTickets-p mb-0">{ticket.createdBy.username}</p>
                            </div>
                            <button className="allTickets-openticket-button" onClick={() => handleClick(ticket._id)}> Open Ticket </button>
                        </div>
                    </div>
                ))
            )}

{/* <div className="allTicket-details-div mb-4">
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center gap-2">
            <div
              className="view-ticket-circle"
              style={{ backgroundColor: "#F8A534" }}
            />
            <div className="allTickets-ticket-title">Ticket# 2023-CS123</div>
          </div>
          <div>Posted at 12:15 PM</div>
        </div>
        <div className="mt-2">
          <p className="allTickets-p">How to deposit money to my portal?</p>
          <p className="allTickets-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>
        </div>
        <Divider style={{ margin: "0px" }} />
        <div className="d-flex justify-content-between mt-2">
          <div className="d-flex gap-2 align-items-center">
            <img src={john_img} alt="" style={{ width: "30px" }} />
            <p className="allTickets-p mb-0">John Snow</p>
          </div>
          <button
            className="allTickets-openticket-button"
            onClick={handleClick}
          >
            Open Ticket
          </button>
        </div>
      </div> */}

        </div>
    );
};

export default AllTicket;

// import React from "react";
// import "./Tickets.css";
// import john_img from "../../../Assets/Images/John_img.png";
// import { Divider } from "antd";
// import { useNavigate } from "react-router-dom";

// const AllTicket = () => {
//   const navigate = useNavigate();
//   const handleClick = () => {
//     navigate("/admin/supportticketsystem/viewandrespondticket/open-ticket");
//   };
//   return (
//     <div className="container">
    //   <div className="allTicket-details-div mb-4">
    //     <div className="d-flex justify-content-between">
    //       <div className="d-flex align-items-center gap-2">
    //         <div
    //           className="view-ticket-circle"
    //           style={{ backgroundColor: "#F8A534" }}
    //         />
    //         <div className="allTickets-ticket-title">Ticket# 2023-CS123</div>
    //       </div>
    //       <div>Posted at 12:15 PM</div>
    //     </div>
    //     <div className="mt-2">
    //       <p className="allTickets-p">How to deposit money to my portal?</p>
    //       <p className="allTickets-p">
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
    //         dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
    //         amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
    //         consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
    //         adipiscing elit.
    //       </p>
    //     </div>
    //     <Divider style={{ margin: "0px" }} />
    //     <div className="d-flex justify-content-between mt-2">
    //       <div className="d-flex gap-2 align-items-center">
    //         <img src={john_img} alt="" style={{ width: "30px" }} />
    //         <p className="allTickets-p mb-0">John Snow</p>
    //       </div>
    //       <button
    //         className="allTickets-openticket-button"
    //         onClick={handleClick}
    //       >
    //         Open Ticket
    //       </button>
    //     </div>
    //   </div>
//       <div className="allTicket-details-div mb-4">
//         <div className="d-flex justify-content-between">
//           <div className="d-flex align-items-center gap-2">
//             <div
//               className="view-ticket-circle"
//               style={{ backgroundColor: "#3B8AFF" }}
//             />
//             <div className="allTickets-ticket-title">Ticket# 2023-CS123</div>
//             <div className="allTickets-priority-p">High Priority</div>
//           </div>
//           <div>Posted at 12:15 PM</div>
//         </div>
//         <div className="mt-2">
//           <p className="allTickets-p">How to deposit money to my portal?</p>
//           <p className="allTickets-p">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
//             dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
//             amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
//             consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
//             adipiscing elit.
//           </p>
//         </div>
//         <Divider style={{ margin: "0px" }} />
//         <div className="d-flex justify-content-between mt-2">
//           <div className="d-flex gap-2 align-items-center">
//             <img src={john_img} alt="" style={{ width: "30px" }} />
//             <p className="allTickets-p mb-0">John Snow</p>
//           </div>
//           <button
//             className="allTickets-openticket-button"
//             onClick={handleClick}
//           >
//             Open Ticket
//           </button>
//         </div>
//       </div>
//       <div className="allTicket-details-div mb-4">
//         <div className="d-flex justify-content-between">
//           <div className="d-flex align-items-center gap-2">
//             <div
//               className="view-ticket-circle"
//               style={{ backgroundColor: "#54C104" }}
//             />
//             <div className="allTickets-ticket-title">Ticket# 2023-CS123</div>
//           </div>
//           <div>Posted at 12:15 PM</div>
//         </div>
//         <div className="mt-2">
//           <p className="allTickets-p">How to deposit money to my portal?</p>
//           <p className="allTickets-p">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
//             dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
//             amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
//             consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
//             adipiscing elit.
//           </p>
//         </div>
//         <Divider style={{ margin: "0px" }} />
//         <div className="d-flex justify-content-between mt-2">
//           <div className="d-flex gap-2 align-items-center">
//             <img src={john_img} alt="" style={{ width: "30px" }} />
//             <p className="allTickets-p mb-0">John Snow</p>
//           </div>
//           <button
//             className="allTickets-openticket-button"
//             onClick={handleClick}
//           >
//             Open Ticket
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AllTicket;
