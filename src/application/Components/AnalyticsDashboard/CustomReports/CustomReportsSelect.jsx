import React from "react";
import { Select, Typography } from "antd";
const { Title } = Typography;

const CustomReportsSelect = () => {
  return (
    <div className="row">
      <div className="col-12 custom-col ">
        <Title className="custom-table-title" level={4}>
          Select Report
        </Title>
        <Select
          mode="multiple"
          placeholder="Please select"
          style={{ width: "100%" }}
        />
      </div>
      <div className="col-12 custom-col ">
        <Title className="custom-table-title" level={4}>
          Select Report
        </Title>
        <Select
          mode="multiple"
          placeholder="Please select"
          style={{ width: "100%" }}
        />
      </div>
      <div className="col-12 custom-col ">
        <Title className="custom-table-title" level={4}>
          Select Metrics
        </Title>
        <Select
          mode="multiple"
          placeholder="Please select"
          style={{ width: "100%" }}
        />
      </div>
      <div className="col-12 custom-col-last  d-flex align-items-end justify-content-center ">
        <button className="custom-search-button">Search</button>
      </div>
    </div>
  );
};

export default CustomReportsSelect;
