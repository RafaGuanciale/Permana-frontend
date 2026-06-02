import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLogged, setIsLogged] = useState(false);
  const [isApiAvailable, setIsApiAvailable] = useState(false);
  const [user, setUser] = useState({ username: "", password: "" });

  const login = (authData) => {
    setIsLogged(true);
    setUser(authData.user);
  };
  const logout = () => {
    setIsLogged(false);
    setUser("");
  };

  return (
    <AuthContext.Provider
      value={{ isLogged, isApiAvailable, user, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
