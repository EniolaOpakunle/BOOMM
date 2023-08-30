import React from 'react'
import Navbar from '../components/Navbar'
import '../App.css'
import img1 from '../assets/images/01.png'
import img2 from '../assets/images/01(2).png'
import Footer from '../components/Footer'
import yop from '../assets/images/yop.jpeg'
import hecker from '../assets/images/hecker.jpeg'
import kleppelekker from '../assets/images/kleppelekker.jpeg'
import busded from '../assets/images/busded.jpeg'
import james from '../assets/images/james.jpeg'
import tommy from '../assets/images/tommy.jpeg'
import sham from '../assets/images/sham.jpeg'
import edo from '../assets/images/edo.jpeg'
import Roadmap from '../components/Roadmap'

function Home() {

  return (
    <div className="w-100 section">
      <div className='header'>
        <Navbar/>
        <div className="main size pt-5">
          <div className='row mt-5 py-4'>
            <div className='col-lg-6 py-4'>
              <h3 className='main-text1'>OUR TOKEN IS <span className='secondaryColor1'>LIVE !!!</span></h3>
              <h1 className='main-text2 mt-3'>THIS IS WHERE <span className='secondaryColor2'>CRYPTO</span> MEETS INNOVATION AND CHARITY</h1>
              <p className='text my-4'>Y INNOVATIONS is not just a crypto project, it is a franchise made to revolutionize the crypto as we see it, bringing you real use case utilities and pivoting from the crypto markets into the stock markets</p>
              <div className='mt-4'>
                <button className='btn px-5 bgSecondary1'>JOIN TELEGRAM</button>
                <button className='btn px-5 bgSecondary2 mx-3'>BUY NOW!</button>
              </div>
            </div>
            <div className='col-lg-6'>
              <img src={img1} alt="" style={{width: "90%"}}/>
            </div>
          </div>
          <div className='row rating'>
            <div className='col-lg-3 col-md-6'>
                <div className=' text-center bg-dark py-4 px-5 text-light'>
                    <h2 className='secondaryColor1'>182</h2>
                    <p className='title'>HOLDERS</p>
                </div>
            </div>
            <div className='col-lg-3 col-md-6'>
                <div className=' text-center bg-dark py-4 px-5 text-light'>
                    <h2 className='secondaryColor1'>30.41</h2>
                    <p className='title'>STAKED[%]</p>
                </div>
            </div>
            <div className='col-lg-3 col-md-6'>
                <div className='text-center bg-dark py-4 px-5 text-light'>
                    <h2 className='secondaryColor1' >34846</h2>
                    <p className='title'>TOKEN MCAP [USD]</p>
                </div>
            </div>
            <div className='col-lg-3 col-md-6'>
                <div className='text-center bg-dark py-4 px-5 text-light'>
                    <h2 className='secondaryColor1'>1024</h2>
                    <p className='title'>VOLUME TRADED [BNB]</p>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className='about py-5 background' id='about'>
        <div className='size row justify-content-space-between'>
          <div className='col-lg-6 div1'>
            <div className=' w-100'>
              <img src={img2} alt="" className='w-100'/>
            </div>
          </div>
          <div className='col-lg-6 px-4 div2'>
            <div className=''>
              <h4 className='secondaryColor2 title'>WHY WE STARTED Y</h4>
              <h3 className=''>ABOUT Y</h3>
              <p>Our aim at Y INNOVATIONS is pretty simple, bringing real life uses caes and utilities to the digital world. Using it's proceeds to benefit our investors and having what is left over go into charity</p>
              <p>Y INNOVATIONS is a Non-profit organisation as our CEO is a philantropist and he created this firm to benefit its investors and the world as a whole.</p>
              <p>Y INNOVATIONS is emulating companies like SpaceX, X(twitter) and a few other firms to become the next technologically advanced firm</p>
            </div>
            <div className='mt-5'>
              <h4 className='secondaryColor1 title'>WHAT WE OFFER</h4>
              <h3>Y INNOVATIONS STARTING UTILITIES</h3>
              <p>As we have said earlier, we are not your regular token that builds its utility to pump up price, we offer innovative utilities that solve real problems</p>
              <p>All our utilites basically aim to profit our investors and ensure they are endlessly rewarded for being a part of Y INNOVATIONS</p>
            </div>
            <div className='row'>
              <div className="col-6">
                <p><span className='secondaryColor1'>Staking Dappo: </span> This gives passive income for holding $Y</p>
              </div>
              <div className="col-6">
                <p><span className='secondaryColor2'>Shillbot:</span> This help project advertise and get volume without relying on no volume callers</p>
              </div>
              <div className="col-6">
                <p><span className='secondaryColor2'>Charity :</span> We give out a part of our proceeds to charities to help better the lives of children</p>
              </div>
              <div className="col-6">
                <p><span className='secondaryColor1'>Burns: </span>With our daily burn mechanism, the value of $Y will rise</p>
              </div>
            </div>
            <div>
              <button className='btn px-5 bgSecondary1'>JOIN TELEGRAM</button>
              <button className='btn px-5 bgSecondary2 mx-3'>BUY NOW!</button>
            </div>
          </div>
        </div>
      </div>
      <Roadmap/>
      <div className='team background py-5' id='team'>
        <div className='size text-left'>
          <p className='text-center title'>TEAM MEMBER</p>  
          <h1 className='text-center'>MEET THE CREW</h1>
          <div className='row mt-5'>
                <div className='col-lg-6 p-4'>
                    <div className='row align-items-center box p-3'>
                        <div className="col-lg-6 col-md-6">
                            <img src={yop} alt="" className='w-100' />
                        </div>
                        <div className="col-lg-6 col-md-6 mt-3">
                            <h2>YOP</h2>
                            <p>Lead DEV</p>
                            <p>With more than 14years experiences as fullstack engineer and entrepreneur in heart, always looking for challenges.
                            Love the crypto world, and started Y INNOVATIONS just for fun but now its become a full time projects with a real market and business model.</p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-6 p-4'>
                    <div className='row align-items-center box p-3'>
                        <div className="col-lg-6 col-md-6">
                            <img src={hecker} alt="" className='w-100' />
                        </div>
                        <div className="col-lg-6 col-md-6 mt-3">
                            <h2>HECKER</h2>
                            <p>Team (Co.)</p>
                            <p>CrYpto enthusiasts from og bsc times 2020 , love helping out and finding true gems. Hardworker and always grinding for success. LFG</p>
                        </div>
                    </div>
                </div>
            <div className='col-lg-6 p-4'>
                <div className='row align-items-center box p-3'>
                    <div className="col-lg-6 col-md-6">
                        <img src={kleppelekker} alt="" className='w-100' />
                    </div>
                    <div className="col-lg-6 col-md-6 mt-3">
                        <h2>KLEPPELEKKER</h2>
                        <p>Team (Community Manager)</p>
                        <p>In cryptospace for few years already. Experience as part of teams also couple of years. As part of the BooMM team we can 💣 this one.</p>
                    </div>
                </div>
            </div>
            <div className='col-lg-6 p-4'>
                <div className='row align-items-center box p-3'>
                    <div className="col-lg-6 col-md-6">
                        <img src={busded} alt="" className='w-100' />
                    </div>
                    <div className="col-lg-6 col-md-6 mt-3">
                        <h2>BUSDED</h2>
                        <p>Team (twitter)</p>
                        <p>I'm a graphics designer. Being part of BooMM allows me to shape the project's identity due to my passion , translating its potential into compelling graphics, fostering user understanding, and ultimately, contributing to the widespread adoption of this cryptocurrency, especially on BSC.</p>
                    </div>
                </div>
            </div>
            <div className='col-lg-6 p-4'>
                <div className='row align-items-center box p-3'>
                    <div className="col-lg-6 col-md-6">
                        <img src={james} alt="" className='w-100' />
                    </div>
                    <div className="col-lg-6  col-md-6 mt-3">
                        <h2>JAMES</h2>
                        <p>Social twitter</p>
                        <p>An avid crypto enthusiast who has experience and knowledge in marketing products via social media platforms.</p>
                    </div>
                </div>
            </div>
            <div className='col-lg-6  p-4'>
                <div className='row align-items-center box p-3'>
                    <div className="col-lg-6 col-md-6">
                        <img src={tommy} alt="" className='w-100' />
                    </div>
                    <div className="col-lg-6 col-md-6 mt-3">
                        <h2>TOMMY</h2>
                        <p>Social twitter</p>
                        <p>As a crypto lover, I am passionate about the world of cryptocurrencies. I have been actively involved in the crypto community, staying updated with the latest news, trends, and advancements. I enjoy exploring different blockchain projects, understanding their innovations, and evaluating their potential for future growth.</p>
                    </div>
                </div>
            </div>
            <div className='col-lg-6 p-4'>
                <div className='row align-items-center box p-3'>
                    <div className="col-lg-6 col-md-6">
                        <img src={sham} alt="" className='w-100' />
                    </div>
                    <div className="col-lg-6 col-md-6 mt-3">
                        <h2>SHAM</h2>
                        <p>Team (Pusher)</p>
                        <p>I'm not just your average Joe, I'm the crypto wizard who's been enchanting the trading world for over 3 magical years! I've honed my skills in degens and tamed the wild crypto market with my trading prowess. I can read charts like a fortune teller and predict market trends with uncanny accuracy (well, most of the time). Join me on this exhilarating rollercoaster ride through the realms of cryptocurrencies as we seek fortune and adventure! Trust me, in this magical land of crypto, I'm the trader you want by your side.</p>
                    </div>
                </div>
            </div>
            <div className='p-4 col-lg-6'>
                <div className='row align-items-center box p-3'>
                <div className="col-lg-6 col-md-6">
                    <img src={edo} alt="" className ='w-100' />
                </div>
                <div className="col-lg-6 col-md-6 mt-3">
                    <h2>EDO</h2>
                    <p>Team</p>
                    <p>OG in Crypto Space , been working long time as Mod , Marketer , Shiller. Took a break from crypto & went to Market NFTs , now I’m back to 💣 your Mom . PS : no amazing proposal ser</p>
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className='py-5 fag' id='fag'>
        <div className='size'>
          <p className='title text-center'>QUESTIONS AND ANSWERS</p>
          <h1 className='text-center'>FREQUENTLY ASKED QUESTIONS</h1>
          <div className='row mt-5'>
          <div className='col-lg-6'>
                <div className="d-flex justify-content-space-between question-box">
                    <h4>WHAT IS Y INNOVATION?</h4>
                    <p></p>
                </div>
            </div>
            <div className='col-lg-6'>
                <div className="d-flex justify-content-space-between question-box">
                    <h4>WHEN IS THE OFFICIAL LAUNCH ?</h4>
                    <p></p>
                </div>
            </div>
            <div className='col-lg-6'>
                <div className="d-flex justify-content-space-between question-box">
                    <h4>WHY SHOULD WE BUY Y INNOVATION ?</h4>
                    <p></p>
                </div>
            </div>
            <div className='col-lg-6'>
                <div className="d-flex justify-content-space-between question-box">
                    <h4>HOW THE LIVE CHART WORKS IN TELEGRAM ?</h4>
                    <p></p>
                </div>
            </div>
            <div className='col-lg-6'>
                <div className="d-flex justify-content-space-between question-box">
                    <h4>HOW SECURE IS THIS Y INNOVATION ?</h4>
                    <p></p>
                </div>
            </div>
            <div className='col-lg-6'>
                <div className="d-flex justify-content-space-between question-box">
                    <h4>WHY THE NAME IS Y INNOVATION ?</h4>
                    <p></p>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className=' py-5 community background mt-5   ' id='community'>
        <div className='col-lg-6 m-auto'>
          <p className='text-center'>OUR COMMUNNITY</p>
          <h1 className='text-center'>JOIN OUR COMMUNITY AND GET EARLY ACCESS</h1>
          <div className='d-flex justify-content-center mt-5'>
              <button className='btn px-5 bgSecondary1'>JOIN TELEGRAM</button>
              <button className='btn px-5 bgSecondary2 mx-3'>BUY NOW!</button>
            </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home