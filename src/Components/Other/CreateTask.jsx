import React, { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const CreateTask = () =>{

    const [userData, setUserData] = useContext(AuthContext);
// console.log(userData);
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [assignTo, setAssignTo] = useState('');
    const [category, setCategory] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
   

    const submitHandler = (e)=>{
        e.preventDefault();
    
        const task = {id:Date.now()+Math.random(), title:taskTitle, date:taskDate, category, description:taskDescription, active:false, newTask:true, failed:false, completed:false};
        
        const updatedData = userData.map((ele) =>{
            if(assignTo==ele.firstName){
                return { ...ele, tasks:[...ele.tasks, task] ,taskCounts:{...ele.taskCounts  ,newTask:ele.taskCounts.newTask+1} }
            }
            return ele;
        })
         
        console.log(task);
        setUserData(updatedData);
        localStorage.setItem("employees",JSON.stringify(updatedData));

        setTaskTitle('');
        setTaskDate('');
        setAssignTo('');
        setCategory('');
        setTaskDescription('');
    }

    return(
        <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
            <form onSubmit={(e) =>submitHandler(e)} className="flex flex-wrap w-full items-start justify-between">
            <div className="w-1/2">
                <div>
                <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
                <input value={taskTitle}
                onChange={(e)=> setTaskTitle(e.target.value)}
                className="text-sm py-1 px-2 w-4/5 rounded  bg-transparent  border border-gray-400 mb-4" type="text" placeholder="Ui Design"></input>
                </div>

                <div>
                <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
                <input value={taskDate}
                onChange={(e)=> setTaskDate(e.target.value)}
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border  border-gray-400 mb-4" type="date"/>
                </div>

                <div>
                <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
                <input value={assignTo}
                onChange={(e)=> setAssignTo(e.target.value)}
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border  border-gray-400 mb-4" type="text" placeholder="employee name"/>
                </div>

                <div>
                <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
                <input value={category}
                onChange={(e)=> setCategory(e.target.value)}
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4" type="text" placeholder="design, dev,etc"/>
                </div>
            </div>
               
            <div className="w-2/5 flex-col items-start">
                <h3>Descryption</h3>
                <textarea value={taskDescription}
                onChange={(e)=> setTaskDescription(e.target.value)}
                className="w-full h-44 text-sm py-1 px-2 rounded outline-none bg-transparent border border-gray-400 "name="" id="" cols="30" rows="10"></textarea>
                <button className="bg-green-700 p-2 rounded-full mt-3">Create Task</button>
            </div>   
            </form>
        </div>
    )
}

export default CreateTask;
