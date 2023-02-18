import React from 'react';
import Classes from '../styles/Navbar.module.css';

const Navbar = () => {
    return (
        <div className={Classes.FixedNavbar}>
            <div className={Classes.navbar}>
                <nav>
                    <a href="#">Home</a>
                    <a href="#">Blog</a>
                    <a href="#">Technology</a>
                    <a href="#">Sports</a>
                    <a href="#">Science</a>
                    <a href="#">Videos</a>
                    <a href="#">About Us</a>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;