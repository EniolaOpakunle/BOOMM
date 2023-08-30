import React from 'react'

function Roadmap() {
  return (
    <div className='py-5 roadmap background' id='roadmap' style={{animationFillMode: "both"}}>
        <div className='size'>
          <p className='title text-center'>ROADMAP</p>
          <h1 className='text-center'>HOW IT ALL STARTED</h1>
          <div className='d-flex p-relative'>
            <div className='gap-3 mt-5 '>
                <div className="col-lg-5 box p-4">
                    <div className='d-flex'>
                        <p className='subtitle'>PHASE 1</p>  
                        <p className='subtitle secondaryColor1'>10%</p>
                    </div>
                    <div className='phase-list'>
                        <p>-Website Launch</p>
                        <p>- Launch of Y Social Media</p>
                        <p>- Community Build Up</p>
                        <p>- 100 Holders</p>
                        <p>- Burn 2% of Supply</p>
                    </div>
                </div>
                <div className='line'>
                    <div className='bg-dark d-flex justify-content-center align-items-center' style={{width:'2rem'}} >
                        <p className='bgSecondary1' style={{width: "2rem"}}></p>
                    </div>
                </div>
                <div className="col-lg-5 box p-4 right p-absolute strategy">
                    <div className='d-flex w-100'>
                        <p className='subtitle'>PHASE 2</p>
                        <p className='subtitle secondaryColor1'>20%</p>
                    </div>
                    <div className='phase-list'>
                        <p>- Value Marketing Campaign</p>
                        <p>- Making the Lp Stronger</p>
                        <p>- Website and Logo Update</p>
                        <p>- 300 Holders</p>
                        <p>- Burn 5% of Supply</p>
                    </div>
                </div>
                <div className="col-lg-5 box p-4 left">
                    <div className='d-flex col-12 w-100'>
                        <p className='subtitle'>THE DEV</p>
                        <p className='subtitle secondaryColor1'>50%</p>
                    </div>
                    <p>The development take us long time and this was huge challenges for us.</p>
                    <p>We have faced a lot of problems during the development time between telegram bugs, not reliable private node and scam contracts ect ect.. but after 4 months of working time (full time, often until midnight)</p>
                    <p>we now have all our systems ready that include live chart, buybot, wallets bot, contract analysis, and much more...</p>
                </div> 
                <div className="col-lg-5 box p-4 right">
                    <div className='d-flex'>
                        <p className='subtitle'>THE LAUNCH</p>
                        <p className='subtitle secondaryColor1'>70%</p>
                    </div>
                    <p>We just started, to be continued...</p>
                </div>
            </div>
            
          </div>
        </div>
      </div>
  )
}

export default Roadmap