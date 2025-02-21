import { Button, Form, Modal } from 'antd'
import React from 'react'
import { FiPlus } from 'react-icons/fi';
import { RiDeleteBin6Line, RiUploadCloud2Line } from 'react-icons/ri'
import ReactQuill from 'react-quill';

const EmailSMSCreateTemplate = ({ open, onClose }) => {
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link"],
    ],
  };
  return (
    <Modal
      open={open}
      title="Create Template"
      onCancel={onClose}
      footer={[
        <Button key="cancel" onClick={onClose} className="assignTicket-cancel-button">
          Cancel
        </Button>,
        <Button
          key="select"
          className="openticket-submitRely-button"
        >
          Save
        </Button>
      ]}
    >
      <>
        <div className='row'>
          <Form layout='vertical'>
            <div className="col-lg-12">
              <Form.Item
                label="Brand Logo"
                className="custom-form-item"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
              >
                <div className='EmailSMS-create-template-upload-div'>
                  <div style={{ textAlign: "center" }}>
                    <p>Drop files here or click to upload</p>
                    <button className='EmailSMS-create-template-upload-button d-flex gap-2 align-items-center'><RiUploadCloud2Line />Upload Image</button>
                  </div>
                </div>
              </Form.Item>
            </div>
            <div className='col-lg-4 EmailSMS-create-template-logo-div'>
              <h5 className="email-sms-template-header-h4">Discuss</h5>
              <div className='d-flex justify-content-between'>
                <div></div>
                <RiDeleteBin6Line className='d-flex EmailSMS-create-template-delete-icon' />
              </div>
            </div>
            <div className="col-lg-12">
              <Form.Item
                label="Title"
                className="custom-form-item"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
              >
                <input
                  type="text"
                  className="form-control form_control"
                  placeholder=""
                />
              </Form.Item>
            </div>
            <div className="row">
              <div className="col-12">
                <Form.Item label="Campaign Description">
                  <ReactQuill placeholder='Your text goes here' theme="snow" modules={modules} />
                </Form.Item>
              </div>
              <div>
                <input type="text" placeholder='Add a description' className='addTicket-description-input' />
              </div>
            </div>
            <div className='row'>
              <div className="col-lg-3">
                <Form.Item
                  label=" "
                  className="custom-form-item"
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}
                >
                  <button className='emailSMS-template-addbutton d-flex gap-1 align-items-center'> <FiPlus /> Add button</button>
                </Form.Item>
              </div>


              <div className="col-lg-4">
                <Form.Item
                  label="Button Name"
                  className="custom-form-item"
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}
                >
                  <input
                    type="text"
                    className="form-control form_control"
                    placeholder="Click here"
                  />
                </Form.Item>
              </div>
              <div className="col-lg-5">
                <Form.Item
                  label="Link"
                  className="custom-form-item"
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}
                >
                  <input
                    type="text"
                    className="form-control form_control"
                    placeholder="https//:knowconnections.com"
                  />
                </Form.Item>
              </div>


            </div>
          </Form>
        </div>
      </>
    </Modal>
  )
}

export default EmailSMSCreateTemplate






