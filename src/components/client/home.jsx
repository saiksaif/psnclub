import React, { useState, useEffect } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

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
              <img src="/homebg.png" alt="Home Banner" />
          </div>


          <div className="HomePageCrossSection">
            <h1 className='ps5TitleHomePage'>PS5 Games</h1>
            <div className='ps5Img'>
              <img src="/ps5.png" alt="Ps5 image" height={390} />
            </div>
            <div className='countGS' id='countGSIn1'>
              <span>Games<br />SOLD</span>
              <span>&nbsp;&nbsp;:&nbsp;&nbsp;</span>
              <ScrollTrigger onEnter={() => setCounterOn1(true)} onExit={() => setCounterOn1(false)} triggerOnce={true}>
                <span className='countGSIn'>
                  {counterOn1 && (<CountUp start={0} end={201} duration={2} delay={0} ref={(countUp) => {this.countUp = countUp;}}/>)}+
                </span>
              </ScrollTrigger>
            </div>
                          
            <br />
            <h1 className='ps4TitleHomePage'>PS4 Games</h1>
            <div className="ps4Img" id='#my-div'>
              <img src="/ps4.png" alt="Ps4 image" height={250} />
            </div>
            <div className='countGS' id='countGSIn2'>
              <span>Games<br />SOLD</span>
              <span>&nbsp;&nbsp;:&nbsp;&nbsp;</span>
              <ScrollTrigger onEnter={() => setCounterOn2(true)} onExit={() => setCounterOn2(false)} triggerOnce={true}>
                <span className='countGSIn'>
                  {counterOn2 && (<CountUp start={0} end={156} duration={2} delay={0} ref={(countUp) => {this.countUp = countUp;}}/>)}+
                </span>
              </ScrollTrigger>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
              <span>Happy<br />Customers</span>
              <span>&nbsp;&nbsp;:&nbsp;&nbsp;</span>
              <ScrollTrigger onEnter={() => setCounterOn2(true)} onExit={() => setCounterOn2(false)} triggerOnce={true}>
                <span className='countGSIn'>
                  {counterOn2 && (<CountUp start={0} end={156} duration={2} delay={0} ref={(countUp) => {this.countUp = countUp;}}/>)}+
                </span>
              </ScrollTrigger>
            </div>
          </div>

          <div className='HomeCategoryBoxes'>
            <div className='ps5GamesBoxHome'>
              <img id='dsController5' src="/ds5.png" alt="Ps5 controller" width={300} />
            </div>

            <div className='ps4GamesBoxHome'>
              <img id='dsController4' src="/ds4.png" alt="Ps5 controller" width={300} />
            </div>
          </div>

          <div className="HomePageOtherServices">
            <img src="/Netflix.png" alt="Netflix Logo" height={250}/>
            <img src="/amazon.png" alt="Amazon Prime Logo" />
            <img src="/disney.png" alt="Disney + Logo" />
            <img src="/appletv.png" alt="Apple TV + Logo" />
            <img src="/hbo.png" alt="HBO Logo" />
          </div>
        </div>    
      </div>
    </div>
  )
}

export default Home