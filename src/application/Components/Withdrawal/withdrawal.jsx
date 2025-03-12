import React, { useEffect, useState } from "react";
import axiosInstanceForTicket from "../../../AxiosContigForTicket";
import { showWarningToast } from "../../Services/toastService";

const Withdrawal = () => {
  const [withdrawalRequests, setWithdrawalRequests] = useState([]);
  const [acceptedRequests, setAcceptedRequests] = useState([]);
  const [rejectedRequests, setRejectedRequests] = useState([]);
  // const [singleRequests, setSingleRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('pending');
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const rowOptions = [5, 10, 15, 20, 25, 50];
  const [showApprovalModal, setShowApprovalModal] = useState(false);
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [transactionId, setTransactionId] = useState('');
  const [reqData, setReqData] = useState({
    id:'',
    status:''
  });
  const [rejectReason, setRejectReason] = useState('');

  useEffect(() => {
    fetchWithdrawalRequests();
  }, []);

  const fetchWithdrawalRequests = async () => {
    try {
      const response = await axiosInstanceForTicket.get('/referral/withdraw');
      const data = response.data.withdrawalRequests;

       // Sort function to order by updatedAt (newest first)
      const sortedData = data.sort((a, b) => new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime());

      const pending = sortedData.filter(req => !req.status || req.status === 'pending');
      const accepted = sortedData.filter(req => req.status === 'approved');
      const rejected = sortedData.filter(req => req.status === 'rejected');
      
      // const pending = data.filter(req => !req.status || req.status === 'pending');
      // const accepted = data.filter(req => req.status === 'approved');
      // const rejected = data.filter(req => req.status === 'rejected');
      console.log('data-',data);
      setWithdrawalRequests(pending);
      
      
      setAcceptedRequests(accepted);
      setRejectedRequests(rejected);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching withdrawal requests:", error);
      setLoading(false);
    }
  };

  // const fetchSingleWithdrawalRequests = async (requestId) => {
  //   try {
  //     const response = await axiosInstanceForTicket.get('/referral/withdraw');
  //     const data = response.data.withdrawalRequests;
  //     console.log('data-',data);

  //     // setSingleRequests(data)
  //     setLoading(false);
  //   } catch (error) {
  //     console.error("Error fetching withdrawal requests:", error);
  //     setLoading(false);
  //   }
  // };

  const handleStatusChange = async (id,status) => {
    try {
      setReqData((prevData) => ({
        ...prevData,
        id: id,
        status: status
      }));
      
      if (status === 'approved') {
        setShowApprovalModal(true);
      }else{
        setShowRejectModal(true)
      }
      // fetchSingleWithdrawalRequests(requestId)
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const submitStatusChange = async () => {
    try {
      if (!transactionId.trim()) {
        showWarningToast("Transaction ID is required!");
        return;
      }

      const response = await axiosInstanceForTicket.put(`/referral/withdraw/${reqData.id}`, {
        id: reqData.id,
        status: reqData.status,
        transactionId: transactionId
      });

      if (response.status === 200) {
        fetchWithdrawalRequests();
      }

      setTransactionId('');
      setShowApprovalModal(false);
      setShowRejectModal(false)
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString();
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Withdrawal Management</h1>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Show rows:</span>
          <select 
            value={rowsPerPage}
            onChange={(e) => setRowsPerPage(Number(e.target.value))}
            className="border rounded px-2 py-1 text-sm"
          >
            {rowOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Pending Requests</p>
              <h3 className="text-2xl font-bold text-gray-800">{withdrawalRequests.length}</h3>
            </div>
            <div className="h-12 w-12 bg-yellow-100 rounded-full flex items-center justify-center">
              <div className="h-6 w-6 text-yellow-600">⏳</div>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Accepted Requests</p>
              <h3 className="text-2xl font-bold text-gray-800">{acceptedRequests.length}</h3>
            </div>
            <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
              <div className="h-6 w-6 text-green-600">✓</div>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Rejected Requests</p>
              <h3 className="text-2xl font-bold text-gray-800">{rejectedRequests.length}</h3>
            </div>
            <div className="h-12 w-12 bg-red-100 rounded-full flex items-center justify-center">
              <div className="h-6 w-6 text-red-600">✕</div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="border-b">
          <div className="flex gap-4 px-4">
            {['pending', 'accepted', 'rejected'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === tab
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="p-4 text-left text-sm font-medium text-gray-500">ID</th>
                <th className="p-4 text-left text-sm font-medium text-gray-500">User</th>
                <th className="p-4 text-left text-sm font-medium text-gray-500">Amount</th>
                <th className="p-4 text-left text-sm font-medium text-gray-500">UPI ID</th>
                <th className="p-4 text-left text-sm font-medium text-gray-500">Created</th>
                {activeTab === 'pending' && (
                  <th className="p-4 text-left text-sm font-medium text-gray-500">Actions</th>
                )}
                {activeTab !== 'pending' && (
                  <th className="p-4 text-left text-sm font-medium text-gray-500">Updated</th>
                )}
                {activeTab === 'accepted' && (
                  <th className="p-4 text-left text-sm font-medium text-gray-500">Transaction ID</th>
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {(activeTab === 'pending' ? withdrawalRequests :
                activeTab === 'accepted' ? acceptedRequests :
                rejectedRequests
              ).slice(0, rowsPerPage).map((request) => (
                <tr key={request._id} className="hover:bg-gray-50">
                  <td className="p-4 text-sm">{request._id.slice(-6)}</td>
                  <td className="p-4 text-sm">{request.user?.username}</td>
                  <td className="p-4 text-sm font-medium">₹{request.amount}</td>
                  <td className="p-4 text-sm">{request.upiId}</td>
                  <td className="p-4 text-sm">{formatDate(request.createdAt)}</td>
                  {activeTab === 'pending' && (
                    <td className="p-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleStatusChange( request._id, 'approved')}
                          className="bg-green-500 text-white px-3 py-1.5 rounded text-sm font-medium hover:bg-green-600 transition-colors"
                        >
                          Accept
                        </button>
                        <button
                          onClick={() => handleStatusChange( request._id, 'rejected')}
                          className="bg-red-500 text-white px-3 py-1.5 rounded text-sm font-medium hover:bg-red-600 transition-colors"
                        >
                          Reject
                        </button>
                      </div>
                    </td>
                  )}
                  {activeTab !== 'pending' && (
                    <td className="p-4 text-sm">{formatDate(request.updatedAt)}</td>
                  )}
                  {activeTab === 'accepted' && (
                    <td className="p-4 text-sm">{request.transactionId || 'N/A'}</td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Approval Modal */}
      {showApprovalModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Enter Transaction ID</h2>
              <input
                type="text"
                placeholder="Transaction ID"
                value={transactionId}
                onChange={(e) => setTransactionId(e.target.value)}
                className="w-full p-2 border rounded"
              />
            <div className="flex justify-end mt-4 gap-2">
              <button onClick={() => { 
                setShowApprovalModal(false)
                setTransactionId('') }} 
                className="bg-gray-400 text-white px-3 py-1 rounded">Cancel</button>
              <button onClick={submitStatusChange} className="bg-blue-500 text-white px-3 py-1 rounded">
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Reject Modal */}
      {showRejectModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Enter Rejection Reason</h2>
            
              <textarea
                placeholder="Reason for rejection"
                value={rejectReason}
                onChange={(e) => setRejectReason(e.target.value)}
                className="w-full p-2 border rounded"
              />
            <div className="flex justify-end mt-4 gap-2">
              <button onClick={() => {
                setShowRejectModal(false)
                setRejectReason('') }}
                className="bg-gray-400 text-white px-3 py-1 rounded">Cancel</button>
              <button onClick={submitStatusChange} className="bg-blue-500 text-white px-3 py-1 rounded">
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Withdrawal;