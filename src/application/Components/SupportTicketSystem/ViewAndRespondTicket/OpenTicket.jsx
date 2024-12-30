import { Input, Select } from "antd";
import { Option } from "antd/es/mentions";
import React, { useEffect, useState } from  "react";
import { showSuccessMessage } from "../../../../globalConstant";
import { useParams } from "react-router-dom";
import { Spin, Divider, Flex } from "antd"; // Import Spin for loading indicator

import { useLoading } from "../../../Services/loadingService";

const OpenTicket = ({ ticketId }) => {
  // const params = useParams();
  // console.log("Params : " , params)
  const [ticket, setTicket] = useState(null);
  const { loading, startLoading, stopLoading } = useLoading();

  const HandleClick = () => {
    showSuccessMessage("Successfully Replay");
  };


  useEffect(() => {
    startLoading(); // Start loading indicator
    const fetchTicket = async () => {
        try {
            const response = await fetch(`http://13.203.24.247:2000/api/v1/ticket/${ticketId}`);
            // const response = await fetch(`https://diskuss-1mv4.onrender.com/api/v1/ticket/6763df00cdeaa5ae569c2f70`);
            const data = await response.json();
            console.log("data : ", data)
            setTicket(data);
        } catch (error) {
            console.error("Error fetching ticket:", error);
        } finally {
          stopLoading(); // Stop loading regardless of success or error

        }
    };

    fetchTicket();
}, []);


  return (
    <div className="container">
      <h3>Tickets</h3>
      {loading ? ( // Conditional rendering based on loading state
              <Flex align="center" gap="middle">
                <Spin size="large" tip="Loading tickets..." /> 
              </Flex>
            ) : (
            //   <div className="mt-4">
            //   <div className="d-flex justify-content-between">
            //     <div className="d-flex align-items-center gap-2">
            //       <div
            //         style={{
            //           width: "15px",
            //           height: "15px",
            //           backgroundColor: "#F8A534",
            //           borderRadius: "50%",
            //           marginRight: "8px",
            //         }}
            //       />
            //       <div className="allTickets-ticket-title">Ticket# 2023-CS123</div>
            //     </div>
            //     <div>Posted at 12:15 PM</div>
            //   </div>
            //   <div className="mt-4">
            //     <p className="allTickets-ticket-title">
            //       How to deposit money to my portal?
            //     </p>
            //     <p className="allTickets-p">
            //       Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
            //       dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
            //       amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
            //       consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
            //       adipiscing elit.
            //     </p>
            //     <p className="allTickets-p">
            //       Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
            //       dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
            //       amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
            //       consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
            //       adipiscing elit.
            //     </p>
            //     <p className="allTickets-p">
            //       Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
            //       dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
            //       amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
            //       consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
            //       adipiscing elit.
            //     </p>
            //   </div>
            //   <div className="openTicket-reply-to">
            //     <p className="allTickets-ticket-title">Reply to Ticket</p>
            //     <div className="row">
            //       <div className="col-lg-4">
            //         <label for="inputEmail" className="form-label">
            //           Customer Email
            //         </label>
            //         <input
            //           type="text"
            //           className="form-control form_control"
            //           placeholder="Enter Email Id"
            //           id="inputEmail"
            //         />
            //       </div>
            //       <div className="col-lg-4">
            //         <label>Request Ticket Type</label>
            //         <Select
            //           className="mt-2"
            //           placeholder="Deposite issue "
            //           style={{ width: "100%" }}
            //         >
            //           <Option value="electronics">aaa</Option>
            //           <Option value="fashion">bbb</Option>
            //           <Option value="home_appliances">ccc </Option>
            //           <Option value="books">ddd</Option>
            //         </Select>
            //       </div>
            //       <div className="col-lg-4">
            //         <label>Status</label>
            //         <Select
            //           className="mt-2"
            //           placeholder="Ongoing"
            //           style={{ width: "100%" }}
            //         >
            //           <Option value="electronics">Ongoing</Option>
            //           <Option value="fashion">Pending</Option>
            //           <Option value="home_appliances">Completed </Option>
            //         </Select>
            //       </div>
            //     </div>
            //     <div className="row">
            //       <div className="col-lg-12">
            //         <p
            //           style={{ textAlign: "left", color: "000000" }}
            //           className="mb-1 mt-3"
            //         >
            //           Short description
            //         </p>
            //         <Input.TextArea rows={6} placeholder="Short Description" />
            //       </div>
            //     </div>
            //     <div className="mt-3 d-flex justify-content-end">
            //       <button className="create-btn" onClick={HandleClick}>
            //         Submit Reply
            //       </button>
            //     </div>
            //   </div>
            // </div>
            <></>
            
            )}
      {ticket ? 
      <div className="mt-4" key={ticket?._id}>
      <div className="d-flex justify-content-between">
        <div className="d-flex align-items-center gap-2">
          <div
            style={{
              width: "15px",
              height: "15px",
              backgroundColor: "#F8A534",
              borderRadius: "50%",
              marginRight: "8px",
            }}
          />
          <div className="allTickets-ticket-title">Ticket# {ticket?._id}</div>
        </div>
        <div>Posted at {new Date(ticket?.createdAt).toLocaleDateString()} {new Date(ticket?.createdAt).toLocaleTimeString()}</div>
      </div>
      <div className="mt-4">
        <p className="allTickets-ticket-title">
          {ticket?.title}
        </p>
        <p className="allTickets-p">
          {ticket?.description}
        </p>
        {/* <p className="allTickets-p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
          amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </p>
        <p className="allTickets-p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
          amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </p> */}
      </div>
      <div className="openTicket-reply-to">
        <p className="allTickets-ticket-title">Reply to Ticket</p>
        <div className="row">
          <div className="col-lg-4">
            <label for="inputEmail" className="form-label">
              Customer Email
            </label>
            <input
              type="text"
              className="form-control form_control"
              placeholder="Enter Email Id"
              id="inputEmail"
            />
          </div>
          <div className="col-lg-4">
            <label>Request Ticket Type</label>
            <Select
              className="mt-2"
              placeholder="Deposite issue "
              style={{ width: "100%" }}
            >
              <Option value="electronics">aaa</Option>
              <Option value="fashion">bbb</Option>
              <Option value="home_appliances">ccc </Option>
              <Option value="books">ddd</Option>
            </Select>
          </div>
          <div className="col-lg-4">
            <label>Status</label>
            <Select
              className="mt-2"
              placeholder="Ongoing"
              style={{ width: "100%" }}
            >
              <Option value="ongoing">Ongoing</Option>
              <Option value="pending">Pending</Option>
              <Option value="completed">Completed </Option>
            </Select>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <p
              style={{ textAlign: "left", color: "000000" }}
              className="mb-1 mt-3"
            >
              Short description
            </p>
            <Input.TextArea rows={6} placeholder="Short Description" />
          </div>
        </div>
        <div className="mt-3 d-flex justify-content-end">
          <button className="create-btn" onClick={HandleClick}>
            Submit Reply
          </button>
        </div>
      </div>
    </div>
      : 
      <></>}
      
    </div>
  );
};

