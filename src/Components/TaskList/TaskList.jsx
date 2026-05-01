import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompletedTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ employeeData }) => {

  const [userData, setUserData] = useContext(AuthContext);

  //  Always get fresh employee from context (NOT props)
  const currentEmployee = userData.find((emp) => emp.id === employeeData.id );

  //  Task count calculator
  const calculateTaskCounts = (tasks) => {
    return {
      newTask: tasks.filter(t => t.newTask).length,
      active: tasks.filter(t => t.active).length,
      completed: tasks.filter(t => t.completed).length,
      failed: tasks.filter(t => t.failed).length,
    };
  };

  //  Proper state update (NO mutation)
  const updateTaskStatus = (taskId, status) => {

    const updatedData = userData.map(emp => {

      if (emp.id === employeeData.id) {

        const updatedTasks = emp.tasks.map(task => {
          if (task.id === taskId) {
            return {
              ...task,
              active: status === "active",
              completed: status === "completed",
              failed: status === "failed",
              newTask: false
            };
          }
          return task;
        });

        return {
          ...emp,
          tasks: updatedTasks,
          taskCounts: calculateTaskCounts(updatedTasks)
        };
      }

      return emp;
    });

    setUserData(updatedData); // triggers re-render instantly
  };

  return (
    <div className="flex items-center overflow-x-auto gap-5 h-[55%] w-full mt-10 py-5">

      {/*Always render from fresh state */}
      {currentEmployee?.tasks.map((task) => {

        if (task.active) {
          return (
            <AcceptTask key={task.id} task={task} updateTaskStatus={updateTaskStatus}/>
          );
        }

        else if (task.newTask) {
          return (
            <NewTask key={task.id} task={task} updateTaskStatus={updateTaskStatus}/>
          );
        }

        else if (task.completed) {
          return <CompletedTask key={task.id} task={task} />;
        }

        else if (task.failed) {
          return <FailedTask key={task.id} task={task} />;
        }

        return null;
      })}

    </div>
  );
};

export default TaskList;

