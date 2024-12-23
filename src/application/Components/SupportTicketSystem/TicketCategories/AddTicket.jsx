import { Button, Form, Modal, Select } from "antd";
import { Option } from "antd/es/mentions";
import React, {useState} from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const AddTicket = ({ open, onClose }) => {
  console.log("open", open);
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link"],
    ],
  };

  const [categoryName, setCategoryName] = useState("");
  const [categoryDescription, setCategoryDescription] = useState("");
  const [categoryPriority, setCategoryPriority] = useState("");

  const handleSubmit = async () => {
    const body = {
      categoryName,
      categoryDescription,
      categoryPriority,
    };

    console.log("body", body);
    try {
      const response = await fetch("https://diskuss-1mv4.onrender.com/api/v1/ticket-category", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Success:", data);
      // Optionally close the modal or reset the form here
      onClose();
    } catch (error) {
      console.error("Error:", error);
    }
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
        <Button key="save" type="primary"   onClick={handleSubmit} className="create-btn">
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
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              className="form-control form_control"
              placeholder=""
            />
          </Form.Item>
        </div>

        <div className="row">
          <div className="col-12">
            <Form.Item label="Client Description">
              <ReactQuill 
              theme="snow"
              value={categoryDescription} 
              onChange={setCategoryDescription} 
              modules={modules} />
            </Form.Item>
          </div>
          <div>
            <input
              type="text"
              value={categoryDescription} 
              placeholder="Add a description"
              className="addTicket-description-input"
              onChange={(e) => setCategoryDescription(e.target.value)} 
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
              value={categoryPriority}
              onChange={(value) => setCategoryPriority(value)}
            >
              <Option value="High">High</Option>
              <Option value="Medium">Medium</Option>
              <Option value="Low">Low</Option>
            </Select>
          </Form.Item>
        </div>
      </div>
    </Modal>
  );
};

export default AddTicket;
