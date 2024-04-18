import { Button, TextField } from '@mui/material'
import axios from 'axios'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

function Login() {
  // console.log(username, password)

  const handleLogin = async (values) => {
    console.log(values)
    axios.post("http://localhost:9000/user/login", values)
      .then((res) => {
        if (res.data.success) {
          toast.success(res.data.message)
        }
      }).catch((err) => {
        console.log(err.response.data.message)
        toast.error(err.response.data.message)
      })
  }

  return (
    <div className='flex justify-center min-h-screen items-center'>
      <Formik
        initialValues={{ username: "", password: "", fullname: "" }}
        onSubmit={(values) => handleLogin(values)}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <div className='w-1/2 md:w-1/3 lg:w-1/4'>
            <div>
              <TextField variant='standard' label="Username" className='w-full'
                id='username'
                value={values.username}
                onChange={handleChange("username")}
              />
            </div>
            <div className='my-6'>
              <TextField variant='standard' label="Password" className='w-full' type='password'
                id="password"
                value={values.password}
                onChange={handleChange("password")}
              />
            </div>
            <div className='flex justify-center'>
              <Button variant='contained' className='' onClick={handleSubmit} >Login</Button>
            </div>
          </div>
        )}
      </Formik>
    </div>
  )
}

export default Login