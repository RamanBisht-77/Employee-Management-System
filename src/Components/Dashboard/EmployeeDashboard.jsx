import React from "react";
import Header from "../Other/Header";
import TaskListNo from "../Other/TaskListNo";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = (props) =>{
// console.log(props);
// console.log(props.employeeData.firstName);
    return (
        <div className="p-10  h-screen">
        <Header  changeUser = {props.changeUser} username ={props.employeeData.firstName}/>
        <TaskListNo  employeeData={props.employeeData}/>
        <TaskList employeeData={props.employeeData}/>
        </div>
    )
}

export default EmployeeDashboard;