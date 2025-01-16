import { useEffect, useState } from "react";
import "../layout.css";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../../AxiosConfig";
import { useSelector } from "react-redux";
import { Avatar, message, List } from 'antd';
import { allAdminRoutes } from "./allAdminRoutes";

const HeaderApplication = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [user, setUser] = useState({});

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredRoutes, setFilteredRoutes] = useState([]);


  const userData = useSelector((state) => state?.user?.userData);
  const infoUsers = {
    username: user?.username || user?.username,
    role: user?.userType,
    image: user?.image || user?.image,
  };

  const displayedUsername = userData?.username || infoUsers?.username;
  const displayedImage = userData?.image || infoUsers?.image;

  useEffect(() => {

    const userId = sessionStorage.getItem("userId"); 

    if (!userId) {
      console.error("User ID not found in sessionStorage");
      navigate("/login"); 
      return;
    }

    axiosInstance
      .get(`adminAuth/getSuperAdmin/${userId}`)
      .then((response) => {
        if (response) {
          // console.log("response.data.user-", response.data);
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
    // console.log("user-", user);
    return () => {};
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
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("userId");
        sessionStorage.removeItem("refreshToken");
        navigate("/login");
      }
    });
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  
  const handleSearch = (value) => {
    const searchQuery = value.toLowerCase().trim().replace(/\s+/g, "");
    setSearchQuery(searchQuery);

    if (!searchQuery || searchQuery === "") {
      setFilteredRoutes([]); 
      return;
  }

    const suggestions = allAdminRoutes.filter((route) =>
      route.keyWords.some((keyword) =>
        keyword.toLowerCase().replace(/\s+/g, "").includes(searchQuery)
      )
    );

    setFilteredRoutes(suggestions);

    if (suggestions.length === 0) {
      message.error("No matching page found");
    }
  };
  const handleSelect = (route) => {
    navigate(route);
    setSearchQuery("");
    setFilteredRoutes([]);
  };
  return (
    <div style={{ position: "sticky", top: "0", zIndex: "999" }}>
      <nav className="navbar-header">
        <div className="search-container-header">
          <FiSearch className="search-icon" />
          <input type="text" placeholder="Search..." className="search-input" 
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)} 
          />
           {filteredRoutes.length > 0 && (
        <List
          style={{
            marginTop: "10px",
            width: "400px",
            maxHeight: "200px",
            overflowY: "auto", 
            backgroundColor: "white", 
            borderRadius: "4px",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
            position: "absolute", 
            zIndex: 1, 
          }}
          bordered
          dataSource={filteredRoutes}
          renderItem={(item) => (
            <List.Item
              onClick={() => handleSelect(item.route)}
              style={{ cursor: "pointer" }}
            >
              {item.title}
            </List.Item>
          )}
        />
      )}
        </div>
        <div className="d-flex w-100 justify-content-end">
          <div
            className="d-flex align-items-center gap-2"
            onClick={toggleDropdown}
          >
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
                aria-expanded={isDropdownOpen}
              >
                <Avatar size="large" src={displayedImage} />
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
                  {displayedUsername}
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
