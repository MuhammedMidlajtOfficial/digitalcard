import React, { useState } from "react";
import { createRole } from "../../services/RoleServices";

const AddRoleModal = ({ isOpen, onClose }) => {
  const [roleName, setRoleName] = useState("");
  const [isActive, setIsActive] = useState(true);

  const handleSubmit = async () => {
    try {
      await createRole({ roleName, isActive });
      alert("Role created successfully!");
      onClose();
    } catch (error) {
      alert("Error creating role");
    }
  };

  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50 z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          <h2 className="text-xl font-bold mb-4">Add Role</h2>
          <input
            type="text"
            placeholder="Role Name"
            value={roleName}
            onChange={(e) => setRoleName(e.target.value)}
            className="w-full px-4 py-2 mb-4 border rounded-lg"
          />
          <label>
            <input
              type="checkbox"
              checked={isActive}
              onChange={(e) => setIsActive(e.target.checked)}
              className="mr-2"
            />
            Active
          </label>
          <div className="mt-4 flex justify-end space-x-4">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded-lg"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              Add Role
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default AddRoleModal;
