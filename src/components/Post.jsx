import React, { useEffect, useState } from 'react'
import Classes from "../styles/Post.module.css";
import { BiLike } from "react-icons/bi";

const Post = (props) => {
    const [postDetails, setPostDetails] = useState(null);

    const [likes, setLikes] = useState(10);

    useEffect(() => {
        const fetchApi = async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
            const data = await res.json();
            setPostDetails(data);
        };

        fetchApi();

    }, []);
    // console.log(postDetails);

    function handleClick(){
        setLikes(prevLikes =>  prevLikes + 1)

        console.log(likes);
    }

    return (
        <div className={Classes.ContentWrapper}>
            <div className={Classes.Content}>
                <div className={Classes.PostMiniDetails}>
                    {postDetails?.id} <br />
                    {postDetails?.title}

                </div>
                <div className={Classes.DescriptionBox}>
                    {postDetails?.body}
                    {postDetails?.body}
                    {postDetails?.body}
                    {postDetails?.body}
                    {postDetails?.body}
                    {postDetails?.body}
                    {postDetails?.body}
                    {postDetails?.body}
                    {postDetails?.body}
                    {postDetails?.body}
                    {postDetails?.body}
                    {postDetails?.body}
                    {postDetails?.body}
                    {postDetails?.body}
                    {postDetails?.body}
                    {postDetails?.body}
                    {postDetails?.body}
                    {postDetails?.body}
                    {postDetails?.body}
                    {postDetails?.body}
                    {postDetails?.body}
                    {postDetails?.body}
                    {postDetails?.body}
                    {postDetails?.body}
                </div>
                <div className={Classes.AlternetBox}>
                    <div className={Classes.LikeButton} onClick={handleClick}>
                        <button>
                            <span className={Classes.LikesCount}>{likes}</span>
                            <span className={Classes.LikeIcon} ><BiLike > </BiLike></span>
                            <span className={Classes.LikeText}>LIKE</span>
                        </button>
                    </div>
                    <div className={Classes.CommentBox}>
                        <textarea placeholder='Write Your Opinion Here'></textarea>
                        <button>Comment</button>
                    </div>

                    
                </div>
            </div>
        </div>
    )
};

export default Post;