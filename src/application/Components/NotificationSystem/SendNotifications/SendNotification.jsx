import React, { useState } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import { Select, Tooltip } from "antd";

const { Option } = Select;
const SendNotification = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [topic, setTopic] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({
    title: "",
    body: "",
    imageUrl: "",
  });

  // Validation logic for each field
  const validateField = (name, value) => {
    let newErrors = { ...errors };

    switch (name) {
      case "title":
        newErrors.title = !value.trim()
          ? "Title is required and cannot be just spaces."
          : "";
        break;
      case "body":
        newErrors.body = !value.trim()
          ? "Body is required and cannot be just spaces."
          : "";
        break;
      case "imageUrl":
        if (!value.trim()) {
          newErrors.imageUrl =
            "Image URL is required and cannot be just spaces.";
        } else if (!/^[^\s]+$/.test(value)) {
          newErrors.imageUrl = "Please enter a valid URL.";
        } else {
          newErrors.imageUrl = "";
        }
        break;
      default:
        break;
    }

    setErrors(newErrors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all fields are valid before submission
    if (!validateForm()) return;

    const form = { title, body, imageUrl, topic };

    try {
      setLoading(true);
      setSubmitted(false);

      // Making the POST request
      const response = await axios.post(
        "https://diskuss-admin.onrender.com/api/v1/fcm/send-notification",
        form,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Log the response on success
      console.log("Notification Sent:", response.data);

      // Reset form and set state
      setSubmitted(true);
      setTitle("");
      setBody("");
      setImageUrl("");
      setTopic("");
    } catch (error) {
      // Handle errors gracefully
      console.error("Error sending notification:", error);
      const errorMessage =
        error.response?.data || "Failed to send notification.";
      alert(errorMessage);
    } finally {
      // Stop loading regardless of success or failure
      setLoading(false);
    }
  };

  // Form validation for all fields before submission
  const validateForm = () => {
    const isTitleValid = title.trim();
    const isBodyValid = body.trim();
    const isImageUrlValid =
      imageUrl.trim() && /^https?:\/\/[^\s]+$/.test(imageUrl);

    if (!isTitleValid || !isBodyValid || !isImageUrlValid) {
      setErrors({
        title: !isTitleValid
          ? "Title is required and cannot be just spaces."
          : "",
        body: !isBodyValid ? "Body is required and cannot be just spaces." : "",
        imageUrl: !isImageUrlValid ? "Please enter a valid URL." : "",
      });
    }

    return isTitleValid && isBodyValid && isImageUrlValid;
  };

  return (
    <div className="notification-container">
      <div className="notification-card">
        <h2 className="notification-title">Send Notification</h2>
        <form onSubmit={handleSubmit} className="notification-form">
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                validateField("title", e.target.value); // Validate as user types
              }}
              placeholder="Enter title"
              required
            />
            {errors.title && <span className="error">{errors.title}</span>}
          </div>

          <div className="form-group">
            <label>Body</label>
            <input
              type="text"
              value={body}
              onChange={(e) => {
                setBody(e.target.value);
                validateField("body", e.target.value); // Validate as user types
              }}
              placeholder="Enter message"
              required
            />
            {errors.body && <span className="error">{errors.body}</span>}
          </div>

          <div className="form-group">
            <label>Image URL</label>
            <input
              type="text"
              value={imageUrl}
              onChange={(e) => {
                setImageUrl(e.target.value);
                validateField("imageUrl", e.target.value); // Validate as user types
              }}
              placeholder="Enter image URL"
              required
            />
            {errors.imageUrl && (
              <span className="error">{errors.imageUrl}</span>
            )}
          </div>
          <div className="form-group">
            <label>Select Topic</label>
            <Select
              value={topic}
              onChange={setTopic}
              placeholder="Select a topic"
              style={{ width: "100%" }}
            >
              <Option value="" disabled>
                Select a topic
              </Option>
              <Option value="unregistered">
                <Tooltip
                  title="Users installed the app but not registered/registered and logged out"
                  placement="right"
                  overlayClassName="custom-tooltip"
                >
                  <div style={{ padding: "5px" }}>General</div>
                </Tooltip>
              </Option>
              <Option value="individual_subscribed">
                <Tooltip title="Users who have paid" placement="right"   overlayClassName="custom-tooltip"
                >
                  <div style={{ padding: "5px" }}>Individual Subscribed</div>
                </Tooltip>
              </Option>
              <Option value="individual_trial">
                <Tooltip title="Users who are in free trial" placement="right"   overlayClassName="custom-tooltip"
                >
                  <div style={{ padding: "5px" }}>Individual Trial</div>
                </Tooltip>
              </Option>
              <Option value="enterprise_subscribed">
                <Tooltip title="Enterprises who have paid" placement="right"   overlayClassName="custom-tooltip"
                >
                  <div style={{ padding: "5px" }}>Enterprise Subscribed</div>
                </Tooltip>
              </Option>
              <Option value="enterprise_trial">
                <Tooltip
                  title="Enterprises who are in free trial"
                  placement="right"
                 overlayClassName="custom-tooltip"

                >
                  <div style={{ padding: "5px" }}>Enterprise Trial</div>
                </Tooltip>
              </Option>
              <Option value="enterprise_employee">
                <Tooltip title="Enterprise employees" placement="right"   overlayClassName="custom-tooltip"
>
                  <div style={{ padding: "5px" }}>Enterprise Employee</div>
                </Tooltip>
              </Option>
            </Select>
          </div>
          <button
            type="submit"
            className={`submit-btn ${loading ? "disabled" : ""}`}
            disabled={loading}
          >
            {loading ? (
              <ThreeDots color="#fff" height={30} width={30} />
            ) : (
              "Send Notification"
            )}
          </button>
        </form>

        {submitted && (
          <div className="success-message">Notification sent successfully!</div>
        )}
      </div>
    </div>
  );
};

export default SendNotification;
