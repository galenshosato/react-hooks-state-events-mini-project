import React from "react";

function CategoryFilter({categories}) {

  
  function handleClick(event) {
    
  }
  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map((category, index) => {
        return (
          <button key={index} onClick={handleClick}>{category}</button>
        )
      })}
    </div>
  );
}

export default CategoryFilter;
