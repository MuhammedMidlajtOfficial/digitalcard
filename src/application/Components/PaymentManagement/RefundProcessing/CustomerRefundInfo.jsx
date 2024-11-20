import React from "react";
import { Form, Input, DatePicker, Radio } from "antd";
import ReactQuill from "react-quill";
import { HiMiniXMark } from "react-icons/hi2";
import { FaCheck } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
const CustomerRefundInfo = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  
  const HandleSubmitForm = () => {
    alert("Personal Information Updated Successfully!");
  };
  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["bold", "italic"],
      ["link", "image"],
      ["clean"],
    ],
  };
  return (
    <div className="personal-information-section">
      <div className="container">
        <Form layout="vertical" form={form} onFinish={HandleSubmitForm}>
          <h5 className="mt-4 ivoice-form-heading">Customer Info</h5>
          <div className="row mt-3">
            <div className="col-md-6 mb-1">
              <Form.Item
                label="Request ID"
                name="requestid"
                className="edit-user-form"
              >
                <Input
                  placeholder="Show Request ID"
                  className="form-placeholder-field"
                />
              </Form.Item>
            </div>
            <div className="col-md-6 mb-1">
              <Form.Item
                label="Customer Name"
                name="name"
                className="edit-user-form"
              >
                <Input
                  placeholder="Enter Customer Name"
                  className="form-placeholder-field"
                />
              </Form.Item>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-1">
              <Form.Item label="Email" name="email" className="edit-user-form">
                <Input
                  placeholder="Eneter Your Mail Id"
                  className="form-placeholder-field"
                />
              </Form.Item>
            </div>
            <div className="col-md-6 mb-1">
              <Form.Item
                label="Contact No"
                name="mobile"
                className="edit-user-form"
              >
                <Input
                  placeholder="Mobile Number"
                  className="form-placeholder-field"
                />
              </Form.Item>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-1">
              <Form.Item
                label="Amount"
                name="amount"
                className="edit-user-form"
              >
                <Input
                  placeholder="Eneter Your Price"
                  className="form-placeholder-field"
                />
              </Form.Item>
            </div>
            <div className="col-md-6 mb-1">
              <Form.Item label="Date" name="date" className="edit-user-form">
                <DatePicker
                  placeholder="Select Date"
                  className="form-placeholder-field"
                  style={{ width: "100%" }}
                  format="DD/MM/YYYY"
                />
              </Form.Item>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-1">
              <Form.Item
                label="Payment Method"
                name="method"
                className="edit-user-form"
              >
                <Input
                  placeholder="Payment Method"
                  className="form-placeholder-field"
                />
              </Form.Item>
            </div>
            <div className="col-md-6 mb-1">
              <Form.Item label="UPI ID" name="upi" className="edit-user-form">
                <Input
                  placeholder="Eneter UPI ID"
                  className="form-placeholder-field"
                />
              </Form.Item>
            </div>
          </div>
          <div>
            <h5 className="mt-4 ivoice-form-heading">Request Reason</h5>
            <div className="d-flex justify-content-between mt-3">
              <p
                className="request-span"
                style={{ display: "flex", alignItems: "center" }}
              >
                <span></span>
                Request ID # 2023-CS123
              </p>
              <p className="request-time">Posted at 12:45 AM</p>
            </div>
            <h4 className="request-heading">I want Refund amount back?</h4>
            <p className="request-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
              dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
            <div className="d-flex gap-2 mb-2">
              <button className="button-reject">
                <HiMiniXMark />
                Reject
              </button>
              <button className="button-accept">
                <FaCheck />
                Accept
              </button>
            </div>
          </div>
          <Form.Item label="Send update to customer">
            <ReactQuill
              theme="snow"
              modules={modules}
              placeholder="Your text goes here"
            />
          </Form.Item>
          <div className="row">
            <div className="d-flex justify-content-end gap-3">
              <button
                className="cancel-btn"
                type="button"
                onClick={() =>
                  navigate("/admin/paymentmanagement/refundprocess")
                }
              >
                Cancel
              </button>
              <button className="create-btn" type="submit">
                Process Refund
              </button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};
export default CustomerRefundInfo;
