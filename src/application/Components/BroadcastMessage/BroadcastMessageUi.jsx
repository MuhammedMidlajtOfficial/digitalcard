import React, { useState, useEffect } from 'react';
import axiosInstanceForTicket from '../../../AxiosContigForTicket';
import { showSuccessToast, showWarningToast } from '../../Services/toastService';
import { axiosInstance } from '../../../AxiosConfig';

function BroadcastMessage() {
  const [message, setMessage] = useState('');
  const [chatId, setChatId] = useState('');
  const [userType, setUserType] = useState('ENTERPRISE');
  const [broadcastHistory, setBroadcastHistory] = useState([]);
  const [configuration, setConfiguration] = useState({});
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [sending, setSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('INDIVIDUAL');
  const [expandedItems, setExpandedItems] = useState({});
  
  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [messagesPerPage, setMessagesPerPage] = useState(10);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchChatIds();
  }, []);

  useEffect(() => {
    if (configuration.BroadcastIndividualChatID) {
      fetchMessageHistory(configuration.BroadcastIndividualChatID, 1);
    }
  }, [configuration]);

  const fetchMessageHistory = async (chatId, page = currentPage, limit = messagesPerPage? messagesPerPage :10) => {
    if (!chatId) return;
    console.log('messagesPerPage-',limit);
    limit = limit < 10 ? 10 : limit;
  
    try {
      setLoading(true);
      const response = await axiosInstanceForTicket.get(`message/chatId/${chatId}?limit=${limit}&page=${page}`);
      console.log('fetchMessageHistory-', response.data);

      const messages = Array.isArray(response.data.messages) ? response.data.messages : [];
      const sortedMessages = messages.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
  
      // Update state with fetched messages
      setBroadcastHistory(sortedMessages);
  
      // Update pagination values safely
      setCurrentPage(response.data.page ? parseInt(response.data.page, 10) : 1);
      setTotalPages(response.data.totalPages ? parseInt(response.data.totalPages, 10) : 1);
  
    } catch (error) {
      console.error('Failed to fetch message history:', error);
      
      setBroadcastHistory([]);
      setTotalPages(1);
      setCurrentPage(1);
    } finally {
      setLoading(false);
    }
  };  
  
  const fetchChatIds = async () => {
    try {
      const response = await axiosInstance.get('/config');
      const configArray = Array.isArray(response.data) ? response.data : [];

      // Extract the config object
      const targetConfig = configArray.find(item => item.config?.BroadcastIndividualChatID);
      
      setConfiguration(targetConfig?.config || {});
    } catch (error) {
      console.error('Failed to fetch configuration:', error);
    }
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
  
      // Check if the file size is below 2MB
      const maxSize = 2 * 1024 * 1024; // 2MB in bytes
      if (selectedFile.size > maxSize) {
        showWarningToast("Image file size should be below 2MB");
        return;
      }
  
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
      const response = await axiosInstanceForTicket.post('/message/sendAdminMessage', formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          }
        }
      );

      if (response.status === 201) {
        showSuccessToast('Broadcast Message Sent successfully');
        // Success - refresh message list
        const activeChatId = getChatIdForSelectedFilter();
        fetchMessageHistory(activeChatId, 1); // Reset to first page after sending new message
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

  const getChatIdForSelectedFilter = () => {
    if (selectedFilter === 'INDIVIDUAL') {
      return configuration.BroadcastIndividualChatID;
    } else if (selectedFilter === 'ENTERPRISE') {
      return configuration.BroadcastEnterpriseChatID;
    } else if (selectedFilter === 'EMPLOYEE') {
      return configuration.BroadcastEmployeeChatID;
    }
    return '';
  };

  const formatTimestamp = (timestamp) => {
    if (!timestamp) return '';
    const date = new Date(timestamp);
    return date.toLocaleString();
  };

  const toggleReaders = (id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const updateFilter = (filter) => {
    let chatId = '';
    
    if (filter === 'INDIVIDUAL') {
      chatId = configuration.BroadcastIndividualChatID;
    } else if (filter === 'ENTERPRISE') {
      chatId = configuration.BroadcastEnterpriseChatID;
    } else if (filter === 'EMPLOYEE') {
      chatId = configuration.BroadcastEmployeeChatID;
    }
    
    setSelectedFilter(filter);
    fetchMessageHistory(chatId, 1); // Reset to page 1 when changing filters
  };
  
  // Handle page change
  const handlePageChange = (page) => {
    const activeChatId = getChatIdForSelectedFilter();
    fetchMessageHistory(activeChatId, page);
  };

  const handleLimitChange = (newLimit) => {
    setMessagesPerPage(newLimit);
    setCurrentPage(1);
  
    const activeChatId = getChatIdForSelectedFilter();
    if (activeChatId) {
      fetchMessageHistory(activeChatId, 1, newLimit);
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

      <div className="broadcast-history p-4 bg-gray-50 rounded-lg shadow">
        {/* FILTER */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-800">Message History</h2>
          
          <div className="filter-controls flex space-x-2">
            <button 
              onClick={() => updateFilter('INDIVIDUAL')}
              className={`px-3 py-1 rounded text-sm ${selectedFilter === 'INDIVIDUAL' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              disabled={loading}
            >
              Individual
            </button>
            <button 
              onClick={() => updateFilter('ENTERPRISE')}
              className={`px-3 py-1 rounded text-sm ${selectedFilter === 'ENTERPRISE' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              disabled={loading}
            >
              Enterprise
            </button>
            <button 
              onClick={() => updateFilter('EMPLOYEE')}
              className={`px-3 py-1 rounded text-sm ${selectedFilter === 'EMPLOYEE' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              disabled={loading}
            >
              Employee
            </button>
          </div>
        </div>
        
        {/* Loading state */}
        {loading ? (
          <div className="flex justify-center items-center p-8">
            <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-600" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="history-list space-y-4">
            {broadcastHistory.length > 0 ? (
              broadcastHistory.map((item, index) => (
                <div key={index} className="history-item bg-white p-4 rounded-md shadow-sm border border-gray-200">
                  <div className="history-content">
                    <p className="history-message text-gray-700 mb-3">{item.content}</p>
                    <div className="history-meta flex flex-wrap gap-4 text-sm text-gray-500 mb-3">
                      {/* <span className="user-type">Type: {item.forUserType || item.userType || 'Unknown'}</span> */}
                      <span className="timestamp">{formatTimestamp(item.timestamp || item.localTime)}</span>
                      {/* <span className="read-count flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                        </svg>
                        Read by: {Array.isArray(item.readBy) ? item.readBy.length : 0} users
                      </span> */}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="history-status">
                      <span className={`status-badge px-2 py-1 rounded-full text-xs ${item.isRead ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                        {item.isRead ? 'Read' : 'Delivered'}
                      </span>
                    </div>
                  </div>
                
                  {item.image && (
                    <div className="message-image mt-3">
                      <img src={item.image} alt="Attachment" className="thumbnail rounded-md max-h-32 object-cover" />
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="no-history p-8 text-center text-gray-500 bg-white rounded-md">No messages found</div>
            )}
            
            {/* Enhanced Pagination controls - now more visible and accessible */}
            <div className="pagination-container bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <div className="pagination flex justify-center items-center space-x-4">
                <button 
                  onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                  disabled={currentPage === 1 || loading}
                  className={`px-4 py-2 rounded-md font-medium ${currentPage === 1 || loading ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-blue-50 text-blue-600 hover:bg-blue-100'}`}
                >
                  Previous
                </button>
                
                <div className="page-numbers flex items-center space-x-2">
                  {/* Current page indicator */}
                  <div className="text-gray-600">Page</div>
                  <div className="current-page bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                    {currentPage}
                  </div>
                  <div className="text-gray-600">of <span></span><b>{totalPages}</b></div>
                </div>

                <button 
                  onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
                  disabled={currentPage === totalPages || loading}
                  className={`px-4 py-2 rounded-md font-medium ${currentPage === totalPages || loading ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-blue-50 text-blue-600 hover:bg-blue-100'}`}
                >
                  Next
                </button>

                <div className="limit-selector flex items-center gap-2" >
                  <div className="text-sm text-gray-600" style={{ width: "fit-content", margin: "auto" }}>Items per page:</div>
                  <select
                    value={messagesPerPage}
                    onChange={(e) => handleLimitChange(Number(e.target.value))}
                    className="border border-gray-300 bg-white rounded-md px-3 py-1.5 text-sm text-gray-700 
                      focus:ring-2 focus:ring-blue-500 focus:outline-none hover:bg-gray-100 transition"
                    style={{ width: "fit-content", margin: "auto" }}
                  >
                    {[10, 20, 50, 100].map(limit => (
                      <option key={limit} value={limit}>{limit}</option>
                    ))}
                  </select>
                </div>

              </div>
              
              {/* Jump to page controls for many pages */}
              {totalPages > 3 && (
                <div className="jump-to-page flex justify-center items-center mt-4 space-x-2">
                  <span className="text-sm text-gray-600">Jump to page:</span>
                  <div className="page-buttons flex space-x-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        disabled={loading || page === currentPage}
                        className={`w-8 h-8 flex items-center justify-center rounded-md text-sm
                          ${page === currentPage 
                            ? 'bg-blue-600 text-white font-bold' 
                            : 'bg-white text-blue-600 hover:bg-blue-50 border border-gray-200'}`
                        }
                      >
                        {page}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default BroadcastMessage;

// import React, { useState, useEffect } from 'react';
// import axiosInstanceForTicket from '../../../AxiosContigForTicket';
// import { showSuccessToast } from '../../Services/toastService';
// import { axiosInstance } from '../../../AxiosConfig';

// function BroadcastMessage() {
//   const [message, setMessage] = useState('');
//   const [chatId, setChatId] = useState('');
//   const [userType, setUserType] = useState('ENTERPRISE');
//   const [broadcastHistory, setBroadcastHistory] = useState([]);
//   const [configuration, setConfiguration] = useState({});
//   const [image, setImage] = useState(null);
//   const [imagePreview, setImagePreview] = useState(null);
//   const [sending, setSending] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');
//   const [selectedFilter, setSelectedFilter] = useState('INDIVIDUAL');
//   const [expandedItems, setExpandedItems] = useState({});

//   useEffect(() => {
//     fetchChatIds()
//   }, []);

//   useEffect(() => {
//     fetchMessageHistory(configuration.BroadcastIndividualChatID);
//   }, [configuration]);

//   const fetchMessageHistory = async (chatId) => {
//     try {
//       const response = await axiosInstanceForTicket.get(`message/chatId/${chatId}`);
//       console.log('fetchMessageHistory-', response.data.messages);
  
//       const messages = Array.isArray(response.data.messages) ? response.data.messages : [];
//       const sortedMessages = messages.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
  
//       console.log('sortedMessages-', sortedMessages);
//       setBroadcastHistory(sortedMessages);
//     } catch (error) {
//       console.error('Failed to fetch message history:', error);
//     }
//   };
  

//   const fetchChatIds = async () => {
//     try {
//       // Replace with your actual endpoint
//       const response = await axiosInstance.get('/config');
//       const configArray = Array.isArray(response.data) ? response.data : [];

//       // Extract the config object
//       const targetConfig = configArray.find(item => item.config?.BroadcastIndividualChatID);
  
//       setConfiguration(targetConfig?.config)
//     } catch (error) {
//       console.error('Failed to fetch message history:', error);
//     }
//   };

//   const handleImageChange = (e) => {
//     if (e.target.files && e.target.files[0]) {
//       const selectedFile = e.target.files[0];
//       setImage(selectedFile);
      
//       // Create a preview URL for the image
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImagePreview(reader.result);
//       };
//       reader.readAsDataURL(selectedFile);
//     }
//   };

//   const removeImage = () => {
//     setImage(null);
//     setImagePreview(null);
//     // Reset the file input
//     const fileInput = document.getElementById('image');
//     if (fileInput) fileInput.value = '';
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSending(true);
//     setErrorMessage('');

//     try {
//       const formData = new FormData();
//       formData.append('content', message);
//       formData.append('userType', userType);
      
//       if (image) {
//         formData.append('image', image);
//       }

//       // Make API call to send admin message
//       const response = await axiosInstanceForTicket.post( '/message/sendAdminMessage', formData,
//         {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           }
//         }
//       );

//       if (response.status === 201) {
//         showSuccessToast('Broadcast Message Sent successfully')
//         // Success
//         fetchMessageHistory()
//         setMessage('');
//         setChatId('');
//         setImage(null);
//         setImagePreview(null);
//       }
//     } catch (error) {
//       console.error('Error sending message:', error);
//       setErrorMessage('Failed to send message. Please try again.');
//     } finally {
//       setSending(false);
//     }
//   };

//   const formatTimestamp = (timestamp) => {
//     if (!timestamp) return '';
//     const date = new Date(timestamp);
//     return date.toLocaleString();
//   };

//   const toggleReaders = (id) => {
//     setExpandedItems(prev => ({
//       ...prev,
//       [id]: !prev[id]
//     }));
//   };

//   const updateFilter = (filter) => {

//     if (filter === 'INDIVIDUAL') {
//       fetchMessageHistory(configuration.BroadcastIndividualChatID)
//     }else if (filter === 'ENTERPRISE') {
//       fetchMessageHistory(configuration.BroadcastEnterpriseChatID)
//     }else if (filter === 'EMPLOYEE') {
//       fetchMessageHistory(configuration.BroadcastEmployeeChatID)
//     }

//     setSelectedFilter(filter)
//   };

//   // Filter messages based on selected user type
//   const filteredHistory = selectedFilter === 'EMPLOYEE'
//     ? broadcastHistory 
//     : broadcastHistory.filter(item => (item.forUserType || item.userType) === selectedFilter);

//   return (
//     <div className="broadcast-container">
//       <div className="broadcast-header">
//         <h1>Broadcast Message</h1>
//         <p>Send important notifications to users across the platform</p>
//       </div>
      
//       <div className="broadcast-card">
//         <h2>New Message</h2>
//         {errorMessage && <div className="error-message">{errorMessage}</div>}
        
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="content">Message Content</label>
//             <textarea 
//               id="content" 
//               value={message} 
//               onChange={(e) => setMessage(e.target.value)}
//               placeholder="Enter your message content..."
//               required
//             ></textarea>
//           </div>
          
//           <div className="form-row">
//             <div className="form-group">
//               <label htmlFor="userType">User Type</label>
//               <select 
//                 id="userType" 
//                 value={userType} 
//                 onChange={(e) => setUserType(e.target.value)}
//               >
//                 <option value="ENTERPRISE">ENTERPRISE</option>
//                 <option value="INDIVIDUAL">INDIVIDUAL</option>
//                 <option value="EMPLOYEE">EMPLOYEE</option>
//               </select>
//             </div>
//           </div>
          
//           <div className="form-group">
//             <label htmlFor="image">Image Attachment (Optional)</label>
//             <div className="file-input-wrapper">
//               <input 
//                 type="file" 
//                 id="image" 
//                 onChange={handleImageChange}
//                 accept="image/*"
//                 className="file-input"
//               />
//               <label htmlFor="image" className="custom-file-input">
//                 Choose Image
//               </label>
//               <span className="file-name">
//                 {image ? image.name : 'No file chosen'}
//               </span>
//             </div>
            
//             {imagePreview && (
//               <div className="image-preview-container">
//                 <img 
//                   src={imagePreview} 
//                   alt="Preview" 
//                   className="image-preview" 
//                 />
//                 <button 
//                   type="button" 
//                   className="remove-image" 
//                   onClick={removeImage}
//                 >
//                   ✕
//                 </button>
//               </div>
//             )}
//           </div>
          
//           <div className="form-actions">
//             <button 
//               type="submit" 
//               className="btn-primary" 
//               disabled={sending}
//             >
//               {sending ? 'Sending...' : 'Send Message'}
//             </button>
//             <button 
//               type="button" 
//               className="btn-secondary"
//               onClick={() => {
//                 setMessage('');
//                 setChatId('');
//                 setImage(null);
//                 setImagePreview(null);
//               }}
//             >
//               Clear Form
//             </button>
//           </div>
//         </form>
//       </div>

//       {/* <div className="broadcast-history">
//         <h2>Message History</h2>
//         <div className="history-list">
//           {broadcastHistory.length > 0 ? (
//             broadcastHistory.map((item, index) => (
//               <div key={index} className="history-item">
//                 <div className="history-content">
//                   <p className="history-message">{item.content}</p>
//                   <div className="history-meta">
//                     <span className="chat-id">Chat ID: {item.chatId}</span>
//                     <span className="user-type">Type: {item.forUserType || item.userType}</span>
//                     <span className="timestamp">{formatTimestamp(item.timestamp || item.localTime)}</span>
//                   </div>
//                 </div>
//                 <div className="history-status">
//                   <span className={`status-badge ${item.isRead ? 'status-read' : 'status-delivered'}`}>
//                     {item.isRead ? 'Read' : 'Delivered'}
//                   </span>
//                 </div>
//                 {item.image && (
//                   <div className="message-image">
//                     <img src={item.image} alt="Attachment" className="thumbnail" />
//                   </div>
//                 )}
//               </div>
//             ))
//           ) : (
//             <div className="no-history">No messages found</div>
//           )}
//         </div>
//       </div> */}

//       <div className="broadcast-history p-4 bg-gray-50 rounded-lg shadow">

//         {/* FILTER */}
//         <div className="flex items-center justify-between mb-4">
//           <h2 className="text-xl font-bold text-gray-800">Message History</h2>
          
//           <div className="filter-controls flex space-x-2">
//             <button 
//               onClick={() => updateFilter('INDIVIDUAL')}
//               className={`px-3 py-1 rounded text-sm ${selectedFilter === 'INDIVIDUAL' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
//             >
//               Individual
//             </button>
//             <button 
//               onClick={() => updateFilter('ENTERPRISE')}
//               className={`px-3 py-1 rounded text-sm ${selectedFilter === 'ENTERPRISE' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
//             >
//               Enterprise
//             </button>
//             <button 
//               onClick={() => updateFilter('EMPLOYEE')}
//               className={`px-3 py-1 rounded text-sm ${selectedFilter === 'EMPLOYEE' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
//             >
//               Employee
//             </button>
//           </div>
//         </div>
        
//         {/* <div className="history-list space-y-4">
//           {broadcastHistory.length > 0 ? (
//             broadcastHistory.map((item, index) => (
//               <div key={index} className="history-item bg-white p-4 rounded-md shadow-sm border border-gray-200">
//                 <div className="history-content">
//                   <p className="history-message text-gray-700 mb-3">{item.content}</p>
//                   <div className="history-meta flex flex-wrap gap-4 text-sm text-gray-500">
//                     <span className="user-type">Type: {item.forUserType || item.userType || 'Unknown'}</span>
//                     <span className="timestamp">{formatTimestamp(item.timestamp || item.localTime)}</span>
//                     <span className="read-count flex items-center">
//                       <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
//                       </svg>
//                       Read by: {Array.isArray(item.readBy) ? item.readBy.length : 0} users
//                     </span>
//                   </div>
//                 </div>
                
//                 <div className="flex justify-between items-center mt-3">
//                   <div className="history-status">
//                     <span className={`status-badge px-2 py-1 rounded-full text-xs ${item.isRead ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
//                       {item.isRead ? 'Read' : 'Delivered'}
//                     </span>
//                   </div> */}
                  
//                   {/* Expand button for viewing readers */}
//                   {/* {Array.isArray(item.readBy) && item.readBy.length > 0 && (
//                     <button className="text-blue-600 text-sm flex items-center">
//                       View readers
//                       <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
//                       </svg>
//                     </button>
//                   )}
//                 </div> */}
                
//                 {/* Reader details section - This would be expanded when clicking "View readers" */}
//                 {/* This is where you would map your transformed readBy data with user details */}
//                 {/* Example structure: */}
//                 {/* <div className="reader-details mt-3 pt-3 border-t border-gray-200">
//                   <div className="reader-list space-y-2">
//                     {item.readBy.map((reader, i) => (
//                       <div key={i} className="reader-item flex items-center space-x-3">
//                         <img src={reader.image || "/default-avatar.png"} alt={reader.name} className="w-8 h-8 rounded-full" />
//                         <div>
//                           <p className="font-medium text-sm">{reader.name}</p>
//                           <p className="text-xs text-gray-500">{reader.phone}</p>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div> */}
               
                
//                 {/* {item.image && (
//                   <div className="message-image mt-3">
//                     <img src={item.image} alt="Attachment" className="thumbnail rounded-md max-h-32 object-cover" />
//                   </div>
//                 )}
//               </div>
//             ))
//           ) : (
//             <div className="no-history p-8 text-center text-gray-500 bg-white rounded-md">No messages found</div>
//           )}
//         </div>
//       </div>
//     </div> */}

//       <div className="history-list space-y-4">
//       {broadcastHistory.length > 0 ? (
//         broadcastHistory.map((item, index) => (
//           <div key={index} className="history-item bg-white p-4 rounded-md shadow-sm border border-gray-200">
//             <div className="history-content">
//               <p className="history-message text-gray-700 mb-3">{item.content}</p>
//               <div className="history-meta flex flex-wrap gap-4 text-sm text-gray-500 mb-3">
//                 <span className="user-type">Type: {item.forUserType || item.userType || 'Unknown'}</span>
//                 <span className="timestamp">{formatTimestamp(item.timestamp || item.localTime)}</span>
//                 <span className="read-count flex items-center">
//                   <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
//                   </svg>
//                   Read by: {Array.isArray(item.readBy) ? item.readBy.length : 0} users
//                 </span>
//               </div>
              
//               {/* Reader details appear here, after the message metadata */}
//               {/* {expandedItems[index] && Array.isArray(item.readBy) && item.readBy.length > 0 && (
//                 <div className="reader-details mb-3 pb-3 border-b border-gray-100">
//                   <div className="reader-list flex space-x-4 overflow-x-auto pb-2 scrollbar-thin">
//                     {item.readBy.map((reader, i) => (
//                       <div key={i} className="reader-item flex-shrink-0 flex flex-col items-center">
//                         <img 
//                           src={reader.image || "/default-avatar.png"} 
//                           alt={reader.name} 
//                           className="w-10 h-10 rounded-full object-cover"
//                         />
//                         <p className="font-medium text-xs mt-1 text-center max-w-16 truncate">{reader.name}</p>
//                         <p className="text-xs text-gray-500 truncate max-w-16">{reader.phone}</p>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )} */}
//             </div>
            
//             <div className="flex justify-between items-center">
//               <div className="history-status">
//                 <span className={`status-badge px-2 py-1 rounded-full text-xs ${item.isRead ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
//                   {item.isRead ? 'Read' : 'Delivered'}
//                 </span>
//               </div>
              
//               {/* {Array.isArray(item.readBy) && item.readBy.length > 0 && (
//                 <button 
//                   onClick={() => toggleReaders(index)}
//                   className="text-blue-600 text-sm flex items-center"
//                 >
//                   {expandedItems[index] ? 'Hide readers' : 'View readers'}
//                   <svg 
//                     className={`w-4 h-4 ml-1 transform transition-transform ${expandedItems[index] ? 'rotate-180' : ''}`} 
//                     fill="none" 
//                     stroke="currentColor" 
//                     viewBox="0 0 24 24" 
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
//                   </svg>
//                 </button>
//               )} */}
//             </div>
          
//             {item.image && (
//               <div className="message-image mt-3">
//                 <img src={item.image} alt="Attachment" className="thumbnail rounded-md max-h-32 object-cover" />
//               </div>
//             )}
//           </div>
//         ))
//       ) : (
//         <div className="no-history p-8 text-center text-gray-500 bg-white rounded-md">No messages found</div>
//       )}
//     </div>
//     </div>
//     </div>
//   );
// }

// export default BroadcastMessage;