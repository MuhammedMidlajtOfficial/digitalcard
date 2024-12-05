// toastService.js
import { toast } from 'react-toastify';

// Success notification
export const showSuccessToast = (message, options = {}) => {
    toast.success(message, {
        position: "top-right", // Use string directly
        autoClose: 4000,
        ...options,
    });
};

// Error notification
export const showErrorToast = (message, options = {}) => {
    toast.error(message, {
        position: "top-right", // Use string directly
        autoClose: 5000,
        ...options,
    });
};

// Warning notification
export const showWarningToast = (message, options = {}) => {
    toast.warn(message, {
        position: "top-right", // Use string directly
        autoClose: 5000,
        ...options,
    });
};

// Info notification
export const showInfoToast = (message, options = {}) => {
    toast.info(message, {
        position: "top-right", // Use string directly
        autoClose: 3000,
        ...options,
    });
};
