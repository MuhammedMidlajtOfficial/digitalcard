// import React, { useState } from "react";
// import { Dropdown, Menu, Table, Button } from "antd";
// import { IoIosArrowForward } from "react-icons/io";
// import { TbArrowsDownUp } from "react-icons/tb";
// import { FiFilter } from "react-icons/fi";
// import { RiDeleteBinLine } from "react-icons/ri";
// import { useNavigate } from "react-router-dom";
// import { FiSearch } from "react-icons/fi";
// import { LuPlus, LuView } from "react-icons/lu";
// import { IoEllipsisHorizontalSharp } from "react-icons/io5";
// import { FiDownload } from "react-icons/fi";
// import { BillingDownloadForm } from "./BillingDownloadForm";
// export const BillingHistoryTable = () => {
//   const navigate = useNavigate();
//   const [isModalVisible, setIsModalVisible] = useState(false);

//   const filterMenu = (
//     <Menu>
//       <Menu.Item key="certifications" className="filter-menu-item">
//         ABC <IoIosArrowForward className="right-arrow" />
//       </Menu.Item>
//       <Menu.Item key="employment-type" className="filter-menu-item">
//         EFG <IoIosArrowForward className="right-arrow" />
//       </Menu.Item>
//     </Menu>
//   );

//   const sortMenu = (
//     <Menu>
//       <Menu.Item key="datePosted" className="filter-menu-item">
//         ABC <IoIosArrowForward className="right-arrow" />
//       </Menu.Item>
//       <Menu.Item key="jobType" className="filter-menu-item">
//         EFG <IoIosArrowForward className="right-arrow" />
//       </Menu.Item>
//     </Menu>
//   );
//   const actionMenu = (
//     <Menu>
//       <Menu.Item
//         key="view"
//         icon={
//           <LuView
//             style={{
//               color: "var(--gradient-start-color)",
//               cursor: "pointer",
//               fontSize: "18px",
//             }}
//             title="View"
//           />
//         }
//         onClick={() =>
//           navigate("/admin/paymentmanagement/invoicelist/viewinvoice")
//         }
//       >
//         View
//       </Menu.Item>
//       <Menu.Item
//         key="download"
//         icon={
//           <FiDownload
//             style={{
//               color: "var(--green-button-color)",
//               cursor: "pointer",
//               fontSize: "18px",
//             }}
//             title="Download"
//           />
//         }
//         onClick={() => setIsModalVisible(true)}
//       >
//         Download
//       </Menu.Item>
//       <Menu.Item
//         key="delete"
//         icon={
//           <RiDeleteBinLine
//             style={{
//               color: "var(--card-delete-color)",
//               cursor: "pointer",
//               fontSize: "18px",
//             }}
//             title="Delete"
//           />
//         }
//       >
//         Delete
//       </Menu.Item>
//     </Menu>
//   );
//   const columns = [
//     {
//       title: "Invoice No",
//       dataIndex: "invoice",
//     },
//     {
//       title: "Date",
//       dataIndex: "date",
//     },
//     {
//       title: "Username",
//       dataIndex: "username",
//     },
//     {
//       title: "Email ID",
//       dataIndex: "email",
//     },
//     {
//       title: "Contact No",
//       dataIndex: "contact",
//     },
//     {
//       title: "Status",
//       dataIndex: "status",
//       render: (status) => (
//         <span
//           className="table-status-tag"
//           style={{
//             color:
//               status === "Active"
//                 ? "green"
//                 : status === "InActive"
//                 ? "red"
//                 : "black",
//           }}
//         >
//           {status}
//         </span>
//       ),
//     },
//     {
//       title: "Action",
//       dataIndex: "action",
//       render: () => (
//         <Dropdown overlay={actionMenu} trigger={["click"]}>
//           <Button type="text" icon={<IoEllipsisHorizontalSharp />} />
//         </Dropdown>
//       ),
//     },
//   ];

//   const data = [
//     {
//       key: "1",
//       invoice: "#0010",
//       date: "09/12/2024",
//       username: "Siddu M",
//       email: "black@company.com",
//       contact: "1234567890",
//       status: "Active",
//     },
//     {
//       key: "2",
//       invoice: "#0010",
//       date: "09/12/2024",
//       username: "Siddu M",
//       email: "black@company.com",
//       contact: "1234567890",
//       status: "InActive",
//     },
//     {
//       key: "3",
//       invoice: "#0010",
//       date: "09/12/2024",
//       username: "Siddu M",
//       email: "black@company.com",
//       contact: "1234567890",
//       status: "Active",
//     },
//   ];

