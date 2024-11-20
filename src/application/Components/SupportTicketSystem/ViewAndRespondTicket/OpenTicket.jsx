import { Input, Select } from "antd";
import { Option } from "antd/es/mentions";
import React from "react";
import { showSuccessMessage } from "../../../../globalConstant";

const OpenTicket = () => {
  const HandleClick = () => {
    showSuccessMessage("Successfully Replay");
  };
  return (
    <div className="container">
      <h3>Tickets</h3>
      <div className="mt-4">
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
            <div className="allTickets-ticket-title">Ticket# 2023-CS123</div>
          </div>
          <div>Posted at 12:15 PM</div>
        </div>
        <div className="mt-4">
          <p className="allTickets-ticket-title">
            How to deposit money to my portal?
          </p>
          <p className="allTickets-p">
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
          </p>
          <p className="allTickets-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>
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
                <Option value="electronics">Ongoing</Option>
                <Option value="fashion">Pending</Option>
                <Option value="home_appliances">Completed </Option>
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
    </div>
  );
};

export default OpenTicket;
