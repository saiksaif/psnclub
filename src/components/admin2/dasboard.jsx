import React from 'react'

const Dashboard = () => {
  return (
    <div>
      Dashboard
    
      {/* Number of Accounts Saved */}
      <span>{}</span>
      <br />

      {/* Number of Purcases */}
      <span>{}</span>
      <br />

      {/* Number of Bookings */}
      <span>{}</span>
      <br />

      <a href="/admin-accounts">Manage Accounts</a>
      <a href="/admin-purchases">Manage Purchases</a>
      <a href="/admin-accounts">Manage Details</a>

      <a href="/">Signout</a>
    </div>

    
  )
}

export default Dashboard

/*
  AREEBA

  Perform read operations here
  Should show number of accounts and other stats mentioned in documentation
*/