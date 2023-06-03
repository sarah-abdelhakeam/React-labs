import React from 'react'
import Comp4 from './Comp4'

function Comp3({ user }) {
  return (
    <>
    {/* <h1>Component 3</h1> */}
    <h2>{`Hello ${user} again! from comp 3`}</h2>
    <Comp4 user={user} />
  </>
  )
}

export default Comp3