import React, { useState } from "react";
import { Button, Modal, Form, Select, Switch, Radio, DatePicker, TimePicker, Row, Col } from "antd";
import "react-quill/dist/quill.snow.css";

const { Option } = Select;

const RemainderSettings = ({ open, handleCancel }) => {
  const [switchState, setSwitchState] = useState(true);
  const onChange = (checked) => {
    setSwitchState(checked);
    console.log(`Switch is now ${checked ? "ON" : "OFF"}`);
  };
  return (
    <Modal
      open={open}
      title="Reminder Settings"
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleCancel}>
          Cancel
        </Button>,
        <Button key="save" className="add-all-users" onClick={handleCancel}>
          Save
        </Button>,
      ]}
    >
      <Form layout="vertical" className="mt-4">
        <Row gutter={16}>
          <Col xs={24} sm={12} md={12}>
            <Form.Item label="Reminder Frequency">
              <Select placeholder="Reminder Frequency">
                <Option value="monthly">Monthly</Option>
                <Option value="yearly">Yearly</Option>
              </Select>
            </Form.Item>
          </Col>

          <Col xs={24} sm={12} md={12}>
            <Form.Item label="Select User">
              <Select placeholder="Select Plan">
                <Option value="silver">Silver User</Option>
                <Option value="gold">Gold User</Option>
                <Option value="platinum">Platinum User</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col xs={24} sm={12} md={12}>
            <Form.Item label="Reminder Methods">
              <Row gutter={16} align="middle">
                <Col>
                  <Switch
                    checked={switchState}
                    onChange={onChange}
                    style={{
                      backgroundColor: switchState ? "#1890ff" : "#E0E7FF",
                    }}
                  />
                </Col>
                <Col>
                  <span>Email Notification</span>
                </Col>
              </Row>
              <Row gutter={16} align="middle" className="mt-4">
                <Col>
                  <Switch
                    defaultChecked
                    onChange={onChange}
                    style={{
                      backgroundColor: "#E0E7FF",
                    }}
                  />
                </Col>
                <Col>
                  <span>SMS Notification</span>
                </Col>
              </Row>
              <Row gutter={16} align="middle" className="mt-4">
                <Col>
                  <Switch
                    defaultChecked
                    onChange={onChange}
                    style={{
                      backgroundColor: "#E0E7FF",
                    }}
                  />
                </Col>
                <Col>
                  <span>In-App Notification</span>
                </Col>
              </Row>
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={12}>
            <Form.Item label="Alert">
              <Radio.Group>
                <Row gutter={[0, 16]}>
                  <Col span={24}>
                    <Radio value="none">None</Radio>
                  </Col>
                  <Col span={24}>
                    <Radio value="6hours">6 Hours</Radio>
                  </Col>
                  <Col span={24}>
                    <Radio value="8hours">8 Hours</Radio>
                  </Col>
                  <Col span={24}>
                    <Radio value="24hours">24 Hours</Radio>
                  </Col>
                </Row>
              </Radio.Group>
            </Form.Item>
          </Col>
        </Row>

      
		<Row gutter={8}>
        <Col >
          <Form.Item label={<span >Schedule</span>}>
            <DatePicker placeholder="Select date" />
          </Form.Item>
        </Col>
        
        <Col >
          <Form.Item label=" ">
            <TimePicker placeholder="Select time"/>
          </Form.Item>
        </Col>
      </Row>
      </Form>
    </Modal>
  );
};

export default RemainderSettings;
