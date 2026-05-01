import React, { useState } from "react";

const Login = ({handleLogin}) =>{

    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");

    const submitHandler = (e) =>{
       e.preventDefault();
       handleLogin(email, password);
       setEmail("");
       setPassword("");
    }

    return(
        <div className="flex h-screen w-screen items-center justify-center">
            <div className="border-2 rounded-xl border-green-950 p-20">
                <form onSubmit={submitHandler} className="flex flex-col items-center justify-center">

                    <input value={email} onChange={(e)=> setEmail(e.target.value)}
                    required className="border-2 border-white-600 rounded-full py-4 px-5 text-xl" type="email" placeholder="enter your email..."></input>
                    
                    <input value={password}  onChange={(e)=> setPassword(e.target.value)}
                    required className="border-2 border-white-600 rounded-full py-4 px-5 text-xl mt-5" type="password"  placeholder="enter your password..."></input>

                    <button className="rounded-full py-3 px-25 text-xl bg-green-500 mt-5">Log in</button>

                </form>
            </div>
        </div>
    )
}

export default Login;