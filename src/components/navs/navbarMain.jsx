import React, {useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai';

import { Link, useNavigate } from 'react-router-dom';
// import {useHistory} from 'react-router';
import Search from '../client/search';
import ClientRoutes from '../routes/clientRoutes';

const NavbarMain = ({open: Open }) => {
  const [searchKey, setSearchKey] = useState(null);
  const navigate = useNavigate();
  
  function showModalPop() {
    document.getElementById('dialogNav2').classList.toggle("visible");
    document.getElementById("customBackdrop").classList.toggle("visible");
  }

  // function keyDownOnSearch(event) {
  //   setSearchKey(event.target.value);
  // }

  function searchForKey() {
    if (document.getElementById('searchKeyword').value.length < 4) {
      alert('Keyword length cannot be shorter than 4 letters')
      return;
    }
    showModalPop();
    navigate("/search", {
      state: document.getElementById('searchKeyword').value
    }, { replace: true });
  }

  return (
    <div className='navbarMain'>
    <div id='customBackdrop' className='Notvisible'></div>
        <div className='navbarMain1'>
            <div>PSN CLUB</div>
        </div>
        <div className='navbarMain1 navbarMain1Fix'>
            <div>PSN CLUB</div>
            {/* <div>Buy Cheap PSN Accounts</div> */}
        </div>
        <div className='navbarMain2'>
            <div className='startNavBtns'>
              <a href="/">
                <img src="/psnIcon-sm.png" alt="Psn club logo" height={45} /> 
              </a>
            </div>
            
            <div className='centerNavBtns hidden-sm'>
              <Link id='homeA' className={`centerNavBtnsA + ${'homeA' == Open ? "selectedNav" : ""}`} to='/'>Home</Link>
              <Link id='ps5A' className={`centerNavBtnsA + ${'ps5A' == Open ? "selectedNav" : ""}`} to='/ps5-accounts'>PS5</Link>
              <Link id='ps4A' className={`centerNavBtnsA + ${'ps4A' == Open ? "selectedNav" : ""}`} to='/ps4-accounts'>PS4</Link>
              <Link id='AllA' className={`centerNavBtnsA + ${'AllA' == Open ? "selectedNav" : ""}`} to='/all-accounts'>All</Link>
              <Link id='OthA' className={`centerNavBtnsA + ${'OthA' == Open ? "selectedNav" : ""}`} to='/other-services'>More</Link>
            </div>
            
            <div className='endNavBtns fixSpace'>
              <dialog className='dialogBox2' id='dialogNav2'>
                  <div className="topSectionDialog2">
                    <button onClick={()=>showModalPop()}>❌</button>
                  </div> <br />

                  <div className='searchPop'>
                    <input id='searchKeyword' type="text" placeholder='Search Game...' required minLength={4} maxLength={16} />
                    {/* <button onChange={()=>{setSearchKey()}}>SEARCH</button> */}
                    <button onClick={()=>searchForKey()} className='searchBTN'>SEARCH</button>
                  </div>
              </dialog>
              <button id='SearA' className={`centerNavBtnsA + ${'SearA' == Open ? "selectedNav" : ""}`} onClick={()=>showModalPop()}>
                <AiOutlineSearch size={25} />
              </button>
              {/* <Link id='SearA' className={`centerNavBtnsA + ${'SearA' == Open ? "selectedNav" : ""}`} to='/search'>
                <AiOutlineSearch size={25} />
              </Link> */}
            </div>
        </div>
    </div>
  )
}

export default NavbarMain