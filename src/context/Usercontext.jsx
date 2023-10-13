import { createContext } from "react";

export const UserContext = createContext({
  user: {},
  storeUserInfo: (data) => {},
});

import { useState } from "react";
const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const storeUserInfo = (data) => {
    setUser(data);
  };

  return (
    <UserContext.Provider value={{ user, storeUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
