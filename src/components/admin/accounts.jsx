import React, { useEffect, useState } from 'react'
import Lists from './assets/List'
import Drawer from './assets/Drawer'
import CustomeForm from './assets/customeForm'
import { useRef } from 'react';
import { getRequest } from '../api/getRequest';
import AdminDataDisplay from './assets/AdminDataDisplay';
import { LoaderFunction } from 'react-router';

const Accounts = () => {
  const containerRef = useRef(null);
  const [data, setData]= useState([]);
  const [filteredAccountData, setFilteredAccountData] = useState([]);
    
  useEffect(()=>{

    getRequest('getProducts')
    .then((res)=>{
      // Filter the account data based on "ps5Game" condition
        const filteredData = res.filter((account) =>
          account.productAvailability
        );  
        setFilteredAccountData(filteredData);
    }).catch((error)=>{console.log("erorr: ", error)})
    // const fetchData = async () => {
    //   try {
    //     const response = await fetch(testDataUrl);
    //     const data = await response.json();

    //     // Filter the account data based on "ps5Game" condition
    //     const filteredData = data.filter((account) =>
    //       account.productAvailability
    //     );        

    //     setFilteredAccountData(filteredData);
    //   } catch (error) {
    //     console.error('Error fetching account data:', error);
    //   }
    // };

    // fetchData();
    }, [])

    
  // const scrollToBottom = () => {
  //   containerRef.current?.scrollIntoView({ behavior: 'smooth' });
  //   // if (containerRef.current) {
  //   //   // window.alert(containerRef);
  //   //   containerRef.current.scrollIntoView({ behavior: 'smooth' });
  //   // }
  // };
  // const data = ["aaaa","kjkfjaj","jadjlajdald", "aaaa","kjkfjaj","jadjlajdald","aaaa","kjkfjaj","jadjlajdald", "aaaa","kjkfjaj","jadjlajdald","jjj","kskssks","kksk","ssjsjjs","sksksks","jjsj","ssjss"]
  return (
    <Drawer>
      <h2 style={{color:'#435B66', textAlign:'center'}}>ALL  &nbsp;ACCOUNTS</h2>
      {/* <div className='grid grid-rows-4 grid-flow-col gap-4 bg-black' style={{backgroundColor:'purple', display:'grid'}}> */}
      <div style={{ padding:'10px', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridGap: '10px' }}>
        {filteredAccountData.map((account, index) => (
            <AdminDataDisplay account={account} index={index}/>
          ))}   
      </div>
         <div ref={containerRef} style={{backgroundColor:'white', width:'100%'}}><CustomeForm/></div>
  {/* </div> */}
  </Drawer>
   /* ADD BTN */
  
    /* LIST OF ACCOUNTS */
    
  )
}

export default Accounts



/*
  AREEBA

  Here crud operation will be performed
  Show a list of all accounts in database 
  Show option for creating, updating and deleting accounts

  Leave updating for last when project has been completed, implement create and delete first
*/