import { createContext } from "react";

export const UserContext = createContext({
  user: null,
  setUser: () => {},
  login: (data) => {},
  logout: () => {},
});

import { useState } from "react";
const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (data) => {
    setUser(data);
  };

  const logout = () => {
    setUser(null);
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
