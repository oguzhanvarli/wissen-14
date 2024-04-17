import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function Error404() {
  return (
    <div className='flex justify-center pt-40'>
      <div>
        <p className='text-4xl text-red-600 text-center'>This Page is not Found</p>
        <div className='flex justify-center mt-8'>
          <Link to={'/'} className='bg-red-500 text-white hover:bg-red-800 p-2 rounded-md'>Go Back Home</Link>
          {/* <Button color='success' disabled={false} size='large' variant='contained'>Test Amaçlı Buton</Button> */}
        </div>
      </div>

    </div>
  )
}

export default Error404