import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the context
const UserContext = createContext();

// Hook for child components to get the user object and re-render when it changes
export const useUser = () => useContext(UserContext);

// Provider component that wraps your app and makes user object available to any child component that calls useUser().
export function UserProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Placeholder for when you might check the local storage or an API for user credentials
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    // Login function to update user state
    const login = (userData) => {
        localStorage.setItem('user', JSON.stringify(userData));
        setUser(userData);
    };

    // Logout function to clear user state
    const logout = () => {
        localStorage.removeItem('user');
        setUser(null);
    };

    // The value that will be given to the context
    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
}
