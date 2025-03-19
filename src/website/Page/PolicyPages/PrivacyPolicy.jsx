import React from "react";
import { Helmet } from "react-helmet";
import "./policy.css";
const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>
          Privacy Policy - KC (Know Connections) | Digital Card Solutions
        </title>
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
          <div className="container">
            <h2 className="text-center font-bold text-2xl">
              Welcome to KC (Know Connections)!
            </h2>

            <p className="mt-4">
              At KC (Know Connections), operated under{" "}
              <b>VRUDDHIMAN CONSULTANTS INDIA PRIVATE LIMITED</b>, we are
              committed to protecting your privacy and ensuring the security of
              the personal information you share with us. This Privacy Policy
              outlines how we collect, use, and safeguard your data when you use
              our website, mobile applications, and services.
            </p>

            <div className="mt-6">
              <h2 className="font-semibold text-xl">
                1. Information We Collect
              </h2>
              <p className="mt-2">
                We collect the following types of information when you use our
                services:
              </p>

              <h4 className="mt-3 font-medium">1.1 Personal Information</h4>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>
                  Name, email address, phone number, and billing information.
                </li>
                <li>Company or organization details (if applicable).</li>
              </ul>

              <h4 className="mt-4 font-medium">1.2 Usage Information</h4>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>
                  IP address, browser type, operating system, and other
                  technical data.
                </li>
                <li>
                  Activities on the website and app, such as pages visited,
                  clicks, and interactions.
                </li>
              </ul>

              <h4 className="mt-4 font-medium">1.3 Payment Information</h4>
              <p className="mt-2">
                For transactions processed via Razorpay, we collect only the
                necessary payment details required for successful processing.
                All payment data is securely stored by Razorpay as per their
                privacy policy.
              </p>
            </div>

            <div className="mt-6">
              <h2 className="font-semibold text-xl">
                2. How We Use Your Information
              </h2>
              <p className="mt-2">
                We use the collected information for the following purposes:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>To provide and improve our services.</li>
                <li>To process payments securely.</li>
                <li>To communicate updates, new features, and offers.</li>
                <li>To comply with legal and regulatory obligations.</li>
              </ul>
            </div>

            <div className="mt-6">
              <h2 className="font-semibold text-xl">
                3. Sharing of Information
              </h2>
              <p className="mt-2">
                Your personal information is never shared with third parties,
                except in the following cases:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>
                  With Razorpay for payment processing under their privacy
                  standards.
                </li>
                <li>With government authorities if required by law.</li>
                <li>
                  With trusted third-party vendors to enhance our services,
                  subject to strict confidentiality agreements.
                </li>
              </ul>
            </div>

            <div className="mt-6">
              <h2 className="font-semibold text-xl">4. Data Security</h2>
              <p className="mt-2">
                We implement industry-standard security measures to protect your
                personal and payment information from unauthorized access,
                misuse, or disclosure. Razorpay ensures PCI-DSS compliance for
                secure payment transactions.
              </p>
            </div>

            <div className="mt-6">
              <h2 className="font-semibold text-xl">5. Your Rights</h2>
              <p className="mt-2">As a user, you have the right to:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Access and update your personal data.</li>
                <li>
                  Request deletion of your data (subject to applicable laws).
                </li>
                <li>Opt out of marketing communications at any time.</li>
              </ul>
              <p className="mt-2">
                To exercise these rights, contact us at
                <a
                  href="mailto:contact@knowconnections.in"
                  className="text-blue-500"
                >
                  {" "}
                  contact@knowconnections.in
                </a>
                .
              </p>
            </div>

            <div className="mt-6">
              <h2 className="font-semibold text-xl">6. Cookies</h2>
              <p className="mt-2">
                We use cookies to enhance your browsing experience. You can
                manage or disable cookies in your browser settings. However,
                disabling cookies may limit some functionalities of our website.
              </p>
            </div>

            <div className="mt-6">
              <h2 className="font-semibold text-xl">7. Third-Party Links</h2>
              <p className="mt-2">
                Our website may contain links to third-party websites. We are
                not responsible for the privacy practices or content of these
                external sites.
              </p>
            </div>

            <div className="mt-6">
              <h2 className="font-semibold text-xl">
                8. Updates to This Policy
              </h2>
              <p className="mt-2">
                This Privacy Policy may be updated periodically. Any changes
                will be posted on this page with the updated effective date.
              </p>
            </div>

            <div className="mt-8">
              <h2 className="font-semibold text-xl">9. Contact Us</h2>
              <p className="mt-2">
                For questions, concerns, or complaints about this Privacy
                Policy, please reach out to us:
              </p>

              <ul className="list-none mt-3 space-y-2">
                <li>
                  📧 Email:
                  <a
                    href="mailto:contact@knowconnections.in"
                  >
                    contact@knowconnections.in
                  </a>
                </li>
                <li>📞 Phone: +91 8792976734</li>
                <li>
                  📍 Address: Opp HDFC ATM, First Floor, No.1/1, T C Palya Main
                  Road, Sannathammanahalli, K R Puram, Bengaluru, Karnataka,
                  560036
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
