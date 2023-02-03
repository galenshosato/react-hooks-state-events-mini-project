import React from "react";

function CategoryFilter({categories, name, setName}) {
  
  
  function handleClick(event) {
    setName(event.target.textContent)
    
  }
  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map((category, index) => {
        return (
          <button key={index} onClick={handleClick} className={category===name ? "selected" : ''}>{category}</button>
        )
      })}
    </div>
  );
}

export default CategoryFilter;
