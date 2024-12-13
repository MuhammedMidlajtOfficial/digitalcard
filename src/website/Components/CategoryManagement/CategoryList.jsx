import React, { useState } from "react";
import { createCategory } from "../../services/CategoryServices";

const AddCategoryModal = ({ isOpen, onClose, roles }) => {
  const [categoryName, setCategoryName] = useState("");
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [isActive, setIsActive] = useState(true);

  const handleSubmit = async () => {
    try {
      await createCategory({
        categoryName,
        isActive,
        roles: selectedRoles,
      });
      alert("Category created successfully!");
      onClose();
    } catch (error) {
      alert("Error creating category");
    }
  };

  const handleRoleToggle = (roleId) => {
    setSelectedRoles((prev) =>
      prev.includes(roleId)
        ? prev.filter((id) => id !== roleId)
        : [...prev, roleId]
    );
  };

  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50 z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          <h2 className="text-xl font-bold mb-4">Add Category</h2>
          <input
            type="text"
            placeholder="Category Name"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            className="w-full px-4 py-2 mb-4 border rounded-lg"
          />
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Assign Roles</h3>
            {roles.map((role) => (
              <label key={role.id} className="block">
                <input
                  type="checkbox"
                  checked={selectedRoles.includes(role.id)}
                  onChange={() => handleRoleToggle(role.id)}
                  className="mr-2"
                />
                {role.roleName}
              </label>
            ))}
          </div>
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
              Add Category
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default AddCategoryModal;
