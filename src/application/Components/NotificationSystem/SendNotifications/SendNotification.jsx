import React, { useState } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

const SendNotification = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [topic, setTopic] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!title || !body || !imageUrl || !topic) {
      alert("Please fill in all fields.");
      return;
    }
  
    const form = { title, body, imageUrl, topic };
  
    try {
      setLoading(true);
      setSubmitted(false);
  
      const response = await axios.post(
        "https://diskuss-admin.onrender.com/api/v1/fcm/send-notification",
        form,
        {
          headers: {
            "Content-Type": "application/json", // Explicitly set headers
          },
        }
      );
  
      console.log("Notification Sent:", response.data);
      setSubmitted(true);
      setTitle("");
      setBody("");
      setImageUrl("");
      setTopic("");
    } catch (error) {
      console.error("Error sending notification:", error);
      alert(error.response?.data || "Failed to send notification.");
    } finally {
      setLoading(false);
    }
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
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter title"
              required
            />
          </div>

          <div className="form-group">
            <label>Body</label>
            <input
              type="text"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="Enter message"
              required
            />
          </div>

          <div className="form-group">
            <label>Image URL</label>
            <input
              type="text"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="Enter image URL"
              required
            />
          </div>

          <div className="form-group">
            <label>Select Topic</label>
            <select
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              required
            >
              <option value="" disabled>
                Select a topic
              </option>
              <option value="unregistered">General</option>
              <option value="individual_subscribed">Individual Subscribed</option>
              <option value="individual_trial">Individual Trial</option>
              <option value="enterprise_subscribed">Enterprise Subscribed</option>
              <option value="enterprise_trial">Enterprise Trial</option>
              <option value="enterprise_employee">Enterprise Employee</option>
            </select>
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
          <div className="success-message">
            Notification sent successfully!
          </div>
        )}
      </div>
    </div>
  );
};

export default SendNotification;
