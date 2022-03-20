import React, { useState } from 'react';
import Display from '../Display/Display';

const Watch = () => {
   const[steps,setSteps]=useState(0);
    const IncreaseSteps =()=>{
      setSteps(steps+1)
    }  
   
   return (
        <div>
            <h1>This is my smart Watch</h1>
           <h1>My current Steps:{steps}</h1>
           <button onClick={IncreaseSteps}>De Doo</button>
        <Display name='emon'steps={steps} ></Display>
        </div>
    );
};

export default Watch;