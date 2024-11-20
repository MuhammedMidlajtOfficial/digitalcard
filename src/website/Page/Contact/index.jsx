import React from "react";
import "./contact.css";
import { Helmet } from "react-helmet";
import ContactBanner from "../../Components/Contact/ContactBanner";
import ContactInformation from "../../Components/Contact/ContactInformation";
import HomeFAQ from "../../Components/Home/HomFAQ";
import ContactMap from "../../Components/Contact/ContactMap";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Diskuss</title>
        <meta
          name="description"
          content="Get in touch with the Diskuss team for any inquiries, support, or feedback. We're here to assist you with all your digital card needs. Contact us today!"
        />
        <meta
          name="keywords"
          content="Diskuss contact, contact us, digital card support, customer service, contact Diskuss, feedback, inquiries, support for digital cards"
        />
      </Helmet>

      <div className="main-wrapper">
        <ContactBanner />
        {/* <ContactForm /> */}
        <ContactInformation />
        <ContactMap />
        <HomeFAQ />
        {/* <ContactNewsletter /> */}
      </div>
    </>
  );
};

export default Contact;
