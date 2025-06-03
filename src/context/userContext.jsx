import React, { createContext, useState } from "react";

// Create a context for user data and actions
export const UserContext = createContext();

// UserProvider component to wrap the app and provide user state
const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Update user state with new user data
    const updateUser = (userData) => {
        setUser(userData);
    };

    // Clear user state (e.g., on logout)
    const clearUser =()=>{
        setUser(null);
    };

    return(
        <UserContext.Provider
        value={{
            user,
            updateUser,
            clearUser,
        }}
        >
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;