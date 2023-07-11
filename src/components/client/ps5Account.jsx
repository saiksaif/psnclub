import React, { useEffect, useState } from 'react';
import { baseURL } from '../../utils/constant';

import SpinnerLoader from '../other/spinnerLoader';
import { postRequest } from './../api/postRequest';

const Ps5Account = () => {
  const mainURL = `${baseURL}/getProducts`;
  const testDataUrl = 'https://raw.githubusercontent.com/saiksaif/psnclub/main/src/utils/testAccounts.json';
  const [filteredAccountData, setFilteredAccountData] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(testDataUrl);
        const data = await response.json();

        // Filter the account data based on "ps5Game" condition
        const filteredData = data.filter((account) =>
          account.gamelist.some((game) => game.ps5Game) 
          &&
          account.productAvailability
        );        

        setLoad(false);
        // console.warn(load);
        setFilteredAccountData(filteredData);
      } catch (error) {
        console.error('Error fetching account data:', error);
      }
    };

    fetchData();
  }, []);

  function checkForGame(gameArray) {
    for (var i = 0; i < gameArray.length; i++) {
      if (gameArray[i].ps4Game === true) {
        return true;
        // break;
      } else {
        return false;
      }
    }
  }

  function showModalPop(index) {
    document.getElementById(index+`dialog`).classList.toggle("visible");
    document.getElementById("customBackdrop").classList.toggle("visible");
  }

  function createPurcase(event) {
    postRequest('savePurchase', {
      purchaseId: Math.random() * (999999 - 100000) + 100000,
      email: event.target.email.value,
      phoneNumber: event.target.phone.value,
      buyerName: event.target.name.value,
      productId: event.target.product.value
    }).then((res)=>{
      console.log(res);
    }).catch((err)=>{
      console.log(err);
    })

    alert(event.target.product.value)
  }

  return (
    <div className='ps5AccountsPage'>
     {load? <SpinnerLoader loading={load} /> :
      
      <div className="inPs5Accounts">
        <div id='customBackdrop' className='Notvisible'></div>
        <div className='accountInstanceContainer'>
          {filteredAccountData.map((account, index) => (
            <div className='accountInstance' key={index}>
              {/* <h2 className='accID'>Account ID: {account.productid}</h2>  */}

              <div className="gamePic" style={{ backgroundImage: `url(${account.gamelist[0].imageLink})`}}></div>

              <h2 className='accDets'><div>{account.gamelist.length} Games</div><div>{account.accountPrice} PKR</div></h2> <hr />

              <div className='iconsContainer'>
                <img src='/ds5png.png' className='consoleIcon' />
                {checkForGame(account.gamelist) ? (<img src='/ds4png.png' className='consoleIcon' />) : (<></>)}
                {account.isPsPlus ? (<img src='/plus.png' className='psPlusIcon' />) : (<img src='/plusno.png' className='psPlusIcon' />)}
              </div>

              <div id={index}>
              
              <dialog className='dialogBox' id={index+`dialog`}>
                  <div className="topSectionDialog">
                    Account ID - {account.productid}
                    <button onClick={()=>showModalPop(index)}>❌</button>
                  </div>
                  <hr />
                  <div className="accFeatures">
                    <div className="accFeaHead">Account Features:</div>
                    <div className="accFeaStats">
                      <div className="availableAccTypes">
                        {account.primaryAccount ? 
                        (<div className="primAcc">Primary Account ✅</div>) : 
                        (<div className="primAcc">Primary Account 🚫</div>)}
                        {account.secondaryAccount ? 
                        (<div className="seconAcc">Secondary Account ✅</div>) : 
                        (<div className="seconAcc">Secondary Account 🚫</div>)}
                      </div>
                      <div className="accPsPlus">
                        PS Plus : {account.isPsPlus ? 
                        (<><img src='/plus.png' className='psPlusIcon2' /><br />
                        Expiry Date: {account.psplusExp1ry}</>) : 
                        (<>No PS Plus</>)}
                      </div>
                      <div className="accRateDetails">
                        Current Price : <br />{account.accountpricevisibility ? 
                        (<>{account.accountPrice} PKR</>) : 
                        (<>Contact for Price</>)}
                      </div>
                    </div>
                  </div>
                  <div className='gamelistInstance'>
                    {account.gamelist.map((game, gameIndex) => (
                      <div className='gamelistItem' key={gameIndex}>
                        <div className="gamePic" style={{ backgroundImage: `url(${game.imageLink})`}}></div>
                        <p><strong>{game.gameName}</strong> : {game.description}</p> <hr />
                        <div className='iconsContainer'>
                          {game.ps4Game ? (<img src='/ds4png.png' className='consoleIcon' />) : (<></>)}
                          {game.ps5Game ? (<img src='/ds5png.png' className='consoleIcon' />) : (<></>)}
                        </div>
                      </div>
                    ))}
                  </div>  <br />
                  {/* <hr /> */}
                  <div className="purchaseTitle">Purchase Account:</div>
                  <form onSubmit={createPurcase} className="purchasingForm">
                    <input type="text" name='name' placeholder="Name" required minLength={4} maxLength={22} />
                    <input type="email" name='email' placeholder="Email" required minLength={7} maxLength={32} />
                    <input type="tel" name="phone" placeholder="Phone No." required minLength={9} maxLength={13} />
                    <input type="hidden" name="product" value={account.productid} />

                    <button type="submit">Request Purchase</button>
                  </form>
                </dialog>

              </div>
              <button className='accDetailsBtn' onClick={()=>showModalPop(index)}>SHOW MORE DETAILS</button>
            </div>
          ))}
        </div>
      </div>
      }
    </div>
  );
};

export default Ps5Account;