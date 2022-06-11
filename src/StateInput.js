import React, { useState } from 'react';

const StateInput = () => {
  const[inputValue,setInputValue]=useState("Show");

  const onChangeHandler = (event) =>{
    const newValue=event.target.value;
    setInputValue(newValue);
  }

  return (
    <div>
      <input placeholder="Enter input"
      onChange={onChangeHandler}/>
      {inputValue}
    </div>
  );
};
export default StateInput;
