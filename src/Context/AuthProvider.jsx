import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../Utils/LocalStorage";

export const AuthContext = createContext();

const AuthProvider = ({children})=>{

    const [userData, setUserData] = useState([]);
    
    useEffect(() => {
    const data = JSON.parse(localStorage.getItem("employees")) || [];

    const updatedData = data.map(emp => {
        return {
            ...emp,
            tasks: emp.tasks.map(task => {
                if (!task.id) {
                    return {
                        ...task,
                        id: Date.now() + Math.random()
                    };
                }
                return task;
            })
        };
    });

    setUserData(updatedData);
    localStorage.setItem("employees", JSON.stringify(updatedData));

}, []);

//auto sync
useEffect(() =>{
    localStorage.setItem("employees",JSON.stringify(userData));
},[userData])
   
    return (
        <AuthContext.Provider value={[userData, setUserData]}>
        <div>{children}</div>
        </AuthContext.Provider>
    )
}

export default AuthProvider; 