//   return (
//     <div className="container">
//       <div className=" row">
//         <div className="col-lg-12">
//           <div className="d-flex mb-4 flex-lg-row flex-xl-row flex-column justify-content-between gap-4">
//             <div className="search-container">
//               <FiSearch className="search-icon" />
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 className="create-survey-search-input"
//               />
//             </div>
//             <div className="search-table-container d-flex gap-2">
//               <Dropdown overlay={filterMenu} trigger={["click"]}>
//                 <button className="table-action-btn d-flex gap-2 align-items-center">
//                   <span>Filter</span>
//                   <FiFilter
//                     style={{
//                       fontWeight: 500,
//                       fontSize: "14px",
//                       color: "GrayText",
//                     }}
//                   />
//                 </button>
//               </Dropdown>
//               <Dropdown overlay={sortMenu} trigger={["click"]}>
//                 <button className="table-action-btn d-flex gap-2 align-items-center">
//                   <span>Sort By</span>
//                   <TbArrowsDownUp
//                     style={{
//                       fontWeight: 500,
//                       fontSize: "14px",
//                       color: "GrayText",
//                     }}
//                   />
//                 </button>
//               </Dropdown>
//               <button
//                 className="create-invoice"
//                 onClick={() =>
//                   navigate("/admin/paymentmanagement/invoicelist/addinvoice")
//                 }
//               >
//                 <LuPlus />
//                 {""} Create Invoice
//               </button>
//             </div>
//           </div>
//           <div className="application-table-section">
//             <div className="d-flex gap-4 align-items-center">
//               <h2>Invoice List</h2>
//             </div>
//             <Table
//               columns={columns}
//               dataSource={data}
//               pagination={{ pageSize: 5 }}
//               className="applied-applicants-table overflow-y-auto"
//             />
//           </div>
//         </div>
//         <BillingDownloadForm
//           isModalVisible={isModalVisible}
//           setIsModalVisible={setIsModalVisible}
//         />
//       </div>
//     </div>
//   );
// };



// import React, { useState } from "react";
// import { Dropdown, Menu, Table, Button, DatePicker } from "antd";
// import { IoIosArrowForward } from "react-icons/io";
// import { TbArrowsDownUp } from "react-icons/tb";
// import { FiFilter, FiSearch, FiDownload } from "react-icons/fi";
// import { RiDeleteBinLine } from "react-icons/ri";
// import { useNavigate } from "react-router-dom";
// import { LuPlus, LuView } from "react-icons/lu";
// import { IoEllipsisHorizontalSharp } from "react-icons/io5";
// import { BillingDownloadForm } from "./BillingDownloadForm";

// export const BillingHistoryTable = () => {
//   const navigate = useNavigate();
//   const [isModalVisible, setIsModalVisible] = useState(false);

//   const filterMenu = (
//     <DatePicker.RangePicker
//       onChange={(dates, dateStrings) => {
//         console.log("Selected dates: ", dates, "Formatted dates: ", dateStrings);
//         // Implement filter logic here based on selected date range
//       }}
//       style={{ width: "100%" }}
//     />
//   );

//   const sortMenu = (
//     <Menu>
//       <Menu.Item
//         key="alphabetical"
//         className="filter-menu-item"
//         onClick={() => {
//           console.log("Sorting alphabetically");
//           // Implement sorting logic here based on alphabetical order
//         }}
//       >
//         Alphabetical
//       </Menu.Item>
//     </Menu>
//   );

//   const actionMenu = (
//     <Menu>
//       <Menu.Item
//         key="view"
//         icon={
//           <LuView
//             style={{
//               color: "var(--gradient-start-color)",
//               cursor: "pointer",
//               fontSize: "18px",
//             }}
//             title="View"
//           />
//         }
//         onClick={() =>
//           navigate("/admin/paymentmanagement/invoicelist/viewinvoice")
//         }
//       >
//         View
//       </Menu.Item>
//       {/* <Menu.Item
//         key="download"
//         icon={
//           <FiDownload
//             style={{
//               color: "var(--green-button-color)",
//               cursor: "pointer",
//               fontSize: "18px",
//             }}
//             title="Download"
//           />
//         }
//         onClick={() => setIsModalVisible(true)}
//       >
//         Download
//       </Menu.Item> */}
//       <Menu.Item
//         key="delete"
//         icon={
//           <RiDeleteBinLine
//             style={{
//               color: "var(--card-delete-color)",
//               cursor: "pointer",
//               fontSize: "18px",
//             }}
//             title="Delete"
//           />
//         }
//       >
//         Delete
//       </Menu.Item>
//     </Menu>
//   );

