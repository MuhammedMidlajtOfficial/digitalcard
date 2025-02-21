import React from "react";
import profile4 from "../../../Assets/Images/profile4.svg";
import profile5 from "../../../Assets/Images/profile5.svg";
import profile3 from "../../../Assets/Images/profile3.svg";
import { Avatar } from "antd";
import { FaRegSmile } from "react-icons/fa";
import { IoIosCheckmark } from "react-icons/io";
import { HiMiniXMark } from "react-icons/hi2";
import { FiAlertTriangle } from "react-icons/fi";

const AllAdminNotifications = () => {
  return (
    <>
      <div className="mt-4">
        <div className="col-lg-12 d-flex justify-content-between align-items-center notifications-background-color">
          <div className="d-flex gap-2">
            <div>
              <Avatar size={50} src={profile4} />
            </div>
            <div>
              <h5>Kiran K</h5>
              <p>
                Password Changed Successfully{" "}
                <FaRegSmile
                  size={20}
                  style={{
                    backgroundColor: "var( --user-icons-3)",
                    borderRadius: "10px",
                  }}
                />
              </p>
              <p>
                Your password was changed successfully. If this wasn’t you,
                please reset your password immediately or contact support.
              </p>
            </div>
          </div>
          <div>
            <p>20 min ago</p>
          </div>
        </div>

        <div className="col-lg-12 d-flex justify-content-between mt-5 notifications-background-color">
          <div className="d-flex gap-2">
            <div>
              <Avatar size={50} src={profile5} />
            </div>
            <div>
              <h5>Siddu M</h5>
              <p>
                Payment Received{" "}
                <IoIosCheckmark
                  size={20}
                  style={{
                    backgroundColor: "var(--green-color)",
                    borderRadius: "10px",
                    color: "var(--white-color)",
                  }}
                />
              </p>
              <p>
                We’ve successfully received your payment of Rupees ₹1899 Your
                transaction ID is TRANSACTION ID 7T079785RH597493K Thank you for
                your purchase!
              </p>
            </div>
          </div>
          <div>
            <p>1 hour ago</p>
          </div>
        </div>

        <div className="col-lg-12 d-flex justify-content-between mt-5 notifications-background-color">
          <div className="d-flex gap-2">
            <div>
              <Avatar size={50} src={profile3} />
            </div>
            <div>
              <h5>Navaneethan M</h5>
              <p>
                Payment Unsuccessful{" "}
                <HiMiniXMark
                  size={20}
                  style={{
                    backgroundColor: "var(--danger-color)",
                    borderRadius: "10px",
                    color: "var(--white-color)",
                  }}
                />
              </p>
              <p>
                There was an issue processing your payment. Please try again or
                use a different payment method.
              </p>
            </div>
          </div>
          <div>
            <p>4 hour ago</p>
          </div>
        </div>

        <div className="col-lg-12 d-flex justify-content-between mt-5 notifications-background-color">
          <div className="d-flex gap-2">
            <div>
              <Avatar size={50} src={profile3} />
            </div>
            <div>
              <h5>Charan K</h5>
              <p>
                Refund Issued{" "}
                <FiAlertTriangle
                  size={20}
                  style={{
                    backgroundColor: "var(--danger-color)",
                    borderRadius: "20px",
                    color: "var(--white-color)",
                  }}
                />
              </p>
              <p>
                A refund of Rupees ₹1899 has been processed to your account.
                Please allow 3-5 business days for the amount to reflect.
              </p>
            </div>
          </div>
          <div>
            <p>20 min ago</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllAdminNotifications;
