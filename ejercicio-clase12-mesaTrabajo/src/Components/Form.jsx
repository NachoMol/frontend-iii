import React from 'react'

const Form = ({handleClick}) => {
  return (
    <div>Form

    <input type="text" data-testid="input" placeholder='No coloque valores numericos' />
    <button onClick={handleClick}>Iniciar test</button>
    </div>
  )
}

export default Form