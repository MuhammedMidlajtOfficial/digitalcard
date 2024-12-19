import React, { useEffect } from "react";
import { Button, Modal, Form, Input, Select, Radio, Row, Col } from "antd";
// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const { Option } = Select;

// const modules = {
//   toolbar: [
//     [{ header: "1" }, { header: "2" }, { font: [] }],
//     [{ list: "ordered" }, { list: "bullet" }],
//     ["bold", "italic"],
//     ["link", "image"],
//     ["clean"],
//   ],
// };

const CreateSubscriptionPlan = ({
  open,
  handleCancel,
  onSubmit,
  initialData,
}) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (initialData) {
      // Format features as a string for ReactQuill
      const featuresAsText = initialData.features?.join(", ") || "";

      form.setFieldsValue({
        name: initialData.name,
        price: initialData.price,
        packageType: initialData.duration === 30 ? "monthly" : "yearly",
        plan: initialData.plan,
        userType: initialData.type,
        description: featuresAsText,
      });
    } else {
      form.resetFields();
    }
  }, [initialData, form]);

  const handleFinish = (values) => {
    // Convert description back to features array
    const featuresArray = values.description
      ? values.description
          .split(",")
          .map((feature) => feature.trim())
          .filter(Boolean)
      : [];

    const formattedData = {
      ...values,
      features: featuresArray,
      duration: values.packageType === "monthly" ? 30 : 365,
    };

    onSubmit(formattedData);
  };

  return (
    <Modal
      open={open}
      title={initialData ? "Edit Subscription" : "Create Subscription"}
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleCancel}>
          Cancel
        </Button>,
        <Button
          key="save"
          className="add-all-users"
          onClick={() => form.submit()}
        >
          Save
        </Button>,
      ]}
    >
      <Form
        layout="vertical"
        form={form}
        onFinish={handleFinish}
        className="mt-4"
      >
        <Form.Item
          name="name"
          label="Subscription Name"
          rules={[
            { required: true, message: "Please enter subscription name" },
          ]}
        >
          <Input placeholder="Enter subscription name" />
        </Form.Item>

        <Row gutter={16}>
          <Col span={8}>
            <Form.Item
              name="price"
              label="Price"
              rules={[{ required: true, message: "Please enter the price" }]}
            >
              <Input prefix="₹" placeholder="999" />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item
              name="packageType"
              label="Select Package"
              rules={[{ required: true, message: "Please select a package" }]}
            >
              <Select placeholder="Select Package">
                <Option value="monthly">Monthly</Option>
                <Option value="yearly">Yearly</Option>
              </Select>
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item
              name="plan"
              label="Select Plan"
              rules={[{ required: true, message: "Please select a plan" }]}
            >
              <Select placeholder="Select Plan">
                <Option value="silver">Silver</Option>
                <Option value="gold">Gold</Option>
                <Option value="platinum">Platinum</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          name="userType"
          label="User Type"
          rules={[{ required: true, message: "Please select a user type" }]}
        >
          <Radio.Group>
            <Radio value="Individual">Individual</Radio>
            <Radio value="Enterprise">Enterprise</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          name="description"
          label="Subscription Features (comma-separated)"
          rules={[
            {
              required: true,
              message: "Please enter the subscription features",
            },
          ]}
        >
          <Input placeholder="Feature 1, Feature 2, Feature 3" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

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
