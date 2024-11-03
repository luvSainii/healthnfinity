"use client";
import React, { createContext, useState, useContext, useEffect } from 'react';
import {jwtDecode} from 'jwt-decode'; // Import jwt-decode

// Create the User Context
const UserContext = createContext();

// Custom hook to use User Context
export const useUser = () => {
  return useContext(UserContext);
};

// Create the User Provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Initialize user state

  useEffect(() => {
    const loadUserFromToken = () => {
      const token = localStorage.getItem("token"); // Retrieve token from localStorage
      if (token) {
        try {
          const decodedUser = jwtDecode(token); // Decode token to get user data
          setUser(decodedUser); // Set decoded user in state
        } catch (error) {
          console.error("Failed to decode token", error);
        }
      }
    };

    loadUserFromToken();
  }, []); // Run this effect only once on mount

  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  );
};
