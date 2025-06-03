// Base URL for all API requests
export const BASE_URL = "https://balancr-backend.onrender.com";

// API endpoint paths grouped by feature
export const API_PATHS = {
    AUTH: {
        LOGIN: "/api/v1/auth/login", // Login endpoint
        REGISTER: "/api/v1/auth/register", // Register endpoint
        GET_USER_INFO: "/api/v1/auth/getUser", // Get user info endpoint
    },
    DASHBOARD: {
        GET_DATA: "/api/v1/dashboard", // Dashboard data endpoint
    },
    INCOME: {
        ADD_INCOME: "/api/v1/income/add", // Add income endpoint
        GET_ALL_INCOME: "/api/v1/income/get", // Get all income endpoint
        DELETE_INCOME: (incomeId) => `/api/v1/income/${incomeId}`, // Delete income by ID
        DOWNLOAD_INCOME: `/api/v1/income/downloadexcel`, // Download income as Excel
    },
    EXPENSE: {
        ADD_EXPENSE: "/api/v1/expense/add", // Add expense endpoint
        GET_ALL_EXPENSE: "/api/v1/expense/get", // Get all expenses endpoint
        DELETE_EXPENSE: (expenseId) => `/api/v1/expense/${expenseId}`, // Delete expense by ID
        DOWNLOAD_EXPENSE: `/api/v1/expense/downloadexcel`, // Download expenses as Excel
    },
    IMAGE: {
        UPLOAD_IMAGE: "/api/v1/auth/upload-image", // Upload user image endpoint
    },
};