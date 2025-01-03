import { Button, Form, Modal, Select } from "antd";
import { Option } from "antd/es/mentions";
import React, {useEffect, useState} from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axiosInstanceForTicket from "../../../../AxiosContigForTicket";
import { showErrorToast, showSuccessToast } from "../../../Services/toastService";

const AddTicket = ({ open, onClose, edit }) => {
  console.log('edit,',edit);
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

  const fetchCategories = async () => {
    if (edit?.status) { // Check if edit exists and status is true
      try {
        const response = await axiosInstanceForTicket.get(`ticket-category/${edit.id}`);
        setCategoryName(response.data.categoryName)
        setCategoryDescription(response.data.categoryDescription)
        setCategoryPriority(response.data.categoryPriority)
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }
  };
  
  useEffect(() => {
    fetchCategories();
  }, [edit?.status, edit?.id]); 
  

  useEffect(() => {
  console.log('categoryName-',categoryName);    
  console.log('categoryDescription-',categoryDescription);    
  console.log('categoryPriority-',categoryPriority);    
  }, []);

  const handleSubmit = async () => {
    let body = {
        categoryName: categoryName,
        categoryDescription: categoryDescription,
        categoryPriority: categoryPriority,
    };

    // If editing, only send the id
    if (edit.status === true) {
      body = { id: edit.id, ...body }; // Include the id along with the other fields
    }

    try {
        let response;

        // Choose whether to use PATCH or POST based on the edit status
        if (edit.status === true) {
            response = await axiosInstanceForTicket.patch("ticket-category", body);
            if (response.status === 200) {
                showSuccessToast('Ticket category updated successfully');
            }
        } else {
            response = await axiosInstanceForTicket.post("ticket-category", body);
            if (response.status === 200) {
                showSuccessToast('Ticket category added successfully');
            }
        }

        // Close modal after successful submission
        onClose();
    } catch (error) {
        showErrorToast(error.message);
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
            <Form.Item label="Client Description (Rich Text)">
              <ReactQuill
                theme="snow"
                value={categoryDescription}
                onChange={(content) => setCategoryDescription(content)}
                modules={modules}
              />
            </Form.Item>
          </div>
          <div className="col-12 mt-3">
          <Form.Item>
            <label>Client Description (Plain Text)</label>
            <textarea
              value={categoryDescription}
              placeholder="Add a description"
              className="addTicket-description-input"
              onChange={(e) => {}}
              style={{ width: '100%', resize: 'vertical' }}
            />
          </Form.Item>
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
