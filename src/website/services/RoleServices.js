// services/roleService.js
import api from "./api";

export const fetchRoles = () => api.get("/roles");
export const createRole = (data) => api.post("/roles", data);
export const updateRole = (id, data) => api.put(`/roles/${id}`, data);
export const deleteRole = (id) => api.delete(`/roles/${id}`);
export const toggleRoleStatus = (id) => api.patch(`/roles/${id}/toggle-active`);
