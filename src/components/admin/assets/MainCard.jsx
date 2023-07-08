import React from "react";
import './AdminStyle.css'
const MainCard = ({purchase, product})=>{
 

    return (
      <div className="cards-list">
  
  <div className="card 1" style={{background: 'linear-gradient(#394867, #212A3E, #212A3E)', color:'white'}} onClick ={()=>{window.location.replace('http://localhost:3000/admin-accounts')}}>
  <div className="card_stats">
      <p className="card_stats"> {product} </p>
    {/* <img src="https://i.redd.it/b3esnz5ra34y.jpg" /> */}
     </div>
    <div className="card_title title-white">
      <p>Total Account</p>
    </div>
  </div>
  
  <div onClick ={()=>{window.location.replace('http://localhost:3000/admin-purchases')}} className="card 2"style={{background: 'linear-gradient(#394867, #212A3E, #212A3E)'}}>
  <div className="card_stats">
      <p className="card_stats"> {purchase} </p>
      {/* <img src="https://media.giphy.com/media/10SvWCbt1ytWCc/giphy.gif" /> */}
    </div>
    <div className="card_title">
      <p>Total Purchase</p>
    </div>
  </div>
  </div>
    );
  }
export default MainCard;