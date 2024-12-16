import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';

// Sample data (replace with dynamic data from your backend)
const employee = {
  username: 'John Doe',
  email: 'johndoe@example.com',
  phnNumber: '123 456 789',
  address: '1234 Main Street, City, Country',
  image: 'https://example.com/profile-pic.jpg',
  socialMedia: {
    whatsappNo: '987 654 321',
    facebookLink: 'https://facebook.com/johndoe',
    instagramLink: 'https://instagram.com/johndoe',
    twitterLink: 'https://twitter.com/johndoe'
  },
};

export default function PersonalProfile() {
  return (
    <section className="" style={{ backgroundColor: '#f4f5f7' }}>
      <MDBContainer className="h-100">
        <MDBRow className="h-100">
          <MDBCol lg="6" className="mb-4 mb-lg-0">
            <MDBCard className="mb-3" style={{ borderRadius: '.5rem'}}>
              <MDBRow className="g-0">
                <MDBCol md="4" className="gradient-custom text-center text-white"
                  style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                  <MDBCardImage 
                    src={employee.image || "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"}
                    alt="Avatar" 
                    className="my-5"
                    style={{ width: '80px' }} 
                    fluid 
                  />
                  <MDBTypography tag="h5">{employee.username}</MDBTypography>
                  <MDBCardText>{employee.role || "Employee"}</MDBCardText>
                  <MDBIcon far icon="edit mb-5" />
                </MDBCol>
                <MDBCol md="8">
                  <MDBCardBody className="p-4">
                    <MDBTypography tag="h6">Information</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Email</MDBTypography>
                        <MDBCardText className="text-muted">{employee.email}</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Phone</MDBTypography>
                        <MDBCardText className="text-muted">{employee.phnNumber}</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Address</MDBTypography>
                        <MDBCardText className="text-muted">{employee.address}</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-start">
                      {employee.socialMedia.whatsappNo && (
                        <a href={`https://wa.me/${employee.socialMedia.whatsappNo}`} target="_blank" rel="noopener noreferrer">
                          <MDBIcon fab icon="whatsapp me-3" size="lg" />
                        </a>
                      )}
                      {employee.socialMedia.facebookLink && (
                        <a href={employee.socialMedia.facebookLink} target="_blank" rel="noopener noreferrer">
                          <MDBIcon fab icon="facebook me-3" size="lg" />
                        </a>
                      )}
                      {employee.socialMedia.instagramLink && (
                        <a href={employee.socialMedia.instagramLink} target="_blank" rel="noopener noreferrer">
                          <MDBIcon fab icon="instagram me-3" size="lg" />
                        </a>
                      )}
                      {employee.socialMedia.twitterLink && (
                        <a href={employee.socialMedia.twitterLink} target="_blank" rel="noopener noreferrer">
                          <MDBIcon fab icon="twitter me-3" size="lg" />
                        </a>
                      )}
                    </div>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
