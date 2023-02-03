import React from "react";

function NewTaskForm({categories, onFormSubmit, formData, setFormData}) {
  

  const optionArray = categories.filter(category =>{
    return category !== 'All'
  })


  function handleChange(event) {
    const {name, value} = event.target
    setFormData(prevForm => {
      return {...prevForm, [name]: value}
    })
  }

  return (
    <form className="new-task-form" onSubmit={onFormSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleChange} value={formData.text} />
      </label>
      <label>
        Category
        <select name="category" onChange={handleChange} value={formData.category}>
          {optionArray.map((option, index) => {
             return <option key={index}>{option}</option>
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
