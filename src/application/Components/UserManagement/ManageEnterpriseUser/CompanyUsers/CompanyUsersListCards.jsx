
import React, { useState } from "react";
import user from "../../../../Assets/Images/profile.svg";
import user1 from "../../../../Assets/Images/profile1.svg";
import user2 from "../../../../Assets/Images/profile2.svg";
import user3 from "../../../../Assets/Images/profile3.svg";
import user4 from "../../../../Assets/Images/profile4.svg";
import user5 from "../../../../Assets/Images/profile5.svg";
import user6 from "../../../../Assets/Images/profile6.svg";
import { useNavigate } from "react-router-dom";
import { FiFilter, FiSearch } from "react-icons/fi";
import { Dropdown, Menu, Avatar } from "antd";
import { IoIosArrowForward } from "react-icons/io";
import { TbArrowsDownUp } from "react-icons/tb";
import { IoSearch } from "react-icons/io5";
import { RxGrid } from "react-icons/rx";
import { LuMenu } from "react-icons/lu";
import { Input } from "antd";
import { CompanyUsersList } from "./CompanyUsersList";

const CompanyUsersListCards = () => {
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
      email: "cameron@gmai.com",
      phone: "+91 94464 64964",
    },
    {
      id: 2,
      image: user1,
      name: "John Doe",
      email: "john@gmai.com",
      phone: "+91 94464 64965",
    },
    {
      id: 3,
      image: user2,
      name: "Jane Smith",
      email: "jane@gmai.com",
      phone: "+91 94464 64966",
    },
    {
      id: 4,
      image: user3,
      name: "Emma Brown",
      email: "emma@gmai.com",
      phone: "+91 94464 64967",
    },
    {
      id: 5,
      image: user4,
      name: "Chris Johnson",
      email: "chris@gmai.com",
      phone: "+91 94464 64968",
    },
    {
      id: 6,
      image: user5,
      name: "Alex Lee",
      email: "alex@gmai.com",
      phone: "+91 94464 64969",
    },
    {
      id: 7,
      image: user6,
      name: "Emily Davis",
      email: "emily@gmai.com",
      phone: "+91 94464 64970",
    },
    {
      id: 8,
      image: user1,
      name: "John Doe",
      email: "john@gmai.com",
      phone: "+91 94464 64965",
    },
  ];

  const renderUserProfileCard = (user) => {
    const { image, name, email, phone } = user;

    return (
      <div className="col-lg-3 mb-4" key={user.id}>
        <div className="application-users-profile-card">
          <div className="d-flex justify-content-center">
            <Avatar src={image} shape="square" size={68} />
          </div>
          <h2 className="mt-3">{name}</h2>
          <h4>{email}</h4>
          <h4>{phone}</h4>
          <button
            onClick={() =>
              navigate("/admin/usermanagement/companyusers/edit")
            }
            className="mt-2"
          >
            Visit Profile
          </button>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="application-users-section mb-4 d-flex justify-content-between">
        <h2>View Enterprise Users Profiles</h2>
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
        <CompanyUsersList />
      ) : (
        <div className="row">{users.map(renderUserProfileCard)}</div>
      )}{" "}
    </div>
  );
};

export default CompanyUsersListCards;
