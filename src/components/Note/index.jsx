import React from 'react'
import './styles.css'

const Note = ({ children }) => {
  return (
    <div className='note-container'>
      {children}
    </div>
  )
}

export default Note
