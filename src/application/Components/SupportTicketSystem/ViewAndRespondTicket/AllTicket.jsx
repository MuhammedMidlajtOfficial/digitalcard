
import React, { useEffect, useState } from "react";
import "./Tickets.css";
import john_img from "../../../Assets/Images/John_img.svg";
import { useNavigate } from "react-router-dom";

import { Spin, Divider, Flex } from "antd"; // Import Spin for loading indicator
import { useLoading } from "../../../Services/loadingService";
import axiosInstanceForTicket from "../../../../AxiosContigForTicket";
import {axiosInstance} from "../../../../AxiosConfig";

const AllTicket = () => {
    const [tickets, setTickets] = useState([]);
    const [user, setUser] = useState({});
    const { loading, startLoading, stopLoading } = useLoading();
    const navigate = useNavigate();

    const fetchTickets = async () => {
      try {
        startLoading(); 
        const userId = sessionStorage.getItem('userId');
        let userData = {}
        await axiosInstance.get(`adminAuth/getSuperAdmin/${userId}`)
          .then(response => {
            setUser(response.data.user)
            userData = response.data.user
          })
          .catch(error =>{
            console.log(error);
          })
          console.log('userData-',userData);
        let response
        if(userData.userType === "Employee"){
          response = await axiosInstanceForTicket(`ticket?userId=${userId}`);
        }
        if(!response){
          response = await axiosInstanceForTicket(`ticket`);
        }
        setTickets(response.data.tickets);
        console.log('response.data.tickets-',response.data.tickets);
      } catch (error) {
        console.error("Error fetching tickets:", error);
      } finally {
        stopLoading();
      }
    };
    
    useEffect(() => {
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
                            <p className="allTickets-p mb-0">{ticket?.createdBy?.username ? ticket.createdBy.username : ticket.createdBy?.companyName}</p>
                            </div>
                            {
                              ticket.status === "Resolved" ?
                              <button className="allTickets-closedticket-button" onClick={() => handleClick(ticket._id)}> Resolved Ticket </button>
                              :
                              <button className="allTickets-openticket-button" onClick={() => handleClick(ticket._id)}> Open Ticket </button>
                            }
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
// import john_img from "../../../Assets/Images/John_img.svg";
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
