import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

function Login() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  // console.log(username, password)

  const handleLogin = async () => {
      // let response = {username, password}
      // console.log(response)
      let postObj = {
        username: username,
        password: password
      }
      axios.post("http://localhost:9000/user/login", postObj)
      .then((res) => {
       if(res.data.success){
        console.log('Welcome')
       }else{
        console.log(res.data.message)
       }
      }).catch(err => console.log(err))
  }

  return (
    <div className='flex justify-center min-h-screen items-center'>
      <div className='w-1/2 md:w-1/3 lg:w-1/4'>
        <div>
          <TextField variant='standard' label="Username" className='w-full'
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className='my-6'>
          <TextField variant='standard' label="Password" className='w-full' type='password'
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='flex justify-center'>
          <Button variant='contained' className='' onClick={handleLogin} >Login</Button>
        </div>
      </div>
    </div>
  )
}

export default Login