//   const columns = [
//     {
//       title: "Invoice No",
//       dataIndex: "invoice",
//     },
//     {
//       title: "Date",
//       dataIndex: "date",
//     },
//     {
//       title: "Username",
//       dataIndex: "username",
//     },
//     {
//       title: "Email ID",
//       dataIndex: "email",
//     },
//     {
//       title: "Contact No",
//       dataIndex: "contact",
//     },
//     {
//       title: "Status",
//       dataIndex: "status",
//       render: (status) => (
//         <span
//           className="table-status-tag"
//           style={{
//             color:
//               status === "Active"
//                 ? "green"
//                 : status === "InActive"
//                 ? "red"
//                 : "black",
//           }}
//         >
//           {status}
//         </span>
//       ),
//     },
//     {
//       title: "Action",
//       dataIndex: "action",
//       render: () => (
//         <Dropdown overlay={actionMenu} trigger={["click"]}>
//           <Button type="text" icon={<IoEllipsisHorizontalSharp />} />
//         </Dropdown>
//       ),
//     },
//   ];

//   const data = [
//     {
//       key: "1",
//       invoice: "#0010",
//       date: "09/12/2024",
//       username: "kunal M",
//       email: "black@company.com",
//       contact: "1234567890",
//       status: "Active",
//     },
//     {
//       key: "2",
//       invoice: "#0010",
//       date: "09/01/2024",
//       username: "Siddu M",
//       email: "black@company.com",
//       contact: "1234567890",
//       status: "InActive",
//     },
//     {
//       key: "3",
//       invoice: "#0010",
//       date: "09/12/2024",
//       username: "Aiddu M",
//       email: "black@company.com",
//       contact: "1234567890",
//       status: "Active",
//     },
//   ];

//   return (
//     <div className="container">
//       <div className=" row">
//         <div className="col-lg-12">
//           <div className="d-flex mb-4 flex-lg-row flex-xl-row flex-column justify-content-between gap-4">
//             <div className="search-container">
//               <FiSearch className="search-icon" />
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 className="create-survey-search-input"
//               />
//             </div>
//             <div className="search-table-container d-flex gap-2">
//               <Dropdown overlay={filterMenu} trigger={["click"]}>
//                 <button className="table-action-btn d-flex gap-2 align-items-center">
//                   <span>Filter</span>
//                   <FiFilter
//                     style={{
//                       fontWeight: 500,
//                       fontSize: "14px",
//                       color: "GrayText",
//                     }}
//                   />
//                 </button>
//               </Dropdown>
//               <Dropdown overlay={sortMenu} trigger={["click"]}>
//                 <button className="table-action-btn d-flex gap-2 align-items-center">
//                   <span>Sort By</span>
//                   <TbArrowsDownUp
//                     style={{
//                       fontWeight: 500,
//                       fontSize: "14px",
//                       color: "GrayText",
//                     }}
//                   />
//                 </button>
//               </Dropdown>
//               <div className="d-flex align-items-center gap-2">
//                 <button
//                   className="create-invoice"
//                   onClick={() =>
//                     navigate("/admin/paymentmanagement/invoicelist/addinvoice")
//                   }
//                 >
//                   <LuPlus />
//                   {""} Create Invoice
//                 </button>
//                 <FiDownload
//                   style={{
//                     fontSize: "20px",
//                     color: "var(--green-button-color)",
//                     cursor: "pointer",
//                   }}
//                   onClick={() => setIsModalVisible(true)}
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="application-table-section">
//             <div className="d-flex gap-4 align-items-center">
//               <h2>Invoice List</h2>
//             </div>
//             <Table
//               columns={columns}
//               dataSource={data}
//               pagination={{ pageSize: 5 }}
//               className="applied-applicants-table overflow-y-auto"
//             />
//           </div>
//         </div>
//         <BillingDownloadForm
//           isModalVisible={isModalVisible}
//           setIsModalVisible={setIsModalVisible}
//         />
//       </div>
//     </div>
//   );
// };




import React, { useState } from "react";
import { Dropdown, Menu, Table, Button, DatePicker } from "antd";
import { IoIosArrowForward } from "react-icons/io";
import { TbArrowsDownUp } from "react-icons/tb";
import { FiFilter, FiSearch, FiDownload } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { LuPlus, LuView } from "react-icons/lu";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import { BillingDownloadForm } from "./BillingDownloadForm";

