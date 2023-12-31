import React, { useEffect, useState } from 'react'
import CustomeTable from './assets/CustomeTable'
import Drawer from './assets/Drawer';
import { getRequest } from '../api/getRequest';

const Purchases = () => {
const [data, setData] = useState([])
  useEffect(()=>{
    getRequest('getPurchase')
    .then((res)=>{
        setData(res);
    }).catch((error)=>{console.log("erorr: ", error)})
  },[])

  
  const datas = [
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
    <Drawer><CustomeTable data={datas} setDatas={setData} /></Drawer>
  )
}

export default Purchases


/*
  AREEBA

  Here crud operation will be performed
  Show a list of all purchases in database 
  Show option for creating, updating and deleting purchases

  Leave updating for last when project has been completed, implement create and delete first
*/