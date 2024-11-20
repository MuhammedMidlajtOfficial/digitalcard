import React from "react";
import HeaderApplication from "../../Layouts/Header/Header";
import SidebarApplication from "../../Layouts/Sidebar/Sidebar";
import { Settings } from "../../Components/Settings/Settings";
import "./settings.css";
const SettingsPage = () => {
  return (
    <>
      <SidebarApplication />
      <HeaderApplication />
      <div className="application-wrapper">
        <Settings />
      </div>
    </>
  );
};

export default SettingsPage;