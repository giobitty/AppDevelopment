import React from 'react'
import { Outlet, Link} from 'react-router-dom'
import '../style/styles.css'

const Navbar = function(){
    return(
        <>
            <nav className='navbar'>
                <div>
                    <Link>QCC</Link>

                </div>
                <div className='btngroup'>
                    <button><Link to="/">Home</Link> </button>
                    <button><Link to="/about">About</Link> </button>
                    <button><Link to="/contact">Contact</Link> </button>
                </div>
            </nav>
            <Outlet />
        </>
    )
}
export default Navbar;