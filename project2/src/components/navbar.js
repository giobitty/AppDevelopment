import React from 'react'
import { Outlet, Link} from 'react-router-dom'
import '../styles/styles.css'
import videoSource from "../styles/img/video.mp4"


const Navbar = function(){
    return(
        <>
            <div className="headercontainer">
            <video autoPlay muted loop>
          <source src={videoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h1 className='title'>Service done with care</h1>
            <nav className='navbar'>
                <div className='btngroup'>
                    <button><Link to="/">Home</Link> </button>
                    <button><Link to="/pages/contact">Contact</Link> </button>
                    <button><Link to="/pages/order">Services</Link> </button>
                    {/* <button><Link to="/cards"></Link> </button> */}
                </div>
            </nav>
            <Outlet />
            </div>
        </>
    )
}
export default Navbar;