import React, { useContext } from 'react'
import NavContext from '../context/NavContext'

const Navbar = () => {

  //Get Name from context
  const { name } = useContext(NavContext);

  return (
    <div className='navbar justify-content-end bg-purple text-white p-3'>
      <span className='me-3'>Hi {name}!</span>
    </div>
  )
}

export default Navbar