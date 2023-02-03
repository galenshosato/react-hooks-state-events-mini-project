import React from "react";
import Task from "./Task";

function TaskList({name, taskState, setTaskState}) {


  const newArray = taskState.filter(task => {
     if(name === 'All') {
      return true
     }
     return task.category === name
  })


  function handleClick (text) {
    let newTaskArray = newArray.filter((item) => item.text !== text )
    setTaskState(newTaskArray)
     
    }
  
  

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
        {newArray.map((task, index) => {
        return (
        <Task key={index} text={task.text} category={task.category} handleClick={handleClick} />
          )})}
    </div>
  );
}

export default TaskList;
