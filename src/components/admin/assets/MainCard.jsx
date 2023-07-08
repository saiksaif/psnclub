import React from "react";
import './AdminStyle.css'
const MainCard = ({purchase, product})=>{
 

    return (
      <div className="statsCardsMain">  
        <div className="totalAccStatCard" onClick ={()=>{window.location.replace('http://localhost:3000/admin-accounts')}}>
          <h2 className="card_stats"> {product} </h2>
          <p>Total Accounts</p>
        </div>
        
        <div className="totalPurcStatCard" onClick ={()=>{window.location.replace('http://localhost:3000/admin-purchases')}}>
          <h2 className="card_stats"> {purchase} </h2>
          <p>Total Purchases</p>
        </div>
      </div>
    );
  }
export default MainCard;