import React from 'react'

const States = ({states}) => {
  return (
    <div>
    {
      states.map((state)=>(
        
        <div className='bg-warning'>
        <h1 >{state.name}</h1>
        <h2>Language: {state.lan}</h2>
      </div>
      ))
    }
    </div>
  )
}

export default States