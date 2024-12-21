import React, { useState } from "react";
import RoleList from "../Components/RoleManagement/RoleList";
import AddRoleModal from "../Components/RoleManagement/AddRoleModel";
import CategoryList from "../Components/CategoryManagement/CategoryList";
import AddCategoryModal from "../Components/CategoryManagement/AddCategoryModel";

const EmpPage = () => {
  const [isRoleModalOpen, setRoleModalOpen] = useState(false);
  const [isCategoryModalOpen, setCategoryModalOpen] = useState(false);

  return (
    <div className="p-8 grid grid-rows-2 gap-8">
      {/* Role Management Section */}
      <div>
        <div className="mb-4">
          <button
            onClick={() => setRoleModalOpen(true)}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Add Role
          </button>
        </div>
        <AddRoleModal
          isOpen={isRoleModalOpen}
          onClose={() => setRoleModalOpen(false)}
        />
        <RoleList />
      </div>

      {/* Category Management Section */}
      <div>
        <div className="mb-4">
          <button
            onClick={() => setCategoryModalOpen(true)}
            className="px-4 py-2 bg-green-500 text-white rounded-lg"
          >
            Add Category
          </button>
        </div>
        <AddCategoryModal
          isOpen={isCategoryModalOpen}
          onClose={() => setCategoryModalOpen(false)}
          roles={[]} // Fetch roles dynamically if needed
        />
        <CategoryList />
      </div>
    </div>
  );
};

export default EmpPage;
