import { useState } from "react";
import "../layout.css";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import Swal from "sweetalert2";
import logoutimg from "../../Assets/Images/admin.png";
import { useNavigate } from "react-router-dom";
import { Avatar } from "antd";
const HeaderApplication = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const username = JSON.parse(localStorage.getItem("loggedInUserInfo"));

  const infoUsers = {
    userName: username?.user?.username, 
    role: "Admin",
  };

  const handlelogout = () => {
    Swal.fire({
      imageUrl: logoutimg,
      imageWidth: "160px",
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

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };


  return (
    <div style={{ position: "sticky", top: "0", zIndex: "999" }}>
      <nav className="navbar-header">
        {/* <div className="search-container-header">
          <FiSearch className="search-icon" />
          <input type="text" placeholder="Search..." className="search-input" />
        </div> */}
        <div className="d-flex w-100 justify-content-end">
          <div className="d-flex align-items-center gap-2">
            <button
              type="button"
              aria-controls="navbar-notification"
              aria-expanded="false"
              className="notification-button"
            >
              <MdOutlineNotificationsActive className="notification-icon" />
              <span className="notification-badge">3</span>
            </button>
            <div className="d-flex align-items-center gap-2">
              <button
                className="user-image"
                type="button"
                aria-controls="user-menu"
                onClick={toggleDropdown}
                aria-expanded={isDropdownOpen}
              >
                <Avatar size="large" src={logoutimg} />
              </button>
              <div className="user-info">
                <span
                  style={{
                    color: "#ffffff",
                    fontSize: "16px",
                    fontWeight: "600",
                    letterSpacing: "0.5px",
                  }}
                >
                  {`${infoUsers.userName}`}
                </span>
                <br />
                <span className="xl-2">{infoUsers.role}</span>
              </div>

              {isDropdownOpen && (
                <div
                  className="dropdown-menu"
                  role="menu"
                  aria-labelledby="user-menu"
                >
                  <div className="dropdown-menu-items">
                    <Link
                      to="/edit-profile"
                      className="dropdown-item"
                      role="menuitem"
                      tabIndex="0"
                    >
                      Edit Profile
                    </Link>
                    <div
                      className="dropdown-item"
                      role="menuitem"
                      tabIndex="0"
                      onClick={handlelogout}
                    >
                      Log out
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HeaderApplication;
