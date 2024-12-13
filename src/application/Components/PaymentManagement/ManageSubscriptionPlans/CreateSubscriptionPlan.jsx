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

const CreateSubscriptionPlan = ({ open, handleCancel }) => (
  <Modal
    open={open}
    title="Create Subscription"
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
              <Option value="silver">Silver</Option>
              <Option value="gold">Gold</Option>
              <Option value="platinum">Platinum</Option>
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

export default CreateSubscriptionPlan;





// import React, { useState } from "react";
// import { Button, Modal, Form, Input, Select, Radio, Row, Col } from "antd";
// import ReactQuill from "react-quill";
// import axios from "axios";
// import "react-quill/dist/quill.snow.css";

// const { Option } = Select;

// const modules = {
//   toolbar: [
//     [{ header: "1" }, { header: "2" }, { font: [] }],
//     [{ list: "ordered" }, { list: "bullet" }],
//     ["bold", "italic"],
//     ["link", "image"],
//     ["clean"],
//   ],
// };

// const CreateSubscriptionPlan = ({ open, handleCancel, onPlanCreated }) => {
//   const [form] = Form.useForm();

//   const handleSave = async () => {
//     try {
//       const values = await form.validateFields();
//       const response = await axios.post("http://localhost:9001/api/v1/subscription-plans/create", values);
//       onPlanCreated(response.data); // Pass the new plan to parent
//       handleCancel();
//     } catch (error) {
//       console.error("Error creating subscription plan:", error);
//     }
//   };
  
//   return (
//     <Modal
//       open={open}
//       title="Create Subscription"
//       onCancel={handleCancel}
//       footer={[
//         <Button key="back" onClick={handleCancel}>
//           Cancel
//         </Button>,
//         <Button key="save" className="add-all-users" onClick={handleSave}>
//           Save
//         </Button>,
//       ]}
//     >
//       <Form layout="vertical" form={form} className="mt-4">
//         <Form.Item label="Subscription Name" name="name" rules={[{ required: true, message: "Please enter a name" }]}>
//           <Input placeholder="Enter subscription name" />
//         </Form.Item>

//         <Form.Item label="Subscription Description" name="description">
//           <ReactQuill
//             theme="snow"
//             modules={modules}
//             placeholder="Your text goes here"
//           />
//         </Form.Item>

//         <Row gutter={16}>
//           <Col span={8}>
//             <Form.Item label="Price" name="price" rules={[{ required: true, message: "Please enter a price" }]}>
//               <Input prefix="₹" placeholder="999" />
//             </Form.Item>
//           </Col>

//           <Col span={8}>
//             <Form.Item label="Duration (days)" name="duration" rules={[{ required: true, message: "Please enter duration" }]}>
//               <Input placeholder="30" />
//             </Form.Item>
//           </Col>
//         </Row>
//       </Form>
//     </Modal>
//   );
// };

// export default CreateSubscriptionPlan;




// import React, { useState } from "react";
// import { Button, Modal, Form, Input, Select, Row, Col } from "antd";
// import ReactQuill from "react-quill";
// import axios from "axios";
// import "react-quill/dist/quill.snow.css";

// const { Option } = Select;

// const modules = {
//   toolbar: [
//     [{ header: "1" }, { header: "2" }, { font: [] }],
//     [{ list: "ordered" }, { list: "bullet" }],
//     ["bold", "italic"],
//     ["link", "image"],
//     ["clean"],
//   ],
// };

// const CreateSubscriptionPlan = ({ open, handleCancel, onPlanCreated }) => {
//   const [form] = Form.useForm(); // Ant Design form instance for form management

//   // Function to handle saving a new subscription plan
//   const handleSave = async () => {
//     try {
//       // Validate form fields and get the values
//       const values = await form.validateFields();

//       // Send a POST request to create a new subscription plan
//       const response = await axios.post("http://localhost:9001/api/v1/subscription-plans/create", values);

//       // If successful, pass the created plan data to the parent component
//       onPlanCreated(response.data);

//       // Reset the form and close the modal
//       form.resetFields();
//       handleCancel();
//     } catch (error) {
//       console.error("Error creating subscription plan:", error);
//     }
//   };

//   return (
//     <Modal
//       open={open}
//       title="Create Subscription"
//       onCancel={handleCancel}
//       footer={[
//         <Button key="back" onClick={handleCancel}>
//           Cancel
//         </Button>,
//         <Button key="save" className="add-all-users" onClick={handleSave}>
//           Save
//         </Button>,
//       ]}
//     >
//       <Form layout="vertical" form={form} className="mt-4">
//         {/* Subscription Name Input */}
//         <Form.Item
//           label="Subscription Name"
//           name="name"
//           rules={[{ required: true, message: "Please enter a name" }]}
//         >
//           <Input placeholder="Enter subscription name" />
//         </Form.Item>

//         {/* Subscription Description Input using ReactQuill */}
//         <Form.Item label="Subscription Description" name="description">
//           <ReactQuill
//             theme="snow"
//             modules={modules}
//             placeholder="Your text goes here"
//           />
//         </Form.Item>

//         <Row gutter={16}>
//           {/* Price Input */}
//           <Col span={8}>
//             <Form.Item
//               label="Price"
//               name="price"
//               rules={[{ required: true, message: "Please enter a price" }]}
//             >
//               <Input prefix="₹" placeholder="999" />
//             </Form.Item>
//           </Col>

//           {/* Duration Input */}
//           <Col span={8}>
//             <Form.Item
//               label="Duration (days)"
//               name="duration"
//               rules={[{ required: true, message: "Please enter duration" }]}
//             >
//               <Input placeholder="30" />
//             </Form.Item>
//           </Col>
//         </Row>
//       </Form>
//     </Modal>
//   );
// };

// export default CreateSubscriptionPlan;
