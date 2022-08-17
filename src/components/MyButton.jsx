import React from 'react'

const MyButton = () => {
  return (
    <button data-text="Awesome" className="button">
        <span className="actual-text">&nbsp;Estanislao  &nbsp;</span>
        <span className="hover-text" aria-hidden="true">&nbsp;Estanislao  &nbsp;</span>
    </button>
  )
}

export default MyButton