import React, { useState, useEffect } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import { Link } from 'react-router-dom'

const Home = () => {
  const [counterOn1, setCounterOn1] = useState(false);
  const [counterOn2, setCounterOn2] = useState(false);
  
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY;
  //     console.log('Scroll position:', scrollPosition);
  //   };

  //   // Add event listener when component mounts
    
  //   window.addEventListener('scroll', handleScroll);
  //   // Clean up the event listener when component unmounts
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <div className='homeMain'>
      <div className='HomePageMain'>
        <div className="homePageContent">
          <div className="HomePageTopBanner">
            <div className='HPTBImg'></div>
              {/* <img src="/homebg.png" alt="Home Banner" /> */}
          </div>

          <br />
          <div className="HomePageCrossSection">
            {/* <h1 className='ps5TitleHomePage'>PS5 Games</h1> */}
            <div className='ps5Img'>
              <img src="/ps5.png" alt="Ps5 image"/>
            </div>
            {/* <div className='countGS' id='countGSIn1'>
              <div>Games<br />SOLD</div>
              <div>&nbsp;&nbsp;:&nbsp;&nbsp;</div>
              <ScrollTrigger onEnter={() => setCounterOn1(true)} onExit={() => setCounterOn1(false)} triggerOnce={true}>
                <div className='countGSIn'>
                  {counterOn1 && (<CountUp start={0} end={201} duration={2} delay={0} ref={(countUp) => {this.countUp = countUp;}}/>)}+
                </div>
              </ScrollTrigger>
            </div> */}
                          
            <br />
            {/* <h1 className='ps4TitleHomePage'>PS4 Games</h1> */}
            <div className="ps4Img" id='#my-div'>
              <img src="/ps4.png" alt="Ps4 image"/>
            </div>
            {/* <div className='countGS' id='countGSIn2'>
              <div>Games<br />SOLD</div>
              <div>&nbsp;&nbsp;:&nbsp;&nbsp;</div>
              <ScrollTrigger onEnter={() => setCounterOn2(true)} onExit={() => setCounterOn2(false)} triggerOnce={true}>
                <div className='countGSIn'>
                  {counterOn2 && (<CountUp start={0} end={156} duration={2} delay={0} ref={(countUp) => {this.countUp = countUp;}}/>)}+
                </div>
              </ScrollTrigger>*/}
          </div>

          <div className='HomeCategoryBoxes'>
            <Link to="/ps5-accounts">
              <div className='ps5GamesBoxHome'>
                <div className='inImgCategoryName'>BROWSE<br /> PS5 GAMES</div>
                <img id='dsController5' src="/ds5.png" alt="Ps5 controller" width={300} />
              </div>
            </Link>

            <Link to="/ps4-accounts">
              <div className='ps4GamesBoxHome'>
                <div className='inImgCategoryName'>BROWSE<br /> PS4 GAMES</div>
                <img id='dsController4' src="/ds4.png" alt="Ps5 controller" width={300} />
              </div>
            </Link>
          </div>

          {/* <h1 className='middleSectionExplore'>Explore More:</h1> */}

          <Link to="/other-services">
            <div className='otherServParent'>
              <div className='otherServHeader'>
                OTHER SERVICES WE OFFER
              </div>
              <div className="HomePageOtherServices">
                <img src="/Netflix.png" alt="Netflix Logo" width={250}/>
                <img src="/amazon.png" alt="Amazon Prime Logo" width={250} />
                <img src="/disny.png" alt="Disney + Logo" width={250} />
                <img src="/appletv.jpeg" alt="Apple TV + Logo" width={250} />
                <img src="/hbo.png" alt="HBO Logo" width={250} />
              </div>
            </div>
          </Link>
        </div>    
      </div>
    </div>
  )
}

export default Home