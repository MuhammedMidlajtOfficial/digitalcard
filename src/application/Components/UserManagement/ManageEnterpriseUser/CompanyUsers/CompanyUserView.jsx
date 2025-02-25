import React, { useState, useEffect } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBTypography,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Modal, Spin, Pagination } from "antd";
import { axiosInstance, logInstance } from "../../../../../AxiosConfig";
import "./CompanyUserView.css";
import AddEmployee from "./AddEmployee";
import defaultUser from "../../../../Assets/Images/default-user.svg";
export default function CompanyUserView({ userId }) {
  console.log("userId-", userId);
  const [userData, setUserData] = useState({
    companyName: "",
    email: "",
    phnNumber: "",
    address: "",
    image: "",
    socialMedia: {
      whatsappNo: "",
      facebookLink: "",
      instagramLink: "",
      twitterLink: "",
    },
    employees: [],
  });
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const employeesPerPage = 9;

  const handleCardClick = (empId) => {
    setIsLoading(true);
    logInstance
      .get(`/enterpriseEmployee/getProfile/${empId}`)
      .then((response) => {
        console.log("dvb", response.data.user);

        setSelectedEmployee(response.data.user || {});
        setIsModalVisible(true);
      })
      .catch((error) => {
        console.error("Error fetching employee details:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // Close modal
  const handleModalClose = () => {
    setIsModalVisible(false);
    setSelectedEmployee(null);
  };

  const totalPages = Math.ceil(userData.employees.length / employeesPerPage);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    axiosInstance
      .get(`/user/getEnterpriseUserById/${userId}`)
      .then((response) => {
        const data = response.data.userData || {};
        console.log("datassss", data);
        setUserData({
          companyName: data.companyName || "No Name",
          email: data.email || "N/A",
          phnNumber: data.phnNumber || "N/A",
          address: data.address || "N/A",
          image: data.image || defaultUser,
          socialMedia: {
            whatsappNo: data.socialMedia?.whatsappNo || "",
            facebookLink: data.socialMedia?.facebookLink || "",
            instagramLink: data.socialMedia?.instagramLink || "",
            twitterLink: data.socialMedia?.twitterLink || "",
          },
          employees: data.empIds || [],
        });
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, [userId, isModalOpen ]);

  // Pagination Logic
  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = userData.employees.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const [configs, setConfigs] = useState([]);
  const fetchConfigs = () => {
    axiosInstance
      .get(`/config`)
      .then((response) => {
        setConfigs(response.data || []);
        // console.log("ALL CONFIG", response.data);
      })
      .catch((error) => {
        console.error("Error fetching configs:", error);
      });
  };

  useEffect(() => {
    fetchConfigs();
  }, []);

  const getConfigById = (id) => {
    return configs.find((config) => config._id === id) || null;
  };

  const specificConfig = getConfigById("6784cb4e3a4c28778d35986a");

  console.log("Specific Config: ", specificConfig);
  // Determine total pages

  const getThemeByCode = (themeCode) => {
    const specificConfig = getConfigById("6784cb4e3a4c28778d35986a");
    if (
      specificConfig &&
      specificConfig.config &&
      specificConfig.config[themeCode]
    ) {
      return specificConfig.config[themeCode];
    }
    return "N/A"; // Fallback if the theme is not found
  };

  

  const handleAddEmloyee = () => {
    setIsModalOpen(true);
  };

  const closeAddEnterpriseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="company-user-view">
      <MDBContainer>
        {/* Back Button */}
        <div className="justify-content-between d-flex">
          <div
            className="no-focus back-btn mb-3"
            onClick={() => window.history.back()}
          >
            Back
          </div>
          <div className="no-focus back-btn mb-3" onClick={handleAddEmloyee}>
            + Add Employee
          </div>
        </div>

        {/* Company Information */}
        <MDBRow className="justify-content-center">
          <MDBCol md="12">
            <MDBCard className="shadow-3 rounded-6">
              <MDBRow className="g-0">
                <MDBCol
                  md="4"
                  className="gradient-custom text-center text-white d-flex flex-column justify-content-center align-items-center"
                  style={{
                    borderTopLeftRadius: ".5rem",
                    borderBottomLeftRadius: ".5rem",
                  }}
                >
                  <MDBCardImage
                    src={userData.image || defaultUser}
                    alt="Avatar"
                    className="my-4 rounded-circle"
                    style={{
                      width: "120px",
                      height: "120px",
                      objectFit: "cover",
                    }}
                    fluid
                  />
                  <MDBTypography
                    tag="h5"
                    className="mb-2"
                    style={{ fontWeight: "bold", fontSize: "20px" }}
                  >
                    {userData.companyName}
                  </MDBTypography>
                  <MDBCardText className="text-light">
                    Company Profile
                  </MDBCardText>
                </MDBCol>
                <MDBCol md="8">
                  <MDBCardBody className="p-4">
                    <MDBTypography tag="h6" className="fw-bold mb-3">
                      Company Information
                    </MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow>
                      <MDBCol size="6" className="mb-4">
                        <MDBTypography tag="h6" className="fw-bold">
                          Email
                        </MDBTypography>
                        <MDBCardText className="text-muted">
                          {userData.email}
                        </MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-4">
                        <MDBTypography tag="h6" className="fw-bold">
                          Phone
                        </MDBTypography>
                        <MDBCardText className="text-muted">
                          {userData.phnNumber}
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol size="12" className="mb-4">
                        <MDBTypography tag="h6" className="fw-bold">
                          Address
                        </MDBTypography>
                        <MDBCardText className="text-muted">
                          {userData.address}
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    {/* <MDBTypography tag="h6" className="fw-bold">
                      Social Media
                    </MDBTypography> */}
                    <div className="d-flex">
                      <a
                        href={
                          userData.socialMedia.whatsappNo
                            ? `https://wa.me/${userData.socialMedia.whatsappNo}`
                            : "#"
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`me-3 ${
                          userData.socialMedia.whatsappNo
                            ? "text-success"
                            : "text-muted"
                        }`}
                      >
                        <MDBIcon fab icon="whatsapp" size="lg" />
                      </a>
                      <a
                        href={userData.socialMedia.facebookLink || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`me-3 ${
                          userData.socialMedia.facebookLink
                            ? "text-primary"
                            : "text-muted"
                        }`}
                      >
                        <MDBIcon fab icon="facebook" size="lg" />
                      </a>
                      <a
                        href={userData.socialMedia.instagramLink || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`me-3 ${
                          userData.socialMedia.instagramLink
                            ? "text-danger"
                            : "text-muted"
                        }`}
                      >
                        <MDBIcon fab icon="instagram" size="lg" />
                      </a>
                      <a
                        href={userData.socialMedia.twitterLink || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`me-3 ${
                          userData.socialMedia.twitterLink
                            ? "text-info"
                            : "text-muted"
                        }`}
                      >
                        <MDBIcon fab icon="twitter" size="lg" />
                      </a>
                    </div>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        {/* Employee Details Section */}
        {userData.employees.length > 0 && (
          <MDBRow className="mt-5">
            <MDBCol>
              <MDBTypography tag="h6" className="fw-bold mb-3">
                Employee Details
              </MDBTypography>
              <MDBRow>
                {currentEmployees.map((employee, index) => (
                  <MDBCol key={index} lg="4" md="6" sm="12" className="mb-4">
                    <MDBCard
                      className="shadow-3 cursor-pointer"
                      onClick={() => handleCardClick(employee.empId?._id)}
                    >
                      <MDBCardBody>
                        <MDBCardImage
                          src={employee.empId?.image || defaultUser}
                          alt="Employee Avatar"
                          className="my-4 rounded-circle"
                          style={{
                            width: "80px",
                            height: "80px",
                            objectFit: "cover",
                          }}
                          fluid
                        />
                        <MDBTypography tag="h6" className="fw-bold">
                          {employee.empId?.username || "No Name"}
                        </MDBTypography>
                        <MDBCardText className="text-muted">
                          Company Name: {employee.empId?.companyName || "N/A"}
                        </MDBCardText>
                        <MDBCardText className="text-muted">
                          Email: {employee.empId?.email || "N/A"}
                        </MDBCardText>
                        <MDBCardText className="text-muted">
                          Phone: {employee.empId?.phnNumber || "N/A"}
                        </MDBCardText>
                        <MDBCardText className="text-muted">
                          Theme:{" "}
                          {getThemeByCode(employee.empId?.theme) || "N/A"}
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                ))}
              </MDBRow>
              <div
                style={{
                  marginTop: "20px",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Pagination
                  current={currentPage}
                  total={userData.employees.length}
                  pageSize={employeesPerPage}
                  onChange={handlePageChange}
                  showSizeChanger={false}
                />
              </div>
            </MDBCol>
          </MDBRow>
        )}
      </MDBContainer>

      <Modal
        title="Employee Details"
        visible={isModalVisible}
        onCancel={handleModalClose}
        footer={null}
      >
        {isLoading ? (
          <Spin />
        ) : selectedEmployee ? (
          <div className="employee-details-modal">
            <img
              src={selectedEmployee.image || defaultUser}
              alt="Employee"
              style={{
                width: "100px",
                height: "100px",
                objectFit: "cover",
                borderRadius: "50%",
                marginBottom: "20px",
              }}
            />
            <p>
              <strong>Name:</strong> {selectedEmployee.username || "N/A"}
            </p>
            <p>
              <strong>Email:</strong> {selectedEmployee.email || "N/A"}
            </p>
            <p>
              <strong>Phone:</strong> {selectedEmployee.phnNumber || "N/A"}
            </p>
            <p>
              <strong>Role:</strong> {selectedEmployee.role || "N/A"}
            </p>
            <p>
              <strong>Status:</strong>{" "}
              <span
                style={{
                  color: selectedEmployee.status === "active" ? "green" : "red",
                }}
              >
                {selectedEmployee.status || "N/A"}
              </span>
            </p>
            <p>
              <strong>User Type:</strong> {selectedEmployee.userType || "N/A"}
            </p>
            <p>
              <strong>Address:</strong> {selectedEmployee.address || "N/A"}
            </p>
            <p>
              <strong>Theme:</strong>
              {getThemeByCode(selectedEmployee.theme) || "N/A"}
            </p>
          </div>
        ) : (
          <p>No employee data available.</p>
        )}
      </Modal>
      <AddEmployee visible={isModalOpen} onClose={closeAddEnterpriseModal} />
    </section>
  );
}
