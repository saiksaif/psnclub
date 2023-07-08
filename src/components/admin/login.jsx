import React from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import { TextField } from '@mui/material';
// import { useAuth } from './auth';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
});

const Login = () => {
    const [user, setUser] = React.useState('')
    // const auth = useAuth()
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            email: 'waleed@gmail.com',
            password: '1234567890',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
            axios.post('http://localhost:5050/api/login', values,
                // {
                //     headers: {
                //         'Accept': 'application/json',
                //         'Content-Type': 'application/json',

                //     }
                // }
            )
                .then(response =>
                    // console.log("Token is"+response.data.access_token),
                    checkLoginToken(response.data.access_token, values)
                    // auth.login(values),
                    // navigate('/cart')
                )
                .catch(error => {
                    console.error('There was an erro    r!', error);
                    alert("Please Enter Valid Email or Password")
                });
        },
    });

    function checkLoginToken(token, values) {
        if (token) {
            localStorage.setItem('userToken', token)
            // auth.login(token)
            navigate('/admin-dashboard')
        }
        else {
            alert("Issue with Connecting the Server")
        }
    }
    return (
        <div className='loginMain'>
            {/* <form onSubmit={formik.handleSubmit} >
                <div className='login_background '>
                    <div className='p-20 items-center  flex flex-col  h-screen w-screen'>
                        <div className='mt-10 w-50 p-8 flex flex-col bg-gradient-to-r from-[#767c85] via-[#4a4d52] to-[#1c1d1f] rounded-3xl'> */}
                
            <form onSubmit={formik.handleSubmit} className='loginForm'>
                <div className='loginFormContainer'>
                    <h3>ADMIN LOGIN</h3>
                    {/* <img src="./KickSale/output-onlinepngtools.png" className='absolute bg-[#00264e] -top-20 rounded-full max-w-[100px] h-[100px] relative flex items-center left-1/2 -translate-x-1/2 justify-center w-full' /> */}
                    {/* <input placeholder='USERNAME' className='p-2 mt-2 bg-[#375173]' > */}
                    <div className='flex flex-col mt-5'>
                        <div className='p-2 w-100 flex '>
                            <TextField
                                className='p-2 w-100 bg-[#355274]'
                                fullWidth
                                id="email"
                                name="email"
                                label="Email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
                                autoComplete='false'
                            />
                        </div>
                        {/* </input> */}
                        <div className='mt-1 p-2 w-100'>
                            <TextField
                                className='p-2 w-100 bg-[#355274]'
                                fullWidth
                                id="password"
                                name="password"
                                label="Password"
                                type="password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                error={formik.touched.password && Boolean(formik.errors.password)}
                                helperText={formik.touched.password && formik.errors.password}
                            />
                            <br />
                            <Link className="forgotLoginPass" to="/">Forgot Password?</Link>
                        </div>
                        <button type="submit" className='loginBTN'>
                            Login
                        </button>
                        <br />
                    </div>
                </div>
            </form>
        </div>
    );
};


export default Login

/*
  WALEED

  Implement Login here
  Use email and password
  hardcode email and password into database
  Use url of backend from constant file in utils folder
*/