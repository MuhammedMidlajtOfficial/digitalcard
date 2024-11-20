
import React from "react";
import CustomReportsSelect from "./CustomReportsSelect";
import { CustomReportsTable } from "./CustomReportsTable";
const CustomReportsIndex = () => {
  return (
    <div className="custom-report-static">
      <div className="container">
        <div className="row">
          <CustomReportsSelect />
          <CustomReportsTable />
        </div>
      </div>
    </div>
  );
};

export default CustomReportsIndex;
