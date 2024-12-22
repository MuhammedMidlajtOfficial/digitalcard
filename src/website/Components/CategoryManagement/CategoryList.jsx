import React, { useEffect, useState } from "react";
import { fetchCategories, deleteCategory, toggleCategoryStatus } from "../../services/CategoryServices";
import { FaToggleOn, FaToggleOff } from "react-icons/fa";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadCategories = async () => {
      setLoading(true);
      try {
        const response = await fetchCategories();
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
        alert("Failed to fetch categories. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    loadCategories();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this category?")) return;

    try {
      const response = await deleteCategory(id);
      if (response.status === 200) {
        setCategories((prev) => prev.filter((category) => category.id !== id));
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error deleting category:", error);
      alert(`Failed to delete category: ${error.response?.data?.message || "Unknown error"}`);
    }
  };

  const handleToggleStatus = async (id, isActive) => {
    try {
      // Optimistically update the UI
      setCategories((prev) =>
        prev.map((category) =>
          category.id === id ? { ...category, isActive: !isActive } : category
        )
      );

      // Persist the change to the backend
      const response = await toggleCategoryStatus(id);
      if (response.status === 200) {
        const updatedCategory = response.data.category;
        setCategories((prev) =>
          prev.map((category) =>
            category.id === id ? { ...category, isActive: updatedCategory.isActive } : category
          )
        );
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error toggling category status:", error);
      alert(`Failed to update category status: ${error.response?.data?.message || "Unknown error"}`);
      // Revert the UI state if there was an error
      setCategories((prev) =>
        prev.map((category) =>
          category.id === id ? { ...category, isActive } : category
        )
      );
    }
  };

  return (
    <div>
      {loading ? (
        <p>Loading categories...</p>
      ) : categories.length > 0 ? (
        categories.map((category) => (
          <div key={category.id} className="p-4 border-b flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold">{category.categoryName}</h3>
              <p className="text-sm text-gray-600">{category.isActive ? "Active" : "Inactive"}</p>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => handleToggleStatus(category._id, category.isActive)}
                className="text-2xl"
              >
                {category.isActive ? (
                  <FaToggleOn className="text-green-500" />
                ) : (
                  <FaToggleOff className="text-gray-400" />
                )}
              </button>
              <button
                onClick={() => handleDelete(category._id)}
                className="px-2 py-1 text-white bg-red-500 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No categories available.</p>
      )}
    </div>
  );
};

export default CategoryList;
