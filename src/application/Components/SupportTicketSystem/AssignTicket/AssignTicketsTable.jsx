import React, { useState, useEffect } from "react";
import { Input, Select, Table, Button } from "antd";
import axios from "axios";
import { showErrorToast, showSuccessToast } from "../../../Services/toastService";
import axiosInstanceForTicket from "../../../../AxiosContigForTicket";
import axiosInstance from "../../../../AxiosConfig";
import { response } from "express";

const AssignTicketsTable = () => {
  const [showStatusCard, setShowStatusCard] = useState(false);
  const [assignTicketData, setAssignTicketData] = useState();
  const [assignedUser, setAssignedUser] = useState();
  const [employeeData, setEmployeeData] = useState([]);
  const [showUserList, setShowUserList] = useState(false);
  const [ticketId, setTicketId] = useState();
  const [tickets, setTickets] = useState([]);
  const [newTicketData, setNewTicketData] = useState({
    title: "",
    description: "",
    priority: "",
    createdBy: "",
  });

  useEffect(() => {
    // Set the createdBy field from localStorage when the component mounts
    const userId = localStorage.getItem('userId');
    setNewTicketData((prevState) => ({
      ...prevState,
      createdBy: userId || null,
    }));
  },[])

  const fetchTickets = async () => {
    try {
      const response = await axios.get("http://localhost:2000/api/v1/ticket?status=Open&priority=High&page=1&limit=10");
      setTickets(response.data);
      console.log('fetchTickets',response.data);
    } catch (error) {
      console.error("Error fetching tickets:", error);
    }
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  const handleCreateTicket = async () => {
    // Validation checks
    if (!newTicketData.title.trim()) {
      showErrorToast("Title is required!");
      return;
    }
    if (!newTicketData.description.trim()) {
      showErrorToast("Description is required!");
      return;
    }
    if (!newTicketData.priority.trim()) {
      showErrorToast("Priority is required!");
      return;
    }

    try {
      await axios.post("http://localhost:2000/api/v1/ticket", newTicketData)
        .then(response => {
          showSuccessToast(response.data.message);
        })
        .catch(error => {
          console.error("Error in axios.post:", error);
          showErrorToast(error.message);
        });
      fetchTickets(); // Refresh the ticket list after creating a new ticket
      setNewTicketData({ title: "", description: "", priority: "", createdBy: "", status: "Open" }); // Reset form
    } catch (error) {
      console.error("Error creating ticket:", error);
    }
  };

  const columns = [
    { title: "Ticket Id", dataIndex: "ticketNumber" },
    {
      title: "Category",
      dataIndex: "category",
      render: (category) => category ? category.categoryName : "No Category", // Handle null/undefined category
    },
    { title: "Issue Summary", dataIndex: "description" },
    { title: "Priority", dataIndex: "priority" },
    { title: "Status", dataIndex: "status" },
    {
      title: "Action",
      dataIndex: "action",
      render: (_, record) => {
        return <Button onClick={() => handleAssign(record._id)}>Assign</Button>; // Return the Button JSX
      },
    },
  ];

  const handleAssign = async (id) => {
    setTicketId(id);
    try {
      await axiosInstanceForTicket(`ticket/${id}`)
        .then( response => {
          setAssignTicketData(response.data)
        })
        .catch( error => {
          console.log(error);
        })

      await axiosInstance(`adminAuth/getUserByCategory?category=view-respond-tickets`)
        .then( response => {
          setEmployeeData(response.data.user)
          console.log('setEmployeeData',response.data.user);
        })
        .catch( error => {
          console.log(error);
        })

    } catch (error) {
      console.log('Error from handleAssign-', error);
    }
    setShowStatusCard(true)
  };

  useEffect(() => {
    
    console.log('employeeData-',employeeData);
  }, [employeeData]);

  const priorities = ["High", "Medium", "Low"];

  const FloatingLabelInput = ({ label, value, name, placeholder, disabled, onChange }) => {
    return (
      <div style={{ position: "relative", marginBottom: "20px", width: "100%" }}>
        {/* Label */}
        <label
          htmlFor={name}
          style={{
            position: "absolute",
            top: value ? "0px" : "50%",
            left: "12px",
            fontSize: value ? "12px" : "16px",
            color: "purple",
            background: "white",
            padding: "0 5px",
            transform: "translateY(-50%)",
            transition: "all 0.2s ease",
            pointerEvents: "none",
          }}
        >
          {label}
        </label>
        {/* Input */}
        <input
          id={name}
          type="text"
          value={value || ""}
          name={name}
          placeholder={placeholder}
          disabled={disabled}
          onChange={onChange}
          style={{
            width: "100%",
            padding: "12px",
            // fontSize: "14px",
            border: "1px solid #D3D3D3",
            borderRadius: "5px",
            outline: "none",
            height:"auto"
          }}
        />
      </div>
    );
  };

  // Modal component for displaying ticket assignment
  const Modal = ({ onClose }) => (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "8px",
          minWidth: "500px",
          maxWidth: "500px", // Limit modal width
        }}
      >
        <h3 
          style={{ 
            marginBottom: "25px", 
            fontSize:"20px",
            fontWeight:"bold", 
          }} 
        >
          Assign Ticket
        </h3>

        {/* Ticket Title */}
        <FloatingLabelInput
          label="Title"
          value={assignTicketData?.title}
          name="title"
          disabled
        />
        {/* Ticket Description */}
        <FloatingLabelInput
          label="Description"
          value={assignTicketData?.description}
          name="description"
          disabled
        />
        {/* Ticket Priority */}
        <FloatingLabelInput
          label="Priority"
          value={assignTicketData?.priority}
          name="priority"
          disabled
        />
        {/* Ticket Status */}
        <FloatingLabelInput
          label="Status"
          value={assignTicketData?.status}
          name="status"
          disabled
        />
        <div style={{ position: "relative", marginBottom: "20px", width: "100%" }}>
          {/* Label */}
          <label
            style={{
              position: "absolute",
              top: "0px" ,
              left: "12px",
              zIndex:"2",
              fontSize: "12px",
              color: "purple",
              backgroundColor: "white",
              padding: "0 5px",
              transform: "translateY(-50%)",
              transition: "all 0.2s ease",
              pointerEvents: "none",
            }}
          >
            Employee List
          </label>

          {/* Select Component */}
          <Select
            style={{
              width: "100%",
              fontSize: "16px",
              border: "none",
              borderRadius: "5px",
              outline: "none",
              height: "50px",
            }}
            dropdownStyle={{ boxShadow: "none" }}
            placeholder="Assign..."
            value={assignedUser} 
            onChange={value => setAssignedUser(value)}
          >
          { employeeData?.map(employee => (
            <Select.Option key={employee._id} value={employee._id}>
              {employee.username}
            </Select.Option>
          ))}
          </Select>
        </div>

        <div>
          <Button
            style={{ marginRight: "10px" }}
            type="primary"
            onClick={handleAssignClick}
          >
            Assign Ticket
          </Button>
          <Button onClick={onClose}>Close</Button>
        </div>
      </div>
    </div>
  );

  const handleAssignClick = async() => {
    await axiosInstanceForTicket.patch('/ticket/assignUser',{
      ticketId,
      employeeId:assignedUser,
    })
    .then( response => {
      if (response.status === 200) {
        showSuccessToast(response.data.message)
      }
    })
    .catch(error => {
      console.log(error);
    })
  }

  return (
    <div>
      <div className="application-table-section mb-3">
        <div className="d-flex justify-content-between gap-2 mb-3">
          <h2>Ticket Queue</h2>
          <Button onClick={() => setShowUserList(true)}>Create Ticket</Button>
        </div>

        {/* Create Ticket Form */}
        {showUserList && (
          <div className="create-ticket-form">
            <div>
              <Input
                placeholder="Title"
                value={newTicketData.title}
                onChange={(e) => setNewTicketData({ ...newTicketData, title: e.target.value })}
                style={{ marginBottom:"5px" }}
              />
              <Input.TextArea
                placeholder="Description"
                value={newTicketData.description}
                onChange={(e) => setNewTicketData({ ...newTicketData, description: e.target.value })}
                style={{ marginBottom:"5px" }}
              />
              <Select
                placeholder="Select Priority"
                style={{ width: "auto", marginBottom:"5px" }}
                value={newTicketData.priority || undefined}
                onChange={(value) => setNewTicketData({ ...newTicketData, priority: value })}
              >
                {priorities.map((priority) => (
                  <Select.Option key={priority} value={priority}>
                    {priority}
                  </Select.Option>
                ))}
              </Select>
            </div>
            <div>
              <Button style={{ margin:"5px 5px 20px 0" }} type="primary" onClick={handleCreateTicket}>Submit</Button>
              <Button onClick={() => setShowUserList(false)}>Cancel</Button>
            </div>
          </div>
        )}

        {/* Tickets Table */}
        <Table columns={columns} dataSource={tickets} pagination={false} />
      </div>

      {/* Render the modal if showStatusCard is true */}
      {showStatusCard && <Modal onClose={() => setShowStatusCard(false)} />}
    </div>
  );
};

export default AssignTicketsTable;
