import React from "react";
import email from "../../Assets/image/contact/contact-email.svg";
import whatsapp from "../../Assets/image/contact/contact-whatsapp.svg";
import location from "../../Assets/image/contact/contact-location.svg";
import { Form, Input, Button, Checkbox } from "antd";
import { IoArrowForward } from "react-icons/io5";
import ScrollAnimation from "../../../ScrollAnimation"; // Adjust path if necessary

const ContactInformation = () => {
  return (
    <div className="contact-info-section">
      <div className="container">
        <div className="row">
          <ScrollAnimation
            animationClass="animate__fadeInDown"
            className="col-lg-7"
          >
            <div className="contact-info-left">
              <h1>Get in Touch</h1>
              <p>
                Let's turn your vision into digital reality explore
                collaborative possibilities with us.
              </p>
            </div>
            <ScrollAnimation animationClass="animate__fadeInDown" delay={200}>
              <div className="d-flex align-items-center mb-4">
                <div>
                  <img
                    src={email}
                    className="contact-info-icons"
                    alt="Email icon"
                  />
                </div>
                <div className="contact-email-info">
                  <h2>Email us</h2>
                  <p>contact@KC (Know Connections).in</p>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animationClass="animate__fadeInDown" delay={400}>
              <div className="d-flex align-items-center mb-4">
                <div>
                  <img
                    src={whatsapp}
                    className="contact-info-icons"
                    alt="Whatsapp icon"
                  />
                </div>
                <div className="contact-email-info">
                  <h2>Call us</h2>
                  <p>+91 8792976734</p>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animationClass="animate__fadeInDown" delay={600}>
              <div className="d-flex align-items-start">
                <div>
                  <img
                    src={location}
                    className="contact-info-icons"
                    alt="Location icon"
                  />
                </div>
                <div className="contact-email-info">
                  <h2>Our Location</h2>
                  <p>
                    Opp HDFC BANK ATM, 1st Floor, No.1/1, T C Palya Main Road,
                    Sannatammanahalli, KR Puram, Bengaluru Urban, Karnataka,
                    560036
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </ScrollAnimation>

          <ScrollAnimation
            animationClass="animate__fadeInUp"
            className="col-lg-5 contact-form-container"
          >
            <h2>Get in Touch</h2>
            <h4>Got a Unique Requirement?</h4>
            <p>Share it with us, and our experts will connect with you!</p>
            <Form
              className="contact-info-add"
              name="contact_form"
              layout="vertical"
            >
              <Form.Item name="fullName" label="Full Name">
                <Input placeholder="Enter your full name" />
              </Form.Item>

              <Form.Item name="email" label="Email ID">
                <Input placeholder="Enter your Email address" />
              </Form.Item>

              <Form.Item name="phoneNumber" label="Phone Number">
                <Input placeholder="Enter your Phone No" />
              </Form.Item>

              <Form.Item name="opinion" label="Your Opinion">
                <Input.TextArea placeholder="Write me here something..." />
              </Form.Item>

              <Form.Item>
                <Checkbox className="contact-form-agreement">
                  I agree to the terms and conditions.
                </Checkbox>
              </Form.Item>
              <div>
                <Form.Item>
                  <Button className="send-contact-details-btn">
                    Leave us a Message
                    <IoArrowForward />
                  </Button>
                </Form.Item>
              </div>
            </Form>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;
