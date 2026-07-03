import { createContext, useState } from "react";
import { setToken, removeToken } from "../utils/token";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLogged, setIsLogged] = useState(false);

  const login = (authData) => {
    setIsLogged(true);
    setToken(authData.token);
  };
  const logout = () => {
    setIsLogged(false);
    removeToken();
  };

  return (
    <AuthContext.Provider value={{ isLogged, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
