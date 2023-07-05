// import React, { useEffect, useState } from 'react';

// const Ps5Account = () => {
//   const testDataUrl = 'https://raw.githubusercontent.com/saiksaif/psnclub/main/src/utils/testAccounts.json';
//   const [accountData, setAccountData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(testDataUrl);
//         const data = await response.json();
//         setAccountData(data);
//       } catch (error) {
//         console.error('Error fetching account data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className='ps5AccountsPage'>
//       <div className="inPs5Accounts">
//         <h2>Account Data:</h2>
//         <ul>
//           {accountData.map((account, index) => (
//             <li key={index}>
//               <h3>Product ID: {account.productid}</h3>
//               <p>Primary Account: {account.primaryAccount.toString()}</p>
//               <p>Secondary Account: {account.secondaryAccount.toString()}</p>
//               <p>PS Plus: {account.isPsPlus.toString()}</p>
//               <p>PS Plus Expiry: {account.psplusExp1ry}</p>
//               <ul>
//                 {account.gamelist.map((game, gameIndex) => (
//                   <li key={gameIndex}>
//                     <h4>Game: {game.gameName}</h4>
//                     <p>Description: {game.description}</p>
//                     <p>Image Link: {game.imageLink}</p>
//                     <p>PSA Game: {game.psaGame.toString()}</p>
//                     <p>PS5 Game: {game.ps5Game.toString()}</p>
//                   </li>
//                 ))}
//               </ul>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Ps5Account;
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
        );

        setFilteredAccountData(filteredData);
      } catch (error) {
        console.error('Error fetching account data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='ps5AccountsPage'>
      <div className="inPs5Accounts">
        {/* <h2>Filtered Account Data:</h2> */}
        <ul>
          {filteredAccountData.map((account, index) => (
            // {account.ava}
            <div className='accountInstance' key={index}>
              <h3>Product ID: {account.productid}</h3>
              <p>Primary Account: {account.primaryAccount.toString()}</p>
              <p>Secondary Account: {account.secondaryAccount.toString()}</p>
              <p>PS Plus: {account.isPsPlus.toString()}</p>
              <p>PS Plus Expiry: {account.psplusExp1ry}</p>
              <ul>
                {account.gamelist.map((game, gameIndex) => (
                  <li key={gameIndex}>
                    <h4>Game: {game.gameName}</h4>
                    <p>Description: {game.description}</p>
                    <p>Image Link: {game.imageLink}</p>
                    <p>PSA Game: {game.psaGame.toString()}</p>
                    <p>PS5 Game: {game.ps5Game.toString()}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Ps5Account;
