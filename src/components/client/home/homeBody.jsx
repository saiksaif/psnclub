import React from 'react'

import AllAccount from '../allAccount'
import Ps4Account from '../ps4Account'
import Ps5Account from '../ps5Account'
import Search from '../search'
import OtherServices from '../otherService'

import { Route, Routes } from 'react-router-dom'

const HomeBody = () => {
  return (
    <div className='HomePageMain'>
        {/* If home or empty url then this */}
        <div className="homePageContent">
            <div className="HomePageTopBanner">
                <img src="/homebg.png" alt="Home Banner" />
            </div>

            <div className="HomePageCrossSection">
                <h1 className='ps4TitleHomePage'>PS4 Games</h1> <br />
                <h1 className='ps5TitleHomePage'>PS5 Games</h1>
            </div>
        </div>

    {/* If anything else in path then that component down below: */}    
    </div>
  )
}

export default HomeBody

/*
    Implement Client Page Routing here
    If the path is empty then show the HTML in this component 
    If the path has all-accounts or ps4-accounts or something else
    then show relevent component instead
*/