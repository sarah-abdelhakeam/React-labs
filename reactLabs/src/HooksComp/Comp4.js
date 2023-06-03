import React from 'react'
import Comp5 from './Comp5'

function Comp4({ user }) {
  return (
    <>
    <h1>Component 4</h1>
    <Comp5 user={user} />
  </>
  )
}

export default Comp4