import React, { useState } from "react";
import ActiveCampaign from "./ActiveCampaign";
import CompletedCampaign from "./CompletedCampaign";
import DraftCampaign from "./DraftCampaign";
import { DatePicker, Form, Menu, Select } from "antd";
import { FiPlus } from "react-icons/fi";
import { Option } from "antd/es/mentions";
import CreateCampaign from "./CreateCampaign";
const { RangePicker } = DatePicker;

const CampaignSetupMenu = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const items = [
    {
      label: (
        <span className="d-flex align-items-center">
          Active
        </span>
      ),
      key: "active",
    },
    {
      label: (
        <span className="d-flex align-items-center">
          Completed
        </span>
      ),
      key: "completed",
    },
    {
      label: (
        <span className="d-flex align-items-center">
          Draft
        </span>
      ),
      key: "draft",
    },
  ];

  const [current, setCurrent] = useState("active");

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <div className="container">
      <div className="d-flex align-items-center justify-content-between mb-4">
        <h5 className="RBACPermission-list-heading">Create Campaign</h5>
        <button
          onClick={showModal}
          className="create-btn d-flex gap-2 align-items-center"
        >
          {" "}
          <FiPlus /> Create Campaign
        </button>
      </div>
      <Form layout="vertical">
        <div className="row">
          <div className="col-lg-3">
            <Form.Item label="Triggered by">
              <Select
                className="form-control addTicket-form_control"
                placeholder="Select issue"
              >
                <Option value="high">Technical issue</Option>
                <Option value="medium">Billing & Payment</Option>
                <Option value="low">General enquiry</Option>
              </Select>
            </Form.Item>
          </div>
          <div className="col-lg-3">
            <Form.Item label="Status">
              <Select
                className="form-control addTicket-form_control"
                placeholder="Select issue"
              >
                <Option value="high">Technical issue</Option>
                <Option value="medium">Billing & Payment</Option>
                <Option value="low">General enquiry</Option>
              </Select>
            </Form.Item>
          </div>
          <div className="col-lg-3">
            <Form.Item label="Tags">
              <Select
                className="form-control addTicket-form_control"
                placeholder="Select issue"
              >
                <Option value="high">Technical issue</Option>
                <Option value="medium">Billing & Payment</Option>
                <Option value="low">General enquiry</Option>
              </Select>
            </Form.Item>
          </div>
          <div className="col-lg-3">
            <Form.Item label="Sort by">
              <Select
                className="form-control addTicket-form_control"
                placeholder="Select issue"
              >
                <Option value="high">Technical issue</Option>
                <Option value="medium">Billing & Payment</Option>
                <Option value="low">General enquiry</Option>
              </Select>
            </Form.Item>
          </div>
        </div>
      </Form>
      <div className="d-flex justify-content-between align-items-center align-content-center mb-4 flex-lg-row flex-xl-row flex-column">
        <Menu
          style={{ marginBottom: "30px" }}
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
          className="manage-order-menu"
        />
        <div>
          <RangePicker />
        </div>
      </div>
      <div>
        {current === "active" && <ActiveCampaign />}
        {current === "completed" && <CompletedCampaign />}
        {current === "draft" && <DraftCampaign />}
      </div>
      <CreateCampaign open={isModalVisible} onCancel={handleCancel} />
    </div>
  );
};

export default CampaignSetupMenu;
