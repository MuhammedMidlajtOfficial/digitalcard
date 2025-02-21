import React from "react";
import { Form, Input, DatePicker } from "antd";
import DefaultUser from "../../../Assets/Images/admin.svg";
import { PiMapPinLineFill } from "react-icons/pi";
import { TbMailFilled } from "react-icons/tb";
import { PhoneInput } from "react-international-phone";
const ViewPayerInfo = () => {
  const [form] = Form.useForm();

  const HandleSubmitForm = () => {
    alert("Personal Information Updated Successfully!");
  };

  return (
    <div className="payer-information-section">
      <div className="container">
        <h4>Payer info</h4>
        <Form layout="vertical" form={form} onFinish={HandleSubmitForm}>
          <div className="row mt-4">
            <div className="payer-icon-section">
              <div className="profile-container">
                <img
                  src={DefaultUser}
                  alt="Profile"
                  className="profile-image"
                />
              </div>
              <div>
                <h2 className="mb-3">Navaneethan M</h2>
                <div className="d-flex gap-3 align-items-center">
                  <h1>
                    <PiMapPinLineFill />
                  </h1>
                  <p>HSR layout Bangalore</p>
                </div>
                <div className="d-flex gap-3 mt-2 align-items-center">
                  <h1>
                    <TbMailFilled />
                  </h1>
                  <span>Annette Black@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-6 mb-1">
              <Form.Item label="Name" name="name" className="view-payer-form">
                <Input
                  placeholder="Enter Your Name"
                  className="form-placeholder-field"
                />
              </Form.Item>
            </div>
            <div className="col-md-6 mb-1">
              <Form.Item
                label="Payment ID"
                name="payment"
                className="view-payer-form"
              >
                <Input
                  placeholder="Payment ID"
                  className="form-placeholder-field"
                />
              </Form.Item>
            </div>
          </div>
          <div className="row ">
            <div className="col-md-6 mb-1">
              <Form.Item
                label="Payment Method"
                name="method"
                className="view-payer-form"
              >
                <Input
                  placeholder="Payment method"
                  className="form-placeholder-field"
                />
              </Form.Item>
            </div>
            <div className="col-md-6 mb-1">
              <Form.Item label="Email" name="email" className="view-payer-form">
                <Input
                  placeholder="Eneter Email Id"
                  className="form-placeholder-field"
                />
              </Form.Item>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-1">
              <Form.Item
                label="Date of Payment"
                name="date"
                className="view-payer-form"
              >
                <DatePicker
                  format="DD/MM/YYYY"
                  placeholder="Select Date"
                  className="form-control"
                />
              </Form.Item>
            </div>
            <div className="col-md-6 mb-1">
              <label htmlFor="inputPhone" className="form-label" style={{ display: "flex", marginBottom: "0" }}>
                <span style={{ color: "#ff4d4f", marginRight: "4px", marginBottom: "8px" }}>*</span> Mobile Number
              </label>
              <PhoneInput
                defaultCountry="in"
                inputStyle={{ width: "100%" }}
              />
            </div>
          </div>
          <div className="row ">
            <div className="col-md-6 mb-1">
              <Form.Item
                label="Status"
                name="method"
                className="view-payer-form"
              >
                <Input
                  placeholder="status"
                  className="form-placeholder-field"
                />
              </Form.Item>
            </div>
            <div className="col-md-6 mb-1">
              <Form.Item
                label="Transaction ID"
                name="transactionid"
                className="view-payer-form"
              >
                <Input
                  placeholder="Eneter Transaction ID"
                  className="form-placeholder-field"
                />
              </Form.Item>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 mb-3">
              <Form.Item
                label="Address"
                name="address"
                className="view-payer-form"
              >
                  <Input
                    placeholder="Enter Your Address"
                    className="form-placeholder-field"
                  />
              </Form.Item>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};
export default ViewPayerInfo;
