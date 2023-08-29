import React from 'react'
import logo from "../assets/images/logo.png"
import githubImg from '../assets/images/github.png'
import twitterImg from '../assets/images/twitter.png'
import youtubeImg from '../assets/images/youtube.png'
import navigationImg from '../assets/images/navigation.png'
import '../App.css'

function Footer() {
  return (
    <div className='footer background pt-5'>
        <div className='size py-5'>
            <div>
                {/* <img src='' alt="logo" style={{width: "10rem"}} /> */}
            </div>
            <div className='d-flex social-media justify-content-center'>
                <div className=''>
                    <img src={twitterImg} alt="" />
                </div>
                <div>
                    <img src={navigationImg} alt="" />
                </div>
                <div>
                    <img src={youtubeImg} alt="" />
                </div>
                <div>
                    <img src={githubImg} alt="" />
                </div>
            </div>
        </div>
        <div className='text-center attribution title w-100 mt-3 py-4'>
            Y INNOVATION 2023 | All Rights Reserved 
        </div>
    </div>
  )
}

export default Footer