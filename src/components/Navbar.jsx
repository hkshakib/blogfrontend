import { Link } from "react-router-dom"
import React from 'react';
import Classes from '../styles/Navbar.module.css';

const Navbar = () => {
    return (
        <div className={Classes.FixedNavbar} >
            <div className={Classes.navbar} >
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