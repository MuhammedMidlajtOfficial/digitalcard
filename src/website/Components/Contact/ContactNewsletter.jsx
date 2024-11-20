import React from "react";

const ContactNewsletter = () => {
  return (
    <>
      <div className="contact-newsletter-section">
        <div className="container">
          <div className="contact-section">
            <h2>We are always happy to assist you</h2>
            <div className="contact-info">
              <div className="info-column">
                <h3>Address</h3>
                <div className="contact-line"></div>
                <p>Diskuss Business Solutions</p>
                <p>1234 Innovation Drive, Suite 100</p>
                <p>Tech City, TX 75001</p>
                <p>USA</p>
              </div>
              <div className="info-column">
                <h3>Email</h3>
                <div className="contact-line"></div>
                <p>General Inquiries: contact@diskuss.com</p>
                <p>Support: support@diskuss.com</p>
                <p>Sales: sales@diskuss.com</p>
              </div>
              <div className="info-column">
                <h3>Mobile Number</h3>
                <div className="contact-line"></div>
                <p>+1 (800) 123-4567</p>
                <p>+1 (214) 987-6543</p>
              </div>
              <div className="info-column">
                <h3>Business Hours</h3>
                <div className="contact-line"></div>
                <p>Monday to Friday: 9:00 AM - 6:00 PM (CST)</p>
                <p>Saturday: 10:00 AM - 4:00 PM (CST)</p>
              </div>
            </div>
          </div>
          <div className="newsletter-section">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <h2>Subcribe to our Newsletter</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum dummy text
                  </p>
                </div>
                <div className="col-lg-6">
                  <div className="newsletter-form">
                    <input type="email" placeholder="Enter your email" />
                    <button>Subscribe</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactNewsletter;
