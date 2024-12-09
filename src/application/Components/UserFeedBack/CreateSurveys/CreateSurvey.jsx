import { Form, Input, Button,Checkbox } from "antd";
import React, { useState } from "react";
import { IoIosStarOutline } from "react-icons/io";
import { IoChevronDownCircleOutline } from "react-icons/io5";
import { LuUploadCloud } from "react-icons/lu";
import { MdShortText } from "react-icons/md";
import { PiTextAlignLeft } from "react-icons/pi";
import { RiCheckboxCircleLine } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";
import { CloseOutlined } from "@ant-design/icons";

export const CreateSurvey = () => {
  const [questions, setQuestions] = useState([]);

  const addQuestion = (type) => {
    const newQuestion = {
      id: Date.now(),
      type,
      label: "",
      options: type === "dropdown" || type === "multipleChoice" ? [""] : [],
    };
    setQuestions([...questions, newQuestion]);
  };
  
  const handleQuestionChange = (id, value) => {
    const updatedQuestions = questions?.map((q) =>
      q.id === id ? { ...q, label: value } : q
    );
    setQuestions(updatedQuestions);
  };

  const handleOptionChange = (questionId, optionIndex, value) => {
    const updatedQuestions = questions?.map((q) => {
      if (q.id === questionId) {
        const newOptions = [...q.options];
        newOptions[optionIndex] = value;
        return { ...q, options: newOptions };
      }
      return q;
    });
    setQuestions(updatedQuestions);
  };

  const addOption = (questionId) => {
    const updatedQuestions = questions?.map((q) => {
      if (q.id === questionId) {
        return { ...q, options: [...q.options, ""] };
      }
      return q;
    });
    setQuestions(updatedQuestions);
  };

  const removeQuestion = (id) => {
    setQuestions(questions.filter((q) => q.id !== id));
  };

  const renderQuestionInput = (question) => {
    switch (question.type) {
      case "dropdown":
        case "multipleChoice":
            return (
              <div>
                {question.options?.map((option, index) => (
                  <div key={index} className="d-flex align-items-center mb-2">
                    <Checkbox disabled style={{ marginRight: "8px" }} />
                    <Input
                      placeholder={`Option ${index + 1}`}
                      value={option}
                      onChange={(e) =>
                        handleOptionChange(question.id, index, e.target.value)
                      }
                      className="create-survey-inputs"
                    />
                  </div>
                ))}
                <Button type="link" onClick={() => addOption(question.id)}>
                  + Add Option
                </Button>
              </div>
            );
      case "shortAnswer":
        return <Input placeholder="User's short answer..." className="create-survey-inputs" />;
      case "paragraph":
        return <Input.TextArea placeholder="User's long answer..." className="create-survey-inputs" />;
      case "checkbox":
        return <Input placeholder="Checkbox option..." className="create-survey-inputs" />;
      case "upload":
        return <Input placeholder="File upload option..." disabled />;
      case "rating":
        return <Input placeholder="Rating option..." disabled />;
      default:
        return <Input placeholder="Type here..." className="create-survey-inputs" />;
    }
  };

  return (
    <div className="create-survey-section">
      <div className="container">
        <div className="row">
          <h2 style={{ fontSize: "18px" }}>Create Survey</h2>
          <div className="create-survey-form">
            <div className="create-survey-banner">
              <h2>Welcome,</h2>
              <p>We'd like to ask you for some additional information</p>
            </div>
            <Form layout="vertical">
              <div className="create-survey-border my-4">
                <div className="row">
                  <div className="col-lg-6">
                    <Form.Item label="Name">
                      <Input placeholder="Type here..." className="create-survey-inputs" />
                    </Form.Item>
                  </div>
                  <div className="col-lg-6">
                    <Form.Item label="Date Of Birth">
                      <Input placeholder="Type here..." className="create-survey-inputs" />
                    </Form.Item>
                  </div>
                </div>
              </div>
        
            {questions?.map((question, index) => (
              <div key={question.id} className="row mb-3 align-items-center">
                <div className="col-lg-12">
                  <Form.Item label={`Question ${index + 1}`}>
                    <Input
                      placeholder="Type your question here..."
                      value={question.label}
                      onChange={(e) => handleQuestionChange(question.id, e.target.value)}
                      className="create-survey-inputs"
                    />
                  </Form.Item>
                </div>
                <div className="col-lg-11">
                  {renderQuestionInput(question)}
                </div>
                <div className="col-lg-1 text-right">
                  <Button
                    type="text"
                    icon={<CloseOutlined />}
                    onClick={() => removeQuestion(question.id)}
                  />
                </div>
              </div>
            ))}

            <div className="create-survey-scrollable mt-4">
              <div
                className="create-survey-add-form-box"
                style={{ background: "#34CE84" }}
                onClick={() => addQuestion("multipleChoice")}
              >
                <div className="create-survey-icons">
                  <TbGridDots size={18} />
                </div>
                <h4>Multiple Choice</h4>
              </div>
              <div
                className="create-survey-add-form-box"
                style={{ background: "#F2473D" }}
                onClick={() => addQuestion("checkbox")}
              >
                <div className="create-survey-icons">
                  <RiCheckboxCircleLine size={18} />
                </div>
                <h4>Checkbox</h4>
              </div>
              <div
                className="create-survey-add-form-box"
                style={{ background: "#F45038" }}
                onClick={() => addQuestion("paragraph")}
              >
                <div className="create-survey-icons">
                  <PiTextAlignLeft size={18} />
                </div>
                <h4>Paragraph</h4>
              </div>
              <div
                className="create-survey-add-form-box"
                style={{ background: "#992FD5" }}
                onClick={() => addQuestion("dropdown")}
              >
                <div className="create-survey-icons">
                  <IoChevronDownCircleOutline size={18} />
                </div>
                <h4>Dropdown</h4>
              </div>
              <div
                className="create-survey-add-form-box"
                style={{ background: "#2BC9B3" }}
                onClick={() => addQuestion("shortAnswer")}
              >
                <div className="create-survey-icons">
                  <MdShortText size={18} />
                </div>
                <h4>Short Answer</h4>
              </div>
              <div
                className="create-survey-add-form-box"
                style={{ background: "#7B58ED" }}
                onClick={() => addQuestion("rating")}
              >
                <div className="create-survey-icons">
                  <IoIosStarOutline size={18} />
                </div>
                <h4>Rating</h4>
              </div>
              <div
                className="create-survey-add-form-box"
                style={{ background: "#F1616A" }}
                onClick={() => addQuestion("upload")}
              >
                <div className="create-survey-icons">
                  <LuUploadCloud size={18} />
                </div>
                <h4>Upload</h4>
              </div>
            </div>

            <div className="d-flex justify-content-end mt-4">
                <button className="create-survey-button">Send</button>
            </div>
          </Form>
        </div>
      </div>
    </div>
    </div>
  );
};
