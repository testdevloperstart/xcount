import React, { useState } from 'react'
import { count } from 'rxjs-compat/operator/count'



function Count() {

    const [count,setCount]=useState(0);

    const handleincrease=()=>{
        setCount(count+1);
    }

    const handledecrease=()=>{
        setCount(count-1);
    }

  return (
    <div>
      <h1>Counter App</h1>
      <h2>Count:{count}</h2>
      <button onClick={handleincrease}>Increment</button>
      <button onClick={handledecrease}>Decrement</button>
    </div>
  )
}

export default Count
