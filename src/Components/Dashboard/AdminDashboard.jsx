import React from "react";
import Header from "../Other/Header";
import CreateTask from "../Other/CreateTask";
import AllTask from "../Other/AllTask";

const AdminDashboard = (props) => {
console.log(props);
    return(
        <div className="h-screen w-full p-7">
        <Header changeUser = {props.changeUser} username = "admin"></Header>
        <CreateTask></CreateTask>
        <AllTask></AllTask>
        </div>
    )
}

export default AdminDashboard;