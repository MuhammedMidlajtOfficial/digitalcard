import React, { useState, useEffect } from 'react';
import axios from 'axios'; // You'll need to install axios
import axiosInstanceForTicket from '../../../AxiosContigForTicket';
import { showSuccessToast } from '../../Services/toastService';

function BroadcastMessage() {
  const [message, setMessage] = useState('');
  const [chatId, setChatId] = useState('');
  const [userType, setUserType] = useState('ENTERPRISE');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [sending, setSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setImage(selectedFile);
      
      // Create a preview URL for the image
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const removeImage = () => {
    setImage(null);
    setImagePreview(null);
    // Reset the file input
    const fileInput = document.getElementById('image');
    if (fileInput) fileInput.value = '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setErrorMessage('');

    try {
      const formData = new FormData();
      formData.append('content', message);
      formData.append('userType', userType);
      
      if (image) {
        formData.append('image', image);
      }

      // Make API call to send admin message
      const response = await axiosInstanceForTicket.post( '/message/sendAdminMessage', formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          }
        }
      );

      if (response.status === 201) {
        showSuccessToast('Broadcast Message Sent successfully')
        // Success
        setMessage('');
        setChatId('');
        setImage(null);
        setImagePreview(null);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setErrorMessage('Failed to send message. Please try again.');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="broadcast-container">
      <div className="broadcast-header">
        <h1>Broadcast Message</h1>
        <p>Send important notifications to users across the platform</p>
      </div>
      
      <div className="broadcast-card">
        <h2>New Message</h2>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="content">Message Content</label>
            <textarea 
              id="content" 
              value={message} 
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter your message content..."
              required
            ></textarea>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="userType">User Type</label>
              <select 
                id="userType" 
                value={userType} 
                onChange={(e) => setUserType(e.target.value)}
              >
                <option value="ENTERPRISE">ENTERPRISE</option>
                <option value="INDIVIDUAL">INDIVIDUAL</option>
                <option value="EMPLOYEE">EMPLOYEE</option>
              </select>
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="image">Image Attachment (Optional)</label>
            <div className="file-input-wrapper">
              <input 
                type="file" 
                id="image" 
                onChange={handleImageChange}
                accept="image/*"
                className="file-input"
              />
              <label htmlFor="image" className="custom-file-input">
                Choose Image
              </label>
              <span className="file-name">
                {image ? image.name : 'No file chosen'}
              </span>
            </div>
            
            {imagePreview && (
              <div className="image-preview-container">
                <img 
                  src={imagePreview} 
                  alt="Preview" 
                  className="image-preview" 
                />
                <button 
                  type="button" 
                  className="remove-image" 
                  onClick={removeImage}
                >
                  ✕
                </button>
              </div>
            )}
          </div>
          
          <div className="form-actions">
            <button 
              type="submit" 
              className="btn-primary" 
              disabled={sending}
            >
              {sending ? 'Sending...' : 'Send Message'}
            </button>
            <button 
              type="button" 
              className="btn-secondary"
              onClick={() => {
                setMessage('');
                setChatId('');
                setImage(null);
                setImagePreview(null);
              }}
            >
              Clear Form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BroadcastMessage;