import React, { useState, useEffect } from 'react';
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
  MDBPagination,
  MDBPaginationItem,
  MDBPaginationLink,
  MDBBtn
} from 'mdb-react-ui-kit';
import axiosInstance from '../../../../../AxiosConfig';
import './CompanyUserView.css';

export default function CompanyUserView({ userId }) {
  console.log('userId-', userId);
  const [userData, setUserData] = useState({
    companyName: '',
    email: '',
    phnNumber: '',
    address: '',
    image: '',
    socialMedia: {
      whatsappNo: '',
      facebookLink: '',
      instagramLink: '',
      twitterLink: '',
    },
    employees: []
  });

  const [currentPage, setCurrentPage] = useState(1);
  const employeesPerPage = 9;

  useEffect(() => {
    axiosInstance
      .get(`/user/getEnterpriseUserById/${userId}`)
      .then((response) => {
        const data = response.data.userData || {};
        console.log('data-', data);
        setUserData({
          companyName: data.companyName || 'No Name',
          email: data.email || 'N/A',
          phnNumber: data.phnNumber || 'N/A',
          address: data.address || 'N/A',
          image:
            data.image ||
            'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp',
          socialMedia: {
            whatsappNo: data.socialMedia?.whatsappNo || '',
            facebookLink: data.socialMedia?.facebookLink || '',
            instagramLink: data.socialMedia?.instagramLink || '',
            twitterLink: data.socialMedia?.twitterLink || '',
          },
          employees: data.empId || []
        });
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, [userId]);

  // Pagination Logic
  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = userData.employees.slice(indexOfFirstEmployee, indexOfLastEmployee);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Determine total pages
  const totalPages = Math.ceil(userData.employees.length / employeesPerPage);

  return (
    <section className="company-user-view">
      <MDBContainer>
        {/* Back Button */}
        <div
          className="no-focus back-btn mb-3"
          onClick={() => window.history.back()}
        >
          Back
        </div>
        
        {/* Company Information */}
        <MDBRow className="justify-content-center">
          <MDBCol md="12">
            <MDBCard className="shadow-3 rounded-6">
              <MDBRow className="g-0">
                <MDBCol
                  md="4"
                  className="gradient-custom text-center text-white d-flex flex-column justify-content-center align-items-center"
                  style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}
                >
                  <MDBCardImage
                    src={userData.image}
                    alt="Avatar"
                    className="my-4 rounded-circle"
                    style={{ width: '120px', height: '120px', objectFit: 'cover' }}
                    fluid
                  />
                  <MDBTypography tag="h5" className="mb-2" style={{ fontWeight:'bold', fontSize:'20px'}}>
                    {userData.companyName}
                  </MDBTypography>
                  <MDBCardText className="text-light">Company Profile</MDBCardText>
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
                        <MDBCardText className="text-muted">{userData.email}</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-4">
                        <MDBTypography tag="h6" className="fw-bold">
                          Phone
                        </MDBTypography>
                        <MDBCardText className="text-muted">{userData.phnNumber}</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol size="12" className="mb-4">
                        <MDBTypography tag="h6" className="fw-bold">
                          Address
                        </MDBTypography>
                        <MDBCardText className="text-muted">{userData.address}</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    {/* <MDBTypography tag="h6" className="fw-bold">
                      Social Media
                    </MDBTypography> */}
                    <div className="d-flex">
                      <a
                        href={userData.socialMedia.whatsappNo ? `https://wa.me/${userData.socialMedia.whatsappNo}` : '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`me-3 ${userData.socialMedia.whatsappNo ? 'text-success' : 'text-muted'}`}
                      >
                        <MDBIcon fab icon="whatsapp" size="lg" />
                      </a>
                      <a
                        href={userData.socialMedia.facebookLink || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`me-3 ${userData.socialMedia.facebookLink ? 'text-primary' : 'text-muted'}`}
                      >
                        <MDBIcon fab icon="facebook" size="lg" />
                      </a>
                      <a
                        href={userData.socialMedia.instagramLink || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`me-3 ${userData.socialMedia.instagramLink ? 'text-danger' : 'text-muted'}`}
                      >
                        <MDBIcon fab icon="instagram" size="lg" />
                      </a>
                      <a
                        href={userData.socialMedia.twitterLink || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`me-3 ${userData.socialMedia.twitterLink ? 'text-info' : 'text-muted'}`}
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
                    <MDBCard className="shadow-3">
                      <MDBCardBody>
                        <MDBCardImage
                          src={employee.image || 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp'}
                          alt="Employee Avatar"
                          className="my-4 rounded-circle"
                          style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                          fluid
                        />
                        <MDBTypography tag="h6" className="fw-bold">
                          {employee.username || 'No Name'}
                        </MDBTypography>
                        <MDBCardText className="text-muted">Role: {employee.role || 'N/A'}</MDBCardText>
                        <MDBCardText className="text-muted">Email: {employee.email || 'N/A'}</MDBCardText>
                        <MDBCardText className="text-muted">Phone: {employee.phnNumber || 'N/A'}</MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                ))}
              </MDBRow>
              {/* Pagination Controls */}
              <MDBPagination>
                <MDBPaginationItem disabled={currentPage === 1}>
                  <MDBPaginationLink onClick={() => paginate(currentPage - 1)} previous />
                </MDBPaginationItem>
                {[...Array(totalPages)].map((_, index) => (
                  <MDBPaginationItem key={index} active={index + 1 === currentPage}>
                    <MDBPaginationLink onClick={() => paginate(index + 1)}>
                      {index + 1}
                    </MDBPaginationLink>
                  </MDBPaginationItem>
                ))}
                <MDBPaginationItem disabled={currentPage === totalPages}>
                  <MDBPaginationLink onClick={() => paginate(currentPage + 1)} next />
                </MDBPaginationItem>
              </MDBPagination>
            </MDBCol>
          </MDBRow>
        )}
      </MDBContainer>
    </section>
  );
}
