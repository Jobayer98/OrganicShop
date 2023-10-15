import { createContext } from "react";

export const UserContext = createContext({
  user: null,
  setUser: () => {},
  login: (data) => {},
  logout: () => {},
});

import { useState } from "react";
import axios from "../utils/axios";
const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (data) => {
    setUser(data);
  };

  const logout = async () => {
    try {
      await axios.get("/logout", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setUser(null);
    } catch (error) {
      console.log(error);
    }
  };

  const userInfo = {
    user,
    setUser,
    login,
    logout,
  };

  return (
    <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
