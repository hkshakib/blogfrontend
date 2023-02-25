import React, { useEffect, useState } from 'react'
import Classes from '../styles/Content.module.css';

const Content = (props) => {

    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchApi = async () => {
            const res = await fetch("http://127.0.0.1:8000/posts");
            const data = await res.json();
            setPost(data);
        };

        fetchApi();

    }, []);

    console.log(post);

    const stringReducer = (data, amount) => {
        let string = data.split(/<\/?\w*>/);
        string = string.reduce((data, one) => data += one);
        string = string.substr(0, amount);
        return string;
    }

    return (
        <div className={Classes.Container}>
            {post?.map((posts) => {
                return (
                    <div className={Classes.PostBox}>
                        <span className={Classes.title}>{posts.title}</span>
                        <span className={Classes.content}>{stringReducer(posts.content, 100)} . . .</span>
                        <button>READ</button>
                    </div>
                )
            })}

            {post?.map((posts) => {
                return (
                    <div className={Classes.PostBox}>
                        <span className={Classes.title}>{posts.title}</span>
                        <span className={Classes.content}>{stringReducer(posts.content, 100)} . . .</span>
                        <button>READ</button>
                    </div>
                )
            })}
            {post?.map((posts) => {
                return (
                    <div className={Classes.PostBox}>
                        <span className={Classes.title}>{posts.title}</span>
                        <span className={Classes.content}>{stringReducer(posts.content, 100)} . . .</span>
                        <button>READ</button>
                    </div>
                )
            })}
            {post?.map((posts) => {
                return (
                    <div className={Classes.PostBox}>
                        <span className={Classes.title}>{posts.title}</span>
                        <span className={Classes.content}>{stringReducer(posts.content, 100)} . . .</span>
                        <button>READ</button>
                    </div>
                )
            })}
            {post?.map((posts) => {
                return (
                    <div className={Classes.PostBox}>
                        <span className={Classes.title}>{posts.title}</span>
                        <span className={Classes.content}>{stringReducer(posts.content, 100)} . . .</span>
                        <button>READ</button>
                    </div>
                )
            })}
            
        </div>
    );
}

export default Content;