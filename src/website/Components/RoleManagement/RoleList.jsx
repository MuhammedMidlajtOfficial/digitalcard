import React, { useEffect, useState } from "react";
import { fetchRoles, deleteRole, toggleRoleStatus } from "../../services/RoleServices";
import { FaToggleOn, FaToggleOff } from "react-icons/fa";

const RoleList = () => {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    const loadRoles = async () => {
      try {
        const response = await fetchRoles();
        setRoles(response.data);
      } catch (error) {
        alert("Error fetching roles");
      }
    };

    loadRoles();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteRole(id);
      setRoles((prev) => prev.filter((role) => role.id !== id));
      alert("Role deleted");
    } catch (error) {
      alert("Error deleting role");
    }
  };

  const handleToggleStatus = async (id, isActive) => {
    try {
      // Optimistically update the UI
      setRoles((prev) =>
        prev.map((role) =>
          role.id === id ? { ...role, isActive: !isActive } : role
        )
      );

      // Persist the change to the backend
      await toggleRoleStatus(id);
    } catch (error) {
      // If the update fails, revert the UI state
      setRoles((prev) =>
        prev.map((role) =>
          role.id === id ? { ...role, isActive } : role
        )
      );
      alert("Error toggling role status");
    }
  };

  return (
    <div>
      {roles.map((role) => (
        <div
          key={role.id}
          className="flex justify-between items-center mb-2 p-2 border rounded-lg"
        >
          <span className="font-medium">{role.roleName}</span>
          <div className="flex space-x-4 items-center">
            <button
              onClick={() => handleToggleStatus(role._id, role.isActive)}
              className="text-2xl"
            >
              {role.isActive ? (
                <FaToggleOn className="text-green-500" />
              ) : (
                <FaToggleOff className="text-gray-400" />
              )}
            </button>
            <button
              onClick={() => handleDelete(role._id)}
              className="px-3 py-1 text-white bg-red-500 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RoleList;
