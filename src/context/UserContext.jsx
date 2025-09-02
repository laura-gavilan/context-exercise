import { createContext, useState } from "react";

export const UserContext = createContext(null);

const INITIAL_USER = { nombre: "", email: "", rol: "" };

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(INITIAL_USER);

    const logout = () => setUser(INITIAL_USER);
    
    return <UserContext.Provider value={{ user, setUser }}>
        {children}
    </UserContext.Provider>
};