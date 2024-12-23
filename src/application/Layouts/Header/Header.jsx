import { useEffect, useState } from "react";
import "../layout.css";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import Swal from "sweetalert2";
import logoutimg from "../../Assets/Images/admin.png";
import { useNavigate } from "react-router-dom";
import { Avatar } from "antd";
import axiosInstance from "../../../AxiosConfig";


const HeaderApplication = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [user, setUser] = useState({});

  const infoUsers = {
    username: user?.username, 
    role: user?.userType,
    image: user?.image
  };

  useEffect(() => {
    const userId = localStorage.getItem('userId'); // Retrieve userId from localStorage
    
    if (!userId) {
      console.error("User ID not found in localStorage");
      navigate("/login"); // Redirect to login if userId is missing
      return;
    }
  
    axiosInstance
      .get(`adminAuth/getSuperAdmin/${userId}`)
      .then((response) => {
        if (response) {
          console.log('response.data.user-',response.data);
          setUser(response.data.user);
        } else {
          console.error("User not found");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [navigate]);

  useEffect(() => {
    console.log('user-',user);
    return () => {
      
    };
  }, []);
  
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
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        localStorage.removeItem("refreshToken");
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
            {/* <button
              type="button"
              aria-controls="navbar-notification"
              aria-expanded="false"
              className="notification-button"
            >
              <MdOutlineNotificationsActive className="notification-icon" />
              <span className="notification-badge">3</span>
            </button> */}
            <div className="d-flex align-items-center gap-2">
              <button
                className="user-image"
                type="button"
                aria-controls="user-menu"
                onClick={toggleDropdown}
                aria-expanded={isDropdownOpen}
              >
                <Avatar size="large" src={infoUsers.image? infoUsers.image : logoutimg} />
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
                  {`${infoUsers.username}`}
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
                      to="/admin/settings"
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
