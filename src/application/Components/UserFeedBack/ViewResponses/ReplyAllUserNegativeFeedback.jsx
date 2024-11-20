import React from "react";
import { Button, Modal, Form, Input, Select, Radio, Row, Col } from "antd";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const { Option } = Select;

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    ["bold", "italic"],
    ["link", "image"],
    ["clean"],
  ],
};

const ReplyAllUserNegativeFeedback = ({ open, handleCancel }) => (
  <Modal
    open={open}
    title="Reply All"
    onCancel={handleCancel}
    footer={[
      <Button key="back" onClick={handleCancel}>
        Cancel
      </Button>,
      <Button
        key="save"
        onClick={handleCancel}
        className="create-subscription-save-button"
      >
        Save
      </Button>,
    ]}
  >
    <Form layout="vertical" className="mt-4">
      <Form.Item label="Title">
        <Input  />
      </Form.Item>

      <Form.Item label="Description">
        <ReactQuill
          theme="snow"
          modules={modules}
          placeholder="Your text goes here"
        />
      </Form.Item>

      <Form.Item>
        <Input
          placeholder="Add a description"
          className="create-subscription-description-input"
        />
      </Form.Item>
    </Form>
  </Modal>
);

export default ReplyAllUserNegativeFeedback;
