import React from 'react';
import Navbar from '../components/Navbar';
import Post from '../components/Post';
import Footer from '../components/Footer';

const PostPage = () => {
    return (
        <>
            <div className="Navbar">
                <Navbar />
            </div>

            <div className='ContentWrapper'>
                <Post />
            </div>

            <div className='Footer'>
                <Footer />
            </div>

        </>
    );
};

export default PostPage;
