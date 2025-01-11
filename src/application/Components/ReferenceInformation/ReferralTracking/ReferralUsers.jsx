import React, { useEffect, useState } from "react";
import { Table, Avatar, Dropdown, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { FiFilter, FiSearch } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import { TbArrowsDownUp } from "react-icons/tb";
import {axiosInstance} from "../../../../AxiosConfig";

export const ReferralUsers = () => {
    const navigate = useNavigate();
    const [referralUsers, setReferralUsers] = useState([]);

    // Fetch referral data from the API
    const fetchReferral = async () => {
        try {
            const response = await axiosInstance.get("/referal/details");
            if (response.status === 200) {
                const data = response.data.map((item) => ({
                    key: item.referralId,
                    date: new Date(item.createdAt).toLocaleDateString(),
                    username: item.referrer?.username || "N/A",
                    email: item.referrer?.email || "N/A",
                    status: item.status,
                    reward: item.referrer?.coins || 0,
                    referredUserName: item.invitee?.username || "N/A",
                }));
                setReferralUsers(data);
            }
        } catch (error) {
            console.error("Error fetching referral data", error);
        }
    };

    useEffect(() => {
        fetchReferral();
    }, []);

    // Filter and sort menus
    const filterMenu = (
        <Menu>
            <Menu.Item key="certifications" className="filter-menu-item">
                Certifications <IoIosArrowForward className="right-arrow" />
            </Menu.Item>
            <Menu.Item key="employment-type" className="filter-menu-item">
                Employment Type <IoIosArrowForward className="right-arrow" />
            </Menu.Item>
        </Menu>
    );

    const sortMenu = (
        <Menu>
            <Menu.Item key="datePosted" className="filter-menu-item">
                Date Posted <IoIosArrowForward className="right-arrow" />
            </Menu.Item>
            <Menu.Item key="jobType" className="filter-menu-item">
                Job Type <IoIosArrowForward className="right-arrow" />
            </Menu.Item>
        </Menu>
    );

    // Table column definitions
    const columns = [
        {
            title: "Date",
            dataIndex: "date",
        },
        {
            title: "Name",
            dataIndex: "username",
            render: (username) => (
                <div className="d-flex align-items-center">
                    <Avatar size={40} className="me-2">
                        {username[0]?.toUpperCase()}
                    </Avatar>
                    {username}
                </div>
            ),
        },
        {
            title: "Email",
            dataIndex: "email",
        },
        {
            title: "Referred Users",
            dataIndex: "referredUserName",
            render: (referredUserName, record) => (
                <div>
                    <div>{referredUserName}</div>
                </div>
            ),
        },
        {
            title: "Status",
            dataIndex: "status",
            render: (status) => (
                <span
                    style={{
                        color:
                            status === "Registered"
                                ? "var(--green-color)"
                                : "var(--danger-color)",
                    }}
                >
                    {status}
                </span>
            ),
        },
        {
            title: "Reward",
            dataIndex: "reward",
            render: (reward) => `₹ ${reward}`,
        },
        {
            title: "Action",
            dataIndex: "action",
            render: (_, record) => (
                <span
                    onClick={() =>
                        navigate("/admin/referenceinformation/viewreferraluser")
                    }
                >
                    <a href="#">View</a>
                </span>
            ),
        },
    ];

    return (
        <div className="container">
            <div className="row">
                <div className="d-flex mb-2 mt-4 flex-lg-row flex-xl-row flex-column justify-content-between gap-4">
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
                    </div>
                </div>

                <div className="col-lg-12">
                    <div className="application-table-section">
                        <h6>Referral Users</h6>
                        <Table
                            columns={columns}
                            dataSource={referralUsers}
                            className="applied-applicants-table overflow-y-auto"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
