import React, { useState } from 'react'

function HooksProducts() {
    const [count , setCount ] = useState(0);

    const plusBtn=()=>{
setCount(count+1);
    }
    const minBtn=()=>{
        if(count >=1 ){
            setCount(count-1);
        }else{
            alert("the minimum count is one ! ")
        }
        
    }
  return (
    <div>
<button onClick={plusBtn}> + </button>
<label> {count} </label>
<button onClick={minBtn}> - </button>

    </div>
  
  )
}

export default HooksProducts