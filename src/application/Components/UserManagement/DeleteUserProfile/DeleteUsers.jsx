import React, { useState } from "react";
import user from "../../../Assets/Images/profile.png";
import user1 from "../../../Assets/Images/profile1.png";
import user2 from "../../../Assets/Images/profile2.png";
import user3 from "../../../Assets/Images/profile3.png";
import user4 from "../../../Assets/Images/profile4.png";
import user5 from "../../../Assets/Images/profile5.png";
import user6 from "../../../Assets/Images/profile6.png";
import { useNavigate } from "react-router-dom";
import { FiFilter, FiSearch } from "react-icons/fi";
import { Dropdown, Menu, Avatar } from "antd";
import { IoIosArrowForward } from "react-icons/io";
import { TbArrowsDownUp } from "react-icons/tb";
import { RxGrid } from "react-icons/rx";
import { LuMenu } from "react-icons/lu";
import { DeleteUsersList } from "./DeleteUsersList";
const DeleteUsers = () => {
  const navigate = useNavigate();

  const [isTableView, setIsTableView] = useState(false);

  const handleTableViewToggle = () => {
    setIsTableView(true);
  };
  const handleGridViewToggle = () => {
    setIsTableView(false);
  };

  const filterMenu = (
    <Menu>
      <Menu.Item key="certifications" className="filter-menu-item">
        ABC <IoIosArrowForward className="right-arrow" />
      </Menu.Item>
      <Menu.Item key="employment-type" className="filter-menu-item">
        EFG <IoIosArrowForward className="right-arrow" />
      </Menu.Item>
    </Menu>
  );

  const sortMenu = (
    <Menu>
      <Menu.Item key="datePosted" className="filter-menu-item">
        ABC <IoIosArrowForward className="right-arrow" />
      </Menu.Item>
      <Menu.Item key="jobType" className="filter-menu-item">
        EFG <IoIosArrowForward className="right-arrow" />
      </Menu.Item>
    </Menu>
  );

  const users = [
    {
      id: 1,
      image: user,
      name: "Cameron Williamson",
      memberTag: "Gold Member",
      email: "cameron@gmai.com",
      phone: "+91 94464 64964",
    },
    {
      id: 2,
      image: user1,
      name: "John Doe",
      memberTag: "Silver Member",
      email: "john@gmai.com",
      phone: "+91 94464 64965",
    },
    {
      id: 3,
      image: user2,
      name: "Jane Smith",
      memberTag: "Platinum Member",
      email: "jane@gmai.com",
      phone: "+91 94464 64966",
    },
    {
      id: 4,
      image: user3,
      name: "Emma Brown",
      memberTag: "Gold Member",
      email: "emma@gmai.com",
      phone: "+91 94464 64967",
    },
    {
      id: 5,
      image: user3,
      name: "Emma Brown",
      memberTag: "Gold Member",
      email: "emma@gmai.com",
      phone: "+91 94464 64967",
    },
    {
      id: 6,
      image: user5,
      name: "John Doe",
      memberTag: "Silver Member",
      email: "john@gmai.com",
      phone: "+91 94464 64965",
    },
    {
      id: 7,
      image: user4,
      name: "Cameron Williamson",
      memberTag: "Gold Member",
      email: "cameron@gmai.com",
      phone: "+91 94464 64964",
    },
    {
      id: 8,
      image: user6,
      name: "Jane Smith",
      memberTag: "Platinum Member",
      email: "jane@gmai.com",
      phone: "+91 94464 64966",
    },
  ];

  const renderUserProfileCard = (user) => {
    const { image, name, memberTag, email, phone } = user;
    let tagClass = "";
    switch (memberTag) {
      case "Gold Member":
        tagClass = "gold-member-tag";
        break;
      case "Silver Member":
        tagClass = "silver-member-tag";
        break;
      case "Platinum Member":
        tagClass = "platinum-member-tag";
        break;
      default:
        tagClass = "default-member-tag";
    }

    return (
      <div className="col-lg-4 col-xl-3 mb-4" key={user.id}>
        <div className="application-users-profile-card">
          <div className="d-flex justify-content-center">
            <Avatar src={image} shape="square" size={68} />
          </div>
          <h2 className="mt-3">{name}</h2>
          <div className="d-flex justify-content-center">
            <p className={tagClass}>{memberTag}</p>
          </div>
          <h4>{email}</h4>
          <h4>{phone}</h4>
          <div className="d-flex gap-2 mt-2" style={{ width: "100" }}>
            <button
              className="edit-button"
              onClick={() => navigate("/admin/usermanagement/editusers")}
            >
              Edit
            </button>
            <button className="delete-button">Delete</button>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="application-delete-users-section">
      <div className="container">
        <div className="row">
          <div className="application-users-section mb-3">
            <h2>Delete User Profile</h2>
          </div>
          <div className="d-flex mb-4 flex-lg-row flex-xl-row flex-column justify-content-between gap-4">
          <div className="search-container">
              <FiSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search..."
                className="create-survey-search-input"
              />
            </div>
            <div className="search-table-container d-flex gap-4">
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
              <div
                className="d-flex align-items-center"
                onClick={handleGridViewToggle}
              >
                <RxGrid className="table-card-list" />
              </div>
              <div
                className="d-flex align-items-center"
                onClick={handleTableViewToggle}
              >
                <LuMenu className="table-data-list" />
              </div>
            </div>
          </div>
          {isTableView ? (
            <DeleteUsersList />
          ) : (
            <div className="row">
              {users.map((user) => renderUserProfileCard(user))}
            </div>
          )}{" "}
        </div>
      </div>
    </div>
  );
};

export default DeleteUsers;
