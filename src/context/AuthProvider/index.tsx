import React, { createContext, useState } from "react";
import { IContext, IAuthProvider, IUser } from "./types";

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
    const [user, setUser] = useState<IUser | null>();

    async function authenticate(email: string, password: string) {}

    function logout() {}

    return (
        <AuthContext.Provider value={{ ...user, authenticate, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
