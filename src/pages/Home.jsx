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

function Home() {
  return (
    <div className="">
      <div className='header'>
        <Navbar/>
        <div className=" main size pt-5">
          <div className='row mt-5 py-4'>
            <div className='col-lg-6 py-4'>
              <h3 className='main-text1'>OUR TOKEN IS <span className='secondaryColor1'>LIVE</span></h3>
              <h1 className='main-text2 mt-3'>APE TOKENS <span className='secondaryColor2'>WITH</span> EASE</h1>
              <p className='text my-4'>Y INNOVATIONS Project is a fully integrated system
              for you to ape with ease forget about Poocoin/Dextool or Uniswap we provide all directly in your telegram group</p>
              <div className='mt-4'>
                <button className='btn px-5 bgSecondary1'>JOIN TELEGRAM</button>
                <button className='btn px-5 bgSecondary2 mx-3'>BUY NOW!</button>
              </div>
            </div>
            <div className='col-lg-6'>
              <img src={img1} alt="" style={{width: "90%"}}/>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-3'>
                <div className=' text-center bg-dark py-4 px-5 text-light'>
                    <h2 className='secondaryColor1'>182</h2>
                    <p className='title'>HOLDERS</p>
                </div>
            </div>
            <div className='col-lg-3'>
                <div className=' text-center bg-dark py-4 px-5 text-light'>
                    <h2 className='secondaryColor1'>30.41</h2>
                    <p className='title'>STAKED[%]</p>
                </div>
            </div>
            <div className='col-lg-3'>
                <div className='text-center bg-dark py-4 px-5 text-light'>
                    <h2 className='secondaryColor1' >34846</h2>
                    <p className='title'>TOKEN MCAP [USD]</p>
                </div>
            </div>
            <div className='col-lg-3'>
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
          <div className='col-lg-6'>
            <div className=' w-100'>
              <img src={img2} alt="" className='w-100'/>
            </div>
          </div>
          <div className='col-lg-6 px-4'>
            <div className=''>
              <h4 className='secondaryColor2 title'>THE STORY</h4>
              <h3 className=''>ABOUT US</h3>
              <p>Y INNOVATIONS is not just a sniper bot or trading bot, we have built a full integrated system including buybot, walletbot, safecheck and trading bot all direct within telegram. Eliminating the need to use exchanges such as, Dextools, Poocoin, Uniswap and Pancakeswap, we provide all this to you directly in your community group.</p>
            </div>
            <div className='mt-5'>
              <h4 className='secondaryColor1 title'>OUR VISIONS</h4>
              <h3>UTILITY THAT SERVES THE COMMUNITY</h3>
              <p>In 98% of tokens the devs just build utility to pump the chart. BOOMM is different, we aim to solve real problems in crypto space.</p>
              <p>All the Y INNOVATIONS utilities are interconnected and work together to provide the best user experience possible.</p>
            </div>
            <div className='row'>
              <div className="col-6">
                <p><span className='secondaryColor1'>Staking Dappo: </span></p>
              </div>
              <div className="col-6">
                <p><span className='secondaryColor2'>Shillbot:</span></p>
              </div>
              <div className="col-6">
                <p><span className='secondaryColor2'>Charity Organisation Partnership:</span></p>
              </div>
              <div className="col-6">
                <p><span className='secondaryColor1'>Burns</span></p>
              </div>
            </div>
            <div>
              <button className='btn px-5 bgSecondary1'>JOIN TELEGRAM</button>
              <button className='btn px-5 bgSecondary2 mx-3'>BUY NOW!</button>
            </div>
          </div>
        </div>
      </div>
      <div className='py-5 roadmap background' id='roadmap'>
        <div className='size text-center'>
          <p className='title'>ROADMAP</p>
          <h1>HOW IT ALL STARTED</h1>
          <div className='d-flex'>
            <div>
                <div className="col-lg-5">
                    <div>
                        <p>THE PROBLEM</p>  
                        <p className='secondaryColor1'>10%</p>
                    </div>
                    <p>We built Y INNOVATIONS firstly to solve a problem
                    that we face everyday ourselves, we were tired of switching between Poocoin/Dextool, telegram and Uniswap/Pankcakeswap copying the contract and finally wake up with a dead token.</p>
                    <p>So we chose to build something to solve the issues and from here Y INNOVATIONS was born.</p>
                </div>
                <div className="col-lg-5">
                    <div>
                        <p>THE STRATEGY</p>
                        <p className='secondaryColor1'>20%</p>
                    </div>
                    <p>We want our bot to be useful for a large number of users so we chose to build a BuyBot.</p>
                    <p>We know that a lot of buybots are already on the market, so it wouldn't make any sense for us to a build buybot like any other so we will be bringing unique functions to further enhance your crypto experience.</p>
                </div>
                <div className="col-lg-5">
                    <div>
                        <p>THE DEV</p>
                        <p className='secondaryColor1'>50%</p>
                    </div>
                    <p>The development take us long time and this was huge challenges for us.</p>
                    <p>We have faced a lot of problems during the development time between telegram bugs, not reliable private node and scam contracts ect ect.. but after 4 months of working time (full time, often until midnight)</p>
                    <p>we now have all our systems ready that include live chart, buybot, wallets bot, contract analysis, and much more...</p>
                </div>
                <div className="col-lg-5">
                    <div>
                        <p>THE LAUNCH</p>
                        <p className='secondaryColor1'>70%</p>
                    </div>
                    <p>We just started, to be continued...</p>
                </div>
            </div>
            {/* <div>
                <div className='bg-dark d-flex justify-content-center align-items-center' style={{width:'5rem'}}>
                    <p className='bgSecondary1' style={{width: "2rem"}}>i </p>
                </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className='team background py-5' id='team'>
        <div className='size text-center'>
          <p>TEAM MEMBER</p>  
          <h1>MEET THE CREW</h1>
          <div className='row gap-4 justify-content-center'>
                <div className='col-lg-6'>
                    <div className='row align-items-center team-box'>
                        <div className="col-lg-6">
                            <img src={yop} alt="" className='w-100' />
                        </div>
                        <div className="col-lg-6">
                            <h2>YOP</h2>
                            <p>Lead DEV</p>
                            <p>With more than 14years experiences as fullstack engineer and entrepreneur in heart, always looking for challenges.
                            Love the crypto world, and started Y INNOVATIONS just for fun but now its become a full time projects with a real market and business model.</p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='row align-items-center team-box'>
                        <div className="col-lg-6">
                            <img src={hecker} alt="" className='w-100' />
                        </div>
                        <div className="col-lg-6">
                            <h2>HECKER</h2>
                            <p>Team (Co.)</p>
                            <p>CrYpto enthusiasts from og bsc times 2020 , love helping out and finding true gems. Hardworker and always grinding for success. LFG</p>
                        </div>
                    </div>
                </div>
            <div className='col-lg-6'>
                <div className='row align-items-center team-box'>
                <div className="col-lg-6">
                    <img src={kleppelekker} alt="" className='w-100' />
                </div>
                <div className="col-lg-6">
                    <h2>KLEPPELEKKER</h2>
                    <p>Team (Community Manager)</p>
                    <p>In cryptospace for few years already. Experience as part of teams also couple of years. As part of the BooMM team we can 💣 this one.</p>
                </div>
                </div>
            </div>
            <div className='col-lg-6 row align-items-center team-box'>
              <div className="col-lg-6">
              <img src={busded} alt="" className='w-100' />
              </div>
              <div className="col-lg-6">
                <h2>BUSDED</h2>
                <p>Team (twitter)</p>
                <p>I'm a graphics designer. Being part of BooMM allows me to shape the project's identity due to my passion , translating its potential into compelling graphics, fostering user understanding, and ultimately, contributing to the widespread adoption of this cryptocurrency, especially on BSC.</p>
              </div>
            </div>
            <div className='col-lg-6 p-2'>
                <div className='row align-items-center team-box'>
                    <div className="col-lg-6">
                        <img src={james} alt="" className='w-100' />
                    </div>
                    <div className="col-lg-6">
                        <h2>JAMES</h2>
                        <p>Social twitter</p>
                        <p>An avid crypto enthusiast who has experience and knowlage in marketing products via social media platforms.</p>
                    </div>
                </div>
            </div>
            <div className='col-lg-6 row align-items-center team-box p-2'>
              <div className="col-lg-6">
                <img src={tommy} alt="" className='w-100' />
              </div>
              <div className="col-lg-6">
                <h2>TOMMY</h2>
                <p>Social twitter</p>
                <p>As a crypto lover, I am passionate about the world of cryptocurrencies. I have been actively involved in the crypto community, staying updated with the latest news, trends, and advancements. I enjoy exploring different blockchain projects, understanding their innovations, and evaluating their potential for future growth.</p>
              </div>
            </div>
            <div className='col-lg-6'>
                <div className='row align-items-center team-box'>
                    <div className="col-lg-6">
                        <img src={sham} alt="" className='w-100' />
                    </div>
                    <div className="col-lg-6">
                        <h2>SHAM</h2>
                        <p>Team (Pusher)</p>
                        <p>I'm not just your average Joe, I'm the crypto wizard who's been enchanting the trading world for over 3 magical years! I've honed my skills in degens and tamed the wild crypto market with my trading prowess. I can read charts like a fortune teller and predict market trends with uncanny accuracy (well, most of the time). Join me on this exhilarating rollercoaster ride through the realms of cryptocurrencies as we seek fortune and adventure! Trust me, in this magical land of crypto, I'm the trader you want by your side.</p>
                    </div>
                </div>
            </div>
            <div className='col-lg-6 row align-items-center team-box'>
              <div className="col-lg-6">
                <img src={edo} alt="" className ='w-100' />
              </div>
              <div className="col-lg-6">
                <h2>EDO</h2>
                <p>Team</p>
                <p>OG in Crypto Space , been working long time as Mod , Marketer , Shiller. Took a break from crypto & went to Market NFTs , now I’m back to 💣 your Mom . PS : no amazing proposal ser</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='py-5 fag' id='fag'>
        <div className='size text-center'>
          <p className='title'>QUESTIONS AND ANSWERS</p>
          <h1>FREQUENTLY ASKED QUESTIONS</h1>
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