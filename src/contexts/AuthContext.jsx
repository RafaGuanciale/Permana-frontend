import { createContext, useEffect, useState } from "react";
import { setToken, removeToken } from "../utils/token";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState(null);

  const login = (authData) => {
    setIsLogged(true);
    setToken(authData.token);
  };
  const logout = () => {
    setIsLogged(false);
    removeToken();
    setUser(null)
  };
  const updateUser = (data) => {
    setUser(data);
  }

  return (
    <AuthContext.Provider value={{ isLogged, user, updateUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
