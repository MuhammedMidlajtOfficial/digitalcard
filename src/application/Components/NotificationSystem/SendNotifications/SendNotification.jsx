import React, { useState, useEffect } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import { Select, Tooltip } from "antd";
import { axiosInstance } from "../../../../AxiosConfig";
import { showErrorToast } from "../../../Services/toastService";

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
    // imageUrl: "",
  });
  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setSubmitted(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

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
      // case "imageUrl":
      //   if (!value.trim()) {
      //     newErrors.imageUrl =
      //       "Image URL is required and cannot be just spaces.";
      //   } else if (!/^[^\s]+$/.test(value)) {
      //     newErrors.imageUrl = "Please enter a valid URL.";
      //   } else {
      //     newErrors.imageUrl = "";
      //   }
      //   break;
      default:
        break;
    }

    setErrors(newErrors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const form = { title, body, imageUrl, topic };

    try {
      setLoading(true);
      setSubmitted(false);

      // Making the POST request
      const response = await axiosInstance.post("fcm/send-notification", form, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Notification Sent:", response.data);
      setSubmitted(true);
      setTitle("");
      setBody("");
      // setImageUrl("");
      setTopic("");
    } catch (error) {
      console.error("Error sending notification:", error);
      const errorMessage =
      error.response?.data?.error || "Failed to send notification.";

    showErrorToast(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const validateForm = () => {
    const isTitleValid = title.trim();
    const isBodyValid = body.trim();
    // const isImageUrlValid =
    //   imageUrl.trim() && /^https?:\/\/[^\s]+$/.test(imageUrl);

    if (!isTitleValid || !isBodyValid ) {
      setErrors({
        title: !isTitleValid
          ? "Title is required and cannot be just spaces."
          : "",
        body: !isBodyValid ? "Body is required and cannot be just spaces." : "",
        // imageUrl: !isImageUrlValid ? "Please enter a valid URL." : "",
      });
    }

    return isTitleValid && isBodyValid 
  };
  const topicDetails = {
    unregistered: {
      title: "General",
      description: "Users installed the app but not registered/registered and logged out",
    },
    individual_subscribed: {
      title: "Individual Subscribed",
      description: "Users who have paid",
    },
    individual_trial: {
      title: "Individual Trial",
      description: "Users who are in free trial",
    },
    enterprise_subscribed: {
      title: "Enterprise Subscribed",
      description: "Enterprises who have paid",
    },
    enterprise_trial: {
      title: "Enterprise Trial",
      description: "Enterprises who are in free trial",
    },
    enterprise_employee: {
      title: "Enterprise Employee",
      description: "Enterprise employees",
    },
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
                validateField("title", e.target.value);
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
                validateField("body", e.target.value);
              }}
              placeholder="Enter message"
              required
            />
            {errors.body && <span className="error">{errors.body}</span>}
          </div>

          {/* <div className="form-group">
            <label>Image URL</label>
            <input
              type="text"
              value={imageUrl}
              onChange={(e) => {
                setImageUrl(e.target.value);
                validateField("imageUrl", e.target.value);
              }}
              placeholder="Enter image URL"
              required
            />
            {errors.imageUrl && (
              <span className="error">{errors.imageUrl}</span>
            )}
          </div>
          {/* <div className="form-group">
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
                <Tooltip
                  title="Users who have paid"
                  placement="right"
                  overlayClassName="custom-tooltip"
                >
                  <div style={{ padding: "5px" }}>Individual Subscribed</div>
                </Tooltip>
              </Option>
              <Option value="individual_trial">
                <Tooltip
                  title="Users who are in free trial"
                  placement="right"
                  overlayClassName="custom-tooltip"
                >
                  <div style={{ padding: "5px" }}>Individual Trial</div>
                </Tooltip>
              </Option>
              <Option value="enterprise_subscribed">
                <Tooltip
                  title="Enterprises who have paid"
                  placement="right"
                  overlayClassName="custom-tooltip"
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
                <Tooltip
                  title="Enterprise employees"
                  placement="right"
                  overlayClassName="custom-tooltip"
                >
                  <div style={{ padding: "5px" }}>Enterprise Employee</div>
                </Tooltip>
              </Option>
            </Select>
          </div> */}
          <div className="form-group">
            <label>Select Topic</label>
            <Select
              value={topic}
              onChange={setTopic}
              placeholder="Select a topic"
              style={{ width: "100%" }}
            >
              {Object.entries(topicDetails).map(
                ([key, { title, description }]) => (
                  <Option key={key} value={key}>
                    <Tooltip
                      title={description}
                      placement="right"
                      overlayClassName="custom-tooltip"
                    >
                      <div style={{ padding: "5px" }}>{title}</div>
                    </Tooltip>
                  </Option>
                )
              )}
            </Select>
          </div>

          {topic && (
            <div className="topic-info mb-3">
              <p>{topicDetails[topic]?.description}</p>
            </div>
          )}
          <button
            type="submit"
            className={`submit-notification-btn ${loading ? "disabled" : ""}`}
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
