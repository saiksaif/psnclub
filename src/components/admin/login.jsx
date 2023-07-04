import React from 'react'
import axios from 'axios'
import { baseURL } from './utils/constant';

const Login = () => {
  return (
    <div>
      Login Page

      <br />
      <form action="#" method="get">
        <input type="text" placeholder='Email' required />
        <input type="password" placeholder='Password' minLength={6} maxLength={16} required />

        <button type="submit">LOGIN</button>
      </form>
    </div>
  )
}

export default Login

/*
  Implement Login here
  Use email and password
  hardcode email and password into database
  Use url of backend from constant file in utils folder
*/