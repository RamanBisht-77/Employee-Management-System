import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const AllTask = () =>{
    const [userData, setUserData]= useContext(AuthContext);

    return (
        <div className='bg-[#1c1c1c] rounded p-5 mt-5 '>
             <div className='bg-gray-900 mb-2 py-2 px-4 rounded flex w-full justify-between'>
                <h2 className="text-lg font-medium w-1/5 bg-gray-900 ">Employee Name</h2>
                <h3 className="text-lg font-medium w-1/5 bg-gray-900 ">New Task</h3>
                <h5 className="text-lg font-medium w-1/5 bg-gray-900">Active Task</h5>
                <h5 className="text-lg font-medium w-1/5 bg-gray-900">Completed</h5>
                <h5 className="text-lg font-medium w-1/5 bg-gray-900">Failed</h5>
            </div>

            <div className="h-[80%] overflow-auto">
                {userData.map((ele) =>{
                return <div key={ele.id} className='bg-gray-900 mb-2 py-2 px-4 rounded flex justify-between'>
                <h2  className="text-lg font-medium w-1/5 text-center bg-amber-700">{ele.firstName}</h2>
                <h3  className="text-lg font-medium w-1/5 text-center bg-blue-500">{ele.taskCounts.newTask}</h3>
                <h5  className="text-lg font-medium w-1/5 text-center bg-yellow-500">{ele.taskCounts.active}</h5>
                <h5  className="text-lg font-medium w-1/5 text-center bg-green-700">{ele.taskCounts.completed}</h5>
                <h5  className="text-lg font-medium w-1/5 text-center bg-red-700">{ele.taskCounts.failed}</h5>
            </div>
            })}
            </div>
         </div>
    )
}

export default AllTask; 
