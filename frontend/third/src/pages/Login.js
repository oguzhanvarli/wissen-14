import { Button, InputAdornment, TextField } from '@mui/material'
import axios from 'axios'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import * as Yup from 'yup'
import image1 from '../assets/images/login-image.jpeg'
import { Link, useNavigate } from 'react-router-dom'
import { Visibility, VisibilityOff } from '@mui/icons-material'

const loginSchema = Yup.object().shape({
  username: Yup.string().required('Username is required!').min(3, 'Username must minimum be 3 character'),
  password: Yup.string().required('Password is required!').min(4, 'Password must be minimum 4 charcter')
    .max(15, 'Password must be max 15 character')
})

export function Login() {
  // console.log(username, password)

  const [showPassword, setShowPassword] = useState(false)

  const navigate = useNavigate()

  const handleLogin = async (values) => {
    console.log(values)
    axios.post("http://localhost:9000/user/login", values)
      .then((res) => {
        if (res.data.success) {
          toast.success(res.data.message)
          navigate("/")
        }
      }).catch((err) => {
        console.log(err.response.data.message)
        toast.error(err.response.data.message)
      })
  }

  return (
    <div style={{ backgroundImage: `url(${image1})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} className='flex justify-center min-h-screen items-center'>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(values) => handleLogin(values)}
        validationSchema={loginSchema}
      >
        {({ values, handleChange, handleBlur, handleSubmit, touched, errors }) => (
          <div className='w-1/2 md:w-1/3 lg:w-1/4 bg-gray-200 bg-opacity-70'>
            <div className='flex justify-center'>
              <TextField variant='standard' label="Username" className='w-5/6 '
                id='username'
                value={values.username}
                onChange={handleChange("username")}
                onBlur={handleBlur("username")}
                error={touched.username && Boolean(errors.username)}
                helperText={touched.username && errors.username}
              />
            </div>
            <div className='my-6 flex justify-center'>
              <TextField variant='standard' label="Password" className='w-5/6' type={showPassword ? "text" : "password"}
                id="password"
                value={values.password}
                onChange={handleChange("password")}
                onBlur={handleBlur("password")}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
                InputProps={{
                  endAdornment: (
                      <InputAdornment className='pointer' position='end' onClick={() => setShowPassword(!showPassword)} >
                        {!showPassword ? <Visibility/> : <VisibilityOff/>}
                      </InputAdornment>
                  )
                }}
              />
            </div>
            <div className='flex justify-evenly mb-4'>
              <Button variant='outlined' color='success' onClick={handleSubmit} >Login</Button>
              <Button variant='outlined'>
                <Link to={'/register'}>Register</Link>
              </Button>
            </div>
          </div>
        )}
      </Formik>
    </div>
  )
}
