import React from 'react'
import { Link } from 'react-router-dom'



const Header = () => {
    return (
        <>
            <div className="navbar">
                <div className="navlogo"><img src="/images/logo2.png" alt="logo" /></div>
                <div className="navlinks">
                    <Link to="/">Blogs</Link>
                    <Link to="/myblogs">My-Blogs</Link>

                </div>
                <div className="navlinks">

                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                    <Link to="">Logout</Link>
                </div>
            </div>

        </>
    )
}

export default Header
