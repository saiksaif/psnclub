import React, { useEffect, useState } from 'react';

const Ps5Account = () => {
  const testDataUrl = 'https://raw.githubusercontent.com/saiksaif/psnclub/main/src/utils/testAccounts.json';
  const [filteredAccountData, setFilteredAccountData] = useState([]);

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

  return (
    <div className='ps5AccountsPage'>
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
                {account.gamelist[0].imageLink.toString()}
                  <p>Primary Account: {account.primaryAccount.toString()}</p>
                  <p>Secondary Account: {account.secondaryAccount.toString()}</p>
                  <p>PS Plus: {account.isPsPlus.toString()}</p>
                  <p>PS Plus Expiry: {account.psplusExp1ry}</p>
                  <ul className='gamelistInstance'>
                    {account.gamelist.map((game, gameIndex) => (
                      <li className='gamelistItem' key={gameIndex}>
                        <h4>Game: {game.gameName}</h4>
                        <p>Description: {game.description}</p>
                        <p>Image Link: {game.imageLink}</p>
                        <p>PSA Game: {game.ps4Game.toString()}</p>
                        <p>PS5 Game: {game.ps5Game.toString()}</p>
                      </li>
                    ))}
                  </ul>

                  <form method="dialog">
                    <button onClick={()=>showModalPop(index)}>CLOSE</button>
                  </form>
                </dialog>

              </div>
              <button className='accDetailsBtn' onClick={()=>showModalPop(index)}>SHOW MORE DETAILS</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ps5Account;