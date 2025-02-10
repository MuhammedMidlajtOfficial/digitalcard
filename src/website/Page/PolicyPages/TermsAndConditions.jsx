import React from "react";
import { Helmet } from "react-helmet";
import "./policy.css";
const TermsAndConditions = () => {
  return (
    <>
      <Helmet>
        <title>Terms And Conditions - KC (Know Connections) | Digital Card Solutions</title>
        <meta
          name="terms and conditions"
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
            <h2>Terms And Conditions</h2>
            {/* <p className="subtitle">Our journey to simplify and enhance business connections for everyone.</p> */}
            <div className="banner-image-container"></div>
          </div>
        </div>
        <div className="privacy-policy-section p-4">
          <div className="container  ">
            <h2>Terms and Conditions</h2>
            <p>
              Welcome to KC (Know Connections)! These Terms and Conditions ("Terms") govern
              your use of the KC (Know Connections) website, mobile applications, and services
              provided by VRUDDHIMAN CONSULTANTS INDIA PRIVATE LIMITED ("we,"
              "us," or "our"). By accessing or using our services, you agree to
              comply with these Terms. If you do not agree, you may not use our
              services.
            </p>

            <h2>1. Use of Services</h2>
            <h4>1.1 Eligibility</h4>
            <ul>
              <li>You must be at least 18 years old to use our services.</li>
              <li>
                By using our services, you represent and warrant that you meet
                the eligibility requirements.
              </li>
            </ul>

            <h4>1.2 Account Responsibilities</h4>
            <ul>
              <li>
                You are responsible for maintaining the confidentiality of your
                account credentials.
              </li>
              <li>
                You agree to notify us immediately of any unauthorized use of
                your account.
              </li>
            </ul>

            <h4>1.3 Prohibited Activities</h4>
            <ul>
              <li>Use our services for any unlawful or fraudulent activity.</li>
              <li>
                Interfere with or disrupt the operation of our website or app.
              </li>
              <li>
                Access or attempt to access our systems without authorization.
              </li>
            </ul>

            <h2>2. Payment Terms</h2>
            <h4>2.1 Pricing and Payment</h4>
            <p>
              All payments are processed securely through Razorpay or other
              authorized payment gateways.
            </p>

            <h4>2.2 Refund Policy</h4>
            <p>
              Refunds are subject to our Refund Policy, as detailed on our
              website.
            </p>

            <h4>2.3 Taxes</h4>
            <p>
              Prices are exclusive of applicable taxes unless stated otherwise.
              You are responsible for any applicable taxes based on your
              location.
            </p>

            <h2>3. Intellectual Property</h2>
            <h4>3.1 Ownership</h4>
            <p>
              All content, designs, logos, trademarks, and intellectual property
              on our platform are owned by VRUDDHIMAN CONSULTANTS INDIA PRIVATE
              LIMITED.
            </p>

            <h2>4. Privacy</h2>
            <p>
              Your use of our services is also governed by our Privacy Policy.
              By using our platform, you consent to the collection and use of
              your information as described in the Privacy Policy.
            </p>

            <h2>5. Limitation of Liability</h2>
            <p>
              We are not liable for any direct, indirect, incidental, or
              consequential damages arising from your use of our services.
            </p>

            <h2>6. Indemnification</h2>
            <p>
              You agree to indemnify and hold VRUDDHIMAN CONSULTANTS INDIA
              PRIVATE LIMITED, its affiliates, officers, and employees harmless
              from any claims, damages, or expenses arising from your violation
              of these Terms.
            </p>

            <h2>7. Termination</h2>
            <p>
              We reserve the right to terminate or suspend your access to our
              services at any time without prior notice.
            </p>

            <h2>8. Governing Law</h2>
            <p>
              These Terms are governed by the laws of India. Any disputes shall
              be resolved exclusively in the courts of Bengaluru, Karnataka.
            </p>

            <h2>10. Contact Us</h2>
            <p>
              For questions, concerns, or disputes related to these Terms,
              please contact us:
            </p>
            <ul>
              <li>
                Email:{" "}
                <a href="mailto:contact@KC (Know Connections).in">contact@KC (Know Connections).in</a>
              </li>
              <li>Phone: +91 8792976734</li>
              <li>
                Address: Opp HDFC ATM, First Floor, No.1/1, T C Palya Main Road,
                Sannathammanahalli, K R Puram, Bengaluru, Karnataka, 560036
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsAndConditions;
