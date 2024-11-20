import { Switch } from "antd";
import React from "react";

const RBACPermissionList = () => {
  const roles = [
    { title: "Full access to all modules and settings" },
    { title: "Oversee financial transactions, budget planning, and auditing	" },
    { title: "Handle sales data, customer relations, and sales reporting" },
    { title: "Manage stock levels, orders, and supplier relationships" },
    { title: "Oversee production processes, scheduling, and quality control" },
    {
      title: "Manage IT infrastructure, user access, and security protocols	",
    },
    { title: "Coordinate delivery schedules, manage fleet, and track" },
    { title: "Supervise customer support operations and handle escalations" },
    { title: "Develop marketing strategies, campaigns, and market research." },
  ];
  const roles1 = [
    { title: "Full access to all modules and settings" },
    { title: "Can create and update campaigns, view analytics." },
    { title: "Can add new templates but no access to roles" },
  ];
  const roles2 = [
    { title: "Full access to all modules and settings" },
    { title: "Can view reports and analytics only" },
    { title: "Can view specific, limited content only" },
  ];
  return (
    <div className="container">
      <div className="mb-3">
        <div>
          <h5 className="RBACPermission-list-heading">Admin Roles</h5>
          <p className="RBAC-permissionList-p-blue">Customisable Admin Roles</p>
        </div>
        <div className="admin_role_list">
          {roles.map((role) => (
            <div
              className="admin_role_list_p d-flex align-items-center justify-content-between"
              key={role.title}
            >
              <p className="admin_role_para">{role.title}</p>
              <Switch
              // checked={roleDetails[role.title] || false}
              // onChange={checked => onChange(checked, selectedRole, role.title, setRoleDetails)}
              // disabled={!selectedRole}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mb-3">
        <div>
          <h5 className="RBACPermission-list-heading">Team Lead Roles</h5>
          <p className="RBAC-permissionList-p-blue">
            Customisable Team Lead Roles
          </p>
        </div>
        <div className="admin_role_list">
          {roles1.map((role) => (
            <div
              className="admin_role_list_p d-flex align-items-center justify-content-between"
              key={role.title}
            >
              <p className="admin_role_para">{role.title}</p>
              <Switch
              // checked={roleDetails[role.title] || false}
              // onChange={checked => onChange(checked, selectedRole, role.title, setRoleDetails)}
              // disabled={!selectedRole}
              />
            </div>
          ))}
        </div>
      </div>
      <div>
        <div>
          <h5 className="RBACPermission-list-heading">Team Member Roles</h5>
          <p className="RBAC-permissionList-p-blue">
            Customisable Team Member Roles
          </p>
        </div>
        <div className="admin_role_list">
          {roles2.map((role) => (
            <div
              className="admin_role_list_p d-flex align-items-center justify-content-between"
              key={role.title}
            >
              <p className="admin_role_para">{role.title}</p>
              <Switch
              // checked={roleDetails[role.title] || false}
              // onChange={checked => onChange(checked, selectedRole, role.title, setRoleDetails)}
              // disabled={!selectedRole}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RBACPermissionList;
