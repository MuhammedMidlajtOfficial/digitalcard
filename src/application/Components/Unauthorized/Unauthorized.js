import React from 'react';
import { useNavigate } from 'react-router-dom';

const Unauthorized = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="text-center">
        <img src='https://diskuss-bucket.s3.us-east-1.amazonaws.com/profile-images/403(org).png' alt='403' />
        <p className="text-2xl font-semibold text-gray-700 mt-6">
          We are Sorry...
        </p>
        <p className="text-gray-600 mt-2">
          The page you're trying to access has restricted access.
          <br />
          Please refer to your system administrator.
        </p>
        <button onClick={() => navigate('/login')} className="mt-6 px-6 py-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition">Go to login</button>
        {/* <button onClick={() => navigate('/admin/dashboard/overview')} className="mt-6 px-6 py-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition">Go to Dashboard overview</button> */}
      </div>
    </div>
  );
};

export default Unauthorized;
