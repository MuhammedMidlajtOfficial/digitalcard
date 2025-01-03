import { Input, Select } from "antd";
import { Option } from "antd/es/mentions";
import React, { useEffect, useState } from  "react";
import { showErrorMessage, showSuccessMessage } from "../../../../globalConstant";
import { useNavigate, useParams } from "react-router-dom";
import { Spin, Divider, Flex } from "antd"; // Import Spin for loading indicator

import { useLoading } from "../../../Services/loadingService";
import axiosInstanceForTicket from "../../../../AxiosContigForTicket";
import { showErrorToast } from "../../../Services/toastService";

const OpenTicket = ({ ticketId }) => {
  const navigate = useNavigate()
  const [ticket, setTicket] = useState(null);
  const [submitTicket, setSubmitTicket] = useState({
    status:"",
    replayDescription:""
  });
  const { loading, startLoading, stopLoading } = useLoading();

  const HandleSubmitClick = async () => {
    if (submitTicket.status !== "Resolved") {
      return showErrorToast("Status must be Resolved");
    } 
    if (!submitTicket.replayDescription.trim()) {
      return showErrorToast("Please add Description");
    } 

    const userId = localStorage.getItem('userId');

    // Update the replayBy field with the current user ID
    const submitBody = {
      ...submitTicket,
      replayBy: userId,
      ticketId
    };

    await axiosInstanceForTicket.patch('ticket/replay', submitBody)
    .then(response => {
      if (response.status === 200) {
        showSuccessMessage("Reply successfully Sent");
        fetchTicket()
      }
    })
    .catch(error => {
      if (error.response && error.response.data) {
        showErrorMessage(error.response.data.message || "An error occurred while replying.");
      } else {
        showErrorMessage("Server error. Please try again later.");
      }
      console.log(error);
    });
  };

  const fetchTicket = async () => {
    try {
      startLoading(); 
      const response = await axiosInstanceForTicket.get(`ticket/${ticketId}`);
      const data = await response.data;
      console.log("data : ", data)
      setTicket(data);
    } catch (error) {
      console.error("Error fetching ticket:", error);
    } finally {
      stopLoading(); // Stop loading regardless of success or error
    }
  };

  useEffect(() => {
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
        { ticket.status === "Resolved" ?
          <div>Replayed at {new Date(ticket?.replayedTime).toLocaleDateString()} {new Date(ticket?.replayedTime).toLocaleTimeString()}</div>
          : ""
        }
      </div>
      <div className="mt-4">
        <p className="allTickets-ticket-title">
          {ticket?.title}
        </p>
        <p className="allTickets-p">
          {ticket?.description}
        </p>
      </div>
      <div className="openTicket-reply-to mt-2">
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
              value={ticket?.createdBy?.email}
            />
          </div>
          <div className="col-lg-4">
            <label for="inputCategory" className="form-label">
              Request Ticket Category
            </label>
            <input
              type="text"
              className="form-control form_control"
              placeholder="Enter Ticket Category"
              id="inputCategory"
              value={ticket?.category?.categoryName ? ticket?.category?.categoryName : "General" }
            />
          </div>
          { ticket.status === "Resolved" ?
            <div className="col-lg-4">
              <label for="inputStatus" className="form-label">
              Status
              </label>
              <input
                type="text"
                className="form-control form_control"
                placeholder="Enter status"
                id="inputStatus"
                value={ticket.status}
              />
            </div>
          :
          <div className="col-lg-4">
            <label className="form-label">Status</label>
            <Select
              placeholder="Ongoing"
              style={{ width: '100%', height: '38px' }}
              value={submitTicket.status ? submitTicket.status : ticket.status}
              onChange={(value) => {
                setSubmitTicket((prevState) => ({
                  ...prevState,
                  status: value, 
                }));
              }}
            >
              <Option value="In Progress">In Progress</Option>
              <Option value="Resolved">Resolved</Option>
            </Select>
          </div>
          }
        </div>
        <div className="row">
          <div className="col-lg-12">
            <p
              style={{ textAlign: "left", color: "000000" }}
              className="mb-1 mt-3"
            >
              Short description
            </p>
            { ticket.status === "Resolved" ?
              <Input.TextArea 
                rows={6} 
                value={ ticket?.replayDescription ? ticket?.replayDescription : "No Description" }/>
              :
              <Input.TextArea
                rows={6}
                placeholder="Type here..."
                name="replayDescription"
                value={submitTicket.replayDescription}
                onChange={(e) => 
                  setSubmitTicket(prevState => ({
                    ...prevState,
                    replayDescription: e.target.value
                  }))
                }
              />
            }
          </div>
        </div>
        <div className="mt-3 d-flex justify-content-end">
          { ticket.status === "Resolved" ?
            <button className="create-btn mr-4" onClick={() => navigate('/admin/supportticketsystem/viewandrespondticket')} >
              Back
            </button>
          :
            <>
              <button className="cancel-btn mr-4" onClick={() => navigate('/admin/supportticketsystem/viewandrespondticket')}>
                Cancel
              </button>
              <button className="create-btn" onClick={HandleSubmitClick}>
                Submit Reply
              </button>
            </>
          }
        </div>
      </div>
    </div>
      : 
      <></>}
      
    </div>
  );
};

export default OpenTicket;
