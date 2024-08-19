import React, { createContext, useContext, useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/config/firebase";

const UserContext = createContext();

export const useUser = () => useContext(UserContext); 

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [profilePic, setProfilePic] = useState("");

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                setProfilePic(currentUser.photoURL || "");
            } else {
                setUser(null);
                setProfilePic("");
            }
        });

        return () => unsubscribe();
    }, []);

    return (
        <UserContext.Provider value={{ user, profilePic, setProfilePic }}>
            {children}
        </UserContext.Provider>
    );
};
