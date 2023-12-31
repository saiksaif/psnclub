import React, { useState } from 'react'
import '../admin/assets/AdminStyle.css'

import Card from './assets/MainCard';
import { getRequest } from '../api/getRequest';
import Drawer from './assets/Drawer';

const Dashboard = () => {
  const [purchaseCount, setPurcaseCount] = useState(0)
  const [productCount, setProductCount] = useState(0)
  React.useEffect(()=>{
    getRequest('getPurchase')
    .then((res)=>{
      console.log("data : ", res, " and length: ", res.length)
      setPurcaseCount(res.length);
    }).catch((error)=>{console.log("erorr: ", error)})
    getRequest('getProducts')
    .then((res)=>{
      setProductCount(res.length)
    }).catch((error)=>{console.log("erorr: ", error)})
  },[])

  return (
    <div className='dashboardMain'>
      {/* <SideNav><Card/></SideNav> */}
      <Drawer>
        <Card purchase={purchaseCount} product={productCount}/>
      </Drawer>
    </div>
  );
}

export default Dashboard