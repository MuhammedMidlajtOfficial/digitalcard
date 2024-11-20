import { Form, Input, Radio, Space } from "antd";
import React, { useState } from "react";
import { CgDanger } from "react-icons/cg";

const RollCreationAddRole = () => {
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <div>
      <Form layout="vertical">
        <div className="row">
          <div className="col-lg-6">
            <Form.Item label="Name">
              <Input placeholder="" />
            </Form.Item>
          </div>
          <div className="col-lg-6">
            <Form.Item label="Email">
              <Input placeholder="" />
            </Form.Item>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <Form.Item label="Select Role">
              <Radio.Group onChange={onChange} value={value}>
                <Space direction="vertical">
                  <Radio value={1} className="roll-creation-radio-button">
                    <div className="d-flex gap-2 align-items-center">
                      <span className="radio-label">Admin</span>
                      <span className="extra-info rollcreation-addRoll-radio-span">
                        <CgDanger /> Full access: Can create, read, update,
                        delete all resources
                      </span>
                    </div>
                  </Radio>
                  <Radio value={2} className="roll-creation-radio-button">
                    <div className="d-flex gap-2 align-items-center">
                      <span className="radio-label">Team Lead</span>
                      <span className="extra-info rollcreation-addRoll-radio-span">
                        <CgDanger /> Can read, update resources, but cannot
                        delete or manage roles
                      </span>
                    </div>
                  </Radio>

                  <Radio value={3} className="roll-creation-radio-button">
                    <div className="d-flex gap-2 align-items-center">
                      <span className="radio-label">Team Member</span>
                      <span className="extra-info rollcreation-addRoll-radio-span">
                        <CgDanger /> Read only access to view resources without
                        edit rights
                      </span>
                    </div>
                  </Radio>
                </Space>
              </Radio.Group>
            </Form.Item>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default RollCreationAddRole;
