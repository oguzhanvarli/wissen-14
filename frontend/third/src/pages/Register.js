import { Button, InputAdornment, TextField } from '@mui/material'
import axios from 'axios'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import * as Yup from 'yup'
import image1 from '../assets/images/login-image.jpeg'
import { Link, useNavigate } from 'react-router-dom'
import { Visibility, VisibilityOff } from '@mui/icons-material'

const registerSchema = Yup.object().shape({
  username: Yup.string().required('Username is required!').min(3, 'Username must minimum be 3 character'),
  password: Yup.string().required('Password is required!').min(4, 'Password must be minimum 4 charcter')
    .max(15, 'Password must be max 15 character'),
  email: Yup.string().required('Email is required!').email('Invalid Email'),
  passwordConfirm: Yup.string().required('Password confirm is required!').oneOf([Yup.ref('password')], "Passwords not match")
})

function Register() {
  // console.log(username, password)

  const [showPassword, setShowPassword] = useState(false)
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false)

  const navigate = useNavigate()

  const handleRegister = async (values) => {
    axios.post("http://localhost:9000/user/register", values)
      .then((res) => {
        if (res.data.success) {
          toast.success(res.data.message)
          navigate("/login")
        }
      }).catch((err) => {
        console.log(err.response.data.message)
        toast.error(err.response.data.message)
      })
  }

  return (
    <div style={{ backgroundImage: `url(${image1})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
      className='flex justify-center min-h-screen items-center'>
      <Formik
        initialValues={{ username: "", password: "", email: "", passwordConfirm: "" }}
        onSubmit={(values) => handleRegister(values)}
        validationSchema={registerSchema}
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
            <div className='flex justify-center my-6'>
              <TextField variant='standard' label="Email" className='w-5/6 '
                id='email'
                value={values.email}
                onChange={handleChange("email")}
                onBlur={handleBlur("email")}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
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
                    <InputAdornment className='pointer' onClick={() => setShowPassword(!showPassword)} >
                      {!showPassword ? <Visibility /> : <VisibilityOff />}
                    </InputAdornment>
                  )
                }}
              />
            </div>
            <div className='my-6 flex justify-center'>
              <TextField variant='standard' label="Password Confirm" className='w-5/6' type={showPasswordConfirm ? "text" : "password"}
                id="passwordConfirm"
                value={values.passwordConfirm}
                onChange={handleChange("passwordConfirm")}
                onBlur={handleBlur("passwordConfirm")}
                error={touched.passwordConfirm && Boolean(errors.passwordConfirm)}
                helperText={touched.passwordConfirm && errors.passwordConfirm}
                InputProps={{
                  endAdornment: (
                    <InputAdornment className='pointer' onClick={() => setShowPasswordConfirm(!showPasswordConfirm)} >
                      {!showPasswordConfirm ? <Visibility /> : <VisibilityOff />}
                    </InputAdornment>
                  )
                }}
              />
            </div>
            <Link to={'/login'} className='m-6 text-blue-600 underline'>Go Back Login</Link>
            <div className='flex justify-evenly my-4'>
              <Button variant='outlined' color='success' onClick={handleSubmit} >Register</Button>

            </div>
          </div>
        )}
      </Formik>
    </div>
  )
}

export default Register