import React,{useState} from 'react';

const StateTutorial = () => {
  const[counter,setCounter]=useState(0);
  const IncrementHandler = () =>{
    setCounter(counter+1)
  }
  return <div>
    {counter} 
    <button onClick={IncrementHandler}>Increment</button>
  </div>;
};

export default StateTutorial;
