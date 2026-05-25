// import React, { useState } from "react";

// const Login = ({handleLogin}) =>{

//     const [email , setEmail] = useState("");
//     const [password , setPassword] = useState("");

//     const submitHandler = (e) =>{
//        e.preventDefault();
//        handleLogin(email, password);
//        setEmail("");
//        setPassword("");
//     }

//     return(
//         <div className="flex h-screen w-screen items-center justify-center">
//             <div className="border-2 rounded-xl border-green-950 p-20">
//                 <form onSubmit={submitHandler} className="flex flex-col items-center justify-center">

//                     <input value={email} onChange={(e)=> setEmail(e.target.value)}
//                     required className="border-2 border-white-600 rounded-full py-4 px-5 text-xl" type="email" placeholder="enter your email..."></input>
                    
//                     <input value={password}  onChange={(e)=> setPassword(e.target.value)}
//                     required className="border-2 border-white-600 rounded-full py-4 px-5 text-xl mt-5" type="password"  placeholder="enter your password..."></input>

//                     <button className="rounded-full py-3 px-25 text-xl bg-green-500 mt-5">Log in</button>

//                 </form>
//             </div>
//         </div>
//     )
// }

// export default Login;

import React, { useState } from "react";

const Login = ({ handleLogin }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-[#111] px-4">
      <div className="w-full max-w-md border-2 border-green-900 rounded-2xl p-6 sm:p-10 md:p-14">

        <form
          onSubmit={submitHandler}
          className="flex flex-col items-center justify-center"
        >

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border border-gray-500 rounded-full py-3 px-5 text-base sm:text-lg bg-transparent outline-none"
            type="email"
            placeholder="Enter your email"
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full border border-gray-500 rounded-full py-3 px-5 text-base sm:text-lg bg-transparent outline-none mt-5"
            type="password"
            placeholder="Enter your password"
          />

          <button className="w-full rounded-full py-3 text-base sm:text-lg bg-green-600 mt-6 hover:bg-green-700 transition-all">
            Log In
          </button>

        </form>
      </div>
    </div>
  );
};

export default Login;