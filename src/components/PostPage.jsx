import React from 'react';
import Navbar from '../components/Navbar';
import Post from '../components/Post';
import Footer from '../components/Footer';

import Classes from '../styles/PostPage.module.css';

const PostPage = (props) => {
    
    return (
        <>
            <div className="Navbar">
                <Navbar />
            </div>

            <div className={Classes.ContentWrapper}>
                <Post />
            </div>

            <div className='Footer'>
                <Footer />
            </div>

        </>
    );
};

export default PostPage;
