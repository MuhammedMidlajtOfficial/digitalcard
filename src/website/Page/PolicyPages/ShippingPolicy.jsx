import React from "react";
import { Helmet } from "react-helmet";
import "./policy.css";
const ShippingPolicy = () => {
  return (
    <>
      <Helmet>
        <title>
          Shipping and Delivery Policy - KC (Know Connections) | Digital Card Solutions
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
            <h2>Shipping And Delivery Policy</h2>
            {/* <p className="subtitle">Our journey to simplify and enhance business connections for everyone.</p> */}
            <div className="banner-image-container"></div>
          </div>
        </div>
        <div className="privacy-policy-section p-4">
          <div className="container">
            <h2>Shipping and Delivery Policy</h2>
            <p>
              At KC (Know Connections), we provide digital products and services that do not
              require physical shipping. However, in case of promotional items,
              merchandise, or other physical goods being offered, this Shipping
              and Delivery Policy outlines our terms for delivery.
            </p>
            <p>
              If you have any questions or concerns regarding our Shipping and
              Delivery Policy, please contact us:
            </p>
            <ul>
              <li>
                Email:{" "}
                <a href="mailto:contact@knowconnections.com">contact@knowconnections.com</a>
              </li>
              <li>Phone: +91 8792976734</li>
            </ul>

            <h4>1. Scope of Policy</h4>
            <p>This policy applies to:</p>
            <ul>
              <li>Physical items (if any) purchased through our platform.</li>
              <li>
                Promotional merchandise offered as part of campaigns or rewards.
              </li>
              <li>
                For our core digital services and subscriptions, there is no
                shipping involved as they are accessible online.
              </li>
            </ul>

            <h4>2. Shipping Process</h4>
            <h4>2.1 Order Processing Time:</h4>
            <ul>
              <li>
                All orders are processed within 1-3 business days from the time
                of purchase.
              </li>
              <li>
                You will receive a confirmation email once your order is
                shipped.
              </li>
            </ul>

            <h4>2.2 Delivery Time:</h4>
            <ul>
              <li>
                Delivery times vary based on the shipping location and the
                chosen delivery method.
              </li>
              <li>
                Standard delivery typically takes 5-10 business days for
                domestic orders and 10-15 business days for international
                orders.
              </li>
            </ul>

            <h4>2.3 Delays:</h4>
            <ul>
              <li>
                Unforeseen circumstances such as weather, customs clearance, or
                courier issues may result in delays. In such cases, we will
                inform you promptly.
              </li>
            </ul>

            <h4>3. Shipping Charges</h4>
            <h4>3.1 Domestic Shipping:</h4>
            <ul>
              <li>
                Shipping fees for domestic orders will be calculated at checkout
                and displayed before confirming your purchase.
              </li>
            </ul>

            <h4>3.2 International Shipping:</h4>
            <ul>
              <li>
                International shipping fees vary based on the destination
                country and will be communicated during checkout. Additional
                customs charges or taxes (if any) will be the responsibility of
                the customer.
              </li>
            </ul>

            <h4>4. Delivery Address</h4>
            <p>
              Please ensure that the shipping address provided during checkout
              is accurate. KC (Know Connections) is not responsible for delays or failed
              deliveries caused by incorrect or incomplete addresses.
            </p>

            <h4>5. Tracking Your Order</h4>
            <p>
              Once your order is shipped, you will receive a tracking number via
              email to monitor the status of your delivery.
            </p>

            <h4>6. Returns and Refunds</h4>
            <p>
              Refer to our{" "}
              <a href="/cancellation-policy">
                Cancellation and Refund Policy
              </a>{" "}
              for details on how to initiate a return or request a refund for
              physical goods.
            </p>

            <h4>7. Changes to This Policy</h4>
            <p>
            KC (Know Connections) reserves the right to update this Shipping and Delivery
              Policy at any time. Changes will be posted on this page, and your
              continued use of the service constitutes your agreement to the
              updated terms.
            </p>

            <h4>8. Contact Us</h4>
            <p>
              For any shipping or delivery-related inquiries, please contact us:
            </p>
            <ul>
              <li>
                Email:{" "}
                <a href="mailto:contact@knowconnections.com">contact@knowconnections.com</a>
              </li>
              <li>Phone: +91 8792976734</li>
              <li>
                Address: Opp HDFC ATM, First Floor, No.1/1, T C Palya Main Road,
                Sannathammanahalli, K R Puram, Bengaluru, Bengaluru Urban,
                Karnataka, 560036
              </li>
            </ul>

            <p>
              Thank you for choosing KC (Know Connections). We are committed to delivering
              excellence!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShippingPolicy;
