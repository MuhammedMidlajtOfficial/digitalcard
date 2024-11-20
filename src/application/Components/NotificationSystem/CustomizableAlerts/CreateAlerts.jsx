import React from "react";
import { Button, Modal, Form, Input, Select, Radio, DatePicker, TimePicker, Row, Col } from "antd";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const { Option } = Select;

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    ["bold", "italic"],
    [{ align: [] }],
    ["link"],
    ["clean"],
  ],
};

const CreateAlerts = ({ open, handleCancel }) => (
  <Modal
    open={open}
    title="Create Alerts"
    onCancel={handleCancel}
    footer={[
      <Button key="back" onClick={handleCancel}>
        Cancel
      </Button>,
      <Button key="save" type="primary" >
        Save
      </Button>,
    ]}
  >
    <Form layout="vertical" className="mt-4">
      <Form.Item label={<span>Notification Title</span>}>
        <Input placeholder="Enter notification title"  />
      </Form.Item>

      <Form.Item label={<span>Notification Description</span>}>
        <ReactQuill theme="snow" modules={modules} placeholder="Your text goes here" />
      </Form.Item>

      <Form.Item>
        <Input placeholder="Add a description" style={{ border: "none" }} />
      </Form.Item>

      <Row gutter={16} align="middle">
        <Col span={12} >
          <Form.Item label={<span >Select Users Type</span>}>
            <Select placeholder="Select">
              <Option value="allUsers">All Users</Option>
              <Option value="newUsers">New Users</Option>
              <Option value="oldUsers">Old Users</Option>
              <Option value="inactiveUsers">Inactive Users</Option>
            </Select>
          </Form.Item>
        </Col>

        <Col span={12} >
          <Form.Item label={<span>Alert</span>}>
            <Radio.Group  >
              <Radio value="none" style={{fontWeight:400}}>None</Radio>
              <Radio value="6hours" style={{fontWeight:400}}>6 Hours</Radio>
              <Radio value="8hours" style={{fontWeight:400}}>8 Hours</Radio>
              <Radio value="24hours" style={{fontWeight:400}}>24 Hours</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={12}>
          <Form.Item label={<span >Schedule</span>}>
            <DatePicker placeholder="Select date" />
          </Form.Item>
        </Col>
        
        <Col span={12}>
          <Form.Item label=" ">
            <TimePicker placeholder="Select time"/>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  </Modal>
);
export default CreateAlerts;




