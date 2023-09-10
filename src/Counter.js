import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
    const [Val,setVal] = useState(0);

    const IncHandler = () =>{
        setVal(Val+1);
    }

    const DecHandler = () =>{
        if(Val>0){
            setVal(Val-1);
        }
       
    }

  return (
    <div>
        <div className='outer'>
            <div className='counter'>
                <h2>Welcome to Our Counter</h2>
                <h1>{Val}</h1>
                <div className='btn-wrap'>
                    <button className='btn' onClick={IncHandler}> + </button>
                    <button className='btn' onClick={DecHandler}> - </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Counter;