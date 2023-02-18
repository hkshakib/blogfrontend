import React, { useEffect, useState } from 'react'
import Classes from '../styles/Content.module.css';

const Content = () => {

    const [Post, SetPost] = useState(null);

    useEffect(() => {
        const fetchApi = async () => {
            const res = await fetch("http://127.0.0.1:8000/posts/2");
            const data = await res.json();
            SetPost(data);
        };

        fetchApi();

    }, []);


    if (Post) {
        console.log(Post);
    }


    return (
        <div className={Classes.Container}>
            <div className={Classes.PostBox}>
                <span className={Classes.title}> {Post?.title} </span>
                <button>View More</button>
            </div>

            <div className={Classes.PostBox}>
                <span className={Classes.title}> {Post?.title} </span>
                <button>View More</button>
            </div>


            <div className={Classes.PostBox}>
                <span className={Classes.title}> {Post?.title} </span>
                <button>View More</button>
            </div>


            <div className={Classes.PostBox}>
                <span className={Classes.title}> {Post?.title} </span>
                <button>View More</button>
            </div>


            <div className={Classes.PostBox}>
                <span className={Classes.title}> {Post?.title} </span>
                <button>View More</button>
            </div>


            <div className={Classes.PostBox}>
                <span className={Classes.title}> {Post?.title} </span>
                <button>View More</button>
            </div>


            <div className={Classes.PostBox}>
                <span className={Classes.title}> {Post?.title} </span>
                <button>View More</button>
            </div>


            <div className={Classes.PostBox}>
                <span className={Classes.title}> {Post?.title} </span>
                <button>View More</button>
            </div>


            <div className={Classes.PostBox}>
                <span className={Classes.title}> {Post?.title} </span>
                <button>View More</button>
            </div>

            <div className={Classes.PostBox}>
                <span className={Classes.title}> {Post?.title} </span>
                <button>View More</button>
            </div>
            <div className={Classes.PostBox}>
                <span className={Classes.title}> {Post?.title} </span>
                <button>View More</button>
            </div>
            <div className={Classes.PostBox}>
                <span className={Classes.title}> {Post?.title} </span>
                <button>View More</button>
            </div>
            <div className={Classes.PostBox}>
                <span className={Classes.title}> {Post?.title} </span>
                <button>View More</button>
            </div>
            <div className={Classes.PostBox}>
                <span className={Classes.title}> {Post?.title} </span>
                <button>View More</button>
            </div>
            <div className={Classes.PostBox}>
                <span className={Classes.title}> {Post?.title} </span>
                <button>View More</button>
            </div>
            <div className={Classes.PostBox}>
                <span className={Classes.title}> {Post?.title} </span>
                <button>View More</button>
            </div>
            <div className={Classes.PostBox}>
                <span className={Classes.title}> {Post?.title} </span>
                <button>View More</button>
            </div>
            <div className={Classes.PostBox}>
                <span className={Classes.title}> {Post?.title} </span>
                <button>View More</button>
            </div>
            <div className={Classes.PostBox}>
                <span className={Classes.title}> {Post?.title} </span>
                <button>View More</button>
            </div>
            <div className={Classes.PostBox}>
                <span className={Classes.title}> {Post?.title} </span>
                <button>View More</button>
            </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
        </div>
    );
}

export default Content;