export default OpenTicket;


 //   <div className="mt-4">
            //   <div className="d-flex justify-content-between">
            //     <div className="d-flex align-items-center gap-2">
            //       <div
            //         style={{
            //           width: "15px",
            //           height: "15px",
            //           backgroundColor: "#F8A534",
            //           borderRadius: "50%",
            //           marginRight: "8px",
            //         }}
            //       />
            //       <div className="allTickets-ticket-title">Ticket# 2023-CS123</div>
            //     </div>
            //     <div>Posted at 12:15 PM</div>
            //   </div>
            //   <div className="mt-4">
            //     <p className="allTickets-ticket-title">
            //       How to deposit money to my portal?
            //     </p>
            //     <p className="allTickets-p">
            //       Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
            //       dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
            //       amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
            //       consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
            //       adipiscing elit.
            //     </p>
            //     <p className="allTickets-p">
            //       Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
            //       dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
            //       amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
            //       consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
            //       adipiscing elit.
            //     </p>
            //     <p className="allTickets-p">
            //       Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
            //       dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
            //       amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
            //       consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
            //       adipiscing elit.
            //     </p>
            //   </div>
            //   <div className="openTicket-reply-to">
            //     <p className="allTickets-ticket-title">Reply to Ticket</p>
            //     <div className="row">
            //       <div className="col-lg-4">
            //         <label for="inputEmail" className="form-label">
            //           Customer Email
            //         </label>
            //         <input
            //           type="text"
            //           className="form-control form_control"
            //           placeholder="Enter Email Id"
            //           id="inputEmail"
            //         />
            //       </div>
            //       <div className="col-lg-4">
            //         <label>Request Ticket Type</label>
            //         <Select
            //           className="mt-2"
            //           placeholder="Deposite issue "
            //           style={{ width: "100%" }}
            //         >
            //           <Option value="electronics">aaa</Option>
            //           <Option value="fashion">bbb</Option>
            //           <Option value="home_appliances">ccc </Option>
            //           <Option value="books">ddd</Option>
            //         </Select>
            //       </div>
            //       <div className="col-lg-4">
            //         <label>Status</label>
            //         <Select
            //           className="mt-2"
            //           placeholder="Ongoing"
            //           style={{ width: "100%" }}
            //         >
            //           <Option value="electronics">Ongoing</Option>
            //           <Option value="fashion">Pending</Option>
            //           <Option value="home_appliances">Completed </Option>
            //         </Select>
            //       </div>
            //     </div>
            //     <div className="row">
            //       <div className="col-lg-12">
            //         <p
            //           style={{ textAlign: "left", color: "000000" }}
            //           className="mb-1 mt-3"
            //         >
            //           Short description
            //         </p>
            //         <Input.TextArea rows={6} placeholder="Short Description" />
            //       </div>
            //     </div>
            //     <div className="mt-3 d-flex justify-content-end">
            //       <button className="create-btn" onClick={HandleClick}>
            //         Submit Reply
            //       </button>
            //     </div>
            //   </div>
            // </div>