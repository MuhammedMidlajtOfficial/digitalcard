import React from "react";
import { Helmet } from "react-helmet";
import "./policy.css"
const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - KC (Know Connections) | Digital Card Solutions</title>
        <meta
          name="privacy policy"
          content="Learn more about KC (Know Connections) and our mission to provide innovative digital card solutions. Discover how we offer 1000+ unique card designs and our commitment to enhancing your card-making experience."
        />
        <meta
          name="keywords"
          content="About KC (Know Connections), digital card solutions, KC (Know Connections) mission, digital card designs, card-making innovation, company background, KC (Know Connections) team, digital cards overview"
        />
      </Helmet>

      <div className="main-wrapper">
        <div className="about-banner-section">
          <div className="container">
            <h2>Privacy Policy</h2>
            {/* <p className="subtitle">Our journey to simplify and enhance business connections for everyone.</p> */}
            <div className="banner-image-container"></div>
          </div>
        </div>
        <div className="privacy-policy-section p-4">
        <div className="container  ">
          <h2>Welcome to KC (Know Connections)!</h2>
          <p>
            At KC (Know Connections), operated under VRUDDHIMAN CONSULTANTS INDIA PRIVATE
            LIMITED, we are committed to protecting your privacy and ensuring
            the security of the personal information you share with us. This
            Privacy Policy outlines how we collect, use, and safeguard your data
            when you use our website, mobile applications, and services.
          </p>

          <h2>1. Information We Collect</h2>
          <p>
            We collect the following types of information when you use our
            services:
          </p>

          <h4>1.1 Personal Information</h4>
          <ul>
            <li>Name, email address, phone number, and billing information.</li>
            <li>Company or organization details (if applicable).</li>
          </ul>

          <h4>1.2 Usage Information</h4>
          <ul>
            <li>
              IP address, browser type, operating system, and other technical
              data.
            </li>
            <li>
              Activities on the website and app, such as pages visited, clicks,
              and interactions.
            </li>
          </ul>

          <h4>1.3 Payment Information</h4>
          <p>
            For transactions processed via Razorpay, we collect only the
            necessary payment details required for successful processing. All
            payment data is stored securely by Razorpay as per their privacy
            policy.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information collected for the following purposes:</p>
          <ul>
            <li>To provide and improve our services.</li>
            <li>To process payments securely.</li>
            <li>
              To communicate with you about updates, new features, and offers.
            </li>
            <li>To comply with legal and regulatory obligations.</li>
          </ul>

          <h2>3. Sharing of Information</h2>
          <p>
            Your personal information is never shared with third parties, except
            under the following circumstances:
          </p>
          <ul>
            <li>
              With Razorpay for payment processing in compliance with their
              privacy standards.
            </li>
            <li>With government authorities if required by law.</li>
            <li>
              With trusted third-party vendors to enhance our services, subject
              to strict confidentiality agreements.
            </li>
          </ul>

          <h2>4. Data Security</h2>
          <p>
            We implement industry-standard security measures to protect your
            personal and payment information from unauthorized access, misuse,
            or disclosure. Razorpay ensures PCI-DSS compliance for secure
            payment transactions.
          </p>

          <h2>5. Your Rights</h2>
          <p>As a user, you have the right to:</p>
          <ul>
            <li>Access and update your personal data.</li>
            <li>Request deletion of your data (subject to applicable laws).</li>
            <li>Opt out of marketing communications at any time.</li>
          </ul>
          <p>
            To exercise these rights, contact us at{" "}
            <a href="mailto:contact@KC (Know Connections).in">contact@KC (Know Connections).in</a>.
          </p>

          <h2>6. Cookies</h2>
          <p>
            We use cookies to enhance your browsing experience. You can manage
            or disable cookies in your browser settings. However, disabling
            cookies may limit some functionalities of our website.
          </p>

          <h2>7. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not
            responsible for the privacy practices or content of these external
            sites.
          </p>

          <h2>8. Updates to This Policy</h2>
          <p>
            This Privacy Policy may be updated periodically. Any changes will be
            posted on this page with the updated effective date.
          </p>

          <h2>9. Contact Us</h2>
          <p>
            For questions, concerns, or complaints about this Privacy Policy,
            please reach out to us:
          </p>
          <ul>
            <li>
              Email: <a href="mailto:contact@KC (Know Connections).in">contact@KC (Know Connections) .in</a>
            </li>
            <li>Phone: +91 8792976734</li>
            <li>
              Address: Opp HDFC ATM, First Floor, No.1/1, T C Palya Main Road,
              Sannathammanahalli, K R Puram, Bengaluru, Bengaluru Urban,
              Karnataka, 560036
            </li>
          </ul>
        </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
