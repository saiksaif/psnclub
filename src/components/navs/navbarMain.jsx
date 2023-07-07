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

  function keyDownOnSearch(event) {
    setSearchKey(event.target.value);
  }
  function searchForKey() {
    console.log(searchKey);
    // window.location.href = `/search?searchKey=${searchKey}`;
    navigate("/search", {
      state: searchKey,
    });
  }

  return (
    <div className='navbarMain'>
    <div id='customBackdrop' className='Notvisible'></div>
        <div className='navbarMain1'>
            <div>PSN CLUB</div>
        </div>
        <div className='navbarMain1 navbarMain1Fix'>
            <div>PSN CLUB</div>
        </div>
        <div className='navbarMain2'>
            <div className='startNavBtns'>
              <a href="/">
                <img src="/psnIcon-sm.png" alt="Psn club logo" height={45} /> 
              </a>
            </div>
            
            <div className='centerNavBtns hidden-sm'>
              <Link id='homeA' className={`centerNavBtnsA + ${'homeA' == Open ? "selectedNav" : ""}`} to='/'>Home</Link>
              <Link id='ps5A' className={`centerNavBtnsA + ${'ps5A' == Open ? "selectedNav" : ""}`} to='/ps5-accounts'>PS5 Accounts</Link>
              <Link id='ps4A' className={`centerNavBtnsA + ${'ps4A' == Open ? "selectedNav" : ""}`} to='/ps4-accounts'>PS4 Accounts</Link>
              <Link id='AllA' className={`centerNavBtnsA + ${'AllA' == Open ? "selectedNav" : ""}`} to='/all-accounts'>All Accounts</Link>
              <Link id='OthA' className={`centerNavBtnsA + ${'OthA' == Open ? "selectedNav" : ""}`} to='/other-services'>Other Services</Link>
            </div>
            
            <div className='endNavBtns fixSpace'>
              <dialog className='dialogBox2' id='dialogNav2'>
                  <div className="topSectionDialog2">
                    SEARCH
                    <button onClick={()=>showModalPop()}>❌</button>
                  </div> <br />

                  <form onSubmit={()=>searchForKey()} className='searchPop'>
                    <input type="text" placeholder='Search Game...' required minLength={4} maxLength={16} onChange={(event)=>{keyDownOnSearch(event)}} />
                    {/* <button onChange={()=>{setSearchKey()}}>SEARCH</button> */}
                    <button className='searchBTN'>SEARCH</button>
                  </form>
              </dialog>
              <button onClick={()=>showModalPop()} className='centerNavBtnsA'>
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