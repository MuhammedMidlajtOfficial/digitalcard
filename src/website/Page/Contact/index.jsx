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
        <title>Contact Us - KC (Know Connections)</title>
        <meta
          name="description"
          content="Get in touch with the KC (Know Connections) team for any inquiries, support, or feedback. We're here to assist you with all your digital card needs. Contact us today!"
        />
        <meta
          name="keywords"
          content="KC (Know Connections) contact, contact us, digital card support, customer service, contact KC (Know Connections), feedback, inquiries, support for digital cards"
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
