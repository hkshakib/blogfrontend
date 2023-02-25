import React from 'react';
import Navbar from '../components/Navbar';
import Main from '../components/Main';
import Footer from '../components/Footer';

const Blog = () => {
    return (
        <>
            <div className="Navbar">
                <Navbar />
            </div>

            <div className='ContentWrapper'>
                <Main />
            </div>

            <div className='Footer'>
                <Footer />
            </div>
            
        </>
    );
};

export default Blog;
