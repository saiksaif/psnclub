import React from 'react'
import Drawer from './assets/Drawer';
import CustomeTable from './assets/CustomeTable';
const Booking = () => {
  const data = [
    {
      buyerName: 'John Doe',
      email: 'johndoe@example.com',
      phoneNumber: '123-456-7890',
      timestamp: '2022-01-01 10:00 AM',
      action: 'Edit',
    },
    {
      buyerName: 'John Doe',
      email: 'johndoe@example.com',
      phoneNumber: '123-456-7890',
      timestamp: '2022-01-01 10:00 AM',
      action: 'Edit',
    },
    {
      buyerName: 'John Doe',
      email: 'johndoe@example.com',
      phoneNumber: '123-456-7890',
      timestamp: '2022-01-01 10:00 AM',
      action: 'Edit',
    },
    {
      buyerName: 'John Doe',
      email: 'johndoe@example.com',
      phoneNumber: '123-456-7890',
      timestamp: '2022-01-01 10:00 AM',
      action: 'Edit',
    },
    // Add more data objects as needed
  ];
  return (
    <Drawer><CustomeTable  title="Manage Booking" data={data}/></Drawer>
  )
}

export default Booking


/*
  AREEBA

    Leave booking for last, implement other things first

  Here crud operation will be performed
  Show a list of all bookings in database 
  Show option for creating, updating and deleting bookings

  Leave updating for last when project has been completed, implement create and delete first
*/