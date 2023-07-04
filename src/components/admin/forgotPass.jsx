import React from 'react'
import axios from 'axios'
import { baseURL } from './utils/constant';

const ForgotPass = () => {
  return (
    <div>
        ForgotPass
    
        <form action="#" method="get">
            <input type="email" placeholder="Admin Email" id="" required />
            <input type="email" placeholder="Other Email" id="" required />
            <input type="password" placeholder="New Password" id="" minLength={6} maxLength={16} required />

            <button type="submit">Change Password</button>
        </form>
    </div>
  )
}

export default ForgotPass

/*
  WALEED

    Implement forgot password here
    Admin has to enter 2 emails to be able to change password

    1st email is email of admin "psnAdmin@psnclub.com"
    2nd email is "saifali9196@gmail.com"

    then he will enter new password and click change password, if correct emails then password will be changed
*/ 