import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [name, setName] = useState('All')
  const [taskState, setTaskState] = useState(TASKS)
  
  let blankForm = {
    text: "",
    category: "Code" 
  }
  const [formData, setFormData] = useState(blankForm)


  function onFormSubmit (event) {
    event.preventDefault()
    const newForm ={...formData}
    setTaskState(prevTaskList => [...prevTaskList, newForm])
    setFormData(blankForm)
  }
  
  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} name={name} setName={setName} />
      <NewTaskForm categories={CATEGORIES} onFormSubmit={onFormSubmit} formData={formData} setFormData={setFormData} />
      <TaskList  name={name} taskState={taskState} setTaskState={setTaskState}/>
    </div>
  );
}

export default App;
