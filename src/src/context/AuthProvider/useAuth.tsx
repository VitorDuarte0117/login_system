import { useContext } from "react";
import { AuthContext } from ".";

//When another component need to use the context, just call using the "useAuth"
export const useAuth = () => {
    const context = useContext(AuthContext);

    return context;
};
