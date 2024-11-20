import React from "react";
import { Helmet } from "react-helmet";
import "./policy.css";
const CancellationPolicy = () => {
  return (
    <>
      <Helmet>
        <title>
          Cancellation and Refund Policy - Diskuss | Digital Card Solutions
        </title>
        <meta
          name="privacy policy"
          content="Learn more about Diskuss and our mission to provide innovative digital card solutions. Discover how we offer 1000+ unique card designs and our commitment to enhancing your card-making experience."
        />
        <meta
          name="keywords"
          content="About Diskuss, digital card solutions, Diskuss mission, digital card designs, card-making innovation, company background, Diskuss team, digital cards overview"
        />
      </Helmet>

      <div className="main-wrapper">
        <div className="about-banner-section">
          <div className="container">
            <h2>Cancellation and Refund Policy</h2>
            {/* <p className="subtitle">Our journey to simplify and enhance business connections for everyone.</p> */}
            <div className="banner-image-container"></div>
          </div>
        </div>
        <div className="privacy-policy-section p-4">
          <div className="container">
            <h2>Cancellation and Refund Policy</h2>
            <p>
              At Diskuss, we strive to provide a seamless experience for our
              users. This Cancellation and Refund Policy outlines the terms and
              conditions under which cancellations and refunds may be processed.
              By using our services, you agree to the terms outlined in this
              policy.
            </p>
            <p>If you have any questions, feel free to reach us at:</p>
            <ul>
              <li>
                Email:{" "}
                <a href="mailto:contact@diskuss.in">contact@diskuss.in</a>
              </li>
              <li>Phone: +91 8792976734</li>
            </ul>

            <h4>1. Cancellation Policy</h4>
            <h4>1.1 Subscription Cancellations:</h4>
            <ul>
              <li>
                You can cancel your subscription at any time through your
                account settings on the Diskuss platform.
              </li>
              <li>
                Cancellations will take effect at the end of your current
                billing cycle, and you will continue to have access to the
                service until the end of the period.
              </li>
            </ul>

            <h4>1.2 Enterprise Plans:</h4>
            <ul>
              <li>
                For Enterprise subscriptions, cancellations require prior notice
                of 30 days, as outlined in your service agreement.
              </li>
            </ul>

            <h4>1.3 Trial Periods:</h4>
            <ul>
              <li>
                If you are using a free trial, you may cancel at any time during
                the trial period to avoid charges.
              </li>
            </ul>

            <h4>1.4 Improper Use or Breach of Terms:</h4>
            <ul>
              <li>
                We reserve the right to suspend or cancel your subscription
                without prior notice if you breach our Terms and Conditions or
                misuse the service.
              </li>
            </ul>

            <h4>2. Refund Policy</h4>
            <h4>2.1 Refund Eligibility:</h4>
            <p>Refunds may be issued in the following cases:</p>
            <ul>
              <li>If you were charged incorrectly due to a billing error.</li>
              <li>
                If a technical issue on our platform prevented you from
                accessing the service.
              </li>
            </ul>

            <h4>2.2 Non-Refundable Cases:</h4>
            <p>No refunds will be provided in the following situations:</p>
            <ul>
              <li>If you cancel after the billing cycle starts.</li>
              <li>For partial use of a monthly or annual subscription.</li>
              <li>
                For Enterprise plans, as terms are defined in the agreement.
              </li>
            </ul>

            <h4>2.3 Refund Process:</h4>
            <ul>
              <li>
                To request a refund, contact us at{" "}
                <a href="mailto:contact@diskuss.in">contact@diskuss.in</a> with
                your payment details and the reason for the refund.
              </li>
              <li>
                Refund requests will be reviewed within 7 business days, and
                eligible refunds will be processed within 14 business days after
                approval.
              </li>
              <li>
                Refunds will be credited to the original payment method used
                during the transaction.
              </li>
            </ul>

            <h4>3. Payment Disputes</h4>
            <p>
              If you believe you were charged incorrectly or wish to dispute a
              payment, please contact our support team at{" "}
              <a href="mailto:contact@diskuss.in">contact@diskuss.in</a> or +91
              8792976734.
            </p>

            <h4>4. Changes to This Policy</h4>
            <p>
              Diskuss reserves the right to update this Cancellation and Refund
              Policy at any time. Changes will be posted on this page, and your
              continued use of the service constitutes your agreement to the
              updated terms.
            </p>

            <h4>5. Contact Us</h4>
            <p>
              For any queries or concerns related to cancellations or refunds,
              please contact us:
            </p>
            <ul>
              <li>
                Email:{" "}
                <a href="mailto:contact@diskuss.in">contact@diskuss.in</a>
              </li>
              <li>Phone: +91 8792976734</li>
              <li>
                Address: Opp HDFC ATM, First Floor, No.1/1, T C Palya Main Road,
                Sannathammanahalli, K R Puram, Bengaluru, Bengaluru Urban,
                Karnataka, 560036
              </li>
            </ul>

            <p>
              Thank you for choosing Diskuss. We are here to ensure your
              satisfaction and trust!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CancellationPolicy;
