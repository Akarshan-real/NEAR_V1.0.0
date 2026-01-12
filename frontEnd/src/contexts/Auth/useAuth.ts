import { useContext } from "react";
import { AuthContext } from "./AuthContext";
export const useAuth = () => {
  const ctx = useContext(AuthContext);

  if (!ctx) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  const { isLoggedIn, setIsLoggedIn , userName , setUserName } = ctx;

  const login = (name:string) => {
    setIsLoggedIn(true);
    setUserName(name);
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userName",name);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserName(null);
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem('userName');
  };

  return {
    isLoggedIn,
    userName,
    login,
    logout,
  };
};
