import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../layout.css";
import {
  FiGrid,
  FiSettings,
  FiLogOut,
  FiChevronDown,
  FiChevronRight,
  FiEdit,
} from "react-icons/fi";
import Swal from "sweetalert2";
import { RiFolderChartFill } from "react-icons/ri";
import { TbCalendarUp, TbCashBanknote, TbReportMedical } from "react-icons/tb";
import { FaChartLine } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { CiBullhorn } from "react-icons/ci";
import { MdOutlineFeedback, MdOutlineContactPage } from "react-icons/md";
import { LuScanFace, LuTicket } from "react-icons/lu";

import { GoBell } from "react-icons/go";

function SidebarApplication() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleMenu = (menu) => {
    setExpandedMenu(expandedMenu === menu ? null : menu);
  };

  const handlelogout = () => {
    Swal.fire({
      title: "Are you sure",
      text: "You want to Logout?",
      showCancelButton: true,
      confirmButtonColor: "#555",
      cancelButtonColor: "#ce1b28",
      confirmButtonText: "Yes, logout me!",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("loggedInUserInfo");
        navigate("/login");
      }
    });
  };
  useEffect(() => {
    const pathToMenuMap = {
      "/admin/dashboard/overview": "dashboard",
      "/admin/dashboard/userstatic": "dashboard",
      "/admin/dashboard/cardshares": "dashboard",
      "/admin/dashboard/recentactivities": "dashboard",
      "/admin/usermanagement/viewallusers": "usermanagement",
      "/admin/usermanagement/editusers": "usermanagement",
      "/admin/usermanagement/deleteusers": "usermanagement",
      "/admin/usermanagement/addusers": "usermanagement",
      "/admin/usermanagement/entepriseusers": "usermanagement",
      "/admin/usermanagement/companyusers/edit": "usermanagement",
      "/admin/usermanagement/entepriseusers/companyusers": "usermanagement",
      "/admin/usermanagement/usercategorization": "usermanagement",
      "/admin/usermanagement/statuscategories": "usermanagement",
      "/admin/cardmanagement/createcard": "cardmanagement",
      "/admin/cardmanagement/editcard": "cardmanagement",
      "/admin/cardmanagement/deletecards": "cardmanagement",
      "/admin/cardmanagement/cardtemplates": "cardmanagement",
      "/admin/cardmanagement/sharecards": "cardmanagement",
      "/admin/ordermanagement/vieworders": "ordermanagement",
      "/admin/ordermanagement/processorders": "ordermanagement",
      "/admin/ordermanagement/orderstatus": "ordermanagement",
      "/admin/ordermanagement/paymentverification": "ordermanagement",
      "/admin/ordermanagement/orderanalystics": "ordermanagement",
      "/admin/analyticsdashboad/useractivityreport": "analyticsdashboard",
      "/admin/analyticsdashboad/cardsharereport": "analyticsdashboard",
      "/admin/analyticsdashboad/exportreports": "analyticsdashboard",
      "/admin/analyticsdashboad/customreports": "analyticsdashboard",
      "/admin/analyticsdashboad/allusersview": "analyticsdashboard",
      "/admin/analyticsdashboad/uniquevisitors": "analyticsdashboard",
      "/admin/analyticsdashboad/numberofshares": "analyticsdashboard",
      "/admin/paymentmanagement/managesubscriptionplan": "paymentmanagement",
      "/admin/paymentmanagement/viewpayments": "paymentmanagement",
      "/admin/paymentmanagement/viewpayments/viewpayerinfo":
        "paymentmanagement",
      "/admin/paymentmanagement/invoicelist": "paymentmanagement",
      "/admin/paymentmanagement/invoicelist/addinvoice": "paymentmanagement",
      "/admin/paymentmanagement/invoicelist/viewinvoice": "paymentmanagement",
      "/admin/paymentmanagement/paymentgateway": "paymentmanagement",
      "/admin/paymentmanagement/renewal-reminders": "paymentmanagement",
      "/admin/paymentmanagement/refundprocess": "paymentmanagement",
      "/admin/paymentmanagement/customerrefundinfo": "paymentmanagement",
      "/admin/supportticketsystem/viewandrespondticket": "supportticketsystem",
      "/admin/supportticketsystem/viewandrespondticket/open-ticket":
        "supportticketsystem",
      "/admin/supportticketsystem/assign-ticket": "supportticketsystem",
      "/admin/supportticketsystem/ticket-categories": "supportticketsystem",
      "/admin/supportticketsystem/sla-tracking": "supportticketsystem",
      "/admin/supportticketsystem/ticket-prioritisation": "supportticketsystem",
      "/admin/rollbasedaccess/rollcreation": "rollbasedaccess",
      "/admin/rollbasedaccess/rbac-permission": "rollbasedaccess",
      "/admin/rollbasedaccess/audit-trails": "rollbasedaccess",
      "/admin/automatedmarketing/campaign-setup": "automatedmarketing",
      "/admin/automatedmarketing/email-sms-template": "automatedmarketing",
      "/admin/automatedmarketing/campaignanalytics": "automatedmarketing",
      "/admin/automatedmarketing/automated-triggers": "automatedmarketing",
      "/admin/userfeedback/create-survey": "userfeedback",
      "/admin/userfeedback/surveylist": "userfeedback",
      "/admin/userfeedback/view-feedback": "userfeedback",
      "/admin/userfeedback/responseanalytics": "userfeedback",
      "/admin/userfeedback/view-response": "userfeedback",
      "/admin/userfeedback/received-surveys": "userfeedback",
      "/admin/userfeedback/view-received-surveys": "userfeedback",
      "/admin/userfeedback/negative-feedbacks": "userfeedback",
      "/admin/referenceinformation/referraltracking": "referenceinformation",
      "/admin/referenceinformation/viewreferraluser": "referenceinformation",
      "/admin/referenceinformation/incentivemanagement": "referenceinformation",
      "/admin/incentivemanagement/incentivereferralview":
        "referenceinformation",
      "/admin/contentmanagemnt/subscriptionplanpage": "contentmanagement",
      "/admin/notificationsystem/usernotificationpage": "notificationsystem",
      "/admin/notificationsystem/adminnotifications": "notificationsystem",
      "/admin/notificationsystem/customizablealerts": "notificationsystem",
    };

    const currentPath = location.pathname;
    const activeMenu = pathToMenuMap[currentPath];

    setExpandedMenu(activeMenu);
  }, [location.pathname]);
  return (
    <>
      <button
        className="toggle-btn-header d-block d-sm-none"
        onClick={toggleSidebar}
      >
        <IoMenu style={{ width: "30px", height: "30px", position: "fixed" }} />
        <span className="visually-hidden">Toggle sidebar</span>
      </button>
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <aside className="sidebar-content">
          <div className="sidebar-header">
            <p>Diskuss</p>
            <button
              className="close-btn d-block d-sm-none"
              onClick={toggleSidebar}
            >
              <IoMdClose />
            </button>
          </div>
          <nav className="sidebar-nav">
            <ul>
              <li>
                <div
                  className={`nav-link ${
                    expandedMenu === "dashboard" ? "active-nav-links" : ""
                  }`}
                  onClick={() => toggleMenu("dashboard")}
                >
                  <span className="d-flex align-items-center justify-content-between">
                    <span className="d-flex align-items-center">
                      <FiGrid className="sidebar-icon" />
                      <span> Dashboard</span>
                    </span>
                    {expandedMenu === "dashboard" ? (
                      <FiChevronDown className="dropdown-icon" />
                    ) : (
                      <FiChevronRight className="dropdown-icon" />
                    )}
                  </span>
                </div>
                <ul
                  className={`sub-menu ${
                    expandedMenu === "dashboard" ? "active" : ""
                  }`}
                >
                  <li className="sub-nav-list">
                    <Link
                      to="/admin/dashboard/overview"
                      className={`sub-nav-link ${
                        location.pathname === "/admin/dashboard/overview"
                          ? "active-sub-link"
                          : ""
                      }`}
                    >
                      Overview
                    </Link>
                  </li>
                  <li className="sub-nav-list">
                    <Link
                      to="/admin/dashboard/userstatic"
                      className={`sub-nav-link ${
                        location.pathname === "/admin/dashboard/userstatic"
                          ? "active-sub-link"
                          : ""
                      }`}
                    >
                      User Statistics
                    </Link>
                  </li>
                  <li className="sub-nav-list">
                    <Link
                      to="/admin/dashboard/cardshares"
                      className={`sub-nav-link ${
                        location.pathname === "/admin/dashboard/cardshares"
                          ? "active-sub-link"
                          : ""
                      }`}
                    >
                      Card Shares
                    </Link>
                  </li>
                  <li className="sub-nav-list">
                    <Link
                      to="/admin/dashboard/recentactivities"
                      className={`sub-nav-link ${
                        location.pathname ===
                        "/admin/dashboard/recentactivities"
                          ? "active-sub-link"
                          : ""
                      }`}
                    >
                      Recent Activities
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <div
                  className={`nav-link ${
                    expandedMenu === "usermanagement" ? "active-nav-links" : ""
                  }`}
                  onClick={() => toggleMenu("usermanagement")}
                >
                  <span className="d-flex align-items-center justify-content-between">
                    <span className="d-flex align-items-center">
                      <RiFolderChartFill className="sidebar-icon" />
                      <span>User Management</span>
                    </span>
                    {expandedMenu === "usermanagement" ? (
                      <FiChevronDown className="dropdown-icon" />
                    ) : (
                      <FiChevronRight className="dropdown-icon" />
                    )}
                  </span>
                </div>
                <ul
                  className={`sub-menu ${
                    expandedMenu === "usermanagement" ? "active" : ""
                  }`}
                >
                  <li className="sub-nav-list">
                    <Link
                      to="/admin/usermanagement/viewallusers"
                      className={`sub-nav-link ${
                        location.pathname ===
                        "/admin/usermanagement/viewallusers"
                          ? "active-sub-link"
                          : ""
                      }`}
                    >
                      View User Profile
                    </Link>
                  </li>
                  <li className="sub-nav-list">
                    <Link
                      to="/admin/usermanagement/deleteusers"
                      className={`sub-nav-link ${
                        location.pathname ===
                        "/admin/usermanagement/deleteusers"
                          ? "active-sub-link"
                          : ""
                      }`}
                    >
                      Delete User Profiles
                    </Link>
                  </li>
                  <li className="sub-nav-list">
                    <Link
                      to="/admin/usermanagement/entepriseusers"
                      className={`sub-nav-link ${
                        location.pathname ===
                        "/admin/usermanagement/entepriseusers"
                          ? "active-sub-link"
                          : ""
                      }`}
                    >
                      Manage Enterprise User
                    </Link>
                  </li>
                  <li className="sub-nav-list">
                    <Link
                      to="/admin/usermanagement/statuscategories"
                      className={`sub-nav-link ${
                        location.pathname ===
                        "/admin/usermanagement/statuscategories"
                          ? "active-sub-link"
                          : ""
                      }`}
                    >
                      Status Categories
                    </Link>
                  </li>
                  <li className="sub-nav-list">
                    <Link
                      to="/admin/usermanagement/usercategorization"
                      className={`sub-nav-link ${
                        location.pathname ===
                        "/admin/usermanagement/usercategorization"
                          ? "active-sub-link"
                          : ""
                      }`}
                    >
                      User Categorization
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <div
                  className={`nav-link ${
                    expandedMenu === "ordermanagement" ? "active-nav-links" : ""
                  }`}
                  onClick={() => toggleMenu("ordermanagement")}
                >
                  <span className="d-flex align-items-center justify-content-between">
                    <span className="d-flex align-items-center">
                      <TbCalendarUp className="sidebar-icon" />
                      <span>Order Management</span>
                    </span>
                    {expandedMenu === "ordermanagement" ? (
                      <FiChevronDown className="dropdown-icon" />
                    ) : (
                      <FiChevronRight className="dropdown-icon" />
                    )}
                  </span>
                </div>
                <ul
                  className={`sub-menu ${
                    expandedMenu === "ordermanagement" ? "active" : ""
                  }`}
                >
                  <li className="sub-nav-list">
                    <Link
                      to="/admin/ordermanagement/vieworders"
                      className={`sub-nav-link ${
                        location.pathname ===
                        "/admin/ordermanagement/vieworders"
                          ? "active-sub-link"
                          : ""
                      }`}
                    >
                      View Orders
                    </Link>
                  </li>
                  <li className="sub-nav-list">
                    <Link
                      to="/admin/ordermanagement/processorders"
                      className={`sub-nav-link ${
                        location.pathname ===
                        "/admin/ordermanagement/processorders"
                          ? "active-sub-link"
                          : ""
                      }`}
                    >
                      Process Orders
                    </Link>
                  </li>
                  {/* <li className="sub-nav-list">
                    <Link
                      to="/admin/ordermanagement/paymentverification"
                      className={`sub-nav-link ${
                        location.pathname ===
                        "/admin/ordermanagement/paymentverification"
                          ? "active-sub-link"
                          : ""
                      }`}
                    >
                      Payment Verification
                    </Link>
                  </li> */}
                  <li className="sub-nav-list">
                    <Link
                      to="/admin/ordermanagement/orderanalystics"
                      className={`sub-nav-link ${
                        location.pathname ===
                        "/admin/ordermanagement/orderanalystics"
                          ? "active-sub-link"
                          : ""
                      }`}
                    >
                      Order Analytics
                    </Link>
                  </li>
                  {/* <li className="sub-nav-list">
                    <Link
                      to="/admin/ordermanagement/orderstatus"
                      className={`sub-nav-link ${
                        location.pathname ===
                        "/admin/ordermanagement/orderstatus"
                          ? "active-sub-link"
                          : ""
                      }`}
                    >
                      Order Status
                    </Link>
                  </li> */}
                </ul>
              </li>
              <li>
                <div
                  className={`nav-link ${
                    expandedMenu === "analyticsdashboard"
                      ? "active-nav-links"
                      : ""
                  }`}
                  onClick={() => toggleMenu("analyticsdashboard")}
                >
                  <span className="d-flex align-items-center justify-content-between">
                    <span className="d-flex align-items-center">
                      <FaChartLine className="sidebar-icon" />
                      <span>Analytics Dashboard</span>
                    </span>
                    {expandedMenu === "analyticsdashboard" ? (
                      <FiChevronDown className="dropdown-icon" />
                    ) : (
                      <FiChevronRight className="dropdown-icon" />
                    )}
                  </span>
                </div>
                <ul
                  className={`sub-menu ${
                    expandedMenu === "analyticsdashboard" ? "active" : ""
                  }`}
                >
                  <li className="sub-nav-list">
                    <Link
                      to="/admin/analyticsdashboad/useractivityreport"
                      className={`sub-nav-link ${
                        location.pathname ===
                        "/admin/analyticsdashboad/useractivityreport"
                          ? "active-sub-link"
                          : ""
                      }`}
                    >
                      User Activity Reports
                    </Link>
                  </li>
                  <li className="sub-nav-list">
                    <Link
                      to="/admin/analyticsdashboad/cardsharereport"
                      className={`sub-nav-link ${
                        location.pathname ===
                        "/admin/analyticsdashboad/cardsharereport"
                          ? "active-sub-link"
                          : ""
                      }`}
                    >
                      Card Shares & Interaction
                    </Link>
                  </li>
                  {/* <li className="sub-nav-list">
                    <Link
                      to="/admin/analyticsdashboad/exportreports"
                      className={`sub-nav-link ${
                        location.pathname ===
                        "/admin/analyticsdashboad/exportreports"
                          ? "active-sub-link"
                          : ""
                      }`}
                    >
                      Export Reports
                    </Link>
                  </li> */}
                </ul>
              </li>
              <li>
                <div
                  className={`nav-link ${
                    expandedMenu === "paymentmanagement"
                      ? "active-nav-links"
                      : ""
                  }`}
                  onClick={() => toggleMenu("paymentmanagement")}
                >
                  <span className="d-flex align-items-center justify-content-between">
                    <span className="d-flex align-items-center">
                      <TbCashBanknote className="sidebar-icon" />
                      <span>Payment Manage</span>
                    </span>
                    {expandedMenu === "paymentmanagement" ? (
                      <FiChevronDown className="dropdown-icon" />
                    ) : (
                      <FiChevronRight className="dropdown-icon" />
                    )}
                  </span>
                </div>
                <ul
                  className={`sub-menu ${
                    expandedMenu === "paymentmanagement" ? "active" : ""
                  }`}
                >
                  <li className="sub-nav-list">
                    <Link
                      to="/admin/paymentmanagement/managesubscriptionplan"
                      className={`sub-nav-link ${
                        location.pathname ===
                        "/admin/paymentmanagement/managesubscriptionplan"
                          ? "active-sub-link"
                          : ""
                      }`}
                    >
                      Manage Subscription Plans
                    </Link>
                  </li>
                  <li className="sub-nav-list">
                    <Link
                      to="/admin/paymentmanagement/viewpayments"
                      className={`sub-nav-link ${
                        location.pathname ===
                        "/admin/paymentmanagement/viewpayments"
                          ? "active-sub-link"
                          : ""
                      }`}
                    >
                      View Payment History
                    </Link>
                  </li>
                  <li className="sub-nav-list">
                    <Link
                      to="/admin/paymentmanagement/invoicelist"
                      className={`sub-nav-link ${
                        location.pathname ===
                        "/admin/paymentmanagement/invoicelist"
                          ? "active-sub-link"
                          : ""
                      }`}
                    >
                      Generate Invoice
                    </Link>
                  </li>
                  <li className="sub-nav-list">
                    <Link
                      to="/admin/paymentmanagement/renewal-reminders"
                      className={`sub-nav-link ${
                        location.pathname ===
                        "/admin/paymentmanagement/renewal-reminders"
                          ? "active-sub-link"
                          : ""
                      }`}
                    >
                      Renewal and reminders
                    </Link>
                  </li>
                  {/* <li className="sub-nav-list">
                    <Link
                      to="/admin/paymentmanagement/paymentgateway"
                      className={`sub-nav-link ${
                        location.pathname ===
                        "/admin/paymentmanagement/paymentgateway"
                          ? "active-sub-link"
                          : ""
                      }`}
                    >
                      Payment Gateway Integration
                    </Link>
                  </li> */}
                  {/* <li className="sub-nav-list">
                    <Link
                      to="/admin/paymentmanagement/refundprocess"
                      className={`sub-nav-link ${
                        location.pathname ===
                        "/admin/paymentmanagement/refundprocess"
                          ? "active-sub-link"
                          : ""
                      }`}
                    >
                      Refund processing
                    </Link>
                  </li> */}
                </ul>
              </li>
              <li>
                <div
                  className={`nav-link ${
                    expandedMenu === "supportticketsystem"
                      ? "active-nav-links"
                      : ""
                  }`}
                  onClick={() => toggleMenu("supportticketsystem")}
                >
                  <span className="d-flex align-items-center justify-content-between">
                    <span className="d-flex align-items-center">
                      <LuTicket className="sidebar-icon" />
                      <span>Support Ticket System</span>
                    </span>
                    {expandedMenu === "supportticketsystem" ? (
                      <FiChevronDown className="dropdown-icon" />
                    ) : (
                      <FiChevronRight className="dropdown-icon" />
                    )}
                  </span>
                </div>
                <ul
                  className={`sub-menu ${
                    expandedMenu === "supportticketsystem" ? "active" : ""
                  }`}
                >
                  <li className="sub-nav-list">
                    <Link
                      to="/admin/supportticketsystem/viewandrespondticket"
                      className={`sub-nav-link ${
                        location.pathname ===
                        "/admin/supportticketsystem/viewandrespondticket"
                          ? "active-sub-link"
                          : ""
                      }`}
                    >
                      View & Respond to Tickets
                    </Link>
                  </li>
                  <li className="sub-nav-list">
                    <Link
                      to="/admin/supportticketsystem/assign-ticket"
                      className={`sub-nav-link ${
                        location.pathname ===
                        "/admin/supportticketsystem/assign-ticket"
                          ? "active-sub-link"
                          : ""
                      }`}
                    >
                      Assign Tickets
                    </Link>
                  </li>
                  <li className="sub-nav-list">
                    <Link
                      to="/admin/supportticketsystem/ticket-categories"
                      className={`sub-nav-link ${
                        location.pathname ===
                        "/admin/supportticketsystem/ticket-categories"
                          ? "active-sub-link"
                          : ""
                      }`}
                    >
                      Ticket Categories
                    </Link>
                  </li>
                  <li className="sub-nav-list">
                    <Link
                      to="/admin/supportticketsystem/sla-tracking"
                      className={`sub-nav-link ${
                        location.pathname ===
                        "/admin/supportticketsystem/sla-tracking"
                          ? "active-sub-link"
                          : ""
                      }`}
                    >
                      SLA Tracking
                    </Link>
                  </li>
                  <li className="sub-nav-list">
                    <Link
                      to="/admin/supportticketsystem/ticket-prioritisation"
                      className={`sub-nav-link ${
                        location.pathname ===
                        "/admin/supportticketsystem/ticket-prioritisation"
                          ? "active-sub-link"
                          : ""
                      }`}
                    >
                      Ticket Prioritization
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <div
                  className={`nav-link ${
                    expandedMenu === "rollbasedaccess" ? "active-nav-links" : ""
                  }`}
                  onClick={() => toggleMenu("rollbasedaccess")}
                >
                  <span className="d-flex align-items-center justify-content-between">
                    <span className="d-flex align-items-center">
                      <LuScanFace className="sidebar-icon" />
                      <span>Roll Based Access</span>
                    </span>
                    {expandedMenu === "rollbasedaccess" ? (
                      <FiChevronDown className="dropdown-icon" />
                    ) : (
                      <FiChevronRight className="dropdown-icon" />
                    )}
                  </span>
                </div>
                <ul
                  className={`sub-menu ${
                    expandedMenu === "rollbasedaccess" ? "active" : ""
                  }`}
                >
                  <li className="sub-nav-list">
                    <Link
                      to="/admin/rollbasedaccess/rollcreation"
                      className={`sub-nav-link ${
                        location.pathname ===
                        "/admin/rollbasedaccess/rollcreation"
                          ? "active-sub-link"
                          : ""
                      }`}
                    >
                      Role creation
                    </Link>
                  </li>
                  <li className="sub-nav-list">
                    <Link
                      to="/admin/rollbasedaccess/rbac-permission"
                      className={`sub-nav-link ${
                        location.pathname ===
                        "/admin/rollbasedaccess/rbac-permission"
                          ? "active-sub-link"
                          : ""
                      }`}
                    >
                      Permission
                    </Link>
                  </li>
                  {/* <li className="sub-nav-list">
                    <Link
                      to="/admin/rollbasedaccess/audit-trails"
                      className={`sub-nav-link ${
                        location.pathname ===
                        "/admin/rollbasedaccess/audit-trails"
                          ? "active-sub-link"
                          : ""
                      }`}
                    >
                      Audit Trails
                    </Link>
                  </li> */}
                </ul>
              </li>
              {/* <li>
                <div
                  className={`nav-link ${
                    expandedMenu === "customerreport" ? "active-nav-links" : ""
                  }`}
                  onClick={() => toggleMenu("customerreport")}
                >
                  <span className="d-flex align-items-center justify-content-between">
                    <span className="d-flex align-items-center">
                      <TbReportMedical className="sidebar-icon" />
                      <span>Customer report</span>
                    </span>
                    {expandedMenu === "customerreport" ? (
                      <FiChevronDown className="dropdown-icon" />
                    ) : (
                      <FiChevronRight className="dropdown-icon" />
                    )}
                  </span>
                </div>
                <ul
                  className={`sub-menu ${
                    expandedMenu === "customerreport" ? "active" : ""
                  }`}
                >
                  <li className="sub-nav-list">
                    <Link
                      to="/"
                      className={`sub-nav-link ${
                        location.pathname === "/" ? "active-sub-link" : ""
                      }`}
                    >
                      Empty
                    </Link>
                  </li>
                </ul>
              </li> */}
              <li>
                <div
                  className={`nav-link ${
                    expandedMenu === "automatedmarketing"
                      ? "active-nav-links"
                      : ""
                  }`}
                  onClick={() => toggleMenu("automatedmarketing")}
                >
                  <span className="d-flex align-items-center justify-content-between">
                    <span className="d-flex align-items-center">
                      <CiBullhorn className="sidebar-icon" />
                      <span>Automated marketing</span>
                    </span>
                    {expandedMenu === "automatedmarketing" ? (
                      <FiChevronDown className="dropdown-icon" />
                    ) : (
                      <FiChevronRight className="dropdown-icon" />
                    )}
                  </span>
                </div>
                <ul
                  className={`sub-menu ${
                    expandedMenu === "automatedmarketing" ? "active" : ""
                  }`}
                >
                  {/* <li className="sub-nav-list">
                    <Link
                      to="/admin/automatedmarketing/campaign-setup"
                      className={`sub-nav-link ${
                        location.pathname ===
                        "/admin/automatedmarketing/campaign-setup"
                          ? "active-sub-link"
                          : ""
                      }`}
                    >
                      Campaign setup
                    </Link>
                  </li> */}
                  <li className="sub-nav-list">
                    <Link
                      to="/admin/automatedmarketing/email-sms-template"
                      className={`sub-nav-link ${
                        location.pathname ===
                        "/admin/automatedmarketing/email-sms-template"
                          ? "active-sub-link"
                          : ""
                      }`}
                    >
                      Email /SMS Templates
                    </Link>
                  </li>
                  {/* <li className="sub-nav-list">
                    <Link
                      to="/admin/automatedmarketing/campaignanalytics"
                      className={`sub-nav-link ${
                        location.pathname ===
                        "/admin/automatedmarketing/campaignanalytics"
                          ? "active-sub-link"
                          : ""
                      }`}
                    >
                      Campaign Analytics
                    </Link>
                  </li>
                  <li className="sub-nav-list">
                    <Link
                      to="/admin/automatedmarketing/automated-triggers"
                      className={`sub-nav-link ${
                        location.pathname ===
                        "/admin/automatedmarketing/automated-triggers"
                          ? "active-sub-link"
                          : ""
                      }`}
                    >
                      Automated Triggers
                    </Link>
                  </li> */}
                </ul>
              </li>
              {/* <li>
                <div
                  className={`nav-link ${
                    expandedMenu === "userfeedback" 
                    ? "active-nav-links"
                    : ""
                  }`}
                  onClick={() => toggleMenu("userfeedback")}
                >
                  <span className="d-flex align-items-center justify-content-between">
                    <span className="d-flex align-items-center">
                      <MdOutlineFeedback className="sidebar-icon" />
                      <span> User Feedback</span>
                    </span>
                    {expandedMenu === "userfeedback" ? (
                      <FiChevronDown className="dropdown-icon" />
                    ) : (
                      <FiChevronRight className="dropdown-icon" />
                    )}
                  </span>
                </div>
                <ul
                  className={`sub-menu ${
                    expandedMenu === "userfeedback" ? "active" : ""
                  }`}
                >
                  <li className="sub-nav-list">
                    <Link
                      to="/admin/userfeedback/surveylist"
                      className={`sub-nav-link ${
                        location.pathname === "/admin/userfeedback/surveylist"
                          ? "active-sub-link"
                          : ""
                      }`}
                    >
                      Create Surveys
                    </Link>
                  </li>
                  <li className="sub-nav-list">
                    <Link
                      to="/admin/userfeedback/view-response"
                      className={`sub-nav-link ${
                        location.pathname ===
                        "/admin/userfeedback/view-response"
                          ? "active-sub-link"
                          : ""
                      }`}
                    >
                      View Responses
                    </Link>
                  </li>
                  <li className="sub-nav-list">
                    <Link
                      to="/admin/userfeedback/responseanalytics"
                      className={`sub-nav-link ${
                        location.pathname === "/admin/userfeedback/responseanalytics" ? "active-sub-link" : ""
                      }`}
                    >
                      Response Analytics
                    </Link>
                  </li>
                </ul>
              </li> */}
              <li>
                <div
                  className={`nav-link ${
                    expandedMenu === "referenceinformation"
                      ? "active-nav-links"
                      : ""
                  }`}
                  onClick={() => toggleMenu("referenceinformation")}
                >
                  <span className="d-flex align-items-center justify-content-between">
                    <span className="d-flex align-items-center">
                      <MdOutlineContactPage className="sidebar-icon" />
                      <span>Reference Information</span>
                    </span>
                    {expandedMenu === "referenceinformation" ? (
                      <FiChevronDown className="dropdown-icon" />
                    ) : (
                      <FiChevronRight className="dropdown-icon" />
                    )}
                  </span>
                </div>
                <ul
                  className={`sub-menu ${
                    expandedMenu === "referenceinformation" ? "active" : ""
                  }`}
                >
                  <li className="sub-nav-list">
                    <Link
                      to="/admin/referenceinformation/referraltracking"
                      className={`sub-nav-link ${
                        location.pathname ===
                        "/admin/referenceinformation/referraltracking"
                          ? "active-sub-link"
                          : ""
                      }`}
                    >
                      Referral Tracking
                    </Link>
                  </li>
                  <li className="sub-nav-list">
                    <Link
                      to="/admin/referenceinformation/incentivemanagement"
                      className={`sub-nav-link ${
                        location.pathname ===
                        "/admin/referenceinformation/incentivemanagement"
                          ? "active-sub-link"
                          : ""
                      }`}
                    >
                      Incentive Management
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <div
                  className={`nav-link ${
                    expandedMenu === "contentmanagement"
                      ? "active-nav-links"
                      : ""
                  }`}
                  onClick={() => toggleMenu("contentmanagement")}
                >
                  <span className="d-flex align-items-center justify-content-between">
                    <span className="d-flex align-items-center">
                      <FiEdit className="sidebar-icon" />
                      <span>Content Management</span>
                    </span>
                    {expandedMenu === "contentmanagement" ? (
                      <FiChevronDown className="dropdown-icon" />
                    ) : (
                      <FiChevronRight className="dropdown-icon" />
                    )}
                  </span>
                </div>
                <ul
                  className={`sub-menu ${
                    expandedMenu === "contentmanagement" ? "active" : ""
                  }`}
                >
                  <li className="sub-nav-list">
                    <Link
                      to="/admin/contentmanagemnt/subscriptionplanpage"
                      className={`sub-nav-link ${
                        location.pathname === "/" ? "active-sub-link" : ""
                      }`}
                    >
                      Subscription price
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <div
                  className={`nav-link ${
                    expandedMenu === "notificationsystem"
                      ? "active-nav-links"
                      : ""
                  }`}
                  onClick={() => toggleMenu("notificationsystem")}
                >
                  <span className="d-flex align-items-center justify-content-between">
                    <span className="d-flex align-items-center">
                      <GoBell className="sidebar-icon" />
                      <span>Notification System</span>
                    </span>
                    {expandedMenu === "notificationsystem" ? (
                      <FiChevronDown className="dropdown-icon" />
                    ) : (
                      <FiChevronRight className="dropdown-icon" />
                    )}
                  </span>
                </div>
                <ul
                  className={`sub-menu ${
                    expandedMenu === "notificationsystem" ? "active" : ""
                  }`}
                >
                  <li className="sub-nav-list">
                    <Link
                      to="/admin/notificationsystem/usernotificationpage"
                      className={`sub-nav-link ${
                        location.pathname === "/admin/notificationsystem/usernotificationpage" ? "active-sub-link" : ""
                      }`}
                    >
                      User Notifications
                    </Link>
                  </li>

                  <li className="sub-nav-list">
                    <Link
                      to="/admin/notificationsystem/adminnotifications"
                      className={`sub-nav-link ${
                        location.pathname === "/admin/notificationsystem/adminnotifications" ? "active-sub-link" : ""
                      }`}
                    >
                      Admin Notifications
                    </Link>
                  </li>
                  <li className="sub-nav-list">
                    <Link
                      to="/admin/notificationsystem/customizablealerts"
                      className={`sub-nav-link ${
                        location.pathname === "/admin/notificationsystem/customizablealerts" ? "active-sub-link" : ""
                      }`}
                    >
                      Customizable Alerts
                    </Link>
                  </li>
                  <li className="sub-nav-list">
                    <Link
                      to="/admin/notificationsystem/sendnotifications"
                      className={`sub-nav-link ${
                        location.pathname === "/admin/notificationsystem/sendnotifications" ? "active-sub-link" : ""
                      }`}
                    >
                      Send Notification
                    </Link>
                  </li>
                </ul>
              </li>
              <div className="line-dashed"></div>
              <li>
                <Link
                  to="/admin/settings"
                  className={`nav-link ${
                    location.pathname === "/admin/settings"
                      ? "active-nav-links"
                      : ""
                  }`}
                >
                  <FiSettings className="sidebar-icon" /> Settings
                </Link>
              </li>
              <li>
                <Link to="#" className="nav-link" onClick={handlelogout}>
                  <FiLogOut className="sidebar-icon" /> Logout
                </Link>
              </li>
            </ul>
          </nav>
        </aside>
      </div>
    </>
  );
}

export default SidebarApplication;
