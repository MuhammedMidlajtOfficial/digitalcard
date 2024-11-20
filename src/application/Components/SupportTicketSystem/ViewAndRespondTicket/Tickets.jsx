import React, { useState } from "react";
import AllTicket from "./AllTicket";
import NewTicket from "./NewTicket";
import Ongoing from "./Ongoing";
import Resolved from "./Resolved";
import { Menu } from "antd";
import { CiSquareChevDown } from "react-icons/ci";

const Tickets = () => {
  const items = [
    {
      label: (
        <span className="d-flex align-items-center">
          <CiSquareChevDown style={{ marginRight: "8px" }} />
          All Tickets
        </span>
      ),
      key: "allTickets",
    },
    {
      label: (
        <span className="d-flex align-items-center">
          <CiSquareChevDown style={{ marginRight: "8px" }} />
          New
        </span>
      ),
      key: "new",
    },
    {
      label: (
        <span className="d-flex align-items-center">
          <CiSquareChevDown style={{ marginRight: "8px" }} />
          On-Going
        </span>
      ),
      key: "ongoing",
    },
    {
      label: (
        <span className="d-flex align-items-center">
          <CiSquareChevDown style={{ marginRight: "8px" }} />
          Resolved
        </span>
      ),
      key: "resolved",
    },
  ];
  // const navigate = useNavigate();

  const [current, setCurrent] = useState("allTickets");

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <div className="container">
      <Menu
        style={{ marginBottom: "30px" }}
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
        className="manage-order-menu"
      />
      {current === "allTickets" && <AllTicket />}
      {current === "new" && <NewTicket />}
      {current === "ongoing" && <Ongoing />}
      {current === "resolved" && <Resolved />}
    </div>
  );
};

export default Tickets;
