import { Button, Form, Modal, Select } from "antd";
import { Option } from "antd/es/mentions";
import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const AddTicket = ({ open, onClose }) => {
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link"],
    ],
  };

  return (
    <Modal
      title="Add Categories"
      open={open}
      onCancel={onClose}
      footer={[
        <Button key="cancel" onClick={onClose} className="cancel-btn">
          Cancel
        </Button>,
        <Button key="save" type="primary" className="create-btn">
          Save
        </Button>,
      ]}
    >
      <div className="row">
        <div className="col-lg-12">
          <Form.Item
            label="Category Name"
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
            <Form.Item label="Client Description">
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
        <div className="col-lg-6">
          <Form.Item
            label="Category Priority"
            className="custom-form-item"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
          >
            <Select
              className="form-control addTicket-form_control"
              placeholder="Select Priority"
            >
              <Option value="high">High</Option>
              <Option value="medium">Medium</Option>
              <Option value="low">Low</Option>
            </Select>
          </Form.Item>
        </div>
      </div>
    </Modal>
  );
};

export default AddTicket;
