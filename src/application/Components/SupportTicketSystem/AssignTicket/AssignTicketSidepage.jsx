import { Avatar, Badge, DatePicker, Divider, Input, Select } from "antd";
import Search from "antd/es/transfer/search";
import React, { useState } from "react";
import { FaRegFlag } from "react-icons/fa6";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { CloseOutlined, UserOutlined } from "@ant-design/icons";
import John_img from "../../../Assets/Images/John_img.svg";
import { Option } from "antd/es/mentions";
import "../../../Page/SupportTicketing/SupportTicket.css";

const AssignTicketSidepage = ({ onClose, ticket }) => {
  const [showStatusCard, setShowStatusCard] = useState(false);
  const handleCloseStatusCard = () => {
    setShowStatusCard(false);
  };

  const onOk = (value) => {
    console.log("onOk: ", value);
  };
  return (
    <div>
      <div
        className="applied-job-overlay"
        onClick={handleCloseStatusCard}
      ></div>
      <div
        className={`applied-job-view-status-card ${
          showStatusCard ? "show" : ""
        }`}
      >
        <div className="d-flex justify-content-between align-items-center mb-4">
          <Search placeholder="Enter search text" />
          <button onClick={onClose} className="applied-job-close-button">
            <IoClose />
          </button>
        </div>
        <div>
          <p className="AssignTicketTable-p">Owner</p>
          <div className="d-flex gap-3 align-items-center mb-3">
            <Avatar size={44} src={John_img} />
            <p className="AssignTicketTable-p">Navaneethan M</p>
          </div>
        </div>
        <Divider style={{ margin: "0px" }} />
        <div className="mt-3 mb-2">
          <p className="AssignTicketTable-p">Assignee</p>
          <div className="d-flex align-items-center gap-2">
            <Badge>
              <div className="AssignTicket-badge-div">
                <Avatar size={50} icon={<UserOutlined />} />
                <CloseOutlined
                  className="AssignTicket-badge-close"
                  onClick={() => console.log("Close icon clicked")}
                />
              </div>
            </Badge>
            <Badge>
              <div className="AssignTicket-badge-div">
                <Avatar size={50} icon={<UserOutlined />} />
                <CloseOutlined
                  className="AssignTicket-badge-close"
                  onClick={() => console.log("Close icon clicked")}
                />
              </div>
            </Badge>
            <Badge>
              <div className="AssignTicket-badge-div">
                <Avatar size={50} icon={<UserOutlined />} />
                <CloseOutlined
                  className="AssignTicket-badge-close"
                  onClick={() => console.log("Close icon clicked")}
                />
              </div>
            </Badge>
            <Badge>
              <div className="AssignTicket-badge-div">
                <Avatar size={50} icon={<UserOutlined />} />
                <CloseOutlined
                  className="AssignTicket-badge-close"
                  onClick={() => console.log("Close icon clicked")}
                />
              </div>
            </Badge>
            <IoIosAddCircleOutline className="assignTicket-addImage-icon" />
          </div>
        </div>
        <Divider style={{ margin: "0px" }} />
        <div className="assignTicket-previous-div">
          <div className="mt-3 mb-3">
            <p className="AssignTicketTable-p">Due Date</p>
            <DatePicker
              showTime
              onChange={(value, dateString) => {
                console.log("Selected Time: ", value);
                console.log("Formatted Selected Time: ", dateString);
              }}
              onOk={onOk}
            />
          </div>
          <Divider style={{ margin: "0px" }} />
          <div className="mt-3 mb-4">
            <p className="AssignTicketTable-p">Set Priority</p>
            <Select
              className="mt-2 assignTicket-setPriority-dropdown"
              placeholder="High Priority "
              style={{ width: "50%" }}
            >
              <Option value="high">
                <FaRegFlag
                  className="assignTicket-flagIcon"
                  style={{ color: "red" }}
                />
                High Priority
              </Option>
              <Option value="average">
                <FaRegFlag
                  className="assignTicket-flagIcon"
                  style={{ color: "orange" }}
                />
                Average Priority
              </Option>
              <Option value="low">
                <FaRegFlag
                  className="assignTicket-flagIcon"
                  style={{ color: "green" }}
                />
                Low Priority
              </Option>
            </Select>
          </div>
          <Divider style={{ margin: "0px" }} />
          <div className="mt-3 mb-2">
            <h6>Created</h6>
            <p className="AssignTicketTable-p">Dec 9, 2024 8.00 AM</p>
            <h6>Updated</h6>
            <p className="AssignTicketTable-p">Dec 9, 2024 11.00 AM</p>
          </div>
          <Divider style={{ margin: "0px" }} />
          <div>
            <div>
              <Input.TextArea rows={4} placeholder="Add comments" />
            </div>
            <div className="d-flex gap-3 justify-content-end mt-3">
              <button className="cancel-btn">Cancel</button>
              <button className="create-btn">Assign</button>
            </div>
          </div>
        </div>
        <div className="assignTicket-newPage-div">new page</div>
      </div>
    </div>
  );
};

export default AssignTicketSidepage;
