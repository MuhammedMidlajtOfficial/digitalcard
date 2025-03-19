import React from "react";
import { Helmet } from "react-helmet";
import "./policy.css";
const TermsAndConditions = () => {
  return (
    <>
      <Helmet>
        <title>
          Terms And Conditions - KC (Know Connections) | Digital Card Solutions
        </title>
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
          <div className="container">
            <h2 className="text-center font-bold text-2xl">
              Terms and Conditions
            </h2>
            <p className="mt-4">
              Welcome to KC (Know Connections)! These Terms and Conditions
              ("Terms") govern your use of the KC (Know Connections) website,
              mobile applications, and services provided by{" "}
              <b>VRUDDHIMAN CONSULTANTS INDIA PRIVATE LIMITED</b>
              ("we," "us," or "our"). By accessing or using our services, you
              agree to comply with these Terms. If you do not agree, you may not
              use our services.
            </p>

            <div className="mt-6">
              <h2 className="font-semibold text-xl">1. Use of Services</h2>

              <h4 className="mt-3 font-medium">1.1 Eligibility</h4>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>You must be at least 18 years old to use our services.</li>
                <li>
                  By using our services, you confirm that you meet the
                  eligibility requirements.
                </li>
              </ul>

              <h4 className="mt-4 font-medium">1.2 Account Responsibilities</h4>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>
                  Maintain the confidentiality of your account credentials.
                </li>
                <li>
                  Notify us immediately of any unauthorized use of your account.
                </li>
              </ul>

              <h4 className="mt-4 font-medium">1.3 Prohibited Activities</h4>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>
                  Do not use our services for unlawful or fraudulent activities.
                </li>
                <li>
                  Avoid interfering with or disrupting the website/app
                  operation.
                </li>
                <li>Do not attempt unauthorized access to our systems.</li>
              </ul>
            </div>

            {/* Section 2: Payment Terms */}
            <div className="mt-6">
              <h2 className="font-semibold text-xl">2. Payment Terms</h2>

              <h4 className="mt-3 font-medium">2.1 Pricing and Payment</h4>
              <p className="mt-2">
                All payments are processed securely through Razorpay or other
                authorized payment gateways.
              </p>

              <h4 className="mt-4 font-medium">2.2 Refund Policy</h4>
              <p className="mt-2">
                Refunds are subject to our <b>Refund Policy</b>, available on
                our website.
              </p>

              <h4 className="mt-4 font-medium">2.3 Taxes</h4>
              <p className="mt-2">
                Prices are exclusive of applicable taxes unless stated
                otherwise. Users are responsible for taxes based on their
                location.
              </p>
            </div>

            {/* Section 3: Intellectual Property */}
            <div className="mt-6">
              <h2 className="font-semibold text-xl">
                3. Intellectual Property
              </h2>
              <p className="mt-2">
                All content, designs, logos, trademarks, and intellectual
                property on our platform are owned by
                <b> VRUDDHIMAN CONSULTANTS INDIA PRIVATE LIMITED</b>.
              </p>
            </div>

            {/* Section 4: Privacy */}
            <div className="mt-6">
              <h2 className="font-semibold text-xl">4. Privacy</h2>
              <p className="mt-2">
                Your use of our services is governed by our{" "}
                <b>Privacy Policy</b>. By using our platform, you consent to the
                collection and use of your data as described in our policy.
              </p>
            </div>

            {/* Section 5-8: Legal */}
            <div className="mt-6">
              <h2 className="font-semibold text-xl">
                5. Limitation of Liability
              </h2>
              <p className="mt-2">
                We are not liable for any direct, indirect, incidental, or
                consequential damages arising from your use of our services.
              </p>

              <h2 className="mt-6 font-semibold text-xl">6. Indemnification</h2>
              <p className="mt-2">
                You agree to indemnify and hold{" "}
                <b>VRUDDHIMAN CONSULTANTS INDIA PRIVATE LIMITED</b>, its
                affiliates, officers, and employees harmless from any claims,
                damages, or expenses arising from your violation of these Terms.
              </p>

              <h2 className="mt-6 font-semibold text-xl">7. Termination</h2>
              <p className="mt-2">
                We reserve the right to terminate or suspend your access to our
                services at any time without prior notice.
              </p>

              <h2 className="mt-6 font-semibold text-xl">8. Governing Law</h2>
              <p className="mt-2">
                These Terms are governed by the laws of India. Any disputes
                shall be resolved exclusively in the courts of{" "}
                <b>Bengaluru, Karnataka</b>.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mt-8">
              <h2 className="font-semibold text-xl">10. Contact Us</h2>
              <p className="mt-2">
                For questions, concerns, or disputes related to these Terms,
                please contact us:
              </p>

              <ul className="list-none mt-3 space-y-2">
                <li>
                  📧 Email:{" "}
                  <a
                    href="mailto:contact@knowconnections.com"
                    className="text-blue-500"
                  >
                    contact@knowconnections.com
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

export default TermsAndConditions;
