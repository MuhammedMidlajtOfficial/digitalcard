import { Form, Input } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { showDeleteMessage, showSuccessMessage } from "../../../../globalConstant"; 

export const ViewReceivedSurvey = () => {
    const navigate=useNavigate();
  const surveyData = [
    {
      id: 1,
      question: "What features would you like added or improved?",
      answer:
        "Add a one-click option to download the contact information directly to my phone or email contacts",
    },
    {
      id: 2,
      question: "What features would you like added or improved?",
      answer:
        "Add a one-click option to download the contact information directly to my phone or email contacts",
    },
    {
      id: 3,
      question: "What features would you like added or improved?",
      answer:
        "Add a one-click option to download the contact information directly to my phone or email contacts",
    },
    {
      id: 4,
      question: "Did you encounter any technical issues?",
      answer: "Yes",
    },
    {
      id: 5,
      question: "What features would you like added or improved?",
      answer:
        "Add a one-click option to download the contact information directly to my phone or email contacts",
    },
    {
      id: 6,
      question: "What features would you like added or improved?",
      answer:
        "Add a one-click option to download the contact information directly to my phone or email contacts",
    },
    {
      id: 7,
      question: "Which version do you prefer?",
      answer: "No Preference",
    },
    {
      id: 8,
      question: "Is the contact information displayed clearly?",
      answer: "Yes",
    },
    {
      id: 9,
      question: "What features would you like added or improved?",
      answer:
        "Add a one-click option to download the contact information directly to my phone or email contacts",
    },
    {
      id: 10,
      question: "What features would you like added or improved?",
      answer:
        "Add a one-click option to download the contact information directly to my phone or email contacts",
    },
  ];
  const handleDelete = () => {
    showSuccessMessage("Welcome user survey Deleted successfully")
  };
  const openDeleteModal = () => {
    showDeleteMessage({
      title: "Are you sure you want to delete this Survey file?",
      content: "Annette Black Manage payment History",
      onDelete: handleDelete,
    });
  };
  return (
    <div className="create-survey-section">
      <div className="container">
        <div className="row">
          <h2 style={{ fontSize: "18px" }}>
            Digital Business Card User Feedback Survey
          </h2>
          <div className="create-survey-form">
            <div className="create-survey-banner">
              <h2>Welcome,</h2>
              <p>We'd like to ask you for some additional information</p>
            </div>
            <Form layout="vertical">
              <div className="create-survey-border my-4">
                <div className="row">
                  <div className="col-lg-6">
                    <Form.Item label="Name" initialValue="Shiva">
                      <Input
                        placeholder="Type here..."
                        className="create-survey-inputs"
                        disabled
                        value="Shiva"
                      />
                    </Form.Item>
                  </div>
                  <div className="col-lg-6">
                    <Form.Item label="Date Of Birth" initialValue="26-01-2002">
                      <Input
                        placeholder="Type here..."
                        className="create-survey-inputs"
                        disabled
                        value="26-01-2002"
                      />
                    </Form.Item>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  {surveyData.map((item) => (
                    <Form.Item
                      key={item.id}
                      label={`${item.id}. ${item.question}`}
                      name={`question_${item.id}`}
                      initialValue={item.answer}
                    >
                      <Input.TextArea
                        placeholder="Your answer"
                        autoSize={{ minRows:1, maxRows: 4 }}
                        disabled
                        className="create-survey-inputs"
                      />
                    </Form.Item>
                  ))}
                </div>
              </div>
              <div className="d-flex justify-content-end mt-4">
               <div className="d-flex gap-2">
               <button className="survey-cancel-button" onClick={()=>navigate("/admin/userfeedback/received-surveys")}>Cancel</button>
               <button className="create-survey-button" onClick={openDeleteModal}>Delete</button>
               </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};
