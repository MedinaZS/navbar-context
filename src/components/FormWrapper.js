import React, { useContext } from 'react'
import NavContext from '../context/NavContext'

const FormWrapper = () => {

  //Get Name from context
  const { name, setName } = useContext(NavContext);

  return (
    <div className='m-4'>
      <label className='form-label'>Your Name:</label>
      <input className='border rounded bg-light py-1 px-3 ms-2 text-muted' type="text" value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  )
}

export default FormWrapper