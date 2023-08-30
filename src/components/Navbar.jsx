import React from 'react'
import logo from '../assets/images/logo.png'
import '../App.css'

function Navbar() {
  return(
    <section className='nav-section w-100'>
        <nav class="navbar navbar-expand-lg fixed-top size">
            <a class="navbar-brand" href="#">Y INNOVATION</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLg" aria-controls="navbarOffcanvasLg">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="navbarOffcanvasLg" aria-labelledby="navbarOffcanvasLgLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Y INNOVATION</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav flex-grow-1 pe-3">
                    <li class="nav-item">
                        <a class="nav-link active title" aria-current="page" href="#">home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link title" href="#">about</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link title" href="#">roadmap</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link title" href="#">team</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link title" href="#">fag</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link title" href="#">en</a>
                    </li>
                    </ul>
                    <div className='nav-buttons d-flex'> 
                        <p className='mx-4'><button className='nav-btn btn px-5 bgSecondary1 title' type="submit">JOIN US</button></p>
                        <p><button className='nav-btn btn px-5 bgSecondary2 title'>STAKE</button></p>
                    </div>
                </div>
            </div>
        </nav>
    {/* //     <nav class="nav size">
    //         <a class="navbar-brand" href="#"><img src={logo} alt="logo" style={{width: "10rem"}} /></a>
    //         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //             <span class="navbar-toggler-icon"></span>
    //         </button>

    //         <div className='nav-menu'>
    //             <ul class="nav mr-auto">
    //             <li class="nav-item active">
    //                 <a class="nav-link" href="#">HOME</a>
    //             </li>
    //             <li class="nav-item">
    //                 <a class="nav-link" href="#">ABOUT</a>
    //             </li>
    //             <li class="nav-item">
    //                 <a class="nav-link" href="#">ROADMAP</a>
    //             </li>
    //             <li class="nav-item">
    //                 <a class="nav-link" href="#">TEAM</a>
    //             </li>
    //             <li class="nav-item">
    //                 <a class="nav-link" href="#">FAG</a>
    //             </li>
    //             <li class="nav-item">
    //                 <a class="nav-link" href="#">EN </a>
    //             </li>
    //             </ul>
    //         </div>
    //         
    //     </nav> */}
    </section>

  )
}

export default Navbar