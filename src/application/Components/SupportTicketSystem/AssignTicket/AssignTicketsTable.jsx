import React, { useEffect, useState } from "react";
import { Avatar, Badge, DatePicker, Divider, Dropdown, Input, Menu, Select, Table, Button } from "antd";
import { FiFilter, FiPlus } from "react-icons/fi";
import { TbArrowsDownUp } from "react-icons/tb";
import axios from "axios";

const AssignTicketsTable = () => {
  const [showStatusCard, setShowStatusCard] = useState(false);
  const [showUserList, setShowUserList] = useState(false);
  const [tickets, setTickets] = useState([]);
  const [newTicketData, setNewTicketData] = useState({
    title: "",
    description: "",
    priority: "",
    createdBy: "6731e31c1637d690957d8e69", // Example user ID
    status: "Open",
  });

  const fetchTickets = async () => {
    try {
      const response = await axios.get("https://diskuss-1mv4.onrender.com/api/v1/ticket?status=Open&priority=High&page=1&limit=10");
      console.log("response : ", response.data);
      setTickets(response.data);
      console.log("tickets : ", tickets);
    } catch (error) {
      console.error("Error fetching tickets:", error);
    }
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  const handleCreateTicket = async () => {
    try {
      await axios.post("https://diskuss-1mv4.onrender.com/api/v1/ticket", newTicketData);
      fetchTickets(); // Refresh the ticket list after creating a new ticket
      setNewTicketData({ title: "", description: "", priority: "", createdBy: "", status: "Open" }); // Reset form
    } catch (error) {
      console.error("Error creating ticket:", error);
    }
  };

  const columns = [
    { title: "Ticket Id", dataIndex: "ticketId" },
    { title: "Category", dataIndex: "category" },
    { title: "Issue Summary", dataIndex: "issueSummary" },
    { title: "Priority", dataIndex: "priority" },
    { title: "SLA Target", dataIndex: "slaTarget" },
    { title: "Status", dataIndex: "status" },
    {
      title: "Action",
      dataIndex: "action",
      render: () => (
        <Button onClick={() => setShowStatusCard(true)}>Assign</Button>
      ),
    },
  ];

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
            <Input
              placeholder="Title"
              value={newTicketData.title}
              onChange={(e) => setNewTicketData({ ...newTicketData, title: e.target.value })}
            />
            <Input.TextArea
              placeholder="Description"
              value={newTicketData.description}
              onChange={(e) => setNewTicketData({ ...newTicketData, description: e.target.value })}
            />
            <Select
              placeholder="Select Priority"
              value={newTicketData.priority}
              onChange={(value) => setNewTicketData({ ...newTicketData, priority: value })}
            >
              <Select.Option value="High">High</Select.Option>
              <Select.Option value="Medium">Medium</Select.Option>
              <Select.Option value="Low">Low</Select.Option>
            </Select>
            <Button type="primary" onClick={handleCreateTicket}>Submit</Button>
            <Button onClick={() => setShowUserList(false)}>Cancel</Button>
          </div>
        )}

        {/* Tickets Table */}
        <Table columns={columns} dataSource={tickets} pagination={false} />
      </div>

      {/* Other components and logic can follow here */}
      
    </div>
  );
};

export default AssignTicketsTable;
