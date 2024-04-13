import { createContext, useState } from "react";

export const loginInfo = createContext({});

const LoginContext = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <loginInfo.Provider value={{ status: [isLogged, setIsLogged] }}>
      {children}
    </loginInfo.Provider>
  );
};

export default LoginContext;
