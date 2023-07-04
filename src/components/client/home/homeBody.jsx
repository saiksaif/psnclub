import React from 'react'

const HomeBody = () => {
  return (
    <div className='HomePageMain'>
        <div className="homePageContent">
            <div className="HomePageTopBanner">
                <img src="/homebg.png" alt="Home Banner" />
            </div>

            <div className="HomePageCrossSection">
                <h1 className='ps4TitleHomePage'>PS4 Games</h1> <br />
                <h1 className='ps5TitleHomePage'>PS5 Games</h1>
            </div>
        </div>  
    </div>
  )
}

export default HomeBody