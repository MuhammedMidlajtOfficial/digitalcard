import React from "react";
import { Form, Input, Checkbox, Select, Radio } from "antd";

export const CompanyInformation = () => {
  return (
    <div className="settings-personal-information">
      <div className="container">
      <h4 className="mt-4 mt-lg-0">Information</h4>
      <Form layout="vertical">
          <div className="row mt-4">
            <div className="col-md-6 mb-1">
              <Form.Item label="Name" name="name">
                <Input placeholder="Enter First Name" />
              </Form.Item>
            </div>
            <div className="col-md-6 mb-1">
              <Form.Item label="Email" name="email">
                <Input placeholder="Enter Email" />
                <span>
                  The Contact email address of the store administrator.
                </span>
              </Form.Item>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-md-12 mb-1">
              <Form.Item label="Store Address" name="address">
                <Input placeholder="Enter Address" />
              </Form.Item>
            </div>
          </div>
          <h3>Date & Time</h3>
          <span>
            Timezone, date and time format settings used in the admin panel and
            storefront.
          </span>
          <div className="row mt-4">
            <div className="col-md-6 mb-1">
              <Form.Item label="Time Zone" name="timeZone">
                <Select placeholder="Select Time Zone" />
              </Form.Item>
            </div>
            <div className="col-md-6 mb-1">
              <Form.Item label="Date Format" name="dateFormat">
                <Input placeholder="Enter Date Format" />
              </Form.Item>
            </div>
            <div className="col-md-6 mb-1">
              <Form.Item label="Time Format" name="timeZone">
                <Select placeholder="Select Time Format" />
              </Form.Item>
            </div>
          </div>
          <h3>Reviews & Comments</h3>
          <span>
		  All Settings related to feedback and comments system.
          </span>

          <div className="row mt-4">
            <Form.Item label="Enable Reviews " name="enableReviews">
              <Radio.Group>
                <Radio value={true}>Yes</Radio>
                <Radio value={false}>No</Radio>
              </Radio.Group>
            </Form.Item>
          </div>
          <div className="row">
            <Form.Item
              name="remember"
              valuePropName="checked"
              label="Product Ratings"
            >
              <Checkbox>Enables star ratings on reviews</Checkbox>
              <br />
              <Checkbox>Star ratings should be required, not optional</Checkbox>
            </Form.Item>
          </div>
          <div className="row mt-4">
            <div className="d-flex justify-content-end gap-3">
              <button className="cancel-btn" type="button">
                Discard
              </button>
              <button className="create-btn" type="submit">
                Save Changes
              </button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};
