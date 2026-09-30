import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = (selectedRole) => {
    setLoading(true);

    setTimeout(() => {
      setRole(selectedRole);
      setLoading(false);
    }, 800);
  };

  const logout = () => {
    setRole(null);
  };

  return (
    <AuthContext.Provider
      value={{ role, login, logout, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};