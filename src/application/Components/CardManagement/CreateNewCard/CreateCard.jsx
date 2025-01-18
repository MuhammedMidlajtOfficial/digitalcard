
import React from "react";
import { Form, Input, Select } from "antd";
import { PiImages } from "react-icons/pi";
import { ColorPicker, Space } from "antd";
import cardfront from "../../../Assets/Images/card2.svg";
import cardback from "../../../Assets/Images/cardback.svg";

const CreateCard = () => {
  const fontOptions = [
    { label: "Arial", value: "Arial" },
    { label: "Helvetica", value: "Helvetica" },
    { label: "Times New Roman", value: "Times New Roman" },
    { label: "Courier New", value: "Courier New" },
    { label: "Verdana", value: "Verdana" },
    { label: "Tahoma", value: "Tahoma" },
    { label: "Georgia", value: "Georgia" },
    { label: "Palatino", value: "Palatino" },
    { label: "Garamond", value: "Garamond" },
  ];
  return (
    <div className="application-view-cards-section">
      <div className="container">
        <div className="row">
          <div className="application-cards-section mb-3">
            <h2>Create New Card</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 mb-6">
            <div className="application-view-users-cards">
              <div className="d-flex justify-content-center">
                <img src={cardfront} alt="" />
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <h1 className="card-view-btn">Front</h1>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-6">
            <div className="application-view-users-cards">
              <div className="d-flex justify-content-center">
                <img src={cardback} alt="" />
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <h1 className="card-view-btn">Back</h1>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h4 className="form-heading">Enter Personal Information</h4>
          <Form layout="vertical">
            <div className="row mt-4">
              <div className="col-md-6 mb-1">
                <Form.Item label="Name" name="name" className="edit-user-form">
                    <Input
                      placeholder="Enter Your Name"
                      className="form-placeholder-field"
                    />
                </Form.Item>
              </div>
              <div className="col-md-6 mb-1">
                <Form.Item
                  label="Job Title"
                  name="jobtitle"
                  className="edit-user-form"
                >
                    <Input
                      placeholder="Job Title"
                      className="form-placeholder-field"
                    />
                </Form.Item>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-1">
                <Form.Item
                  label="Company"
                  name="company"
                  className="edit-user-form"
                >
                    <Input
                      placeholder="Enter Company Name"
                      className="form-placeholder-field"
                    />
                </Form.Item>
              </div>
              <div className="col-md-6 mb-1">
                <Form.Item
                  label="Email"
                  name="email"
                  className="edit-user-form"
                >
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
                  label="Phone Number"
                  name="phone"
                  className="edit-user-form"
                >
                  <div className="d-flex align-items-center">
                    <Input
                      placeholder="Enter Phone Number"
                      className="form-placeholder-field"
                    />
                  </div>
                </Form.Item>
              </div>
              <div className="col-lg-6">
                <Form.Item
                  label="Website"
                  name="website"
                  className="edit-user-form"
                >
                 <div className="d-flex align-items-center">
                    <Input
                      placeholder="Enter Website Url"
                      className="form-placeholder-field"
                    />
                  </div>
                </Form.Item>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 mb-3">
                <Form.Item
                  label="Address"
                  name="address"
                  className="edit-user-form"
                >
                    <Input
                      placeholder="Enter Your Address"
                      className="form-placeholder-field"
                    />
                </Form.Item>
              </div>
            </div>
            <div className="row">
              <div className="d-flex justify-content-end gap-3">
                <button className="view-cancel-btn" type="button">
                Discard
                </button>
                <button className="view-create-btn" type="submit">
                  Save Changes
                </button>
              </div>
            </div>
          </Form>
        </div>
        <div>
          <h4 className="form-heading">Customize Your Card</h4>
          <Form layout="vertical">
            <div className="row mt-4">
              <div className="col-md-6 mb-1">
                <Form.Item
                  label="Profile Picture"
                  name="profile"
                  className="edit-user-form"
                >
                  <div className="d-flex align-items-center">
                    <Input
                      placeholder="profile picture"
                      className="form-placeholder-field"
                    />
                    <PiImages className="pencil-edit" />
                  </div>
                </Form.Item>
              </div>
              <div className="col-md-6 mb-1">
                <Form.Item
                  label="Background Color"
                  name="background"
                  className="edit-user-form"
                >
                  <div className="d-flex align-items-center">
                    <Space
                      direction="vertical"
                      size="small"
                      style={{ width: "100%" }}
                    >
                      <div className="color-picker-wrapper">
                        <ColorPicker
                          defaultValue="#1677ff"
                          size="small"
                          showText
                        />
                      </div>
                    </Space>
                  </div>
                </Form.Item>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-1">
                <Form.Item
                  label="Font Style"
                  name="fontstyle"
                  className="edit-user-form"
                >
                  <Select
                    placeholder="Select Font Style"
                    className="form-placeholder-select"
                    options={fontOptions}
                  />
                </Form.Item>
              </div>
              <div className="col-md-6 mb-1">
                <Form.Item label="Logo" name="logo" className="edit-user-form">
                    <Input
                      placeholder="Logo"
                      className="form-placeholder-field"
                    />
                </Form.Item>
              </div>
            </div>
            <div className="row">
              <div className="d-flex justify-content-end gap-3">
                <button className="view-cancel-btn" type="button">
                  Discard
                </button>
                <button className="view-create-btn" type="submit">
                  Save Changes
                </button>
              </div>
            </div>
          </Form>
        </div>
        <div>
          <h4 className="form-heading">Add Social Media Links</h4>
          <Form layout="vertical">
            <div className="row mt-4">
              <div className="col-md-6 mb-1">
                <Form.Item label="LinkedIn" name="linkedIn" className="edit-user-form">
                    <Input
                      placeholder="LinkedIn Url"
                      className="form-placeholder-field"
                    />
                </Form.Item>
              </div>
              <div className="col-md-6 mb-1">
                <Form.Item
                  label="Twitter"
                  name="twitter"
                  className="edit-user-form"
                >
                    <Input
                      placeholder="Twitter Url"
                      className="form-placeholder-field"
                    />
                </Form.Item>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-1">
                <Form.Item
                  label="Facebook"
                  name="facebook"
                  className="edit-user-form"
                >
                    <Input
                      placeholder="Facebook Name"
                      className="form-placeholder-field"
                    />
                </Form.Item>
              </div>
              <div className="col-md-6 mb-1">
                <Form.Item
                  label="Instagram"
                  name="instagram"
                  className="edit-user-form"
                >
                    <Input
                      placeholder="Eneter Instagram Id"
                      className="form-placeholder-field"
                    />
                </Form.Item>
              </div>
            </div>
            <div className="row">
              <div className="d-flex justify-content-end gap-3">
                <button className="view-cancel-btn" type="button">
                Discard
                </button>
                <button className="view-create-btn" type="submit">
                  Save Changes
                </button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CreateCard;
