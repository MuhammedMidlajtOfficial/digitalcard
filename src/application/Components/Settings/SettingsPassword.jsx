import React from "react";
import { Form, Input } from "antd";
import { MdOutlineLock } from "react-icons/md";
import axiosInstance from "../../../AxiosConfig";
import { showErrorToast, showSuccessToast } from "../../Services/toastService";

export const SettingsPassword = () => {
  const [form] = Form.useForm();

  const handleUpdatePassword = (values)=>{
    const { oldPassword, newPassword, confirmPassword } = values;
    if (newPassword !== confirmPassword) {
      showErrorToast("New password and confirm password do not match");
      return; 
    }

    if (newPassword === oldPassword) {
      showErrorToast("New Password can not be same as old password");
      return; 
    }
    const userId = localStorage.getItem("userId");

    axiosInstance.patch(`adminAuth/updateUserPassword/${userId}`, {
      oldPassword,
      newPassword,
    })
    .then((response)=>{
      showSuccessToast(response.data.message)
    })
    .catch((error) => {
      showErrorToast(error.response?.data?.message || "An error occurred")
    });
    
  }

  return (
    <>
      <div className="settings-personal-information">
        <div className="container">
          <h4 className="mt-4 mt-lg-0">Password</h4>
          <Form layout="vertical" form={form} onFinish={handleUpdatePassword}>
            <div className="row mt-4">
              <div className="col-md-12 mb-1">
                <Form.Item label="Current Password" name="oldPassword">
                  <div className="d-flex align-items-center">
                    <MdOutlineLock className="lock-edit" />
                    <Input.Password placeholder="Enter Current Password" />
                  </div>
                </Form.Item>
              </div>
            </div>
            <div className="row ">
              <div className="col-md-6 mb-1">
                <Form.Item label="New Password" name="newPassword">
                  <div className="d-flex align-items-center">
                    <MdOutlineLock className="lock-edit" />
                    <Input.Password placeholder="Enter New Password" />
                  </div>
                </Form.Item>
              </div>
              <div className="col-md-6 mb-1">
                <Form.Item label="Confirm Password" name="confirmPassword">
                  <div className="d-flex align-items-center">
                    <MdOutlineLock className="lock-edit" />
                    <Input.Password placeholder="Confirm New Password" />
                  </div>
                </Form.Item>
              </div>
            </div>
            <div className="row mt-4">
              <div className="d-flex justify-content-end gap-3">
                <button className="cancel-btn" type="button">
                  Discard
                </button>
                <button className="create-btn" type="submit">
                  Save Changes
                </button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};
