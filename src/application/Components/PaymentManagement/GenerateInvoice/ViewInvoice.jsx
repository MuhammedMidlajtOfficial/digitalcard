import React from "react";
import { Form, Input, DatePicker, Radio } from "antd";
import ReactQuill from "react-quill";

export const ViewInvoice = () => {
  const [form] = Form.useForm();

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
        <h4 className="add-invoice-heading">Invoice</h4>
        <div className="view-invoice-page">
          <Form layout="vertical" form={form} onFinish={HandleSubmitForm}>
            <h5 className="mt-4 ivoice-form-heading">
              Invoice Details Section
            </h5>
            <div className="row mt-3">
              <div className="col-md-6 mb-1">
                <Form.Item
                  label="First Name"
                  name="name"
                  className="edit-user-form"
                >
                  <Input
                    placeholder="Enter Your Name"
                    className="form-placeholder-field"
                  />
                </Form.Item>
              </div>
              <div className="col-md-6 mb-1">
                <Form.Item
                  label="Last Name"
                  name="lastname"
                  className="edit-user-form"
                >
                  <Input
                    placeholder="Enter Your Name"
                    className="form-placeholder-field"
                  />
                </Form.Item>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-1">
                <Form.Item
                  label="Email"
                  name="email"
                  className="edit-user-form"
                >
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
                  label="Invoice Number"
                  name="invoice"
                  className="edit-user-form"
                >
                  <Input
                    placeholder="Eneter Your Invoice Number"
                    className="form-placeholder-field"
                  />
                </Form.Item>
              </div>
              <div className="col-md-6 mb-1">
                <Form.Item
                  label="PO Number"
                  name="ponumber"
                  className="edit-user-form"
                >
                  <Input
                    placeholder="Eneter Your PO Number"
                    className="form-placeholder-field"
                  />
                </Form.Item>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-1">
                <Form.Item
                  label="Invoice Date"
                  name="date"
                  className="edit-user-form"
                >
                  <DatePicker
                    placeholder="Select Invoice Date"
                    className="form-placeholder-field"
                    style={{ width: "100%" }}
                    format="DD/MM/YYYY"
                  />
                </Form.Item>
              </div>
              <div className="col-md-6 mb-1">
                <Form.Item
                  label="Due Date"
                  name="date"
                  className="edit-user-form"
                >
                  <DatePicker
                    placeholder="Select Due Date"
                    className="form-placeholder-field"
                    style={{ width: "100%" }}
                    format="DD/MM/YYYY"
                  />
                </Form.Item>
              </div>
            </div>

            <h5 className="mt-4 ivoice-form-heading">Client Details Section</h5>
            <div className="row mt-3">
              <div className="col-md-6 mb-1">
                <Form.Item
                  label="Client Name"
                  name="client"
                  className="edit-user-form"
                >
                  <Input
                    placeholder="Enter Your Name"
                    className="form-placeholder-field"
                  />
                </Form.Item>
              </div>
              <div className="col-md-6 mb-1">
                <Form.Item
                  label="Client Email"
                  name="email"
                  className="edit-user-form"
                >
                  <Input
                    placeholder="Eneter Your Mail Id"
                    className="form-placeholder-field"
                  />
                </Form.Item>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-md-6 mb-1">
                <Form.Item
                  label="Billing Address"
                  name="billingaddress"
                  className="edit-user-form"
                >
                  <Input
                    placeholder="Enter Your Address"
                    className="form-placeholder-field"
                  />
                </Form.Item>
              </div>
              <div className="col-md-6 mb-1">
                <Form.Item
                  label="Shipping Address"
                  name="shippingaddress"
                  className="edit-user-form"
                >
                  <Input
                    placeholder="Enter Your Address"
                    className="form-placeholder-field"
                  />
                </Form.Item>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-md-6 mb-1">
                <Form.Item label="Code">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <Radio.Group>
                      <Radio value="pincode">Pincode</Radio>
                      <Radio value="zipcode">Zipcode</Radio>
                    </Radio.Group>
                    <Input
                      placeholder="Ender number"
                      className="form-placeholder-field"
                      style={{ width: "150px" }}
                    />
                  </div>
                </Form.Item>
              </div>
            </div>
            <h5 className="mt-4 ivoice-form-heading">
              Itemized Services/Products Section
            </h5>
            <div className="row mt-3">
              <div className="col-md-4 mb-1">
                <Form.Item
                  label="Item/Service"
                  name="service"
                  className="edit-user-form"
                >
                  <Input
                    placeholder="Enter Item or Service"
                    className="form-placeholder-field"
                  />
                </Form.Item>
              </div>
              <div className="col-md-4 mb-1">
                <Form.Item
                  label="Description"
                  name="description"
                  className="edit-user-form"
                >
                  <Input
                    placeholder="Enter Description"
                    className="form-placeholder-field"
                  />
                </Form.Item>
              </div>
              <div className="col-md-4 mb-1">
                <Form.Item
                  label="Quantity"
                  name="quantity"
                  className="edit-user-form"
                >
                  <Input
                    placeholder="Enter quantity"
                    className="form-placeholder-field"
                  />
                </Form.Item>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-md-4 mb-1">
                <Form.Item
                  label="Rate/Unit Price"
                  name="rate"
                  className="edit-user-form"
                >
                  <Input
                    placeholder="Enter Price"
                    className="form-placeholder-field"
                  />
                </Form.Item>
              </div>
              <div className="col-md-4 mb-1">
                <Form.Item
                  label="Discount"
                  name="discount"
                  className="edit-user-form"
                >
                  <Input
                    placeholder="Enter Discount"
                    className="form-placeholder-field"
                  />
                </Form.Item>
              </div>
              <div className="col-md-4 mb-1">
                <Form.Item label="Tax" name="tax" className="edit-user-form">
                  <Input
                    placeholder="Enter Tax"
                    className="form-placeholder-field"
                  />
                </Form.Item>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-md-4 mb-1">
                <Form.Item
                  label="Currency"
                  name="currency"
                  className="edit-user-form"
                >
                  <Input
                    placeholder="Enter Currency"
                    className="form-placeholder-field"
                  />
                </Form.Item>
              </div>
              <div className="col-md-4 mb-1">
                <Form.Item
                  label="Total"
                  name="total"
                  className="edit-user-form"
                >
                  <Input
                    placeholder="Enter Total"
                    className="form-placeholder-field"
                  />
                </Form.Item>
              </div>
            </div>
            <div className="row">
              <div className="d-flex justify-content-end gap-3">
                <button className="cancel-btn" type="button">
                  Edit
                </button>
                <button className="create-btn" type="submit">
                  Save
                </button>
              </div>
            </div>
            <Form.Item label="Description">
              <ReactQuill
                theme="snow"
                modules={modules}
                placeholder="Your text goes here"
              />
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};
