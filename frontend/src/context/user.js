import React, { useState, useEffect, createContext, useContext } from "react";
import { auth } from "../service/firebase";

export const UserContext = createContext({ user: null });
export const useGoogleAuth = () => useContext(UserContext);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const { displayName, email } = user;
        setUser({
          displayName,
          email,
        });
      }
    });
  }, []);
  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
