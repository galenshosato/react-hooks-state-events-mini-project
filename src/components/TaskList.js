import React, {useState} from "react";
import Task from "./Task";

function TaskList({tasks}) {
  const [taskState, setTaskState] = useState(tasks)


  function handleClick (text) {
    setTaskState(taskState.filter((item) => item.text !== text ))
     
    }
  
  

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
        {taskState.map((task, index) => {
        return (
        <Task key={index} text={task.text} category={task.category} handleClick={handleClick} />
          )})}
    </div>
  );
}

export default TaskList;
