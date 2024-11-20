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

const CreateSubscription = ({ open, handleCancel }) => (
  <Modal
    open={open}
    title="Edit Subscription"
    onCancel={handleCancel}
    footer={[
      <Button key="back" onClick={handleCancel}>
        Cancel
      </Button>,
      <Button
        key="save"
        onClick={handleCancel}
        type="primary"
      >
        Save
      </Button>,
    ]}
  >
    <Form layout="vertical" className="mt-4">
      <Form.Item label="Subscription Name">
        <Input placeholder="Enter subscription name" />
      </Form.Item>

      <Form.Item label="Subscription Description">
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

      <Row gutter={16}>
        <Col span={8}>
          <Form.Item label="Price">
            <Input prefix="₹" placeholder="999" />
          </Form.Item>
        </Col>

        <Col span={8}>
          <Form.Item label="Select Package">
            <Select placeholder="Select Package">
              <Option value="monthly">Monthly</Option>
              <Option value="yearly">Yearly</Option>
            </Select>
          </Form.Item>
        </Col>

        <Col span={8}>
          <Form.Item label="Select Plan">
            <Select placeholder="Select Plan">
              <Option value="premium">Premium</Option>
              <Option value="basic">Basic</Option>
              <Option value="standard">Standard</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>

      <Form.Item label="User Type">
        <Radio.Group>
          <Radio value="individual">Individual</Radio>
          <Radio value="enterprise">Enterprise</Radio>
        </Radio.Group>
      </Form.Item>
    </Form>
  </Modal>
);

export default CreateSubscription;
