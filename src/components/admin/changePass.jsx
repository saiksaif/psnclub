import React from 'react'

const ChangePass = () => {
  return (
    <div>
      ChangePass

      <form action="#" method="get">
        <input type="password" placeholder='Previous Password' minLength={6} maxLength={16} required />
        <input type="password" placeholder='New Password' minLength={6} maxLength={16} required />

        <button type="submit">Change Password</button>
      </form>
    </div>
  )
}

export default ChangePass

/*
  Admin will write old password and new password, if old password is correct then password will be updated in database
  Remember to perform MD5 Hashing for password but at end of project not now if time consuming

  Just perform functionality here I will add it to dialog popup later when completed
*/
