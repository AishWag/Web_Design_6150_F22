import React,{useState, useEffect} from 'react';

const Clock =() =>{
    const[date, setDate]= useState(new Date());
    const [count, setCount] =useState(0);
    return(
        <div>
            <h1>Hello World!!</h1>
            <h2>{date.toLocaleTimeString()}</h2>
            <h3>{count}</h3>
            <button> onClick={()=> setCount(count +1)}Increment</button>
        </div>
    )
}

export default Clock;