export const BillingHistoryTable = () => {
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [filteredData, setFilteredData] = useState([
    {
      key: "1",
      invoice: "#0010",
      date: "09/12/2024",
      username: "Siddu M",
      email: "black@company.com",
      contact: "1234567890",
      status: "Active",
    },
    {
      key: "2",
      invoice: "#0010",
      date: "09/12/2024",
      username: "Siddu M",
      email: "black@company.com",
      contact: "1234567890",
      status: "InActive",
    },
    {
      key: "3",
      invoice: "#0010",
      date: "09/12/2024",
      username: "Siddu M",
      email: "black@company.com",
      contact: "1234567890",
      status: "Active",
    },
  ]);

  const [data, setData] = useState(filteredData);

  const handleFilter = (dates, dateStrings) => {
    if (dates) {
      const [start, end] = dateStrings;
      const filtered = filteredData.filter(
        (row) => row.date >= start && row.date <= end
      );
      setData(filtered);
    } else {
      setData(filteredData); // Reset to original data if no dates are selected
    }
  };

  const handleSort = (order) => {
    const sortedData = [...data].sort((a, b) => {
      if (order === "asc") return a.username.localeCompare(b.username);
      if (order === "desc") return b.username.localeCompare(a.username);
      return 0;
    });
    setData(sortedData);
  };

  const filterMenu = (
    <DatePicker.RangePicker
      onChange={handleFilter}
      style={{ width: "100%" }}
    />
  );

  const sortMenu = (
    <Menu>
      <Menu.Item
        key="asc"
        onClick={() => handleSort("asc")}
      >
        Alphabetical (A-Z)
      </Menu.Item>
      <Menu.Item
        key="desc"
        onClick={() => handleSort("desc")}
      >
        Reverse Alphabetical (Z-A)
      </Menu.Item>
    </Menu>
  );

  const actionMenu = (
    <Menu>
      <Menu.Item
        key="view"
        icon={
          <LuView
            style={{
              color: "var(--gradient-start-color)",
              cursor: "pointer",
              fontSize: "18px",
            }}
            title="View"
          />
        }
        onClick={() =>
          navigate("/admin/paymentmanagement/invoicelist/viewinvoice")
        }
      >
        View
      </Menu.Item>
      <Menu.Item
        key="delete"
        icon={
          <RiDeleteBinLine
            style={{
              color: "var(--card-delete-color)",
              cursor: "pointer",
              fontSize: "18px",
            }}
            title="Delete"
          />
        }
      >
        Delete
      </Menu.Item>
    </Menu>
  );

  const columns = [
    {
      title: "Invoice No",
      dataIndex: "invoice",
    },
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Username",
      dataIndex: "username",
    },
    {
      title: "Email ID",
      dataIndex: "email",
    },
    {
      title: "Contact No",
      dataIndex: "contact",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status) => (
        <span
          className="table-status-tag"
          style={{
            color:
              status === "Active"
                ? "green"
                : status === "InActive"
                ? "red"
                : "black",
          }}
        >
          {status}
        </span>
      ),
    },
    {
      title: "Action",
      dataIndex: "action",
      render: () => (
        <Dropdown overlay={actionMenu} trigger={["click"]}>
          <Button type="text" icon={<IoEllipsisHorizontalSharp />} />
        </Dropdown>
      ),
    },
  ];

  return (
    <div className="container">
      <div className=" row">
        <div className="col-lg-12">
          <div className="d-flex mb-4 flex-lg-row flex-xl-row flex-column justify-content-between gap-4">
            <div className="search-container">
              <FiSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search..."
                className="create-survey-search-input"
              />
            </div>
            <div className="search-table-container d-flex gap-2">
              <Dropdown overlay={filterMenu} trigger={["click"]}>
                <button className="table-action-btn d-flex gap-2 align-items-center">
                  <span>Filter</span>
                  <FiFilter
                    style={{
                      fontWeight: 500,
                      fontSize: "14px",
                      color: "GrayText",
                    }}
                  />
                </button>
              </Dropdown>
              <Dropdown overlay={sortMenu} trigger={["click"]}>
                <button className="table-action-btn d-flex gap-2 align-items-center">
                  <span>Sort By</span>
                  <TbArrowsDownUp
                    style={{
                      fontWeight: 500,
                      fontSize: "14px",
                      color: "GrayText",
                    }}
                  />
                </button>
              </Dropdown>
              <div className="d-flex align-items-center gap-2">
                <button
                  className="create-invoice"
                  onClick={() =>
                    navigate("/admin/paymentmanagement/invoicelist/addinvoice")
                  }
                >
                  <LuPlus />
                  {""} Create Invoice
                </button>
                <FiDownload
                  style={{
                    fontSize: "20px",
                    color: "var(--green-button-color)",
                    cursor: "pointer",
                  }}
                  onClick={() => setIsModalVisible(true)}
                />
              </div>
            </div>
          </div>
          <div className="application-table-section">
            <div className="d-flex gap-4 align-items-center">
              <h2>Invoice List</h2>
            </div>
            <Table
              columns={columns}
              dataSource={data}
              pagination={{ pageSize: 5 }}
              className="applied-applicants-table overflow-y-auto"
            />
          </div>
        </div>
        <BillingDownloadForm
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
        />
      </div>
    </div>
  );
};
