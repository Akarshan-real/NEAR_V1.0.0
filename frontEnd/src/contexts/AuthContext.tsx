import { createContext, useState , type ReactNode} from "react";

type AuthContextType = {
    isLoggedIn : boolean, 
    userName : string | null,
    setIsLoggedIn : (v:boolean) => void ,
    setUserName : (v:string | null) => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: {children : ReactNode}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        return localStorage.getItem('isLoggedIn') === 'true';
    });

    const [userName , setUserName] = useState<string | null>(() => {
        return localStorage.getItem("userName");
    })
    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn , userName , setUserName}}>
            {children}
        </AuthContext.Provider>
    );
};