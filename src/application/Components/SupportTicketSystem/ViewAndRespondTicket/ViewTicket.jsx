import React, { useState } from "react";
import Search from "antd/es/transfer/search";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Dropdown, Menu } from "antd";
import Tickets from "./Tickets";

const ViewTicket = () => {
  const [selectedPriority, setSelectedPriority] = useState("Select Priority");
  const [selectedFilter, setSelectedFilter] = useState("This Week");

  const handleSortMenuClick = (e) => {
    const selectedText =
      e.key === "datePosted"
        ? "New Tickets"
        : e.key === "jobType"
        ? "Ongoing-Tickets"
        : e.key === "employment-type"
        ? "Resolved Tickets"
        : "Select Priority";
    setSelectedPriority(selectedText);
  };

  const handleFilterMenuClick = (e) => {
    const selectedText =
      e.key === "certifications"
        ? "ABC"
        : e.key === "employment-type"
        ? "EFG"
        : "This Week";
    setSelectedFilter(selectedText);
  };

  const sortMenu = (
    <Menu onClick={handleSortMenuClick}>
      <Menu.Item key="datePosted">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            className="view-ticket-circle"
            style={{ backgroundColor: "#3B8AFF", marginRight: "8px" }}
          />
          New Tickets
        </div>
      </Menu.Item>
      <Menu.Item key="jobType">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            className="view-ticket-circle"
            style={{ backgroundColor: "#FAC885", marginRight: "8px" }}
          />
          Ongoing-Tickets
        </div>
      </Menu.Item>
      <Menu.Item key="employment-type">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            className="view-ticket-circle"
            style={{ backgroundColor: "#54C104", marginRight: "8px" }}
          />
          Resolved Tickets
        </div>
      </Menu.Item>
    </Menu>
  );

  const filterMenu = (
    <Menu onClick={handleFilterMenuClick}>
      <Menu.Item key="certifications">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            className="view-ticket-circle"
            style={{ backgroundColor: "#3B8AFF", marginRight: "8px" }}
          />
          ABC
        </div>
      </Menu.Item>
      <Menu.Item key="employment-type">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            className="view-ticket-circle"
            style={{ backgroundColor: "#FAC885", marginRight: "8px" }}
          />
          EFG
        </div>
      </Menu.Item>
      <Menu.Item key="employment-type">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            className="view-ticket-circle"
            style={{ backgroundColor: "#54c104", marginRight: "8px" }}
          />
          HIJ
        </div>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="container">
      <h4 className="RBACPermission-list-heading mb-2">Tickets</h4>
      <div className="d-flex mb-4 flex-lg-row flex-xl-row flex-column justify-content-between gap-4">
        <div>
          <Search placeholder="Enter search text" />
        </div>
        <div className="d-flex gap-2">
          <Dropdown overlay={sortMenu} trigger={["click"]}>
            <button className="d-flex gap-2 align-items-center supportticket-viewTicket-filters-buttons">
              <span>{selectedPriority}</span>
              <MdKeyboardArrowDown />
            </button>
          </Dropdown>
          <Dropdown overlay={filterMenu} trigger={["click"]}>
            <button className="d-flex gap-2 align-items-center supportticket-viewTicket-filters-buttons">
              <span>{selectedFilter}</span>
              <MdKeyboardArrowDown />
            </button>
          </Dropdown>
        </div>
      </div>
      <Tickets />
    </div>
  );
};

export default ViewTicket;
