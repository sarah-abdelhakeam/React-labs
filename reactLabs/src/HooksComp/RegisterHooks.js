import React, { useState } from 'react'
import LogInHooks from './LogInHooks';

function RegisterHooks() {
    const [name , setName ] = useState("");
    const [pass , setPass ] = useState("");
    const [email , setEmail] = useState("");
    const [status , setStatus] = useState(false);

    const handelClick =(e)=>
    {
        setName(name);
        setPass(pass);
        setEmail(email);
        setStatus(true);
        alert(`Welcome  ${name}  ,  your email is  ${email}`)
        e.preventDefault()
    }
  return (
    (status ? (<LogInHooks/> ) : (
        <form onSubmit={handelClick}>
            <h2>Sign Up Page</h2>
            <div>
            <label> User Name: </label>
            <input type="text"  required value={name} onChange={e => setName(e.target.value)}/>
            </div>
            <div>
            <label> password: </label>
            <input type="password" required value={pass} onChange={e => setPass(e.target.value)}/>
            </div>
            <div>
            <label> Email: </label>
            <input type="email" required value={email} onChange={e => setEmail(e.target.value)}/>
            </div>
            <button type='submit'> Sign Up  </button>

        </form>
    )))
}

export default RegisterHooks