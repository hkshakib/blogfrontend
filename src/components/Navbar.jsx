import { Link } from "react-router-dom";
import React, { useState } from 'react';
import Classes from '../styles/Navbar.module.css';

const Navbar = () => {
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);
    

    return (
        <div className={ colorChange ? `${Classes.FixedNavbar} ${Classes.NavActive}` : `${Classes.FixedNavbar}`} >
            <div className={Classes.NavBar} >
                <nav>

                    <div className={Classes.PrimaryClasses}>
                        <Link className={Classes.active} to="/bookmarks">Bookmarks</Link>
                        <Link to="/request_a_blog">Request a blog</Link>
                    </div>

                    <div className={Classes.MainClass}>
                        <Link to="/" className={Classes.HomeIcon}>MINIMALISTIC</Link>
                    </div>

                    <div className={Classes.AuthClasses}>

                        <div className={Classes.SignUp}>
                            <Link to="/signup"> Beacme A Writer </Link>
                        </div>

                        <div className={Classes.Login}>
                            <Link to="/login"> Login </Link>
                        </div>

                    </div>

                </nav>
            </div>
        </div>
    );
}

export default Navbar;