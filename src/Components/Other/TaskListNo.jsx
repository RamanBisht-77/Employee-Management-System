import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const TaskListNo = ({ employeeData }) => {

  const [userData] = useContext(AuthContext);

  const currentEmployee = userData.find((emp) => emp.id === employeeData.id);
  console.log(employeeData);
  console.log(currentEmployee);

  return (
    <div className="flex gap-4 bg-[#1c1c1c] p-5 mt-5 max-[700px]:flex-wrap justify-center">

      <div className="w-[50%] rounded-xl py-6 px-9 bg-red-500">
        <h2 className="text-3xl font-semibold">
          {currentEmployee?.taskCounts.newTask}
        </h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>

      <div className="w-[50%] rounded-xl py-6 px-9 bg-blue-500">
        <h2 className="text-3xl font-semibold">
          {currentEmployee?.taskCounts.completed}
        </h2>
        <h3 className="text-xl font-medium">Completed Task</h3>
      </div>

      <div className="w-[50%] rounded-xl py-6 px-9 bg-green-500">
        <h2 className="text-3xl font-semibold">
          {currentEmployee?.taskCounts.active}
        </h2>
        <h3 className="text-xl font-medium">Active Task</h3>
      </div>

      <div className="w-[50%] rounded-xl py-6 px-9 bg-pink-500">
        <h2 className="text-3xl font-semibold">
          {currentEmployee?.taskCounts.failed}
        </h2>
        <h3 className="text-xl font-medium">Failed Task</h3>
      </div>

    </div>
  );
};

export default TaskListNo;