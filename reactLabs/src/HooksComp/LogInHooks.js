import React, { useState } from 'react'

function LogInHooks() {

    const [name , setName ] = useState("");
    const [pass , setPass ] = useState("");
    // const [email , setEmail] = useState("");

    const handelClick =(e)=>
    {
        setName(name);
        setPass(pass);
        alert(`Welcome again  ${name}`)
        e.preventDefault()
    }
  return (
    <form onSubmit={handelClick}>
        <h2>logged In Page</h2>
        <div>
          <label> User Name: </label>
          <input type="text"  required value={name} onChange={e => setName(e.target.value)}/>
        </div>
        <div>
          <label> password: </label>
          <input type="password" required value={pass} onChange={e => setPass(e.target.value)}/>
        </div>
        <button type='submit'> Log In </button>

      </form>
    
  )
}

export default LogInHooks