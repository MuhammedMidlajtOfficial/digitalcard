import React, { useState } from "react";
import { Modal, Form, Input } from "antd";
import { PiPlusCircleBold } from "react-icons/pi";

export const ShareTemplate = ({ isModalVisible, setIsModalVisible }) => {
  const [form] = Form.useForm();
  const [formData, setFormData] = useState({});

  const handleClose = () => {
    setIsModalVisible(false);
    form.resetFields();
    setFormData({});
  };

  return (
    <>
      <Modal
        title="Share Templates"
        open={isModalVisible}
        onCancel={handleClose}
        footer={null}
        className="form-heading-share"
      >
        <Form layout="vertical" form={form} className="mt-4">
          <div className="row mb-2">
            <div className="col-lg-12">
              <Form.Item label="Name" name="name" className="share-label-form">
                <Input placeholder="Enter name" />
              </Form.Item>
            </div>
            <div className="col-lg-12">
              <Form.Item
                label="Email ID"
                name="email"
                className="share-label-form"
              >
                <Input placeholder="Enter your mail id" />
              </Form.Item>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-lg-12">
              <Form.Item
                label="Remarks"
                name="email"
                className="share-label-form"
              >
                <Input placeholder="Type..." />
              </Form.Item>
            </div>
            <div className="col-lg-12">
              <Form.Item
                label="Candidates"
                name="candidates"
                className="share-label-form"
              >
                <div className="d-flex align-items-center">
                  <Input placeholder="Type..." />
                  <PiPlusCircleBold
                    style={{
                      marginLeft: "-28px",
                      zIndex: "123",
                      color: "blue",
                      width: "24px",
                      height: "24px",
                    }}
                  />
                </div>
              </Form.Item>
            </div>
          </div>
          <div
            className="form-actions"
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <button
              type="button"
              className="cancel-btn"
              style={{ marginRight: "20px" }}
              onClick={handleClose}
            >
              Cancel
            </button>
            <button className="create-btn" type="submit">
              Share
            </button>
          </div>
        </Form>
      </Modal>
    </>
  );
};
