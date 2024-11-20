import {
  Button,
  DatePicker,
  Form,
  Modal,
  Radio,
  Select,
  Switch,
  TimePicker,
} from "antd";
import { Option } from "antd/es/mentions";
import React, { useState } from "react";
import { CgDanger } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa6";
import { TbUsersGroup } from "react-icons/tb";
import ReactQuill from "react-quill";
import CreateCampaignClickMeModel from "./CreateCampaignClickMeModel";

const CreateCampaign = ({ open, onCancel }) => {
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link"],
    ],
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal
      open={open}
      onCancel={onCancel}
      title="Compaign Info "
      footer={[
        <Button
          key="cancel"
          onClick={onCancel}
          className="assignTicket-cancel-button"
        >
          Cancel
        </Button>,
        <Button
          key="save"
          type="primary"
          className="openticket-submitRely-button"
        >
          Save
        </Button>,
      ]}
    >
      <div className="row">
        <div className="d-flex gap-1 align-items-center">
          <CgDanger />
          <p className="createCompaign-copy-p mb-0">
            Copy the template for quick campaign from template section{" "}
          </p>
          <button className="createCompaign-click-button" onClick={showModal}>
            click me
          </button>
        </div>
        <div className="col-lg-12">
          <Form.Item
            label="Campaign Name"
            className="custom-form-item"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
          >
            <input
              type="text"
              className="form-control form_control"
              placeholder=""
            />
          </Form.Item>
        </div>

        <div className="row">
          <div className="col-12">
            <Form.Item label="Campaign Description">
              <ReactQuill theme="snow" modules={modules} />
            </Form.Item>
          </div>
          <div>
            <input
              type="text"
              placeholder="Add a description"
              className="addTicket-description-input"
            />
          </div>
        </div>
        <h6>User Info</h6>
        <div className="col-lg-6">
          <Form.Item
            label={
              <span>
                Individual User{" "}
                <span className="compaignSetup-userinfo-span"> Total 10K</span>
              </span>
            }
            className="custom-form-item"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
          >
            <Select
              className="form-control addTicket-form_control"
              placeholder={
                <>
                  <FaRegUser style={{ marginRight: "8px" }} />
                  Select Priority
                </>
              }
            >
              <Option value="high">High</Option>
              <Option value="medium">Medium</Option>
              <Option value="low">Low</Option>
            </Select>
          </Form.Item>
        </div>
        <div className="col-lg-6">
          <Form.Item
            label={
              <span>
                Enterprice user{" "}
                <span className="compaignSetup-userinfo-span"> Total 14K</span>
              </span>
            }
            className="custom-form-item"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
          >
            <Select
              className="form-control addTicket-form_control"
              placeholder={
                <>
                  <TbUsersGroup style={{ marginRight: "8px" }} />
                  Select Priority
                </>
              }
            >
              <Option value="high">High</Option>
              <Option value="medium">Medium</Option>
              <Option value="low">Low</Option>
            </Select>
          </Form.Item>
        </div>
        <div className="col-lg-6 d-flex justify-content-between">
          <p className="addTicket-description-input">SMS</p>
          <Switch size="small" className="create-compaign-switch" />
        </div>
        <div className="col-lg-6 d-flex justify-content-between">
          <p className="addTicket-description-input">SMS</p>
          <Switch size="small" className="create-compaign-switch" />
        </div>
        <div className="col-lg-6 d-flex justify-content-between">
          <p className="addTicket-description-input">Email</p>
          <Switch size="small" className="create-compaign-switch" />
        </div>
        <div className="col-lg-6 d-flex justify-content-between">
          <p className="addTicket-description-input">Email</p>
          <Switch size="small" className="create-compaign-switch" />
        </div>
        <div className="col-lg-6">
          <Form.Item
            label="Visibility"
            className="custom-form-item"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
          >
            <Radio.Group
              onChange={onChange}
              value={value}
              className="createCompaign-radio-group"
            >
              <Radio value={1}>Immediately</Radio>
              <Radio value={2}>Scheduled</Radio>
            </Radio.Group>
          </Form.Item>
        </div>
        <div className="col-lg-6">
          <Form.Item
            label="Date Added"
            className="custom-form-item"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
          >
            <dic className="row">
              <div className="col-lg-6">
                <DatePicker />
              </div>
              <div className="col-lg-6">
                <TimePicker />
              </div>
            </dic>
          </Form.Item>
        </div>
        <CreateCampaignClickMeModel open={isModalOpen} onClose={handleCancel} />
      </div>
    </Modal>
  );
};

export default CreateCampaign;
