import React, { useState } from "react";
import { setLocalStorage } from "../../Utils/LocalStorage";

const Header = ({changeUser, username}) =>{

    const logOutUser = () =>{
       localStorage.setItem('loggedInUser','')
       changeUser('');
    }
    
    return (
        <div className="flex items-end justify-between">

            <h1 className="text-2xl">Hello <br/><span className="text-3xl font-semibold"> {username} 👋 </span></h1>
            
            <button onClick={logOutUser} className="bg-red-900 p-2 rounded-full">Log Out</button>
            
        </div>
    )
}

export default Header;
