import { createContext, useState } from "react";
import { type RNChild } from "../../types/Types";

type AuthContextType = {
    isLoggedIn: boolean,
    userName: string | null,
    setIsLoggedIn: (v: boolean) => void,
    setUserName: (v: string | null) => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: RNChild) => {
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        return localStorage.getItem('isLoggedIn') === 'true';
    });

    const [userName, setUserName] = useState<string | null>(() => {
        return localStorage.getItem("userName");
    })
    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, userName, setUserName }}>
            {children}
        </AuthContext.Provider>
    );
};

