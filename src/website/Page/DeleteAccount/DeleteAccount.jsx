import React, { useState } from "react";
import { Form, Input, Checkbox, Button } from "antd";
import "./deleteAccount.css";
const AccountSettingsForm = () => {
  const [deleteAccountUrl, setDeleteAccountUrl] = useState("");

  const onFinish = (values) => {
    console.log("Form Values:", values);
  };

  return (
    <div>
      <div className="features-banner-section">
        <div className="feature-main-banner-section"></div>
        <div className="features-sub-banner p-2">
          <center>
            <h2>Account Settings</h2>
          </center>
        </div>
      </div>
      <div className="container">
        <div className="row my-4">
          <div className="col-lg-6 delete-form-text d-flex justify-content-center align-items-center flex-column">
            <div className="">
              <h1>Account Creation and Data Deletion Policies</h1>
              <p>
                To comply with user data management standards and ensure
                transparency in how user accounts and data are handled, please
                complete the form below. This information will help define the
                methods your app supports for account creation and the processes
                for users to request account and data deletion.
              </p>
              <section style={{ marginBottom: "20px" }}>
                <h3>Account Creation Methods</h3>
                <p>Indicate the account creation methods your app supports. This includes any options provided directly within your app or through external webpages where users can create accounts.
                </p>
              </section>

              <section>
                <h3>Delete Account URL</h3>
                <p>
                  Provide a valid URL that users can visit to request the
                  deletion of their accounts and associated data.
                </p>

                <p>
                  Ensure the URL leads to a page where users can understand and
                  initiate the account deletion process. Clearly outline the
                  steps involved and the data handling policies (e.g., types of
                  data deleted or retained). This URL will be displayed on your
                  Google Play Store listing.
                </p>
              </section>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="delete-form-container">
              <Form
                layout="vertical"
                onFinish={onFinish}
                style={{ maxWidth: "800px", margin: "0 auto" }}
              >
                {/* Account Creation Methods */}
                <h3>
                  Which of the following methods of account creation does your
                  app support? Select all that apply
                </h3>
                <h6>
                  This includes accounts created entirely within your app, or by
                  redirecting users to a webpage where they can create an
                  account. Usernames include user IDs, email addresses, and
                  phone numbers. Authentication includes two-factor, one-time
                  password, biometric, or single sign-on authentication.
                </h6>

                <Form.Item
                  name="accountCreationMethods"
                  rules={[
                    {
                      required: true,
                      message:
                        "Please select at least one method of account creation.",
                    },
                  ]}
                >
                  <div>
                    <div>
                      <Checkbox value="username_password">
                        Username and password
                      </Checkbox>
                    </div>
                    <div>
                      <Checkbox value="username_authentication">
                        Username and other authentication
                      </Checkbox>
                    </div>
                    <div>
                      <Checkbox value="username_password_authentication">
                        Username, password, and other authentication
                      </Checkbox>
                    </div>
                    <div>
                      <Checkbox value="oauth">OAuth</Checkbox>
                    </div>
                    <div>
                      <Checkbox value="other">Other</Checkbox>
                    </div>
                    <div>
                      <Checkbox value="no_account_creation">
                        My app does not allow users to create an account
                      </Checkbox>
                    </div>
                  </div>
                </Form.Item>

                {/* Delete Account URL */}
                <p>
                  Add a link that users can use to request that their account
                  and associated data is deleted
                </p>
                <Form.Item
                  label="Delete Account URL"
                  name="deleteAccountUrl"
                  rules={[
                    { required: true, message: "Please enter a valid URL!" },
                    {
                      type: "url",
                      message: "Please enter a valid URL format!",
                    },
                  ]}
                >
                  <Input placeholder="Enter a valid URL" />
                </Form.Item>

                <small>
                  This link will be shown on your Google Play store listing and
                  should:
                  <ul>
                    <li>
                      Refer to your app or developer name that is shown on your
                      store listing.
                    </li>
                    <li>
                      Prominently feature the steps that users should take to
                      request that their account is deleted.
                    </li>
                    <li>
                      Specify the types of data that are deleted or kept, and
                      any additional retention period.
                    </li>
                  </ul>
                </small>

                {/* Submit Button */}
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    style={{ marginTop: "16px" }}
                  >
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettingsForm;
