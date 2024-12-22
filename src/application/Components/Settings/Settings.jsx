import React, { useState } from "react";
import { MdStorefront } from "react-icons/md";
import { PersonalInformation } from "./PersonalInformation";
import { FaRegUser } from "react-icons/fa6";
import { RiLockPasswordLine } from "react-icons/ri";
import { SettingsPassword } from "./SettingsPassword";
import { CompanyInformation } from "./CompanyInformation";

export const Settings = () => {
  const [selectedOption, setSelectedOption] = useState("profile");

  const renderContent = () => {
    switch (selectedOption) {
      case "profile":
        return <PersonalInformation />;
      case "password":
        return <SettingsPassword />;
      case "company":
        return <CompanyInformation />;
      default:
        return <PersonalInformation />;
    }
  };

  return (
    <div className="settings-section">
      <div>
        <div className="row mt-4">
          <h2>Settings</h2>
          <div className="col-lg-4">
            <div className="settings-options">
              <div
                className={`settings-items ${selectedOption === "profile" ? "active" : ""}`}
                onClick={() => setSelectedOption("profile")}
              >
                <FaRegUser /> &nbsp; Personal Information
              </div>
              <div
                className={`settings-items mt-3 ${selectedOption === "password" ? "active" : ""}`}
                onClick={() => setSelectedOption("password")}
              >
                <RiLockPasswordLine /> &nbsp; Password
              </div>
              {/* <div
                className={`settings-items mt-3 ${selectedOption === "company" ? "active" : ""}`}
                onClick={() => setSelectedOption("company")}
              >
                <MdStorefront /> &nbsp; Information
              </div> */}
            </div>
          </div>

          <div className="col-lg-8">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};
