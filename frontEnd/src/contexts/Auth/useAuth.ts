import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { type FormField } from "../../types/Types";
import axios from "axios";
export const useAuth = () => {
  const ctx = useContext(AuthContext);

  if (!ctx) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  const { isLoggedIn, setIsLoggedIn, userName, setUserName } = ctx;

  const login = async (name: string) => {
    // const res = await axios.post("url", data);
    // const {token , user} = res.data ;
    // localStorage.setItem('token',token);
    // setUserName(data.userName);

    setIsLoggedIn(true);
    setUserName(name);
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userName", name);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserName(null);
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem('userName');
  };

  return { isLoggedIn, userName, login, logout };
};
