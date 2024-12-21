// import React, { useEffect, useState } from "react";
// import { Pagination, Spin } from "antd"; // Ant Design's Spin for loading indicator
// import axiosInstance from "../../../../AxiosConfig";
// import { AllUsersTableList } from "./AllUsersTableList";
// import { Avatar, Dropdown, Menu } from "antd";
// import { useNavigate } from "react-router-dom";
// import { FiFilter, FiSearch } from "react-icons/fi";
// import { FaPlus } from "react-icons/fa6";
// import { IoIosArrowForward } from "react-icons/io";
// import { TbArrowsDownUp } from "react-icons/tb";
// import { RxGrid } from "react-icons/rx";
// import { LuMenu } from "react-icons/lu";
// import { UserOutlined } from "@ant-design/icons";
// import { useLoading } from "../../../Services/loadingService";
// import { showErrorToast, showSuccessToast } from "../../../Services/toastService";

// const EmployeeLIst = () => {
//   const [isTableView, setIsTableView] = useState(false);
//   const [filter, setFilter] = useState("individualUser");
//   const [sortOrder, setSortOrder] = useState("asc");
//   const [allUser, setAllUser] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [pageSize, setPageSize] = useState(12);
//   const [totalUsers, setTotalUsers] = useState(0);
//   const [searchTerm, setSearchTerm] = useState(""); // State for search term

//   const { loading, startLoading, stopLoading } = useLoading(); // Use the loading state
//   const navigate = useNavigate();

//   const handleTableViewToggle = () => setIsTableView(true);
//   const handleGridViewToggle = () => setIsTableView(false);

//   useEffect(() => {
//     fetchUsers();
//     return () => setAllUser([]); // Clean up on unmount
//   }, [filter, currentPage, pageSize, sortOrder, searchTerm]); // Include searchTerm in dependencies

//   const fetchUsers = () => {
//     startLoading(); // Start loading indicator
//     axiosInstance
//       .get(`/employee/${filter}`, {
//         params: {
//           page: currentPage,
//           pageSize,
//           sortOrder,
//           search: searchTerm, // Pass the search term in the API request
//         },
//       })
//       .then((response) => {
//         setAllUser(response.data.totalUser);
//         setTotalUsers(response.data.totalCount);
//         stopLoading(); // Stop loading when data is fetched
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//         stopLoading(); // Stop loading in case of an error
//       });
//   };

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value); // Update the search term
//     setCurrentPage(1); // Reset to the first page when the search term changes
//   };

//   const handleChangeStatus = (userId) => {
//     startLoading(); // Start loading indicator
//     axiosInstance
//       .get(`/employee/${userId}`)
//       .then((response) => {
//         if(response.status === 200){
//           showSuccessToast(response.data.message);
//           fetchUsers();
//         }
//         stopLoading(); // Stop loading when data is fetched
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//         showErrorToast("Something went wrong. Please try again later");
//         stopLoading(); // Stop loading in case of an error
//       });
//   };

//   const filterMenu = (
//     <Menu onClick={({ key }) => setFilter(key)} selectedKeys={[filter]}>
//       <Menu.Item key="individualUser">Individual User</Menu.Item>
//       <Menu.Item key="enterpriseUser">Enterprise User</Menu.Item>
//       <Menu.Item key="enterpriseEmploye">Enterprise Employee</Menu.Item>
//     </Menu>
//   );

//   const sortMenu = (
//     <Menu onClick={({ key }) => setSortOrder(key)} selectedKeys={[sortOrder]}>
//       <Menu.Item key="asc">
//         ASC <IoIosArrowForward />
//       </Menu.Item>
//       <Menu.Item key="desc">
//         DESC <IoIosArrowForward />
//       </Menu.Item>
//     </Menu>
//   );

//   const renderUserProfileCard = (user) => {
//     const { _id, image, userName, email, phoneNumber, category } = user;
//     return (
//       <div className="col-lg-3 mb-4" key={user._id || user.id}>
//         <div className="application-users-profile-card">
//           <div className="d-flex justify-content-center">
//             <Avatar
//               src={image || null}
//               shape="square"
//               size={68}
//               icon={image ? null : <UserOutlined />}
//             />
//           </div>
//           <h2 className="mt-3">{userName || "N/A"}</h2>
//           <h4>{email}</h4>
//           <h4>{phoneNumber || "N/A"}</h4>
//           <h5>
//             Categories:{" "}
//             {category && category.length ? category.join(", ") : "N/A"}
//           </h5>
//           <div className="d-flex gap-2 mt-2" style={{ width: "100%" }}>
//             <button
//               className="edit-button"
//               onClick={() => navigate(`/admin/usermanagement/editusers/${_id}`)}
//             >
//               Edit
//             </button>
//             <button
//               className="status-button"
//               onClick={() => handleChangeStatus(_id)}
//             >
//               Change Status
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="container">
//       <div className="application-users-section mb-4 d-flex justify-content-between">
//         <h2>View All Users</h2>
//         <button
//           className="add-all-users"
//           onClick={() => navigate("/admin/createEmployee")}
//         >
//           <FaPlus />
//           Add User
//         </button>
//       </div>
//       <div className="d-flex mb-4 flex-lg-row flex-xl-row flex-column justify-content-between gap-4">
//         <div className="search-container">
//           <FiSearch className="search-icon" />
//           <input
//             type="text"
//             placeholder="Search..."
//             className="create-survey-search-input"
//             value={searchTerm} // Bind the input field to the search term
//             onChange={handleSearch} // Trigger search on input change
//           />
//         </div>
//         <div className="search-table-container d-flex gap-4">
//           <Dropdown overlay={filterMenu} trigger={["click"]}>
//             <button className="table-action-btn d-flex gap-2 align-items-center">
//               <span>Filters</span>
//               <FiFilter />
//             </button>
//           </Dropdown>
//           <Dropdown overlay={sortMenu} trigger={["click"]}>
//             <button className="table-action-btn d-flex gap-2 align-items-center">
//               <span>Sort By</span>
//               <TbArrowsDownUp />
//             </button>
//           </Dropdown>
//           <div
//             className="d-flex align-items-center"
//             onClick={handleGridViewToggle}
//           >
//             <RxGrid />
//           </div>
//           <div
//             className="d-flex align-items-center"
//             onClick={handleTableViewToggle}
//           >
//             <LuMenu />
//           </div>
//         </div>
//       </div>
//       {loading ? (
//         <Spin size="large" className="d-flex justify-content-center mt-5" />
//       ) : isTableView ? (
//         <AllUsersTableList
//           allUser={allUser}
//           filter={filter}
//           currentPage={currentPage}
//           pageSize={pageSize}
//           totalUsers={totalUsers}
//           onPaginationChange={(page, size) => {
//             setCurrentPage(page);
//             setPageSize(size);
//           }}
//         />
//       ) : (
//         <div className="row">{allUser?.map(renderUserProfileCard)}</div>
//       )}
//       <div className="d-flex justify-content-center mt-4">
//         <Pagination
//           current={currentPage}
//           pageSize={pageSize}
//           total={totalUsers}
//           onChange={(page, size) => {
//             setCurrentPage(page);
//             setPageSize(size);
//           }}
//           showSizeChanger
//           pageSizeOptions={[12, 24, 60, 120]}
//         />
//       </div>
//     </div>
//   );
// };

// export default EmployeeLIst;
