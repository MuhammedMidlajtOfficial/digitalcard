import React, { useState } from "react";
import { Avatar, Pagination } from "antd";
import { LiaTelegram } from "react-icons/lia";
import profile4 from "../../../Assets/Images/profile4.svg";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";


const feedbackData = [
  {
    name: "Kiran K",
    role: "UI/UX Designer",
    feedbackTitle: "Possible Security Risks",
    feedbackDescription:
      "Like any digital format, there is a potential for hacking or data breaches, which might make users reluctant to share sensitive contact details.",
    timeAgo: "1 hour ago",
  },
  {
    name: "Siddu M",
    role: "UI/UX Designer",
    feedbackTitle: "Limited Customization Options",
    feedbackDescription:
      "Although digital cards offer flexibility, they might lack the creative textures, finishes, or designs of physical cards that stand out and reflect a brand or personality effectively.",
    timeAgo: "4 hours ago",
  },
  {
    name: "Navaneethan M",
    role: "UI/UX Designer",
    feedbackTitle: "Network Limitations",
    feedbackDescription:
      "Sharing digital cards often depends on internet access, which can be a limitation in low-coverage areas or in certain professional settings.",
    timeAgo: "1 day ago",
  },
  {
    name: "Manjunath B",
    role: "Graphics Designer",
    feedbackTitle: "Privacy Concerns",
    feedbackDescription:
      "Sharing a digital card may sometimes expose contact information to third parties through tracking or data collection, raising privacy issues.",
    timeAgo: "1 day ago",
  },
  {
    name: "Madhu G",
    role: "Sales Manager",
    feedbackTitle: "Overwhelming Information",
    feedbackDescription:
      "Some digital business cards can become cluttered with too much information, making them hard to read or navigate, especially on smaller screens.",
    timeAgo: "2 days ago",
  },
  {
    name: "Charan K",
    role: "Sales Manager",
    feedbackTitle: "Device Dependency",
    feedbackDescription:
      "Digital business cards rely on smartphones, tablets, or computers for display. If either party has a low battery or is without a device, it can make sharing inconvenient.",
    timeAgo: "4 days ago",
  },
  
];

const AllUserNegativeFeedback = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const currentFeedback = feedbackData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const totalEntries = feedbackData.length;
  const startIndex = (currentPage - 1) * pageSize + 1;
  const endIndex = Math.min(currentPage * pageSize, totalEntries);

  const navigate = useNavigate();

  return (
    <div className="py-4">
      <div className="row g-3">
        {currentFeedback.map((feedback, index) => (
          <div key={index} className="col-md-6">
            <div className="card all-user-negative-feedback-card shadow-sm">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div className="d-flex align-items-center">
                    <Avatar size={50} src={profile4} className="me-3" />
                    <div>
                      <h5 className="mb-0">{feedback.name}</h5>
                      <p className="text-muted mb-0">{feedback.role}</p>
                    </div>
                  </div>
                  <small className="text-muted">{feedback.timeAgo}</small>
                </div>
                <h6 className="fw-bold">{feedback.feedbackTitle}</h6>
                <p className="text-muted">{feedback.feedbackDescription}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="reply-feedback-text">Reply Feedback</span>
                  <LiaTelegram size={35} className="text-primary all-users-feedback-telegram" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-between align-items-center mt-4">
        <div>
          <span>
            Showing {startIndex} to {endIndex} of {totalEntries} entries
          </span>
        </div>
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={totalEntries}
          onChange={handlePageChange}
        />
      </div>

      <div className="view-table-referral-button">
          <button
            onClick={() =>
              navigate("/admin/userfeedback/view-response")
            }
          >
            <IoIosArrowBack />
            Back
          </button>
        </div>
      
    </div>
  );
};

export default AllUserNegativeFeedback;



